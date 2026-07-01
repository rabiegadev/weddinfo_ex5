export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
}

export interface LocationItem {
  id: string;
  title: string;
  address: string;
  mapUrl: string;
  mapEmbedUrl: string;
}

export interface InfoItem {
  id: string;
  title: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  phone: string;
  email: string;
}

export interface QuickLink {
  id: string;
  label: string;
  subtitle: string;
  href: string;
}

export interface GalleryFilter {
  id: string;
  label: string;
}

export interface WeddingConfig {
  couple: {
    bride: string;
    groom: string;
    displayNames: string;
    monogram: string;
  };
  weddingDate: string;
  weddingDateISO: string;
  hero: {
    subtitle: string;
    description: string;
  };
  welcome: {
    title: string;
    text: string;
  };
  ceremony: {
    title: string;
    location: string;
  };
  reception: {
    title: string;
    location: string;
  };
  quickLinks: QuickLink[];
  schedule: ScheduleItem[];
  locations: LocationItem[];
  info: InfoItem[];
  gallery: {
    filters: GalleryFilter[];
    imageCount: number;
    uploadUrl?: string;
  };
  rsvp: {
    title: string;
    subtitle: string;
    guestOptions: number[];
  };
  contact: {
    couple: ContactPerson[];
    witnesses: ContactPerson[];
    social: {
      instagram?: string;
      facebook?: string;
    };
  };
  navigation: {
    label: string;
    href: string;
  }[];
  features: {
    showGalleryButton: boolean;
    showRsvpButton: boolean;
    showGalleryUpload: boolean;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: "Julia",
    groom: "Antoni",
    displayNames: "Julia & Antoni",
    monogram: "J&A",
  },
  weddingDate: "21 CZERWCA 2027",
  weddingDateISO: "2027-06-21T15:00:00",
  hero: {
    subtitle: "Zaczyna się nasza historia",
    description:
      "Z ogromną radością zapraszamy Was na nasz najważniejszy dzień. Będzie nam niezmiernie miło, jeśli będziecie z nami świętować ten wyjątkowy moment.",
  },
  welcome: {
    title: "Drodzy Goście!",
    text: "Ten dzień jest dla nas wyjątkowy, a obecność najbliższych sprawia, że staje się jeszcze bardziej magiczny. Przygotowaliśmy dla Was wszystkie najważniejsze informacje w jednym miejscu — żebyście mogli w pełni cieszyć się naszym świętem.",
  },
  ceremony: {
    title: "Ślub",
    location: "Kościół św. Piotra i Pawła w Krakowie",
  },
  reception: {
    title: "Wesele",
    location: "Dwór w Tomaszowicach, ul. Krakowska 123, Tomaszowice",
  },
  quickLinks: [
    { id: "locations", label: "Lokalizacje", subtitle: "sprawdź", href: "#lokalizacje" },
    { id: "info", label: "Informacje", subtitle: "szczegóły", href: "#informacje" },
    { id: "schedule", label: "Harmonogram", subtitle: "plan dnia", href: "#harmonogram" },
    { id: "gallery", label: "Galeria", subtitle: "zdjęcia", href: "#galeria" },
    { id: "rsvp", label: "RSVP", subtitle: "potwierdź obecność", href: "#rsvp" },
  ],
  schedule: [
    {
      id: "ceremony",
      time: "15:00",
      title: "Uroczystość zaślubin",
      description: "Ceremonia w kościele św. Piotra i Pawła",
    },
    {
      id: "welcome",
      time: "16:30",
      title: "Powitanie gości",
      description: "Witanie gości w sali weselnej",
    },
    {
      id: "dinner",
      time: "17:00",
      title: "Obiad",
      description: "Wspólny posiłek i toasty",
    },
    {
      id: "dance",
      time: "19:00",
      title: "Pierwszy taniec",
      description: "Pierwszy taniec pary młodej",
    },
    {
      id: "cake",
      time: "20:00",
      title: "Tort",
      description: "Krojenie tortu weselnego",
    },
    {
      id: "party",
      time: "20:30",
      title: "Zabawa do białego rana",
      description: "Muzyka, tańce i dobra zabawa",
    },
  ],
  locations: [
    {
      id: "ceremony",
      title: "Ślub",
      address: "Kościół św. Piotra i Pawła\nul. Grodzka 52a, Kraków",
      mapUrl: "https://maps.google.com/?q=Kościół+św.+Piotra+i+Pawła+Kraków",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9394!3d50.0520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1c5c5c5c5c%3A0x0!2sKo%C5%9Bci%C3%B3%C5%82+%C5%9Bw.+Piotra+i+Paw%C5%82a!5e0!3m2!1spl!2spl!4v1",
    },
    {
      id: "reception",
      title: "Wesele",
      address: "Dwór w Tomaszowicach\nul. Krakowska 123, Tomaszowice",
      mapUrl: "https://maps.google.com/?q=Dwór+w+Tomaszowicach",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d20.0!3d50.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sDw%C3%B3r+Tomaszowice!5e0!3m2!1spl!2spl!4v1",
    },
  ],
  info: [
    {
      id: "accommodation",
      title: "Nocleg",
      description:
        "Dla gości przyjeżdżających z daleka przygotowaliśmy listę polecanych hoteli w okolicy. Prosimy o wcześniejszą rezerwację.",
    },
    {
      id: "afterparty",
      title: "Poprawiny",
      description:
        "Poprawiny odbędą się następnego dnia od godziny 14:00 w tym samym miejscu. Zapraszamy wszystkich chętnych!",
    },
    {
      id: "gifts",
      title: "Prezenty",
      description:
        "Wasza obecność jest dla nas największym prezentem. Jeśli jednak chcielibyście nas obdarować, będziemy wdzięczni za kopertę.",
    },
    {
      id: "dresscode",
      title: "Dress code",
      description:
        "Elegancki strój wieczorowy. Prosimy o unikanie białych i czarnych sukienek. Kolorystyka: oliwkowa, złota, beżowa.",
    },
    {
      id: "other",
      title: "Inne informacje",
      description:
        "Parking dostępny na miejscu. Dzieci mile widziane. W razie pytań — zadzwońcie do świadków lub napiszcie do nas.",
    },
  ],
  gallery: {
    filters: [
      { id: "all", label: "Wszystkie" },
      { id: "ceremony", label: "Ślub" },
      { id: "reception", label: "Wesele" },
      { id: "other", label: "Inne" },
    ],
    imageCount: 12,
    uploadUrl: "#",
  },
  rsvp: {
    title: "RSVP",
    subtitle: "Potwierdź obecność",
    guestOptions: [1, 2, 3, 4, 5],
  },
  contact: {
    couple: [
      {
        name: "Julia Kowalska",
        phone: "+48 600 123 456",
        email: "julia@example.com",
      },
      {
        name: "Antoni Nowak",
        phone: "+48 600 654 321",
        email: "antoni@example.com",
      },
    ],
    witnesses: [
      {
        name: "Anna Wiśniewska",
        phone: "+48 600 111 222",
        email: "anna@example.com",
      },
      {
        name: "Piotr Zieliński",
        phone: "+48 600 333 444",
        email: "piotr@example.com",
      },
    ],
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  navigation: [
    { label: "O nas", href: "#o-nas" },
    { label: "Informacje", href: "#informacje" },
    { label: "Harmonogram", href: "#harmonogram" },
    { label: "Galeria", href: "#galeria" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  features: {
    showGalleryButton: true,
    showRsvpButton: true,
    showGalleryUpload: true,
  },
};
