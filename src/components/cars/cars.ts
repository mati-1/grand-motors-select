export type CarType = {
  id: string;
  slug: string;

  brand: string;
  model: string;

  year: number;
  mileage: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  fuel: string;

  price: string;

  image: string;
  images: string[];
  negotiation: boolean;
  description: string;

  equipment: string[];

  details: {
    body: string;
    color: string;
    interior: string;
    seats: string;
    doors: string;
    country: string;
  };

  history: {
    title: string;
    description: string;
  }[];

  featured?: boolean;
};

export const carsYears = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024, 2025,
];

export const carsList: CarType[] = [
  {
    id: "bmw-f30340i-2017",
    slug: "bmw-f30340i-2017",

    brand: "BMW",
    model: "F30 340I",

    year: 2018,
    mileage: "77 000 km",
    engine: "3.0 R6",
    power: "344 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",

    price: "105 000 zł",

    image: "/cars/bmwf30/1.png",

    images: [
      "/cars/bmwf30/1.png",
      "/cars/bmwf30/2.png",
      "/cars/bmwf30/3.png",
      "/cars/bmwf30/4.png",
      "/cars/bmwf30/5.png",
    ],

    description:
      "BMW f30 340i xDrive łączy osiągi silnika R6 z komfortem i charakterem codziennego samochodu klasy premium. Egzemplarz wyróżnia się odpowiednią konfiguracją, wysokim poziomem wyposażenia oraz sportowym charakterem wersji M-sport.",
    negotiation: true,
    equipment: [
      "M Sport Package",
      "M Sport Exhaust",
      "Harman Kardon",
      "Head-Up Display",
      "Adaptive LED",
      "Adaptive M Suspension",
      "Comfort Access",
      "Apple CarPlay",
      "Podgrzewane fotele",
      "Kamera cofania",
      "Czujniki parkowania",
      "Elektryczna klapa bagażnika",
    ],

    details: {
      body: "Sedan",
      color: "Czarny",
      interior: "Skóra",
      seats: "5",
      doors: "4",
      country: "Polska",
    },

    history: [
      {
        title: "Weryfikacja samochodu",
        description:
          "Samochód został zweryfikowany przed wprowadzeniem do oferty.",
      },
      {
        title: "Historia",
        description:
          "Dokumentacja oraz dostępne informacje dotyczące historii pojazdu są udostępniane podczas prezentacji samochodu.",
      },
      {
        title: "Przygotowanie",
        description: "Samochód został przygotowany do sprzedaży i prezentacji.",
      },
    ],

    featured: true,
  },
  {
    id: "bmw-f86x6m-2017",
    slug: "bmw-f86x6m-2017",

    brand: "BMW",
    model: "F86 X6M",

    year: 2017,
    mileage: "51 000 km",
    engine: "4.4 V8",
    power: "575 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",

    price: "140 000 zł",

    image: "../../../public/cars/bmwx6m/1.png",

    images: [
      "../../../public/cars/bmwx6m/1.png",
      "../../../public/cars/audis6/1.png",
      "../../../public/cars/bmwf30/1.png",
    ],

    description:
      "BMW f86 X6M xDrive łączy osiągi silnika V8 z komfortem i charakterem codziennego samochodu klasy premium. Egzemplarz wyróżnia się odpowiednią konfiguracją, wysokim poziomem wyposażenia oraz sportowym charakterem wersji M.",
    negotiation: true,
    equipment: [
      "M Sport Package",
      "M Sport Exhaust",
      "Harman Kardon",
      "Head-Up Display",
      "Adaptive LED",
      "Adaptive M Suspension",
      "Comfort Access",
      "Apple CarPlay",
      "Podgrzewane fotele",
      "Kamera cofania",
      "Czujniki parkowania",
      "Elektryczna klapa bagażnika",
    ],

    details: {
      body: "SUV",
      color: "Niebieski",
      interior: "Skóra",
      seats: "5",
      doors: "4",
      country: "Polska",
    },

    history: [
      {
        title: "Weryfikacja samochodu",
        description:
          "Samochód został zweryfikowany przed wprowadzeniem do oferty.",
      },
      {
        title: "Historia",
        description:
          "Dokumentacja oraz dostępne informacje dotyczące historii pojazdu są udostępniane podczas prezentacji samochodu.",
      },
      {
        title: "Przygotowanie",
        description: "Samochód został przygotowany do sprzedaży i prezentacji.",
      },
    ],

    featured: true,
  },

  // Kolejne samochody dodajesz tutaj.
];
