/* ========== FIREBASE INIT (compat SDK) ========== */
firebase.initializeApp({
  apiKey: "AIzaSyBRrNL2HsOqkwhvdd-tfgRLbmj2nRMQfJY",
  authDomain: "pokemon-quiz-38f4a.firebaseapp.com",
  projectId: "pokemon-quiz-38f4a",
  storageBucket: "pokemon-quiz-38f4a.firebasestorage.app",
  messagingSenderId: "177531040205",
  appId: "1:177531040205:web:9d617b9789a34fb202d484"
});
var db = firebase.firestore();

/* ========== POKÉMON DATA ========== */

/* 60 most popular (Easy mode) */
var POKEMON_EASY = [
  { id: 1,   en: "Bulbasaur",   ru: "Бульбазавр" },
  { id: 4,   en: "Charmander",  ru: "Чармандер" },
  { id: 6,   en: "Charizard",   ru: "Чаризард" },
  { id: 7,   en: "Squirtle",    ru: "Сквиртл" },
  { id: 9,   en: "Blastoise",   ru: "Бластойз" },
  { id: 25,  en: "Pikachu",     ru: "Пикачу" },
  { id: 26,  en: "Raichu",      ru: "Райчу" },
  { id: 35,  en: "Clefairy",    ru: "Клефэйри" },
  { id: 39,  en: "Jigglypuff",  ru: "Джигглипафф" },
  { id: 52,  en: "Meowth",      ru: "Мяут" },
  { id: 54,  en: "Psyduck",     ru: "Псайдак" },
  { id: 59,  en: "Arcanine",    ru: "Арканайн" },
  { id: 63,  en: "Abra",        ru: "Абра" },
  { id: 65,  en: "Alakazam",    ru: "Алаказам" },
  { id: 68,  en: "Machamp",     ru: "Мачамп" },
  { id: 74,  en: "Geodude",     ru: "Джеодуд" },
  { id: 94,  en: "Gengar",      ru: "Генгар" },
  { id: 104, en: "Cubone",      ru: "Кьюбон" },
  { id: 130, en: "Gyarados",    ru: "Гаярдос" },
  { id: 131, en: "Lapras",      ru: "Лапрас" },
  { id: 132, en: "Ditto",       ru: "Дитто" },
  { id: 133, en: "Eevee",       ru: "Иви" },
  { id: 134, en: "Vaporeon",    ru: "Вапореон" },
  { id: 135, en: "Jolteon",     ru: "Джолтеон" },
  { id: 136, en: "Flareon",     ru: "Флареон" },
  { id: 143, en: "Snorlax",     ru: "Снорлакс" },
  { id: 144, en: "Articuno",    ru: "Артикуно" },
  { id: 145, en: "Zapdos",      ru: "Запдос" },
  { id: 146, en: "Moltres",     ru: "Молтрес" },
  { id: 147, en: "Dratini",     ru: "Дратини" },
  { id: 149, en: "Dragonite",   ru: "Драгонайт" },
  { id: 150, en: "Mewtwo",      ru: "Мьюту" },
  { id: 151, en: "Mew",         ru: "Мью" },
  { id: 152, en: "Chikorita",   ru: "Чикорита" },
  { id: 155, en: "Cyndaquil",   ru: "Синдаквил" },
  { id: 158, en: "Totodile",    ru: "Тотодайл" },
  { id: 175, en: "Togepi",      ru: "Тогепи" },
  { id: 196, en: "Espeon",      ru: "Эспеон" },
  { id: 197, en: "Umbreon",     ru: "Амбреон" },
  { id: 248, en: "Tyranitar",   ru: "Тиранитар" },
  { id: 249, en: "Lugia",       ru: "Лугия" },
  { id: 250, en: "Ho-Oh",       ru: "Хо-Ох" },
  { id: 251, en: "Celebi",      ru: "Селеби" },
  { id: 252, en: "Treecko",     ru: "Трико" },
  { id: 255, en: "Torchic",     ru: "Торчик" },
  { id: 258, en: "Mudkip",      ru: "Мадкип" },
  { id: 282, en: "Gardevoir",   ru: "Гардевуар" },
  { id: 384, en: "Rayquaza",    ru: "Рэйкуаза" },
  { id: 385, en: "Jirachi",     ru: "Джирачи" },
  { id: 393, en: "Piplup",      ru: "Пиплап" },
  { id: 448, en: "Lucario",     ru: "Лукарио" },
  { id: 445, en: "Garchomp",    ru: "Гарчомп" },
  { id: 471, en: "Glaceon",     ru: "Гласеон" },
  { id: 700, en: "Sylveon",     ru: "Сильвеон" },
  { id: 658, en: "Greninja",    ru: "Грениндзя" },
  { id: 778, en: "Mimikyu",     ru: "Мимикью" },
  { id: 722, en: "Rowlet",      ru: "Роулет" },
  { id: 725, en: "Litten",      ru: "Литтен" },
  { id: 728, en: "Popplio",     ru: "Попплио" },
  { id: 889, en: "Zamazenta",   ru: "Замазента" }
];

/* 60 extra for Hard mode */
var POKEMON_HARD_EXTRA = [
  { id: 2,   en: "Ivysaur",      ru: "Ивизавр" },
  { id: 3,   en: "Venusaur",     ru: "Венузавр" },
  { id: 5,   en: "Charmeleon",   ru: "Чармелеон" },
  { id: 8,   en: "Wartortle",    ru: "Вартортл" },
  { id: 12,  en: "Butterfree",   ru: "Баттерфри" },
  { id: 18,  en: "Pidgeot",      ru: "Пиджеот" },
  { id: 24,  en: "Arbok",        ru: "Арбок" },
  { id: 31,  en: "Nidoqueen",    ru: "Нидоквин" },
  { id: 34,  en: "Nidoking",     ru: "Нидокинг" },
  { id: 36,  en: "Clefable",     ru: "Клефейбл" },
  { id: 38,  en: "Ninetales",    ru: "Найнтейлс" },
  { id: 45,  en: "Vileplume",    ru: "Вайлплюм" },
  { id: 55,  en: "Golduck",      ru: "Голдак" },
  { id: 57,  en: "Primeape",     ru: "Праймэйп" },
  { id: 62,  en: "Poliwrath",    ru: "Поливрат" },
  { id: 66,  en: "Machop",       ru: "Мачоп" },
  { id: 71,  en: "Victreebel",   ru: "Виктрибел" },
  { id: 76,  en: "Golem",        ru: "Голем" },
  { id: 78,  en: "Rapidash",     ru: "Рапидаш" },
  { id: 80,  en: "Slowbro",      ru: "Слоубро" },
  { id: 89,  en: "Muk",          ru: "Мак" },
  { id: 91,  en: "Cloyster",     ru: "Клойстер" },
  { id: 95,  en: "Onix",         ru: "Оникс" },
  { id: 99,  en: "Kingler",      ru: "Кинглер" },
  { id: 103, en: "Exeggutor",    ru: "Экзеггутор" },
  { id: 106, en: "Hitmonlee",    ru: "Хитмонли" },
  { id: 110, en: "Weezing",      ru: "Визинг" },
  { id: 112, en: "Rhydon",       ru: "Райдон" },
  { id: 115, en: "Kangaskhan",   ru: "Кангасхан" },
  { id: 121, en: "Starmie",      ru: "Старми" },
  { id: 123, en: "Scyther",      ru: "Сайтер" },
  { id: 125, en: "Electabuzz",   ru: "Электабазз" },
  { id: 126, en: "Magmar",       ru: "Магмар" },
  { id: 127, en: "Pinsir",       ru: "Пинсир" },
  { id: 128, en: "Tauros",       ru: "Таурос" },
  { id: 137, en: "Porygon",      ru: "Поригон" },
  { id: 139, en: "Omastar",      ru: "Омастар" },
  { id: 141, en: "Kabutops",     ru: "Кабутопс" },
  { id: 142, en: "Aerodactyl",   ru: "Аэродактиль" },
  { id: 148, en: "Dragonair",    ru: "Драгонэйр" },
  { id: 157, en: "Typhlosion",   ru: "Тайфложн" },
  { id: 160, en: "Feraligatr",   ru: "Фералигатр" },
  { id: 169, en: "Crobat",       ru: "Кробат" },
  { id: 181, en: "Ampharos",     ru: "Амфарос" },
  { id: 212, en: "Scizor",       ru: "Сайзор" },
  { id: 214, en: "Heracross",    ru: "Геракросс" },
  { id: 229, en: "Houndoom",     ru: "Хаундум" },
  { id: 230, en: "Kingdra",      ru: "Кингдра" },
  { id: 243, en: "Raikou",       ru: "Райку" },
  { id: 244, en: "Entei",        ru: "Энтей" },
  { id: 245, en: "Suicune",      ru: "Суикун" },
  { id: 254, en: "Sceptile",     ru: "Скептайл" },
  { id: 257, en: "Blaziken",     ru: "Блэйзикен" },
  { id: 260, en: "Swampert",     ru: "Свамперт" },
  { id: 306, en: "Aggron",       ru: "Аггрон" },
  { id: 330, en: "Flygon",       ru: "Флайгон" },
  { id: 373, en: "Salamence",    ru: "Саламенс" },
  { id: 376, en: "Metagross",    ru: "Метагросс" },
  { id: 383, en: "Groudon",      ru: "Граудон" },
  { id: 382, en: "Kyogre",       ru: "Кайогр" }
];

var POKEMON_ALL = POKEMON_EASY.concat(POKEMON_HARD_EXTRA);

/* All 151 Gen 1 Pokémon */
var POKEMON_GEN1 = [
  { id: 1,   en: "Bulbasaur",    ru: "Бульбазавр" },
  { id: 2,   en: "Ivysaur",      ru: "Ивизавр" },
  { id: 3,   en: "Venusaur",     ru: "Венузавр" },
  { id: 4,   en: "Charmander",   ru: "Чармандер" },
  { id: 5,   en: "Charmeleon",   ru: "Чармелеон" },
  { id: 6,   en: "Charizard",    ru: "Чаризард" },
  { id: 7,   en: "Squirtle",     ru: "Сквиртл" },
  { id: 8,   en: "Wartortle",    ru: "Вартортл" },
  { id: 9,   en: "Blastoise",    ru: "Бластойз" },
  { id: 10,  en: "Caterpie",     ru: "Катерпи" },
  { id: 11,  en: "Metapod",      ru: "Метапод" },
  { id: 12,  en: "Butterfree",   ru: "Баттерфри" },
  { id: 13,  en: "Weedle",       ru: "Видл" },
  { id: 14,  en: "Kakuna",       ru: "Какуна" },
  { id: 15,  en: "Beedrill",     ru: "Бидрилл" },
  { id: 16,  en: "Pidgey",       ru: "Пиджи" },
  { id: 17,  en: "Pidgeotto",    ru: "Пиджеотто" },
  { id: 18,  en: "Pidgeot",      ru: "Пиджеот" },
  { id: 19,  en: "Rattata",      ru: "Раттата" },
  { id: 20,  en: "Raticate",     ru: "Ратикейт" },
  { id: 21,  en: "Spearow",      ru: "Спироу" },
  { id: 22,  en: "Fearow",       ru: "Фироу" },
  { id: 23,  en: "Ekans",        ru: "Эканс" },
  { id: 24,  en: "Arbok",        ru: "Арбок" },
  { id: 25,  en: "Pikachu",      ru: "Пикачу" },
  { id: 26,  en: "Raichu",       ru: "Райчу" },
  { id: 27,  en: "Sandshrew",    ru: "Сэндшру" },
  { id: 28,  en: "Sandslash",    ru: "Сэндслэш" },
  { id: 29,  en: "Nidoran♀",     ru: "Нидоран♀" },
  { id: 30,  en: "Nidorina",     ru: "Нидорина" },
  { id: 31,  en: "Nidoqueen",    ru: "Нидоквин" },
  { id: 32,  en: "Nidoran♂",     ru: "Нидоран♂" },
  { id: 33,  en: "Nidorino",     ru: "Нидорино" },
  { id: 34,  en: "Nidoking",     ru: "Нидокинг" },
  { id: 35,  en: "Clefairy",     ru: "Клефэйри" },
  { id: 36,  en: "Clefable",     ru: "Клефейбл" },
  { id: 37,  en: "Vulpix",       ru: "Вульпикс" },
  { id: 38,  en: "Ninetales",    ru: "Найнтейлс" },
  { id: 39,  en: "Jigglypuff",   ru: "Джигглипафф" },
  { id: 40,  en: "Wigglytuff",   ru: "Вигглитафф" },
  { id: 41,  en: "Zubat",        ru: "Зубат" },
  { id: 42,  en: "Golbat",       ru: "Голбат" },
  { id: 43,  en: "Oddish",       ru: "Оддиш" },
  { id: 44,  en: "Gloom",        ru: "Глум" },
  { id: 45,  en: "Vileplume",    ru: "Вайлплюм" },
  { id: 46,  en: "Paras",        ru: "Парас" },
  { id: 47,  en: "Parasect",     ru: "Парасект" },
  { id: 48,  en: "Venonat",      ru: "Веноат" },
  { id: 49,  en: "Venomoth",     ru: "Веномот" },
  { id: 50,  en: "Diglett",      ru: "Диглетт" },
  { id: 51,  en: "Dugtrio",      ru: "Дагтрио" },
  { id: 52,  en: "Meowth",       ru: "Мяут" },
  { id: 53,  en: "Persian",      ru: "Персиан" },
  { id: 54,  en: "Psyduck",      ru: "Псайдак" },
  { id: 55,  en: "Golduck",      ru: "Голдак" },
  { id: 56,  en: "Mankey",       ru: "Манки" },
  { id: 57,  en: "Primeape",     ru: "Праймэйп" },
  { id: 58,  en: "Growlithe",    ru: "Гроулит" },
  { id: 59,  en: "Arcanine",     ru: "Арканайн" },
  { id: 60,  en: "Poliwag",      ru: "Поливаг" },
  { id: 61,  en: "Poliwhirl",    ru: "Поливирл" },
  { id: 62,  en: "Poliwrath",    ru: "Поливрат" },
  { id: 63,  en: "Abra",         ru: "Абра" },
  { id: 64,  en: "Kadabra",      ru: "Кадабра" },
  { id: 65,  en: "Alakazam",     ru: "Алаказам" },
  { id: 66,  en: "Machop",       ru: "Мачоп" },
  { id: 67,  en: "Machoke",      ru: "Мачок" },
  { id: 68,  en: "Machamp",      ru: "Мачамп" },
  { id: 69,  en: "Bellsprout",   ru: "Беллспраут" },
  { id: 70,  en: "Weepinbell",   ru: "Випинбелл" },
  { id: 71,  en: "Victreebel",   ru: "Виктрибел" },
  { id: 72,  en: "Tentacool",    ru: "Тентакул" },
  { id: 73,  en: "Tentacruel",   ru: "Тентакруэл" },
  { id: 74,  en: "Geodude",      ru: "Джеодуд" },
  { id: 75,  en: "Graveler",     ru: "Гравелер" },
  { id: 76,  en: "Golem",        ru: "Голем" },
  { id: 77,  en: "Ponyta",       ru: "Понита" },
  { id: 78,  en: "Rapidash",     ru: "Рапидаш" },
  { id: 79,  en: "Slowpoke",     ru: "Слоупок" },
  { id: 80,  en: "Slowbro",      ru: "Слоубро" },
  { id: 81,  en: "Magnemite",    ru: "Магнемайт" },
  { id: 82,  en: "Magneton",     ru: "Магнетон" },
  { id: 83,  en: "Farfetch'd",   ru: "Фарфетчд" },
  { id: 84,  en: "Doduo",        ru: "Додуо" },
  { id: 85,  en: "Dodrio",       ru: "Додрио" },
  { id: 86,  en: "Seel",         ru: "Сил" },
  { id: 87,  en: "Dewgong",      ru: "Дьюгонг" },
  { id: 88,  en: "Grimer",       ru: "Граймер" },
  { id: 89,  en: "Muk",          ru: "Мак" },
  { id: 90,  en: "Shellder",     ru: "Шеллдер" },
  { id: 91,  en: "Cloyster",     ru: "Клойстер" },
  { id: 92,  en: "Gastly",       ru: "Гастли" },
  { id: 93,  en: "Haunter",      ru: "Хонтер" },
  { id: 94,  en: "Gengar",       ru: "Генгар" },
  { id: 95,  en: "Onix",         ru: "Оникс" },
  { id: 96,  en: "Drowzee",      ru: "Дроузи" },
  { id: 97,  en: "Hypno",        ru: "Гипно" },
  { id: 98,  en: "Krabby",       ru: "Крабби" },
  { id: 99,  en: "Kingler",      ru: "Кинглер" },
  { id: 100, en: "Voltorb",      ru: "Волторб" },
  { id: 101, en: "Electrode",    ru: "Электрод" },
  { id: 102, en: "Exeggcute",    ru: "Экзеггкут" },
  { id: 103, en: "Exeggutor",    ru: "Экзеггутор" },
  { id: 104, en: "Cubone",       ru: "Кьюбон" },
  { id: 105, en: "Marowak",      ru: "Маровак" },
  { id: 106, en: "Hitmonlee",    ru: "Хитмонли" },
  { id: 107, en: "Hitmonchan",   ru: "Хитмончан" },
  { id: 108, en: "Lickitung",    ru: "Ликитанг" },
  { id: 109, en: "Koffing",      ru: "Коффинг" },
  { id: 110, en: "Weezing",      ru: "Визинг" },
  { id: 111, en: "Rhyhorn",      ru: "Райхорн" },
  { id: 112, en: "Rhydon",       ru: "Райдон" },
  { id: 113, en: "Chansey",      ru: "Ченси" },
  { id: 114, en: "Tangela",      ru: "Тангела" },
  { id: 115, en: "Kangaskhan",   ru: "Кангасхан" },
  { id: 116, en: "Horsea",       ru: "Хорси" },
  { id: 117, en: "Seadra",       ru: "Сидра" },
  { id: 118, en: "Goldeen",      ru: "Голдин" },
  { id: 119, en: "Seaking",      ru: "Сикинг" },
  { id: 120, en: "Staryu",       ru: "Старью" },
  { id: 121, en: "Starmie",      ru: "Старми" },
  { id: 122, en: "Mr. Mime",     ru: "Мистер Майм" },
  { id: 123, en: "Scyther",      ru: "Сайтер" },
  { id: 124, en: "Jynx",         ru: "Джинкс" },
  { id: 125, en: "Electabuzz",   ru: "Электабазз" },
  { id: 126, en: "Magmar",       ru: "Магмар" },
  { id: 127, en: "Pinsir",       ru: "Пинсир" },
  { id: 128, en: "Tauros",       ru: "Таурос" },
  { id: 129, en: "Magikarp",     ru: "Магикарп" },
  { id: 130, en: "Gyarados",     ru: "Гаярдос" },
  { id: 131, en: "Lapras",       ru: "Лапрас" },
  { id: 132, en: "Ditto",        ru: "Дитто" },
  { id: 133, en: "Eevee",        ru: "Иви" },
  { id: 134, en: "Vaporeon",     ru: "Вапореон" },
  { id: 135, en: "Jolteon",      ru: "Джолтеон" },
  { id: 136, en: "Flareon",      ru: "Флареон" },
  { id: 137, en: "Porygon",      ru: "Поригон" },
  { id: 138, en: "Omanyte",      ru: "Оманайт" },
  { id: 139, en: "Omastar",      ru: "Омастар" },
  { id: 140, en: "Kabuto",       ru: "Кабуто" },
  { id: 141, en: "Kabutops",     ru: "Кабутопс" },
  { id: 142, en: "Aerodactyl",   ru: "Аэродактиль" },
  { id: 143, en: "Snorlax",      ru: "Снорлакс" },
  { id: 144, en: "Articuno",     ru: "Артикуно" },
  { id: 145, en: "Zapdos",       ru: "Запдос" },
  { id: 146, en: "Moltres",      ru: "Молтрес" },
  { id: 147, en: "Dratini",      ru: "Дратини" },
  { id: 148, en: "Dragonair",    ru: "Драгонэйр" },
  { id: 149, en: "Dragonite",    ru: "Драгонайт" },
  { id: 150, en: "Mewtwo",       ru: "Мьюту" },
  { id: 151, en: "Mew",          ru: "Мью" }
];

var CUSTOM_POKEMON = [
  { id: "custom-1", en: "Charmander",  ru: "Чармандер",  image: "./assets/custom-1.jpg" },
  { id: "custom-2", en: "Misty",       ru: "Мисти",      image: "./assets/custom-2.jpg" },
  { id: "custom-3", en: "Onyx",        ru: "Оникс",      image: "./assets/custom-3.jpg" },
  { id: "custom-4", en: "Squirtle",    ru: "Сквиртл",    image: "./assets/custom-4.jpg" },
  { id: "custom-5", en: "Pikachu",     ru: "Пикачу",     image: "./assets/custom-5.jpg" }
];

function getPokemonImageUrl(id) {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
}

/* ========== FIRESTORE LEADERBOARD ========== */

async function fetchLeaderboard(mode) {
  try {
    var snapshot = await db.collection("leaderboard")
      .where("mode", "==", mode)
      .orderBy("score", "desc")
      .orderBy("timeSec", "asc")
      .orderBy("timestamp", "asc")
      .limit(20)
      .get();

    var entries = [];
    snapshot.forEach(function(doc) {
      entries.push(doc.data());
    });
    return entries;
  } catch (e) {
    console.error("Firestore read error:", e);
    return [];
  }
}

async function postScore(name, score, total, mode, timeSec) {
  try {
    await db.collection("leaderboard").add({
      name: name,
      score: score,
      total: total,
      mode: mode,
      timeSec: timeSec,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.error("Firestore write error:", e);
  }
}

/* ========== AUDIO ========== */

var audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") audioCtx.resume();
}
function playSound(freq, duration, type) {
  if (!audioCtx) return;
  try {
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type || "square";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) { /* ignore */ }
}
function playCorrectSound() {
  playSound(523.25, 0.1, "sine");
  setTimeout(function() { playSound(659.25, 0.1, "sine"); }, 100);
  setTimeout(function() { playSound(783.99, 0.15, "sine"); }, 200);
}
function playWrongSound() {
  playSound(200, 0.2, "sawtooth");
  setTimeout(function() { playSound(150, 0.3, "sawtooth"); }, 150);
}
function playClickSound() { playSound(800, 0.05, "sine"); }

/* ========== GAME STATE ========== */

var currentQuestion = 0;
var score = 0;
var questions = [];
var answered = false;
var playerName = "";
var difficulty = "easy"; /* "easy" | "hard" | "gen1" */
var autoAdvanceTimer = null;
var recordsTabActive = "easy";
var gameStartTime = 0;
var gameElapsedSec = 0;
var TOTAL_QUESTIONS = 10;
var AUTO_ADVANCE_DELAY = 7000;

function getNumChoices() {
  if (difficulty === "easy") return 3;
  return 5; /* hard and gen1 both use 5 */
}

function getPokemonPool() {
  if (difficulty === "easy") return POKEMON_EASY;
  if (difficulty === "gen1") return POKEMON_GEN1;
  return POKEMON_ALL;
}

function selectDifficulty(diff) {
  difficulty = diff;
  document.querySelectorAll(".diff-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.diff === diff);
  });
  ensureAudio();
  playClickSound();
}

/* ========== SCREENS ========== */

function showScreen(screenId) {
  clearAutoAdvance();
  document.querySelectorAll(".screen").forEach(function(s) { s.classList.remove("active"); });
  var screen = document.getElementById(screenId);
  if (screen) screen.classList.add("active");
  if (screenId === "screen-records") {
    recordsTabActive = difficulty;
    updateRecordsTabs();
    loadRecords(recordsTabActive);
  }
}

function cancelQuiz() {
  ensureAudio();
  playClickSound();
  clearAutoAdvance();
  showScreen("screen-title");
}

function clearAutoAdvance() {
  if (autoAdvanceTimer) { clearTimeout(autoAdvanceTimer); autoAdvanceTimer = null; }
}
function startAutoAdvance() {
  clearAutoAdvance();
  autoAdvanceTimer = setTimeout(function() { autoAdvanceTimer = null; nextQuestion(); }, AUTO_ADVANCE_DELAY);
}

/* ========== HELPERS ========== */

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function escapeHtml(str) {
  var div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatTime(sec) {
  var m = Math.floor(sec / 60);
  var s = sec % 60;
  if (m > 0) return m + ":" + (s < 10 ? "0" : "") + s;
  return s + "с";
}

/* ========== QUESTION GENERATION ========== */

function generateQuestions() {
  var pool = getPokemonPool();
  var numChoices = getNumChoices();
  var isGen1 = (difficulty === "gen1");
  var hasCustomPhoto = !isGen1; /* no family photos in gen1 */

  var numNormal = hasCustomPhoto ? TOTAL_QUESTIONS - 1 : TOTAL_QUESTIONS;
  var shuffled = shuffle(pool);
  var selected = shuffled.slice(0, numNormal);

  /* For gen1: decide which questions are image-pick (50/50) */
  var imagePickIndices = {};
  if (isGen1) {
    var indices = [];
    for (var idx = 0; idx < numNormal; idx++) indices.push(idx);
    var shuffledIdx = shuffle(indices);
    var half = Math.floor(numNormal / 2);
    for (var h = 0; h < half; h++) {
      imagePickIndices[shuffledIdx[h]] = true;
    }
  }

  var allQuestions = selected.map(function(correct, qIdx) {
    var others = pool.filter(function(p) { return p.id !== correct.id; });

    if (isGen1 && imagePickIndices[qIdx]) {
      /* IMAGE-PICK: show name, pick from 4 images */
      var wrongImgChoices = shuffle(others).slice(0, 3);
      var imgChoices = shuffle([correct].concat(wrongImgChoices));
      return {
        type: "image-pick",
        correct: correct,
        choices: imgChoices,
        isCustom: false
      };
    } else {
      /* NORMAL: show image, pick from text names */
      var wrongChoices = shuffle(others).slice(0, numChoices - 1);
      var allChoices = shuffle([correct].concat(wrongChoices));
      return {
        type: "text-pick",
        correct: correct,
        choices: allChoices,
        imageUrl: getPokemonImageUrl(correct.id),
        isCustom: false
      };
    }
  });

  /* Add custom family photo as last question (not for gen1) */
  if (hasCustomPhoto) {
    var customPokemon = CUSTOM_POKEMON[Math.floor(Math.random() * CUSTOM_POKEMON.length)];
    var customCorrect = { id: customPokemon.id, en: customPokemon.en, ru: customPokemon.ru };
    var wrongPool = pool.filter(function(p) {
      return p.en.toLowerCase() !== customCorrect.en.toLowerCase() &&
             p.ru.toLowerCase() !== customCorrect.ru.toLowerCase();
    });
    var wrongChoices = shuffle(wrongPool).slice(0, numChoices - 1);
    var customChoices = shuffle([customCorrect].concat(wrongChoices));
    allQuestions.push({
      type: "text-pick",
      correct: customCorrect,
      choices: customChoices,
      imageUrl: customPokemon.image,
      isCustom: true
    });
  }

  return allQuestions;
}

/* ========== GAME FLOW ========== */

function startGame() {
  ensureAudio();
  playClickSound();
  var nameInput = document.getElementById("player-name");
  playerName = nameInput.value.trim();
  currentQuestion = 0;
  score = 0;
  answered = false;
  gameStartTime = Date.now();
  gameElapsedSec = 0;
  questions = generateQuestions();
  showScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  var q = questions[currentQuestion];
  answered = false;
  clearAutoAdvance();

  /* Update cancel button visibility — only on first question */
  var cancelBtn = document.getElementById("btn-cancel");
  if (cancelBtn) {
    if (currentQuestion === 0) {
      cancelBtn.classList.remove("hidden");
    } else {
      cancelBtn.classList.add("hidden");
    }
  }

  document.getElementById("question-counter").textContent = "Вопрос " + (currentQuestion + 1) + " / " + TOTAL_QUESTIONS;
  document.getElementById("score-display").textContent = "Счёт: " + score;
  document.getElementById("progress-fill").style.width = (((currentQuestion + 1) / TOTAL_QUESTIONS) * 100) + "%";

  var imageWrapper = document.getElementById("pokemon-image-wrapper");
  var choicesEl = document.getElementById("choices");
  var questionLabel = document.getElementById("quiz-question-label");

  if (q.type === "image-pick") {
    /* IMAGE-PICK: show name, choose from 4 images */
    imageWrapper.classList.add("hidden");
    questionLabel.textContent = "Где " + q.correct.ru + " (" + q.correct.en + ")?";
    choicesEl.className = "choices image-choices";
    choicesEl.innerHTML = q.choices.map(function(p, i) {
      return '<button class="image-choice-btn" onclick="selectAnswer(' + i + ')" data-index="' + i + '">' +
        '<img src="' + getPokemonImageUrl(p.id) + '" alt="?" class="image-choice-img" onerror="this.src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png\'">' +
      '</button>';
    }).join("");
  } else {
    /* TEXT-PICK: show image, choose from text names */
    imageWrapper.classList.remove("hidden");
    questionLabel.textContent = "Кто этот покемон?";
    choicesEl.className = "choices";

    var img = document.getElementById("pokemon-image");
    var loader = document.getElementById("image-loader");
    img.style.opacity = "0";
    loader.textContent = "Загрузка...";
    loader.classList.remove("hidden");

    img.className = "pokemon-image";
    if (q.isCustom) { img.classList.add("custom-photo"); } else { img.classList.add("pixelated"); }

    img.onload = function() { img.style.opacity = "1"; loader.classList.add("hidden"); };
    img.onerror = function() {
      if (!q.isCustom) {
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + q.correct.id + ".png";
      } else { loader.textContent = "?"; loader.classList.remove("hidden"); }
    };
    img.src = q.imageUrl;

    var letters = ["А", "Б", "В", "Г", "Д"];
    choicesEl.innerHTML = q.choices.map(function(p, i) {
      return '<button class="choice-btn" onclick="selectAnswer(' + i + ')" data-index="' + i + '">' +
        '<span class="choice-letter">' + letters[i] + '</span>' +
        '<span class="choice-text">' +
          '<span class="name-ru">' + p.ru + '</span>' +
          '<span class="name-en">' + p.en + '</span>' +
        '</span>' +
      '</button>';
    }).join("");
  }

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("btn-next").classList.add("hidden");
  var oldTimer = document.querySelector(".auto-timer");
  if (oldTimer) oldTimer.remove();
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  ensureAudio();

  /* Hide cancel button once answered */
  var cancelBtn = document.getElementById("btn-cancel");
  if (cancelBtn) cancelBtn.classList.add("hidden");

  var q = questions[currentQuestion];
  var selected = q.choices[index];
  var isCorrect = selected.id === q.correct.id;

  if (q.type === "image-pick") {
    var imgBtns = document.querySelectorAll(".image-choice-btn");
    imgBtns.forEach(function(btn, i) {
      btn.classList.add("disabled");
      if (q.choices[i].id === q.correct.id) btn.classList.add("correct");
      if (i === index && !isCorrect) { btn.classList.add("wrong"); btn.classList.add("shake"); }
    });
  } else {
    var buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(function(btn, i) {
      btn.classList.add("disabled");
      if (q.choices[i].id === q.correct.id) btn.classList.add("correct");
      if (i === index && !isCorrect) { btn.classList.add("wrong"); btn.classList.add("shake"); }
    });
  }

  var feedback = document.getElementById("feedback");
  feedback.classList.remove("hidden", "correct", "wrong");
  if (isCorrect) {
    score++;
    feedback.classList.add("correct");
    feedback.textContent = "Правильно! 🎉";
    playCorrectSound();
  } else {
    feedback.classList.add("wrong");
    feedback.textContent = "Неправильно! Это " + q.correct.ru + " (" + q.correct.en + ")";
    playWrongSound();
  }

  document.getElementById("score-display").textContent = "Счёт: " + score;
  var nextBtn = document.getElementById("btn-next");
  nextBtn.textContent = currentQuestion < TOTAL_QUESTIONS - 1 ? "Следующий вопрос" : "Показать результат";
  nextBtn.classList.remove("hidden");

  var timerBar = document.createElement("div");
  timerBar.className = "auto-timer";
  timerBar.innerHTML = '<div class="auto-timer-fill"></div>';
  nextBtn.parentNode.insertBefore(timerBar, nextBtn.nextSibling);
  startAutoAdvance();
}

function nextQuestion() {
  ensureAudio();
  playClickSound();
  clearAutoAdvance();
  var timerBar = document.querySelector(".auto-timer");
  if (timerBar) timerBar.remove();
  currentQuestion++;
  if (currentQuestion >= TOTAL_QUESTIONS) { showResultScreen(); } else { renderQuestion(); }
}

/* ========== RESULTS ========== */

function getResultEmoji(s) {
  if (s === TOTAL_QUESTIONS) return "🏆";
  if (s >= 8) return "⭐";
  if (s >= 6) return "👍";
  if (s >= 4) return "🙂";
  return "💪";
}
function getResultMessage(s) {
  if (s === TOTAL_QUESTIONS) return "Идеальный результат! Ты настоящий мастер покемонов!";
  if (s >= 8) return "Отлично! Ты очень хорошо знаешь покемонов!";
  if (s >= 6) return "Хороший результат! Продолжай тренироваться!";
  if (s >= 4) return "Неплохо! Ещё немного практики и будет отлично!";
  return "Не сдавайся! Попробуй ещё раз!";
}

function getDiffLabel(diff) {
  if (diff === "easy") return "⭐ Простой";
  if (diff === "hard") return "🔥 Сложный";
  return "🏅 1 Поколение";
}

async function showResultScreen() {
  gameElapsedSec = Math.round((Date.now() - gameStartTime) / 1000);
  if (playerName) {
    await postScore(playerName, score, TOTAL_QUESTIONS, difficulty, gameElapsedSec);
  }
  var diffLabel = getDiffLabel(difficulty);
  var nameDisplay = playerName ? escapeHtml(playerName) : "Аноним";
  var savedNote = playerName ? "" : '<div style="font-size:13px;color:var(--color-text-faint);margin-top:8px;">Результат не сохранён (имя не указано)</div>';

  document.getElementById("result-summary").innerHTML =
    '<div style="font-size:56px;margin-bottom:8px;">' + getResultEmoji(score) + '</div>' +
    '<div style="font-size:16px;color:var(--color-text-muted);font-weight:700;margin-bottom:2px;">' + nameDisplay + '</div>' +
    '<div style="font-size:13px;color:var(--color-text-faint);font-weight:600;margin-bottom:8px;">' + diffLabel + '</div>' +
    '<div style="font-size:28px;font-weight:900;color:var(--color-accent);">' + score + ' / ' + TOTAL_QUESTIONS + '</div>' +
    '<div style="font-size:15px;color:var(--color-text-muted);font-weight:600;margin-top:4px;">⏱ ' + formatTime(gameElapsedSec) + '</div>' +
    '<div style="font-size:15px;color:var(--color-text-muted);font-weight:600;margin-top:4px;">' + getResultMessage(score) + '</div>' +
    savedNote;
  showScreen("screen-result");
}

/* ========== LEADERBOARD ========== */

function switchRecordsTab(tab) {
  recordsTabActive = tab;
  updateRecordsTabs();
  loadRecords(tab);
  ensureAudio();
  playClickSound();
}

function updateRecordsTabs() {
  document.querySelectorAll(".records-tab").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.tab === recordsTabActive);
  });
}

async function loadRecords(diff) {
  var tbody = document.getElementById("records-body");
  var noRecords = document.getElementById("no-records");
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--color-text-muted)">Загрузка...</td></tr>';
  noRecords.classList.add("hidden");

  var data = await fetchLeaderboard(diff || recordsTabActive);
  if (data.length === 0) { tbody.innerHTML = ""; noRecords.classList.remove("hidden"); return; }

  noRecords.classList.add("hidden");
  tbody.innerHTML = data.map(function(entry, i) {
    var rank = i + 1;
    var rankClass = "rank-cell";
    if (rank === 1) rankClass += " gold";
    else if (rank === 2) rankClass += " silver";
    else if (rank === 3) rankClass += " bronze";
    var medalPrefix = "";
    if (rank === 1) medalPrefix = "🥇 ";
    else if (rank === 2) medalPrefix = "🥈 ";
    else if (rank === 3) medalPrefix = "🥉 ";
    var dateStr = "";
    if (entry.timestamp && entry.timestamp.toDate) {
      dateStr = entry.timestamp.toDate().toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
    }
    var totalDisplay = entry.total || TOTAL_QUESTIONS;
    var timeDisplay = (typeof entry.timeSec === "number") ? formatTime(entry.timeSec) : "—";
    return '<tr>' +
      '<td class="' + rankClass + '">' + medalPrefix + rank + '</td>' +
      '<td>' + escapeHtml(entry.name) + '</td>' +
      '<td class="score-cell">' + entry.score + '/' + totalDisplay + '</td>' +
      '<td class="time-cell">' + timeDisplay + '</td>' +
      '<td class="date-cell">' + dateStr + '</td>' +
    '</tr>';
  }).join("");
}

/* ========== KEYBOARD ========== */

document.addEventListener("keydown", function(e) {
  var screen = document.querySelector(".screen.active");
  if (!screen) return;
  if (screen.id === "screen-quiz" && !answered) {
    var numChoices = getNumChoices();
    var q = questions[currentQuestion];
    var maxKeys = (q && q.type === "image-pick") ? 4 : numChoices;
    var keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4 };
    if (keyMap[e.key] !== undefined && keyMap[e.key] < maxKeys) selectAnswer(keyMap[e.key]);
  }
  if (screen.id === "screen-quiz" && answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); nextQuestion(); }
  if (screen.id === "screen-title" && e.key === "Enter") startGame();
});

document.addEventListener("click", function() { ensureAudio(); }, { once: true });

/* ========== SERVICE WORKER ========== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("./sw.js").then(function() {
      /* SW registered */
    }).catch(function() {
      /* SW registration failed */
    });
  });
}
