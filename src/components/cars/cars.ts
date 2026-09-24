export type CarType = {
  id: string;
  slug: string;

  brand: string;
  model: string;
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
    carvertical: true,
    year: 2018,
    mileage: "77 000 km",
    engine: "3.0 R6",
    power: "344 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "available",
    price: "105 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf30/1.png",

    images: [
      "/cars/bmwf30/1.png",
      "/cars/bmwf30/2.png",
      "/cars/bmwf30/3.png",
      "/cars/bmwf30/4.png",
      "/cars/bmwf30/5.png",
    ],

    description:
      "Samochód posiada oryginalny, udokumentowany przebieg 77 000 km, który znajduje potwierdzenie w dostępnej historii pojazdu. Auto jest zadbane zarówno pod względem wizualnym, jak i technicznym. Nie wymaga dodatkowego wkładu finansowego i jest przygotowane do dalszej eksploatacji. To egzemplarz dla osoby, która szuka dobrze skonfigurowanego BMW z mocnym silnikiem R6, napędem xDrive i sportowym charakterem, ale jednocześnie oczekuje komfortu oraz odpowiedniego poziomu wyposażenia. Samochód gotowy do oględzin i jazdy próbnej.",
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
    carvertical: true,
    year: 2022,
    mileage: "131 000 km",
    engine: "3.0 R6",
    power: "340 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Diesel",
    status: "available",
    price: "240 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwg11/1.jpg",

    images: [
      "/cars/bmwg11/1.jpg",
      "/cars/bmwg11/2.jpg",
      "/cars/bmwg11/3.jpg",
      "/cars/bmwg11/4.jpg",
      "/cars/bmwg11/5.jpg",
    ],

    description:
      "BMW 740d xDrive G11 to reprezentacyjna limuzyna, która łączy wysoki poziom komfortu z osiągami i kulturą pracy sześciocylindrowego silnika wysokoprężnego. Jednostka 3.0 R6 współpracująca z automatyczną skrzynią biegów oraz napędem xDrive zapewnia płynne przyspieszenie, wysoki moment obrotowy i komfortową jazdę zarówno w mieście, jak i podczas długich tras. Prezentowany egzemplarz wyróżnia się elegancką konfiguracją, bogatym wyposażeniem oraz charakterystycznym dla serii 7 poziomem wykończenia. G11 oferuje wyjątkową przestrzeń, doskonałe wyciszenie i komfort, dzięki którym nawet długie podróże stają się niezwykle przyjemne. To samochód dla osoby, która oczekuje od swojej limuzyny połączenia prestiżu, nowoczesnych technologii, komfortu oraz odpowiednich osiągów.",
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
    carvertical: true,
    year: 2017,
    mileage: "51 000 km",
    engine: "4.4 V8",
    power: "575 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "reservation",
    price: "140 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwx6m/1.png",

    images: [
      "/cars/bmwx6m/1.png",
      "/cars/bmwx6m/2.png",
      "/cars/bmwx6m/3.png",
      "/cars/bmwx6m/4.png",
      "/cars/bmwx6m/5.png",
    ],

    description:
      "BMW X6 M F86 xDrive to połączenie bezkompromisowych osiągów silnika 4.4 V8 o mocy 575 KM z komfortem i funkcjonalnością luksusowego SUV-a. Napęd xDrive, automatyczna skrzynia biegów oraz charakterystyka opracowana przez BMW M tworzą samochód, który oferuje wyjątkowe osiągi, a jednocześnie pozostaje komfortowy w codziennym użytkowaniu. Prezentowany egzemplarz wyróżnia się atrakcyjną konfiguracją, wysokim poziomem wyposażenia oraz charakterystycznym dla modeli M sportowym wykończeniem. Dynamiczna sylwetka X6, szeroka bryła nadwozia i rasowy dźwięk jednostki V8 nadają mu wyrazisty charakter, którego trudno pomylić z innym samochodem. To propozycja dla osoby, która szuka samochodu łączącego osiągi samochodu sportowego, prestiż oraz praktyczność SUV-a — bez rezygnowania z emocji za kierownicą.",
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
    carvertical: true,
    year: 2013,
    mileage: "190 000 km",
    engine: "3.0 R6",
    power: "258 KM",
    transmission: "Automatyczna",
    drive: "Napęd na tył",
    fuel: "Diesel",
    status: "sold",
    price: "60 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf10/1.jpg",

    images: [
      "/cars/bmwf10/1.jpg",
      "/cars/bmwf10/2.jpg",
      "/cars/bmwf10/3.jpg",
      "/cars/bmwf10/4.jpg",
    ],

    description:
      "BMW 530d F10 to połączenie mocnego, sześciocylindrowego silnika wysokoprężnego z komfortem i elegancją charakterystyczną dla serii 5. Jednostka 3.0 R6 o mocy 258 KM, współpracująca z automatyczną skrzynią biegów, zapewnia bardzo dobre osiągi, wysoką kulturę pracy oraz odpowiedni zapas mocy podczas codziennej jazdy i dłuższych tras. Prezentowany egzemplarz posiada przebieg 190 000 km i wyróżnia się klasyczną, ponadczasową stylistyką F10, komfortowym wnętrzem oraz bogatym wyposażeniem. To samochód, który dobrze sprawdza się zarówno podczas dynamicznej jazdy, jak i wielogodzinnych podróży, oferując komfort, przestrzeń i charakter typowy dla klasy premium. BMW 530d F10 to propozycja dla osoby szukającej mocnego i komfortowego samochodu do codziennej jazdy oraz dłuższych tras.",
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
    carvertical: true,
    year: 2016,
    mileage: "175 000 km",
    engine: "3.0 V6",
    power: "420 KM",
    transmission: "Automatyczna",
    drive: "quattro",
    fuel: "Benzyna",
    status: "sold",
    price: "72 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/audis5/1.jpg",

    images: ["/cars/audis5/1.jpg"],

    description:
      "Audi S5 to połączenie sportowego charakteru, osiągów i komfortu samochodu klasy premium. Jednostka 3.0 V6 TFSI zapewnia bardzo dobre osiągi, a napęd quattro oraz automatyczna skrzynia biegów pozwalają w pełni wykorzystać potencjał samochodu zarówno podczas dynamicznej jazdy, jak i na co dzień. Prezentowany egzemplarz wyróżnia się sportową konfiguracją, wysokim poziomem wyposażenia oraz charakterystyczną dla modelu S5 stylistyką. Samochód oferuje odpowiedni balans pomiędzy osiągami a komfortem, dzięki czemu sprawdza się zarówno na dłuższych trasach, jak i podczas bardziej dynamicznej jazdy. Audi S5 to propozycja dla osoby szukającej samochodu, który nie rezygnuje z komfortu i elegancji, ale jednocześnie oferuje wyraźnie sportowy charakter i osiągi.",
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
    carvertical: true,
    year: 2015,
    mileage: "110 000 km",
    engine: "4.4 V8",
    power: "475 KM",
    transmission: "Automatyczna",
    drive: "xDrive",
    fuel: "Benzyna",
    status: "sold",
    price: "105 000 zł",
    vin: "WBA8B9C50HK123456",
    image: "/cars/bmwf06/1.jpg",

    images: [
      "/cars/bmwf06/1.jpg",
      "/cars/bmwf06/2.jpg",
      "/cars/bmwf06/3.jpg",
      "/cars/bmwf06/4.jpg",
      "/cars/bmwf06/5.jpg",
    ],

    description:
      "BMW 650i xDrive F06 to wyjątkowe połączenie osiągów, komfortu i elegancji w wydaniu luksusowego Gran Turismo. Pod maską pracuje jednostka 4.4 V8 o mocy 475 KM, współpracująca z automatyczną skrzynią biegów oraz napędem xDrive. Takie połączenie zapewnia imponującą dynamikę, płynność jazdy i pewne prowadzenie niezależnie od warunków. Prezentowany egzemplarz posiada oryginalny, udokumentowany przebieg 110 000 km. Samochód wyróżnia się atrakcyjną konfiguracją, wysokim poziomem wyposażenia oraz pakietem M Sport, który podkreśla jego sportowy charakter. Auto jest zadbane pod względem wizualnym i technicznym oraz nie wymaga dodatkowego wkładu finansowego. To propozycja dla osoby szukającej luksusowego Gran Turismo z charakterem, które zapewnia zarówno komfort podczas dłuższych podróży, jak i emocje płynące z jednostki V8.",
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
];
