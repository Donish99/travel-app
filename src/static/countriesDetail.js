import ru1 from "./detailImages/ru1.jpg";
import ru2 from "./detailImages/ru2.jpg";
import ru3 from "./detailImages/ru3.jpg";
import ru4 from "./detailImages/ru4.jpg";

import en1 from "./detailImages/en1.jpg";
import en2 from "./detailImages/en2.jpg";
import en3 from "./detailImages/en3.jpg";
import en4 from "./detailImages/en4.jpg";

import us1 from "./detailImages/us1.jpg";
import us2 from "./detailImages/us2.jpg";
import us3 from "./detailImages/us3.jpg";
import us4 from "./detailImages/us4.jpg";

import ge1 from "./detailImages/ge1.jpg";
import ge2 from "./detailImages/ge2.jpg";
import ge3 from "./detailImages/ge3.jpg";
import ge4 from "./detailImages/ge4.jpg";

import it1 from "./detailImages/it1.jpg";
import it2 from "./detailImages/it2.jpg";
import it3 from "./detailImages/it3.jpg";
import it4 from "./detailImages/it4.jpg";

import tr1 from "./detailImages/tr1.jpg";
import tr2 from "./detailImages/tr2.jpg";
import tr3 from "./detailImages/tr3.jpg";
import tr4 from "./detailImages/tr4.jpg";

import eg1 from "./detailImages/eg1.jpg";
import eg2 from "./detailImages/eg2.jpg";
import eg3 from "./detailImages/eg3.jpg";
import eg4 from "./detailImages/eg4.jpg";

import au1 from "./detailImages/au1.jpg";
import au2 from "./detailImages/au2.jpg";
import au3 from "./detailImages/au3.jpg";
import au4 from "./detailImages/au4.jpg";

const countryDetails = [
  {
    id: 2,
    en: {
      name: "Russia",
      capital: "Moscow",
      info:
        "Russia (Russian: Россия, Rossiya, Russian pronunciation: [rɐˈsʲijə]), or the Russian Federation,[c] is a transcontinental country spanning Eastern Europe and Northern Asia.",
    },
    ru: {
      name: "Россия",
      capital: "Москва",
      info:
        "Росси́я, другое официальное название — Росси́йская Федера́ция[e] (РФ[f]), — государство в Восточной Европе и Северной Азии. Территория России в её конституционных границах[b] составляет 17 125 191[6] км²; население страны (в пределах её заявленной территории[b]) составляет 146 238 185[9] чел. (2021). Занимает первое место в мире по территорииПерейти к разделу «#Географическое положение», шестое — по объёму ВВП по ППСПерейти к разделу «#Экономика и финансы», и девятое — по численности населенияПерейти к разделу «#Численность населения, расселение».",
    },
    uz: {
      name: "Rossiya",
      capital: "Moskva",
      info:
        "Rossiya (ruscha: Россия), Rossiya Federatsiyasi (ruscha: Российская Федерация) — Yevropaning sharqida, Osiyoning shimolida joylashgan mamlakat.",
    },
    images: [ru1, ru2, ru3, ru4],
    video: "",
    capitalMarker: [37.61993408203125, 55.75957720924986],
  },
  {
    id: 3,
    en: {
      name: "England",
      capital: "London",
      info:
        "England is a country that is part of the United Kingdom.[7][8][9] It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest.",
    },
    ru: {
      name: "Англия",
      capital: "Лондон",
      info:
        "А́нглия (англ. England [ˈɪŋɡlənd]) — страна, являющаяся крупнейшей административно-политической частью[1] Соединённого Королевства Великобритании и Северной Ирландии. Население Англии составляет 84 % от общего числа населения Великобритании. Столица — Лондон, крупнейший город Соединённого Королевства.",
    },
    uz: {
      name: "Angliya",
      capital: "London",
      info:
        "Ángliya (inglizcha: England) – Buyuk Britaniya va Shimoliy Irlandiya Qoʻshma Qirolligining eng katta qismi. Angliya Buyuk Britaniya katta orolining janubi-gʻarbini egallagan. ",
    },
    images: [en1, en2, en3, en4],
    video: "",
    capitalMarker: [-0.11810302734375, 51.517288954651846],
  },
  {
    id: 4,
    en: {
      name: "USA",
      capital: "Washington",
      info:
        "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.",
    },
    ru: {
      name: "США",
      capital: "Вашингтон",
      info:
        "Соединённые Шта́ты Аме́рики (англ. The United States of America [ði juˌnaɪtɪd ˌsteɪts əv əˈmerɪkə]), сокращённо США (англ. USA), или Соединённые Шта́ты (англ. United States, U.S., в просторечии — Аме́рика) — государство в Северной Америке. Площадь — 9,5 млн км²[* 3][5] (4-е место в мире). Население — около 329 млн человек (2020, оценка; 3-е место в мире). США имеют федеративную форму устройства, административно делятся на 50 штатов и федеральный округ Колумбия; в их подчинении также находится ряд островных территорий (Пуэрто-Рико, Виргинские Острова, Гуам и другие).",
    },
    uz: {
      name: "AQSH",
      capital: "Vashington",
      info:
        "Amerika Qoʻshma Shtatlari (AQSh, inglizcha: United States of America) – Shimoliy Amerikadagi mamlakat. Poytaxti – Vashington shahri, BMT aʼzosi. Amerika Qoʻshma Shtatlari Sharqdan Atlantika, gʻarbdan Tinch okeani, janubi-sharqdan Meksika qoʻltigʻi bilan oʻralgan.",
    },
    images: [us1, us2, us3, us4],
    video: "",
    capitalMarker: [-77.0361328125, 38.89530825492018],
  },
  {
    id: 5,
    en: {
      name: "Germany",
      capital: "Berlin",
      info:
        "Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany,[e] is a country at the intersection of Central and Western Europe.",
    },
    ru: {
      name: "Германия",
      capital: "Берлин",
      info:
        "Герма́ния (нем. Deutschland [ˈdɔʏt͡ʃlant]), официальное название — Федерати́вная Респу́блика Герма́ния (нем. Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе. Площадь территории — 357 408,74 км²[10]. Численность населения на 30 сентября 2019 года — 83 149 300 жителей[11]. Занимает 18-е место в мире по численности населения (2-е в Европе) и 62-е в мире по территории (8-е в Европе).",
    },
    uz: {
      name: "Olmoniya",
      capital: "Berlin",
      info:
        "Germaniya (nemicha: Deutschland), Germaniya Federativ Respublikasi (nemicha: Bundesrepublik Deutschland) — Markaziy Yevropadagi davlat.",
    },
    images: [ge1, ge2, ge3, ge4],
    video: "",
    capitalMarker: [13.392333984375, 52.532931647583325],
  },
  {
    id: 6,
    en: {
      name: "Italy",
      capital: "Rome",
      info:
        "Italy (Italian: Italia [iˈtaːlja] (About this soundlisten)), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]),[13][14][15][16] is a country consisting of a continental part, delimited by the Alps, a peninsula and several islands surrounding it.",
    },
    ru: {
      name: "Италия",
      capital: "Рим",
      info:
        "Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.",
    },
    uz: {
      name: "Italiya",
      capital: "Rim",
      info:
        "Italiya (Italia), Italiya Respublikasi (Repubblica Italiana) – Yevropa janubida, Oʻrta dengiz havzasida joylashgan davlat. Apennin yarim orol, Sitsiliya, Sardiniya va boshqa kichik orollarni oʻz ichiga olgan.",
    },
    images: [it1, it2, it3, it4],
    video: "",
    capitalMarker: [12.480468749999998, 41.902277040963696],
  },
  {
    id: 7,
    en: {
      name: "Turkey",
      capital: "Ankara",
      info:
        "Turkey (Turkish: Türkiye [ˈtyɾcije]), officially the Republic of Turkey (Turkish: Türkiye Cumhuriyeti [ˈtyɾcije dʒumˈhuːɾijeti] (About this soundlisten)), is a transcontinental country straddling Southeastern Europe and Western Asia",
    },
    ru: {
      name: "Турция",
      capital: "Анкара",
      info:
        "Ту́рция (тур. Türkiye [ˈtyɾcije]), официально — Туре́цкая Респу́блика (тур. Türkiye Cumhuriyeti [ˈtyɾcije dʒumˈhuːɾijeti]) — государство в Передней Азии (97 %) и в Южной Европе (3 %). Население — 83 млн чел. (2020 год), площадь территории — 783 562 км² (занимает 19-е место в мире по численности населения и 36-е по территории). Государственный язык — турецкий.",
    },
    uz: {
      name: "Turkiya",
      capital: "Ankara",
      info:
        "Turkiya (turkcha: Türkiye), Turkiya Respublikasi (turkcha: Türkiye Cumhuriyeti) - Osiyoning gʻarbiy qismi va Yevropaning janubiy Turkiyaning poytaxti - Anqara shahri. Davlat tili - Turk tili. Maydoni — 783,562 km². Aholi soni (2019) — 83.154.997. Pul birligi — lira. Turkiya Respublikasi 81 ta viloyatlardan iborat.",
    },
    images: [tr1, tr2, tr3, tr4],
    video: "",
    capitalMarker: [32.8271484375, 39.9434364619742],
  },
  {
    id: 8,
    en: {
      name: "Egypt",
      capital: "Cairo",
      info:
        "Egypt (/ˈiːdʒɪpt/ (About this soundlisten) EE-jipt; Arabic: مِصر‎ Miṣr), officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. ",
    },
    ru: {
      name: "Египет",
      capital: "Каир",
      info:
        "Еги́пет (араб. مصر‎ Миср/Miṣr [misˤɾ], масри مصر Маср/Maṣr [ˈmɑsˤɾ], копт. Ⲭⲏⲙⲓ [kʰēmi]), официальное название — Ара́бская Респу́блика Еги́пет (араб. جمهورية مصر العربية‎ Джумхурийят Миср аль-Арабийя, масри جمهورية مصر العربية Гумхурия Маср иль-Арабийя), — государство, расположенное в Северной Африке и на Синайском полуострове Азии.",
    },
    uz: {
      name: "Misr",
      capital: "Qoxira",
      info:
        "Misr (rasmiy nomlanishi Misr Arab Respublikasi arabcha: جمهورية مصر العربية‎‎ Jumhuriya Misr al-Arabiya) — Afrikaning shimoliy-sharqiy va qisman Osiyo (Sinay yarim orol) da joylashgan davlat. Maydoni 1001,4 ming km². Aholisi 69,5 mln. kishi (2001)",
    },
    images: [eg1, eg2, eg3, eg4],
    video: "",
    capitalMarker: [31.245117187499996, 30.06909396443887],
  },
  {
    id: 9,
    en: {
      name: "Australia",
      capital: "Canberra",
      info:
        "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.[13] It is the largest country in Oceania and the world's sixth-largest country by total area.",
    },
    ru: {
      name: "Австралия",
      capital: "Канберра",
      info:
        "Австра́лия (англ. Australia, МФА: [əˈstreɪljə], от лат. austrālis — «южный»), официальная форма — Австрали́йский Сою́з, или Содру́жество Австра́лии (англ. Commonwealth of Australia[5], МФА: [ˈkɒm.ənˌwɛlθ əv əˈstreɪljə]), — государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов[* 1]; является шестым государством по площади в мире.",
    },
    uz: {
      name: "Avstraliya",
      capital: "Kanberra",
      info:
        "Avstraliya, Avstraliya Ittifoqi (Commonwealth of Australia)– Janubiy yarim shardagi davlat, A. materigi, Tasmaniya orol va boshqa orollarda joylashgan. Maydoni 7,682 mln. km². Aholisi 19 mln. kishi (1999). Poytaxti – Kanberra shahri",
    },
    images: [au1, au2, au3, au4],
    video: "",
    capitalMarker: [149.117431640625, -35.29831467054512],
  },
];

export default countryDetails;
