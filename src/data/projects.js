export const projectsData = [
  {
    id: "parking-rental",
    title: "Parking Spot Rental & Booking",
    domain: "Smart Urban Mobility & Booking",
    techStack: ["React Native", "Redux Toolkit", "REST APIs", "React Navigation"],
    shortDescription: "End-to-end mobile platform for spot listing, geo-search, real-time availability validation, and multi-role user management.",
    overview: "A comprehensive cross-platform mobile application designed to simplify urban parking rental. Enables property owners to list available spaces and drivers to search, validate real-time availability, and reserve parking spots seamlessly.",
    role: "React Native Developer",
    keyFeatures: [
      "Spot listing management & host role switching",
      "Interactive map search & availability validation",
      "Secure authentication & session state persistence",
      "Seamless payment gateway integration",
      "Real-time booking status notifications"
    ],
    technicalChallenges: [
      "Managing complex state transitions during role switching between parking host and driver.",
      "Optimizing location query rendering on interactive maps to prevent frame drops."
    ],
    contributions: [
      "Engineered the core role-switching state architecture using Redux Toolkit.",
      "Implemented REST API integrations for real-time spot availability checking.",
      "Built responsive, reusable UI components for booking flows and receipt summaries."
    ]
  },
  {
    id: "mental-health-wellness",
    title: "Mental Health & Wellness App",
    domain: "Healthcare & AI Personalization",
    techStack: ["React Native", "TypeScript", "REST APIs", "AsyncStorage"],
    shortDescription: "AI-powered wellness application featuring mood analytics, personalized habit recommendations, and community interaction.",
    overview: "A mobile wellness companion focused on personal mental health tracking. Integrates intelligent mood analysis, daily habit tracking, personalized wellness routines, and interactive community message boards.",
    role: "React Native Developer",
    keyFeatures: [
      "AI-driven personal wellness recommendations",
      "Interactive health analytics & mood tracking charts",
      "Customizable daily habit reminders",
      "Encrypted local health data storage",
      "Community interaction & peer support modules"
    ],
    technicalChallenges: [
      "Ensuring strict data privacy and local storage security for sensitive personal health logs.",
      "Designing smooth, calming micro-animations without compromising low-end device performance."
    ],
    contributions: [
      "Developed TypeScript-typed data contracts for AI recommendation endpoints.",
      "Created reusable chart visualization components for mood trend analysis.",
      "Implemented secure offline data caching using encrypted storage wrappers."
    ]
  },
  {
    id: "ocean-wise",
    title: "Ocean Wise — Environmental Reporting",
    domain: "Environmental Conservation & GIS Mapping",
    techStack: ["React Native", "Jest", "REST APIs", "React Native Maps"],
    shortDescription: "Field-reporting mobile app for environmental data collection with dynamic questionnaires, live maps, and test coverage.",
    overview: "An environmental reporting application used by researchers and volunteers to report marine observations and environmental data directly from the field.",
    role: "React Native Developer",
    keyFeatures: [
      "Dynamic questionnaire renderer based on report type",
      "Real-time GPS mapping & observation pin clustering",
      "Offline observation queue with auto-sync on connectivity",
      "Comprehensive unit testing suite with Jest"
    ],
    technicalChallenges: [
      "Handling unreliable network connectivity in remote maritime locations while maintaining report integrity.",
      "Rendering dynamic form schemas safely with high field validation accuracy."
    ],
    contributions: [
      "Built the dynamic form engine supporting dynamic input types and validation logic.",
      "Integrated real-time location mapping updates with custom observation markers.",
      "Authored extensive unit test suites using Jest to achieve high module test coverage."
    ]
  },
  {
    id: "studio-booking",
    title: "Studio Booking Platform",
    domain: "Event Management & Operations",
    techStack: ["React Native", "Redux Toolkit", "i18n", "React Navigation"],
    shortDescription: "Multi-language mobile platform for studio reservations, attendance management, and real-time operational reporting.",
    overview: "An enterprise mobile solution tailored for creative studios to manage room bookings, client check-ins, staff attendance, and revenue reporting across global locations.",
    role: "React Native Developer",
    keyFeatures: [
      "Multi-language localization using i18n",
      "Real-time studio slot reservation matrix",
      "Staff attendance tracking & QR check-in system",
      "Managerial operational analytics & reporting dashboards"
    ],
    technicalChallenges: [
      "Supporting seamless multi-language switching dynamically across all screens without reloading.",
      "Syncing booking calendar grid states with high concurrency."
    ],
    contributions: [
      "Implemented internationalization architecture (i18n) across all user flows.",
      "Developed reusable UI component primitives adhering to brand design tokens.",
      "Optimized Redux store structure for complex calendar matrix state."
    ]
  },
  {
    id: "eval-pulse",
    title: "Eval Pulse — Real-Time Communication",
    domain: "Real-Time Telehealth & Communication",
    techStack: ["React Native", "WebRTC", "Mediasoup", "Native Hardware Integrations"],
    shortDescription: "Ultra-low-latency real-time video/audio calling app featuring screen sharing and native hardware controls.",
    overview: "A high-performance real-time communication application engineered for live video consultations, peer collaboration, screen sharing, and dynamic media routing.",
    role: "React Native Developer",
    keyFeatures: [
      "Low-latency multi-party video & audio streaming using WebRTC & Mediasoup",
      "In-call live screen sharing capability",
      "Dynamic audio route switching (Speaker, Earpiece, Bluetooth headset)",
      "Native camera control (Front/Rear flip, torch, resolution scaling)",
      "Network quality indicators & adaptive bitrate fallback"
    ],
    technicalChallenges: [
      "Managing complex WebRTC peer connection renegotiations and Mediasoup transport lifecycle.",
      "Handling background native audio/video device state transitions seamlessly during incoming calls."
    ],
    contributions: [
      "Engineered WebRTC media stream pipelines and Mediasoup socket signaling listeners.",
      "Integrated native mobile device audio routing and camera switching handlers.",
      "Built responsive, immersive call layout UIs with dynamic participant grid management."
    ]
  }
];
