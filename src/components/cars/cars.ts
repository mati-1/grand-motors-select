export type CarType = {
  id: string;
  slug: string;

  brand: string;
  model: string;
  condition: "Nowy" | "Używany";
  vin: string;
  year: number;
  mileage: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  fuel: string;
  carvertical: boolean;
  price: string;
  location: string;
  voivodeship: string;
  image: string;
  images: string[];
  negotiation: boolean;
  description: string;
  status: "available" | "sold" | "reservation";
  invoice: "VAT 23%" | "VAT MARŻA";

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
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  2025,
];

export const carsList: CarType[] = [
  {
    id: "bmw-f30340i-2017",
    slug: "bmw-f30340i-2017",
    invoice: "VAT 23%",
    brand: "BMW",
    model: "F30 340I",
    condition: "Używany",
    carvertical: true,
    year: 2018,
    mileage: "77 000 km",
    engine: "3.0 R6",
    power: "344 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "available",
    price: "105 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf30/1.png",
    location: "Stanisławice",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwf30/1.png",
      "/cars/bmwf30/2.png",
      "/cars/bmwf30/3.png",
      "/cars/bmwf30/4.png",
      "/cars/bmwf30/5.png",
    ],

    description:
      "BMW F30 340i to sportowy sedan, który łączy charakter sześciocylindrowego silnika z codzienną użytecznością i komfortem. Jednostka 3.0 R6 o mocy 344 KM w połączeniu z automatyczną skrzynią biegów i napędem xDrive zapewnia bardzo dobre osiągi oraz pewne prowadzenie.\n\nPrezentowany egzemplarz ma przebieg 77 000 km, potwierdzony w dostępnej historii pojazdu. Samochód wyróżnia się atrakcyjną konfiguracją obejmującą m.in. pakiet M Sport, sportowy układ wydechowy, zawieszenie Adaptive M, reflektory Adaptive LED oraz system Harman Kardon.\n\nTo propozycja dla osoby, która szuka dynamicznego BMW z mocnym silnikiem R6, napędem xDrive i odpowiednim poziomem wyposażenia, bez rezygnowania z komfortu podczas codziennej jazdy. Samochód jest przygotowany do oględzin i jazdy próbnej.",
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
    id: "bmw-g11-2022",
    slug: "bmw-g11-2022",
    invoice: "VAT 23%",
    brand: "BMW",
    model: "G11 740D",
    condition: "Używany",
    carvertical: true,
    year: 2022,
    mileage: "131 000 km",
    engine: "3.0 R6",
    power: "340 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Diesel",
    status: "available",
    price: "240 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwg11/1.jpg",
    location: "Stanisławice",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwg11/1.jpg",
      "/cars/bmwg11/2.jpg",
      "/cars/bmwg11/3.jpg",
      "/cars/bmwg11/4.jpg",
      "/cars/bmwg11/5.jpg",
      "/cars/bmwg11/4.jpg",
      "/cars/bmwg11/3.jpg",
      "/cars/bmwg11/5.jpg",
      "/cars/bmwg11/4.jpg",
      "/cars/bmwg11/5.jpg",
      "/cars/bmwg11/3.jpg",
      "/cars/bmwg11/4.jpg",
      "/cars/bmwg11/3.jpg",
      "/cars/bmwg11/5.jpg",
    ],

    description:
      "BMW 740d xDrive G11 to reprezentacyjna limuzyna stworzona z myślą o komforcie, długich trasach i wysokim poziomie wyposażenia. Sześciocylindrowy silnik 3.0 R6 o mocy 340 KM współpracuje z automatyczną skrzynią biegów oraz napędem xDrive, zapewniając płynne przyspieszenie i wysoki moment obrotowy.\n\nTen egzemplarz wyróżnia się rozbudowaną konfiguracją obejmującą m.in. zawieszenie Adaptive 2-axle Air Suspension, Executive Drive Pro, Integral Active Steering, pakiet M Sport, komfortowe fotele z pamięcią, wentylację i masaż oraz skórzaną tapicerkę Nappa.\n\nNa pokładzie znalazły się również technologie podnoszące komfort i bezpieczeństwo, takie jak BMW Live Cockpit Professional, Head-Up Display, Surround View, Parking Assistant Plus, Active Cruise Control oraz Driving Assistant Professional.\n\nG11 to samochód dla osoby, która oczekuje od limuzyny połączenia wysokiego komfortu, nowoczesnych technologii, przestronnego wnętrza i odpowiednich osiągów. Przebieg 131 000 km.",
    negotiation: true,
    equipment: [
      "xDrive",
      "Executive Drive Pro",
      "Integral Active Steering",
      "Adaptive 2-axle Air Suspension",
      "M Sport Package",
      "M Sport Brakes",
      "BMW Laserlight",
      "High Beam Assistant",
      "Adaptive LED Headlights",
      "BMW Live Cockpit Professional",
      "Head-Up Display",
      "BMW Gesture Control",
      "Harman Kardon Surround Sound",
      "Professional Navigation",
      "Apple CarPlay",
      "Android Auto",
      "Comfort Access",
      "Soft-Close Automatic Doors",
      "Comfort Seats",
      "Elektrycznie regulowane fotele z pamięcią",
      "Podgrzewane fotele przednie",
      "Podgrzewane fotele tylne",
      "Wentylowane fotele",
      "Masaż foteli",
      "Skórzana tapicerka Nappa",
      "4-strefowa klimatyzacja automatyczna",
      "Ambient Lighting",
      "Panoramic Glass Roof",
      "Elektryczne rolety szyb tylnych",
      "Kamera cofania",
      "Surround View",
      "Parking Assistant Plus",
      "Active Cruise Control",
      "Driving Assistant Professional",
      "Lane Keeping Assistant",
      "Blind Spot Detection",
      "Traffic Jam Assistant",
      "BMW Display Key",
      "Elektryczna klapa bagażnika",
      "DAB Tuner",
      "Bluetooth",
      "USB",
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
    invoice: "VAT MARŻA",
    brand: "BMW",
    model: "F86 X6M",
    condition: "Używany",
    carvertical: true,
    year: 2017,
    mileage: "51 000 km",
    engine: "4.4 V8",
    power: "575 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "reservation",
    price: "140 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwx6m/1.png",
    location: "Stanisławice",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwx6m/1.png",
      "/cars/bmwx6m/2.png",
      "/cars/bmwx6m/3.png",
      "/cars/bmwx6m/4.png",
      "/cars/bmwx6m/5.png",
    ],

    description:
      "BMW X6 M F86 to połączenie osiągów samochodu sportowego z charakterem luksusowego SUV-a. Silnik 4.4 V8 o mocy 575 KM, automatyczna skrzynia biegów i napęd xDrive tworzą układ nastawiony na dynamiczną jazdę, jednocześnie zachowując komfort potrzebny na co dzień.\n\nPrezentowany egzemplarz ma przebieg zaledwie 51 000 km i wyróżnia się sportową konfiguracją. Na wyposażeniu znajdują się m.in. pakiet M Sport, sportowy układ wydechowy, zawieszenie Adaptive M, reflektory Adaptive LED, Head-Up Display oraz system Harman Kardon.\n\nCharakterystyczna sylwetka X6 M, szeroka bryła nadwozia i jednostka V8 nadają temu modelowi wyrazisty charakter. To propozycja dla osoby, która szuka mocnego SUV-a łączącego osiągi, prestiż i praktyczność, bez rezygnowania z emocji za kierownicą.",
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

  {
    id: "bmw-f10530d-2013",
    slug: "bmw-f10530d-2013",
    invoice: "VAT 23%",
    brand: "BMW",
    model: "F10 530D",
    condition: "Używany",
    carvertical: true,
    year: 2013,
    mileage: "190 000 km",
    engine: "3.0 R6",
    power: "258 KM",
    transmission: "Automatyczna",
    drive: "Napęd na tył",
    fuel: "Diesel",
    status: "sold",
    price: "60 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf10/1.jpg",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwf10/1.jpg",
      "/cars/bmwf10/2.jpg",
      "/cars/bmwf10/3.jpg",
      "/cars/bmwf10/4.jpg",
    ],

    description:
      "BMW 530d F10 to klasyczne połączenie komfortu serii 5 z mocnym, sześciocylindrowym silnikiem wysokoprężnym. Jednostka 3.0 R6 o mocy 258 KM współpracuje z automatyczną skrzynią biegów i napędem na tył, zapewniając dobre osiągi, wysoką kulturę pracy oraz komfort podczas dłuższych tras.\n\nPrezentowany egzemplarz ma przebieg 190 000 km i wyróżnia się ponadczasową stylistyką F10 oraz bogatym wyposażeniem. Na pokładzie znajdują się m.in. pakiet M Sport, komfortowe fotele, Head-Up Display, system Harman Kardon, Professional Navigation oraz kamera cofania.\n\nTo samochód dla osoby, która szuka mocnego i komfortowego BMW do codziennej jazdy, ale jednocześnie oczekuje odpowiedniego poziomu wyposażenia i charakteru typowego dla serii 5.",
    negotiation: true,
    equipment: [
      "Pakiet M Sport",
      "M Sport Steering Wheel",
      "M Sport Suspension",
      "M Sport Exterior",
      "Professional Navigation",
      "Head-Up Display",
      "Harman Kardon Surround Sound",
      "Adaptive Xenon Headlights",
      "High Beam Assistant",
      "Kamera cofania",
      "Czujniki parkowania PDC",
      "Comfort Access",
      "Comfort Seats",
      "Elektrycznie regulowane fotele z pamięcią",
      "Podgrzewane fotele",
      "Skórzana tapicerka",
      "4-strefowa klimatyzacja automatyczna",
      "Elektryczna klapa bagażnika",
      "Roleta tylnej szyby",
      "Tempomat",
      "BMW Professional",
      "Bluetooth",
      "USB",
      "DAB",
    ],

    details: {
      body: "Sedan",
      color: "Grafitowy",
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
  },

  {
    id: "audi-s5-2016",
    slug: "audi-s5-2016",
    invoice: "VAT MARŻA",
    brand: "AUDI",
    model: "S5 Premium Plus",
    condition: "Używany",
    carvertical: true,
    year: 2016,
    mileage: "175 000 km",
    engine: "3.0 V6",
    power: "420 KM",
    transmission: "Automatyczna",
    drive: "quattro",
    fuel: "Benzyna",
    status: "sold",
    price: "72 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/audis5/1.jpg",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    images: ["/cars/audis5/1.jpg"],

    description:
      "Audi S5 to sportowe coupe łączące osiągi, komfort i elegancką stylistykę samochodu klasy premium. Silnik 3.0 V6 TFSI o mocy 420 KM współpracuje z automatyczną skrzynią biegów oraz napędem quattro, zapewniając dynamiczną jazdę i pewne prowadzenie.\n\nPrezentowany egzemplarz wyróżnia się sportową konfiguracją oraz bogatym wyposażeniem. Na pokładzie znajdują się m.in. pakiet S line, Audi Virtual Cockpit, MMI Navigation Plus, system Bang & Olufsen, sportowe fotele S, reflektory LED oraz kamera cofania.\n\nS5 zachowuje odpowiedni balans pomiędzy sportowym charakterem a komfortem codziennego użytkowania. To propozycja dla osoby, która szuka coupe oferującego wyraźne osiągi, napęd quattro i charakterystyczną stylistykę modelu S5.",
    negotiation: true,
    equipment: [
      "Pakiet S line",
      "Reflektory LED",
      "Audi Virtual Cockpit",
      "MMI Navigation Plus",
      "Bang & Olufsen Sound System",
      "Audi Drive Select",
      "Sportowe fotele S",
      "Podgrzewane fotele",
      "Skórzana tapicerka",
      "Kamera cofania",
      "Czujniki parkowania",
      "Tempomat",
      "Klimatyzacja automatyczna",
      "Keyless Go",
      "Elektrycznie regulowane fotele",
      "Łopatki zmiany biegów",
      "Aluminiowe nakładki na pedały",
      "Bluetooth",
    ],

    details: {
      body: "Coupe",
      color: "Czarny",
      interior: "Skóra",
      seats: "4",
      doors: "2",
      country: "Stany Zjednoczone",
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
  },

  {
    id: "bmw-f06650i-2015",
    slug: "bmw-f06650i-2015",
    invoice: "VAT MARŻA",
    brand: "BMW",
    model: "F06 650I",
    condition: "Używany",
    carvertical: true,
    year: 2015,
    mileage: "110 000 km",
    engine: "4.4 V8",
    power: "475 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "sold",
    price: "105 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf06/1.jpg",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwf06/1.jpg",
      "/cars/bmwf06/2.jpg",
      "/cars/bmwf06/3.jpg",
      "/cars/bmwf06/4.jpg",
      "/cars/bmwf06/5.jpg",
    ],

    description:
      "BMW 650i xDrive F06 to luksusowe Gran Turismo, w którym komfort i elegancja spotykają się z charakterem jednostki V8. Silnik 4.4 V8 o mocy 475 KM współpracuje z automatyczną skrzynią biegów oraz napędem xDrive, zapewniając bardzo dobre osiągi i płynność jazdy.\n\nPrezentowany egzemplarz ma przebieg 110 000 km i wyróżnia się bogatą konfiguracją z pakietem M Sport. Na wyposażeniu znajdują się m.in. Adaptive Drive, Integral Active Steering, system Bang & Olufsen High End, Head-Up Display, Night Vision, Surround View, komfortowe fotele z wentylacją i masażem oraz skórzana tapicerka Nappa.\n\nTo samochód dla osoby, która oczekuje od Gran Turismo wysokiego komfortu podczas długich podróży, ale jednocześnie chce korzystać z potencjału mocnego silnika V8 i napędu xDrive. Egzemplarz jest przygotowany do dalszej eksploatacji.",
    negotiation: true,
    equipment: [
      "M Sport Package",
      "M Sport Steering Wheel",
      "M Sport Suspension",
      "M Sport Brakes",
      "Adaptive Drive",
      "Integral Active Steering",
      "xDrive",
      "Soft-Close Automatic Doors",
      "Comfort Access",
      "Bang & Olufsen High End Surround Sound",
      "Professional Navigation",
      "Head-Up Display",
      "Night Vision",
      "Surround View",
      "Kamera cofania",
      "Czujniki parkowania PDC",
      "Adaptive LED Headlights",
      "High Beam Assistant",
      "Dynamic Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Detection",
      "Driving Assistant",
      "Active Protection",
      "Comfort Seats",
      "Elektrycznie regulowane fotele z pamięcią",
      "Podgrzewane fotele",
      "Wentylowane fotele",
      "Masaż foteli",
      "Skórzana tapicerka Nappa",
      "Podsufitka Individual Alcantara",
      "4-strefowa klimatyzacja automatyczna",
      "Ambient Lighting",
      "BMW Individual",
      "Elektryczna klapa bagażnika",
      "Soft-Close bagażnika",
      "Roleta tylnej szyby",
      "Elektryczna roleta tylnej szyby",
      "Dach panoramiczny",
      "Bluetooth",
      "USB",
      "DAB",
      "BMW ConnectedDrive",
    ],

    details: {
      body: "Sedan",
      color: "Biały",
      interior: "Skóra",
      seats: "5",
      doors: "4",
      country: "Stany Zjednoczone",
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
  },

  {
    id: "opel-insignia-2012",
    slug: "opel-insignia-2012",
    invoice: "VAT MARŻA",
    brand: "OPEL",
    model: "INSIGNIA 2.0 BITURBO CDTI",
    condition: "Używany",
    carvertical: true,
    year: 2012,
    mileage: "128 000 km",
    engine: "2.0 R4",
    power: "195 KM",
    transmission: "Automatyczna",
    drive: "4x4",
    fuel: "Diesel",
    status: "sold",
    price: "27 000 PLN",
    vin: "WBA8B9C50HK123456",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    image: "/cars/opelinsignia/1.jpg",

    images: [
      "/cars/opelinsignia/1.jpg",
      "/cars/opelinsignia/2.jpg",
      "/cars/opelinsignia/3.jpg",
      "/cars/opelinsignia/4.jpg",
      "/cars/opelinsignia/5.jpg",
      "/cars/opelinsignia/6.jpg",
    ],

    description:
      "Opel Insignia 2.0 BiTurbo CDTI to komfortowy sedan łączący dynamiczny charakter z praktycznością samochodu do codziennej jazdy. Silnik wysokoprężny 2.0 BiTurbo o mocy 195 KM współpracuje z automatyczną skrzynią biegów oraz napędem 4x4.\n\nZastosowanie dwóch turbosprężarek zapewnia dobrą elastyczność i płynne rozwijanie mocy, a napęd na cztery koła poprawia trakcję i pewność prowadzenia. Prezentowany egzemplarz ma udokumentowany przebieg 128 000 km.\n\nSamochód posiada bogate wyposażenie obejmujące m.in. skórzaną tapicerkę, sportowe fotele, kamerę cofania, nawigację, tempomat, reflektory Bi-Xenon oraz system FlexRide.\n\nTo propozycja dla osoby szukającej komfortowego i dobrze wyposażonego samochodu z automatyczną skrzynią biegów, mocnym silnikiem Diesla i napędem 4x4.",

    negotiation: true,

    equipment: [
      "BiTurbo CDTI",
      "Napęd 4x4",
      "Automatyczna skrzynia biegów",
      "FlexRide",
      "Sportowe zawieszenie",
      "Sportowy tryb jazdy",
      "Skórzana tapicerka",
      "Elektrycznie regulowane fotele",
      "Podgrzewane fotele",
      "Pamięć ustawień fotela kierowcy",
      "Sportowe fotele przednie",
      "Klimatyzacja automatyczna",
      "Dwustrefowa klimatyzacja",
      "Czujniki parkowania PDC",
      "Kamera cofania",
      "Nawigacja satelitarna",
      "Bluetooth",
      "USB",
      "Tempomat",
      "Bi-Xenon",
      "Adaptacyjne reflektory AFL",
      "Automatyczne światła",
      "Czujnik deszczu",
      "Elektryczne szyby",
      "Elektrycznie składane lusterka",
      "Lusterka fotochromatyczne",
      "Multifunkcyjna kierownica",
      "Sportowa kierownica",
      "System audio premium",
      "Komputer pokładowy",
      "System kontroli trakcji",
      "System stabilizacji toru jazdy ESP",
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
  },

  {
    id: "bmw-e92335i-2012",
    slug: "bmw-e92335i-2012",
    invoice: "VAT MARŻA",
    brand: "BMW",
    model: "E92 335I",
    condition: "Używany",
    carvertical: true,
    year: 2012,
    mileage: "156 000 km",
    engine: "3.0 R6",
    power: "306 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "sold",
    price: "49 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwe92/1.jpg",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwe92/1.jpg",
      "/cars/bmwe92/2.jpg",
      "/cars/bmwe92/3.jpg",
      "/cars/bmwe92/4.jpg",
      "/cars/bmwe92/5.jpg",
      "/cars/bmwe92/6.jpg",
    ],

    description:
      "BMW E92 335i to sportowe coupe o ponadczasowej sylwetce i charakterze typowym dla sześciocylindrowych modeli BMW. Silnik 3.0 R6 o mocy 306 KM współpracuje z automatyczną skrzynią biegów oraz napędem xDrive, zapewniając bardzo dobrą dynamikę i pewne prowadzenie.\n\nPrezentowany egzemplarz ma przebieg 156 000 km i wyróżnia się sportową konfiguracją obejmującą m.in. pakiet M Sport, sportowe zawieszenie i hamulce, sportowe fotele, automatyczną klimatyzację oraz system Professional Navigation.\n\nKlasyczna linia E92, napęd xDrive i mocny silnik tworzą połączenie, które nadal zapewnia charakterystyczne dla BMW wrażenia z jazdy. To propozycja dla osoby szukającej mocnego coupe o bardziej klasycznym charakterze.",
    negotiation: true,
    equipment: [
      "M Sport Package",
      "M Sport Steering Wheel",
      "M Sport Suspension",
      "M Sport Brakes",
      "Automatyczna skrzynia biegów",
      "Klimatyzacja automatyczna",
      "Skórzana tapicerka",
      "Elektrycznie regulowane fotele",
      "Podgrzewane fotele",
      "Pamięć ustawień fotela kierowcy",
      "Czujniki parkowania PDC",
      "Kamera cofania",
      "Professional Navigation",
      "Bluetooth",
      "USB",
      "DAB",
      "BMW ConnectedDrive",
      "Tempomat",
      "Bi-Xenon",
      "Adaptive Headlights",
      "High Beam Assistant",
      "Czujnik deszczu",
      "Automatyczne światła",
      "Elektryczne szyby",
      "Elektrycznie składane lusterka",
      "Lusterka fotochromatyczne",
      "Ambient Lighting",
      "Podłokietnik przedni",
      "Sportowe fotele",
      "System Hi-Fi",
    ],

    details: {
      body: "Coupe",
      color: "Czarny",
      interior: "Skóra",
      seats: "4",
      doors: "2",
      country: "Stany Zjednoczone",
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
  },

  {
    id: "bmw-f10-535i-2014",
    slug: "bmw-f10-535i-2014",
    invoice: "VAT MARŻA",
    brand: "BMW",
    model: "F10 535I",
    condition: "Używany",
    carvertical: true,
    year: 2014,
    mileage: "183 000 km",
    engine: "3.0 R6",
    power: "306 KM",
    transmission: "Automatyczna",
    drive: "Na tył",
    fuel: "Benzyna",
    status: "sold",
    price: "74 000 PLN",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf10_2/1.jpeg",
    location: "Nowy Targ",
    voivodeship: "Małopolskie",
    images: [
      "/cars/bmwf10_2/1.jpeg",
      "/cars/bmwf10_2/2.jpeg",
      "/cars/bmwf10_2/3.jpeg",
      "/cars/bmwf10_2/4.jpeg",
    ],

    description:
      "BMW F10 535i to sportowy sedan klasy premium, który łączy osiągi mocnego BMW z komfortem i elegancją serii 5. Sześciocylindrowy silnik 3.0 TwinPower Turbo o mocy 306 KM współpracuje z automatyczną skrzynią biegów oraz napędem na tył.\n\nPrezentowany egzemplarz ma przebieg 183 000 km i wyróżnia się atrakcyjną konfiguracją z pakietem M Sport. Na wyposażeniu znajdują się m.in. Adaptive Drive, Integral Active Steering, Comfort Access, Soft-Close, sportowe fotele, Head-Up Display, Surround View oraz systemy wspomagające kierowcę.\n\nF10 oferuje jednocześnie odpowiednią dynamikę i wysoki poziom komfortu podczas codziennej jazdy oraz dłuższych podróży. To propozycja dla osoby, która szuka mocnego sedana z charakterem BMW i wyposażeniem klasy premium.",

    negotiation: true,

    equipment: [
      "M Sport Package",
      "M Sport Steering Wheel",
      "M Sport Suspension",
      "M Sport Brakes",
      "xDrive",
      "Automatyczna skrzynia biegów",
      "Adaptive Drive",
      "Integral Active Steering",
      "Comfort Access",
      "Soft-Close Automatic Doors",
      "Skórzana tapicerka",
      "Sportowe fotele",
      "Elektrycznie regulowane fotele",
      "Pamięć ustawień fotela kierowcy",
      "Podgrzewane fotele",
      "Klimatyzacja automatyczna",
      "4-strefowa klimatyzacja automatyczna",
      "Professional Navigation",
      "Head-Up Display",
      "Kamera cofania",
      "Surround View",
      "Czujniki parkowania PDC",
      "Adaptive LED Headlights",
      "High Beam Assistant",
      "Dynamic Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Detection",
      "Driving Assistant",
      "Active Protection",
      "Bluetooth",
      "USB",
      "DAB",
      "BMW ConnectedDrive",
      "Elektryczna klapa bagażnika",
      "Ambient Lighting",
      "Elektryczne szyby",
      "Elektrycznie składane lusterka",
      "Lusterka fotochromatyczne",
      "Czujnik deszczu",
      "Automatyczne światła",
      "Multifunkcyjna kierownica",
      "System Hi-Fi",
    ],

    details: {
      body: "Sedan",
      color: "Szary mat",
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
  },
];
