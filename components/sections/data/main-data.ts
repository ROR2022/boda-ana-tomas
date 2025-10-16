export const quinceMainData = {
  hero: {
    name: "Ana & Tomás",
    subtitle: "¡Nuestra Boda!",
    backgroundImage: "/images/boda8.jpeg",
    quote:
      "La vida es un viaje mágico, y hoy celebro un capítulo especial lleno de sueños y esperanza.",
    backgroundCarrouselImages: [
      "/images/boda1.jpeg",
      "/images/boda2.jpeg",
      "/images/boda3.jpeg",
      "/images/boda4.jpeg",
    ],
  },
  welcomeSection: {
    message: ` Con mucha alegría y emoción, te invitamos a celebrar nuestra Boda. 
      Será un día lleno de magia, amor y momentos inolvidables. 
      ¡Esperamos contar con tu presencia para hacer de este día algo realmente especial!`,
    backgroundImage: "/images/orquideas1.jpg",
  },
  event: {
    celebrant: "Ana & Tomás",
    novios: {
      bride: "Ana Izquierdo Alvarado",
      groom: "Tomás Romero Cordova",
    },
    brideParents: {
      father: "Rafael Izquierdo Cordova",
      mother: "Ana Bella Alvarado Ricardes(+)",
    },
    groomParents: {
      father: "Isaías Romero Najera (+)",
      mother: "Gloria Cordova Calderón",
    },
    parents: {
      father: "Andres Martínez",
      mother: "Maria de Jesús Sanchez",
      message: ` Ustedes han sido nuestro primer ejemplo de amor y compromiso. 
      Gracias por guiarnos con su sabiduría y por mostrarnos el camino del amor verdadero. 
      Hoy, al unir nuestras vidas, llevamos con orgullo los valores y enseñanzas que nos han dado. 
      ¡Los amamos profundamente!
      `,
      backgroundImage: "/images/orquideas4.jpg",
    },
    godparents: {
      godfather: "Juan Hernández",
      godmother: "Ma. Asunción Jiménez",
    },
    padrinosList: [
      {
        padrino: "Juan Gabriel Osorio De La Cruz",
        madrina: "Juana María Domínguez Osorio",
        role: "Padrinos de Velación",
      },
      {
        padrino: "Manuel Antonio Domínguez Osorio",
        madrina: "Guadalupe Hernández Almeida",
        role: "Padrinos de Arras",
      },
      {
        padrino: "Gerardo Rafael Romero Izquierdo",
        madrina: "Lizbeth Dominguez Naranjo",
        role: "Padrinos de Anillos",
      },
      {
        padrino: "Manuel López Gil",
        madrina: "Cinthia Karely Broca Izquierdo",
        role: "Padrinos de Lazo",
      },
      {
        padrino: "Eduardo Arturo Vazquez Galvez",
        madrina: "Sara Acosta Diaz",
        role: "Padrinos de Brindis",
      }
    ],
    date: {
      full: "Sábado 29 de Noviembre 2025",
      isoDate: "2025-11-29T18:00:00",
      day: "Sábado",
      dayNumber: "29",
      month: "Noviembre",
      year: "2025",
      date: "29 de Noviembre 2025",
      mensaje1: "¡La cuenta regresiva ha comenzado!",
      mensaje2: "TAN SOLO FALTAN",
      backgroundCarrouselImages: [
        "/images/boda5.jpeg",
        "/images/boda6.jpeg",
        "/images/boda7.jpeg",
        "/images/boda8.jpeg",
      ],
    },
    ceremony: {
      time: "18:00 hrs.",
      venue: "Iglesia San Jorge",
      address: "Sargento Lopez 3ra. Sección Comalcalco, Tabasco.",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/5gpy4d9ei2cZrkat6",
      ceremonyImage: "/images/boda8.jpeg",
    },
    party: {
      time: "19:00 hrs.",
      venue: "Casa de los Novios",
      address: "Sargento Lopez 3ra. Sección Comalcalco, Tabasco.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/5gpy4d9ei2cZrkat6",
    },
    dressCode: "Formal - Blanco solo la novia, Verde damas de honor -",
    restrictions: "",
  },
  timeline: {
    title: "Itinerario del Evento",
    timelineImage: "/images/boda10.jpeg",
    mensaje: `Cada momento de este día especial ha sido cuidadosamente planeado 
    para crear recuerdos inolvidables. 
    Desde la ceremonia hasta la celebración, cada detalle refleja el amor y 
    la alegría que compartimos. ¡Espero que disfrutes cada instante tanto como nosotros!`,
    images: [
      "/images/boda9.jpeg",
      "/images/boda10.jpeg",
      "/images/boda1.jpeg",
      "/images/boda2.jpeg",
    ],
    events: [
      {
        id: "event1",
        time: "18:00 hrs.",
        title: "Misa de Acción de Gracias",
        description: "Ceremonia.",
        icon: "⛪",
      },
      {
        id: "event2",
        time: "19:00 hrs.",
        title: "Recepción",
        description: "Celebración.",
        icon: "🎉",
      },
      {
        id: "event3",
        time: "20:00 hrs.",
        title: "Brindis",
        description: "Brindis especial.",
        icon: "🥂",
      },
      {
        id: "event4",
        time: "21:00 hrs.",
        title: "Cena",
        description: "Deliciosa cena para todos los invitados.",
        icon: "🍽️",
      },
    ],
  },
  dressCode: {
    title: "Código de Vestimenta",
    message: "¡Vístete para impresionar!",
    subtitle: "Código de vestimenta formal - Blanco solo la novia, Verde damas de honor",
    restriction: "Restricción: No niños",
    backgroundImage: "/images/dressCode1.png",
  },
  countdown: {
    targetDate: "December 27, 2025 17:00:00",
    backgroundImage: "/images/countdown-bg.jpg",
  },
  attendance: {
    whatsappNumber: "5219331069374", //+52 1 933 106 9374
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente",
    subtitle: "Confirmar antes del evento.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir.",
      },
    },
    images: [
      "/images/boda3.jpeg",
      "/images/boda4.jpeg",
      "/images/boda5.jpeg",
      "/images/boda6.jpeg",
    ],
    thankYouMessage:
      "¡Gracias por confirmar tu asistencia! Nos alegra que puedas acompañarnos en este día tan especial.",
  },
  gifts: {
    title: "Lista de Regalos",
    subtitle:
      "Tu presencia es el mejor regalo, pero si deseas contribuir, aquí tienes algunas ideas.",
    message:
      "Agradecemos de corazón tu generosidad y apoyo en este día tan especial. ¡Gracias por ser parte de nuestra vida!",
    giftsOptions: [
      {
        id: "lluviaSobres",
        name: "Lluvia de Sobres",
        icon: "💌",
        description:
          "Tu presencia es el mejor regalo, pero si deseas contribuir, una lluvia de sobres sería muy apreciada.",
        image: "/images/gifts/envelope.png",
        link: "https://example.com/lluvia-de-sobres",
      }, 
    ],
  },
  gallery: {
    title: "Recuerdos Especiales",
    subtitle: "Momentos inolvidables",
    description:
      "Cada imagen captura la esencia de este día tan especial. ¡Gracias por ser parte de estos recuerdos inolvidables!",
    images: [
      {
        id: "image1",
        src: "/images/boda1.jpeg",
        alt: "Nuestra Boda",
        caption: "Nuestro día especial.",
      },
      {
        id: "image2",
        src: "/images/boda2.jpeg",
        alt: "Baile de Boda",
        caption: "El emotivo primer baile de Boda.",
      },
      {
        id: "image3",
        src: "/images/boda3.jpeg",
        alt: "Corte de Pastel",
        caption: "El dulce momento del corte de pastel.",
      },
      {
        id: "image4",
        src: "/images/boda4.jpeg",
        alt: "Celebración con Familia y Amigos",
        caption: "Rodeados de sus seres queridos.",
      },
      {
        id: "image5",
        src: "/images/boda5.jpeg",
        alt: "Detalles del Evento",
        caption: "Cada detalle hecho con amor para este día especial.",
      },
      {
        id: "image6",
        src: "/images/boda6.jpeg",
        alt: "Diversión en la Pista de Baile",
        caption: "Momentos de alegría y baile con todos los invitados.",
      },
      {
        id: "image7",
        src: "/images/boda7.jpeg",
        alt: "Sesión de Fotos",
        caption: "Capturando recuerdos que durarán toda la vida.",
      },
      {
        id: "image8",
        src: "/images/boda8.jpeg",
        alt: "Los novios y sus Padres",
        caption: "Un momento especial con sus queridos padres.",
      },
      {
        id: "image9",
        src: "/images/boda9.jpeg",
        alt: "Los novios y sus Padrinos",
        caption: "Agradeciendo a sus padrinos por su apoyo y amor.",
      },
      {
        id: "image10",
        src: "/images/boda10.jpeg",
        alt: "Con sus Amigos",
        caption: "Compartiendo risas y alegría con amigos cercanos.",
      },
    ],
    imagesUrls: [
      "/images/rapunzel1.jpeg",
      "/images/rapunzel2.jpeg",
      "/images/rapunzel3.jpeg",
      "/images/rapunzel4.jpeg",
      "/images/rapunzel5.jpeg",
      "/images/rapunzel6.jpeg",
      "/images/rapunzel7.jpeg",
      "/images/rapunzel8.jpeg",
    ],
  },
  qrcodeSection: {
    title: "Escanea el Código QR",
    celebrant: "Laura & Edgar",
    message: "Para acceder fácilmente a la invitación en tu dispositivo móvil.",
    mainImage: "/images/qrcode-bg.jpg",
  },
  music: {
    src: "/music/quinceanera-song.mp3",
    title: "Canción de Quinceañera",
    artist: "Artista Invitado",
  },
  // 🎵 Configuración de audio
  audio: {
    src: "/audio/musica.mp3",
    fallbacks: ["/audio/musica.ogg", "/audio/musica.wav"],
    title: "Música de Fondo de Boda",
    startTime: 5, //  Donde empieza la letra
    endTime: 200, //  Final del segmento
    volume: 0.7, // % de volumen
    loop: true, // Loop en el rango especificado
    preload: "metadata", // Precargar solo metadatos
    enabled: true, // Control habilitado
    position: {
      desktop: { bottom: "2rem", right: "2rem" },
      mobile: { bottom: "1rem", right: "1rem" },
    },
    styling: {
      size: {
        desktop: "60px",
        mobile: "50px",
      },
      colors: {
        primary: "#e3aaaa",
        hover: "#d48c8c",
        background: "rgba(255, 255, 255, 0.8)",
        icon: "#333",
      },
    },
  },
  VIP_COLORS: {
    rosaAurora: "#D85251",
    lavandaAurora: "#7B5C6E",
    oroAurora: "#DA9A6A",
    blancoSeda: "#FFFFFF",
    cremaSuave: "#F2E1C3",
    rosaIntensa: "#8D0327",
    lavandaIntensa: "#822D5C",
    oroIntensio: "#A66F2E",
    rosaDelicada: "#E69779",
  },
  customInvitations: {
    adminPassword: "admin1234",
    invitationUrl: "https://boda-vip-new-demo.vercel.app/",
    suggested_messages: [
      "¡Querida amiga! Te invitamos a celebrar con nosotros el día más mágico de nuestra vida. ¡Espero verte brillar junto a nosotros!",
      "¡Familia querida! Este día especial no sería lo mismo sin ustedes. ¡Los esperamos con mucho amor!",
      "¡Hola! Nos encantaría que seas parte de nuestra celebración. ¡Será una noche inolvidable!",
      "¡Queridos padrinos! Su presencia es fundamental en este momento tan especial. ¡Los esperamos con cariño!",
      "¡Amigos del alma! Vengan a celebrar con nosotros esta nueva etapa. ¡Será una fiesta increíble!",
    ],
  },
};
