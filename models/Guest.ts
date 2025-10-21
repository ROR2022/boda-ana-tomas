import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface para TypeScript
export interface IGuest extends Document {
  // Identificación básica
  name: string;
  phone?: string;
  relation: 'familia' | 'amigos' | 'escuela' | 'trabajo' | 'otros';
  tableNumber?: number;  // 🆕 NUEVO CAMPO - Número de mesa opcional
  
  // Invitación personalizada (opcional)
  personalInvitation?: {
    sent: boolean;
    sentAt?: Date;
    message: string;
    numberOfGuests: number;
  };
  
  // Confirmación de asistencia
  attendance?: {
    confirmed: boolean;
    confirmedAt?: Date;
    message?: string;
    numberOfGuestsConfirmed: number;
    source?: 'personal-invitation' | 'direct-confirmation';
    comments?: string;
  };
  
  // Nuevos campos para sistema automático
  notes?: string; // Para guardar información sobre creación automática
  autoCreated?: boolean; // Flag para identificar registros auto-generados
  searchedName?: string; // Nombre original buscado si fue diferente
  
  // Control básico
  createdAt: Date;
  updatedAt: Date;
  status: 'pending' | 'invited' | 'confirmed' | 'declined';
}

// Interface para métodos estáticos
export interface IGuestModel extends Model<IGuest> {
  getByStatus(status: string): Promise<IGuest[]>;
  getByRelation(relation: string): Promise<IGuest[]>;
  searchByName(searchTerm: string): Promise<IGuest[]>;
  getConfirmed(): Promise<IGuest[]>;
  getStats(): Promise<any>;
}

// Esquema de Mongoose
const GuestSchema = new Schema<IGuest>({
  // Identificación básica
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    minlength: [2, 'El nombre debe tener al menos 2 caracteres']
  },
  
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'El teléfono no puede exceder 20 caracteres'],
    validate: {
      validator: function(v: string) {
        // Validar formato básico de teléfono (opcional)
        return !v || /^[\d\s\-\+\(\)]+$/.test(v);
      },
      message: 'Formato de teléfono inválido'
    }
  },
  
  relation: {
    type: String,
    enum: {
      values: ['familia', 'amigos', 'escuela', 'trabajo', 'otros'],
      message: 'La relación debe ser: familia, amigos, escuela, trabajo u otros'
    },
    required: [true, 'La relación es obligatoria'],
    default: 'otros'
  },
  
  // 🆕 NUEVO CAMPO - Número de mesa opcional
  tableNumber: {
    type: Number,
    min: [1, 'El número de mesa debe ser mayor a 0'],
    max: [50, 'El número de mesa no puede exceder 50'],
    validate: {
      validator: function(v: number) {
        return !v || (Number.isInteger(v) && v > 0);
      },
      message: 'El número de mesa debe ser un entero positivo'
    }
  },
  
  // Invitación personalizada (opcional)
  personalInvitation: {
    sent: {
      type: Boolean,
      default: false
    },
    sentAt: Date,
    message: {
      type: String,
      trim: true,
      maxlength: [500, 'El mensaje no puede exceder 500 caracteres']
    },
    numberOfGuests: {
      type: Number,
      min: [1, 'Debe ser al menos 1 invitado'],
      max: [10, 'Máximo 10 invitados por invitación']
    }
  },
  
  // Confirmación de asistencia
  attendance: {
    confirmed: {
      type: Boolean,
      default: false
    },
    confirmedAt: Date,
    message: {
      type: String,
      trim: true,
      maxlength: [500, 'El mensaje no puede exceder 500 caracteres']
    },
    numberOfGuestsConfirmed: {
      type: Number,
      min: [0, 'No puede ser negativo'],
      max: [10, 'Máximo 10 invitados confirmados']
    },
    source: {
      type: String,
      enum: ['personal-invitation', 'direct-confirmation']
    },
    comments: {
      type: String,
      trim: true,
      maxlength: [500, 'Los comentarios no pueden exceder 500 caracteres']
    }
  },
  
  // Nuevos campos para sistema automático
  notes: {
    type: String,
    trim: true,
    maxlength: [500, 'Las notas no pueden exceder 500 caracteres']
  },
  autoCreated: {
    type: Boolean,
    default: false
  },
  searchedName: {
    type: String,
    trim: true,
    maxlength: [100, 'El nombre buscado no puede exceder 100 caracteres']
  },
  
  // Control básico
  status: {
    type: String,
    enum: {
      values: ['pending', 'invited', 'confirmed', 'declined'],
      message: 'El estado debe ser: pending, invited, confirmed o declined'
    },
    default: 'pending'
  }
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para optimizar consultas
GuestSchema.index({ name: 1 }); // Para búsqueda por nombre
GuestSchema.index({ status: 1 }); // Para filtrar por estado
GuestSchema.index({ relation: 1 }); // Para filtrar por relación
GuestSchema.index({ createdAt: -1 }); // Para ordenar por fecha de creación
GuestSchema.index({ 'attendance.confirmed': 1 }); // Para filtrar confirmados
GuestSchema.index({ autoCreated: 1 }); // Para filtrar registros auto-creados
GuestSchema.index({ searchedName: 1 }); // Para búsqueda por nombre original

// Virtual para nombre completo con información adicional
GuestSchema.virtual('displayName').get(function() {
  const guestCount = this.attendance?.numberOfGuestsConfirmed || 
                    this.personalInvitation?.numberOfGuests || 1;
  return `${this.name}${guestCount > 1 ? ` (+${guestCount - 1})` : ''}`;
});

// Virtual para obtener el conteo de invitados
GuestSchema.virtual('guestCount').get(function() {
  if (this.attendance?.confirmed && this.attendance.numberOfGuestsConfirmed) {
    return this.attendance.numberOfGuestsConfirmed;
  }
  if (this.personalInvitation?.numberOfGuests) {
    return this.personalInvitation.numberOfGuests;
  }
  return 1; // Por defecto 1 invitado
});

// Middleware pre-save para validaciones adicionales y lógica de estado
GuestSchema.pre('save', function(next) {
  // Actualizar estado basado en invitación y confirmación
  if (this.attendance?.confirmed) {
    this.status = 'confirmed';
  } else if (this.personalInvitation?.sent) {
    this.status = 'invited';
  } else {
    this.status = 'pending';
  }
  
  // Si se confirma la asistencia, establecer fecha
  if (this.attendance?.confirmed && !this.attendance.confirmedAt) {
    this.attendance.confirmedAt = new Date();
  }
  
  // Si se envía invitación personalizada, establecer fecha
  if (this.personalInvitation?.sent && !this.personalInvitation.sentAt) {
    this.personalInvitation.sentAt = new Date();
  }
  
  next();
});

// Métodos estáticos para consultas comunes
GuestSchema.statics.getByStatus = function(status: string) {
  return this.find({ status }).sort({ createdAt: -1 });
};

GuestSchema.statics.getByRelation = function(relation: string) {
  return this.find({ relation }).sort({ name: 1 });
};

GuestSchema.statics.searchByName = function(searchTerm: string) {
  const regex = new RegExp(searchTerm, 'i'); // Case insensitive
  return this.find({ name: regex }).sort({ name: 1 });
};

GuestSchema.statics.getConfirmed = function() {
  return this.find({ 'attendance.confirmed': true }).sort({ 'attendance.confirmedAt': -1 });
};

// Método estático para obtener estadísticas básicas
GuestSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalGuests: { $sum: 1 },
        totalConfirmed: {
          $sum: {
            $cond: [{ $eq: ['$attendance.confirmed', true] }, 1, 0]
          }
        },
        totalInvited: {
          $sum: {
            $cond: [{ $eq: ['$personalInvitation.sent', true] }, 1, 0]
          }
        },
        totalPending: {
          $sum: {
            $cond: [{ $eq: ['$status', 'pending'] }, 1, 0]
          }
        },
        totalGuestCount: {
          $sum: {
            $cond: [
              { $eq: ['$attendance.confirmed', true] },
              '$attendance.numberOfGuestsConfirmed',
              {
                $cond: [
                  { $eq: ['$personalInvitation.sent', true] },
                  '$personalInvitation.numberOfGuests',
                  1
                ]
              }
            ]
          }
        }
      }
    }
  ]);
  
  const result = stats[0] || {
    totalGuests: 0,
    totalConfirmed: 0,
    totalInvited: 0,
    totalPending: 0,
    totalGuestCount: 0
  };
  
  // Calcular porcentaje de confirmación
  result.confirmationRate = result.totalGuests > 0 
    ? Math.round((result.totalConfirmed / result.totalGuests) * 100) 
    : 0;
  
  return result;
};

// Crear o obtener el modelo
const Guest = (mongoose.models.Guest as IGuestModel) || mongoose.model<IGuest, IGuestModel>('Guest', GuestSchema);

export default Guest;
