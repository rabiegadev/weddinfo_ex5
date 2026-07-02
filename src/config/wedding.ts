export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  icon: string;
}

export interface LocationItem {
  id: string;
  title: string;
  address: string;
  mapUrl: string;
  image: string;
}

export interface InfoItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactPerson {
  name: string;
  phone: string;
  email: string;
}

export interface NavigationItem {
  label: string;
  href?: string;
  disabled?: boolean;
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
  schedule: ScheduleItem[];
  locations: LocationItem[];
  info: InfoItem[];
  rsvp: {
    title: string;
    guestOptions: number[];
  };
  contact: {
    couple: ContactPerson[];
    witnesses: ContactPerson[];
  };
  icons: {
    contact: {
      phone: string;
      email: string;
    };
  };
  navigation: NavigationItem[];
  features: {
    showRsvpButton: boolean;
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
  schedule: [
    {
      id: "ceremony",
      time: "15:00",
      title: "Uroczystość zaślubin",
      description: "Ceremonia w kościele św. Piotra i Pawła",
      icon: "/urocz.png",
    },
    {
      id: "welcome",
      time: "16:30",
      title: "Powitanie gości",
      description: "Witanie gości w sali weselnej",
      icon: "/welcome.png",
    },
    {
      id: "dinner",
      time: "17:00",
      title: "Obiad",
      description: "Wspólny posiłek i toasty",
      icon: "/obiad.png",
    },
    {
      id: "dance",
      time: "19:00",
      title: "Pierwszy taniec",
      description: "Pierwszy taniec pary młodej",
      icon: "/dance.png",
    },
    {
      id: "cake",
      time: "20:00",
      title: "Tort",
      description: "Krojenie tortu weselnego",
      icon: "/tort.png",
    },
    {
      id: "party",
      time: "20:30",
      title: "Zabawa do białego rana",
      description: "Muzyka, tańce i dobra zabawa",
      icon: "/zabaw.png",
    },
  ],
  locations: [
    {
      id: "ceremony",
      title: "Ślub",
      address: "Kościół św. Piotra i Pawła\nul. Grodzka 52a, Kraków",
      mapUrl: "https://maps.google.com/?q=Kościół+św.+Piotra+i+Pawła+Kraków",
      image: "/kosc.jpg",
    },
    {
      id: "reception",
      title: "Wesele",
      address: "Dwór w Tomaszowicach\nul. Krakowska 123, Tomaszowice",
      mapUrl: "https://maps.google.com/?q=Dwór+w+Tomaszowicach",
      image: "/wesel.jpg",
    },
  ],
  info: [
    {
      id: "accommodation",
      title: "Nocleg",
      description:
        "Dla gości przyjeżdżających z daleka przygotowaliśmy listę polecanych hoteli w okolicy. Prosimy o wcześniejszą rezerwację.",
      icon: "/bed.png",
    },
    {
      id: "afterparty",
      title: "Poprawiny",
      description:
        "Poprawiny odbędą się następnego dnia od godziny 14:00 w tym samym miejscu. Zapraszamy wszystkich chętnych!",
      icon: "/coffe.png",
    },
    {
      id: "gifts",
      title: "Prezenty",
      description:
        "Wasza obecność jest dla nas największym prezentem. Jeśli jednak chcielibyście nas obdarować, będziemy wdzięczni za kopertę.",
      icon: "/gift.png",
    },
    {
      id: "dresscode",
      title: "Dress code",
      description:
        "Elegancki strój wieczorowy. Prosimy o unikanie białych i czarnych sukienek. Kolorystyka: oliwkowa, złota, beżowa.",
      icon: "/dresscode.png",
    },
    {
      id: "other",
      title: "Inne informacje",
      description:
        "Parking dostępny na miejscu. Dzieci mile widziane. W razie pytań — zadzwońcie do świadków lub napiszcie do nas.",
      icon: "/info.png",
    },
  ],
  rsvp: {
    title: "Potwierdź obecność",
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
  },
  icons: {
    contact: {
      phone: "/icon.png",
      email: "/icon.png",
    },
  },
  navigation: [
    { label: "O nas", href: "#o-nas" },
    { label: "Informacje", href: "#informacje" },
    { label: "Harmonogram", href: "#harmonogram" },
    { label: "Galeria", disabled: true },
    { label: "Kontakt", href: "#kontakt" },
  ],
  features: {
    showRsvpButton: true,
  },
};
