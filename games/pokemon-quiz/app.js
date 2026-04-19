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

/* ========== TYPE DATA (for "types" mode) ========== */

/* POKEMON_TYPES[id] = [type1, type2?] — Gen 1 canonical types (modern typing, includes Gen 6 retcons: Fairy for Clefairy etc., Steel for Magnemite/Magneton) */
var POKEMON_TYPES = {
  1: ["grass", "poison"], 2: ["grass", "poison"], 3: ["grass", "poison"],
  4: ["fire"], 5: ["fire"], 6: ["fire", "flying"],
  7: ["water"], 8: ["water"], 9: ["water"],
  10: ["bug"], 11: ["bug"], 12: ["bug", "flying"],
  13: ["bug", "poison"], 14: ["bug", "poison"], 15: ["bug", "poison"],
  16: ["normal", "flying"], 17: ["normal", "flying"], 18: ["normal", "flying"],
  19: ["normal"], 20: ["normal"], 21: ["normal", "flying"], 22: ["normal", "flying"],
  23: ["poison"], 24: ["poison"], 25: ["electric"], 26: ["electric"],
  27: ["ground"], 28: ["ground"], 29: ["poison"], 30: ["poison"],
  31: ["poison", "ground"], 32: ["poison"], 33: ["poison"], 34: ["poison", "ground"],
  35: ["fairy"], 36: ["fairy"], 37: ["fire"], 38: ["fire"],
  39: ["normal", "fairy"], 40: ["normal", "fairy"],
  41: ["poison", "flying"], 42: ["poison", "flying"],
  43: ["grass", "poison"], 44: ["grass", "poison"], 45: ["grass", "poison"],
  46: ["bug", "grass"], 47: ["bug", "grass"], 48: ["bug", "poison"], 49: ["bug", "poison"],
  50: ["ground"], 51: ["ground"], 52: ["normal"], 53: ["normal"],
  54: ["water"], 55: ["water"], 56: ["fighting"], 57: ["fighting"],
  58: ["fire"], 59: ["fire"], 60: ["water"], 61: ["water"], 62: ["water", "fighting"],
  63: ["psychic"], 64: ["psychic"], 65: ["psychic"],
  66: ["fighting"], 67: ["fighting"], 68: ["fighting"],
  69: ["grass", "poison"], 70: ["grass", "poison"], 71: ["grass", "poison"],
  72: ["water", "poison"], 73: ["water", "poison"],
  74: ["rock", "ground"], 75: ["rock", "ground"], 76: ["rock", "ground"],
  77: ["fire"], 78: ["fire"], 79: ["water", "psychic"], 80: ["water", "psychic"],
  81: ["electric", "steel"], 82: ["electric", "steel"],
  83: ["normal", "flying"], 84: ["normal", "flying"], 85: ["normal", "flying"],
  86: ["water"], 87: ["water", "ice"], 88: ["poison"], 89: ["poison"],
  90: ["water"], 91: ["water", "ice"],
  92: ["ghost", "poison"], 93: ["ghost", "poison"], 94: ["ghost", "poison"],
  95: ["rock", "ground"], 96: ["psychic"], 97: ["psychic"],
  98: ["water"], 99: ["water"], 100: ["electric"], 101: ["electric"],
  102: ["grass", "psychic"], 103: ["grass", "psychic"],
  104: ["ground"], 105: ["ground"], 106: ["fighting"], 107: ["fighting"],
  108: ["normal"], 109: ["poison"], 110: ["poison"],
  111: ["ground", "rock"], 112: ["ground", "rock"],
  113: ["normal"], 114: ["grass"], 115: ["normal"],
  116: ["water"], 117: ["water"], 118: ["water"], 119: ["water"], 120: ["water"],
  121: ["water", "psychic"], 122: ["psychic", "fairy"],
  123: ["bug", "flying"], 124: ["ice", "psychic"],
  125: ["electric"], 126: ["fire"], 127: ["bug"], 128: ["normal"],
  129: ["water"], 130: ["water", "flying"], 131: ["water", "ice"],
  132: ["normal"], 133: ["normal"], 134: ["water"], 135: ["electric"], 136: ["fire"],
  137: ["normal"], 138: ["rock", "water"], 139: ["rock", "water"],
  140: ["rock", "water"], 141: ["rock", "water"], 142: ["rock", "flying"],
  143: ["normal"], 144: ["ice", "flying"], 145: ["electric", "flying"], 146: ["fire", "flying"],
  147: ["dragon"], 148: ["dragon"], 149: ["dragon", "flying"],
  150: ["psychic"], 151: ["psychic"]
};

/* Russian type names — plural (for "Выбери всех огненных") */
var TYPE_RU_PLURAL = {
  normal: "обычных", fire: "огненных", water: "водных", electric: "электрических",
  grass: "травяных", ice: "ледяных", fighting: "боевых", poison: "ядовитых",
  ground: "земляных", flying: "летающих", psychic: "психических", bug: "насекомых",
  rock: "каменных", ghost: "призрачных", dragon: "драконьих", dark: "тёмных",
  steel: "стальных", fairy: "волшебных"
};

/* Russian type names — masculine singular (for "Против огненного покемона") */
var TYPE_RU_ADJ = {
  normal: "обычный", fire: "огненный", water: "водный", electric: "электрический",
  grass: "травяной", ice: "ледяной", fighting: "боевой", poison: "ядовитый",
  ground: "земляной", flying: "летающий", psychic: "психический", bug: "насекомое",
  rock: "каменный", ghost: "призрачный", dragon: "драконий", dark: "тёмный",
  steel: "стальной", fairy: "волшебный"
};

/* Russian type names — noun (for type-chip labels) */
var TYPE_RU_NOUN = {
  normal: "Обычный", fire: "Огонь", water: "Вода", electric: "Электричество",
  grass: "Трава", ice: "Лёд", fighting: "Боец", poison: "Яд",
  ground: "Земля", flying: "Полёт", psychic: "Психика", bug: "Насекомое",
  rock: "Камень", ghost: "Призрак", dragon: "Дракон", dark: "Тьма",
  steel: "Сталь", fairy: "Волшебство"
};

var TYPE_EMOJI = {
  normal: "⚪", fire: "🔥", water: "💧", electric: "⚡",
  grass: "🌿", ice: "❄️", fighting: "👊", poison: "☠️",
  ground: "🌍", flying: "🪽", psychic: "🔮", bug: "🐛",
  rock: "🪨", ghost: "👻", dragon: "🐲", dark: "🌑",
  steel: "⚙️", fairy: "✨"
};

var TYPE_COLOR = {
  normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
  grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
  ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
  rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
  steel: "#B8B8D0", fairy: "#EE99AC"
};

/* Type effectiveness (Gen 6+ canonical). TYPE_CHART[attacker][defender] = multiplier (default 1). Only non-1 values stored. */
var TYPE_CHART = {
  normal:   { rock: 0.5, ghost: 0, steel: 0.5 },
  fire:     { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water:    { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass:    { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  ice:      { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison:   { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground:   { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying:   { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic:  { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug:      { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock:     { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost:    { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon:   { dragon: 2, steel: 0.5, fairy: 0 },
  dark:     { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel:    { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy:    { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
};

function effectiveness(attackerType, defenderTypes) {
  var mult = 1;
  var row = TYPE_CHART[attackerType] || {};
  for (var i = 0; i < defenderTypes.length; i++) {
    var v = row[defenderTypes[i]];
    mult *= (typeof v === "number") ? v : 1;
  }
  return mult;
}

/* Entries: { id, en, ru, types:[...] } — joins POKEMON_GEN1 with POKEMON_TYPES for convenience */
function buildTypedPool() {
  return POKEMON_GEN1.map(function(p) {
    return { id: p.id, en: p.en, ru: p.ru, types: POKEMON_TYPES[p.id] || [] };
  }).filter(function(p) { return p.types.length > 0; });
}
var POKEMON_TYPED = buildTypedPool();

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
  if (difficulty === "types") return POKEMON_GEN1;
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
  if (difficulty === "types") {
    questions = generateTypesQuestions();
    showScreen("screen-types");
    renderTypesQuestion();
  } else {
    questions = generateQuestions();
    showScreen("screen-quiz");
    renderQuestion();
  }
}

/* ========== TYPES MODE: GENERATION ========== */

/* Available types in Gen 1 pool (after retcons: 17 types, no Dark) */
function gen1AvailableTypes() {
  var seen = {};
  POKEMON_TYPED.forEach(function(p) {
    p.types.forEach(function(t) { seen[t] = true; });
  });
  return Object.keys(seen);
}

function monoTypePool() {
  return POKEMON_TYPED.filter(function(p) { return p.types.length === 1; });
}

function pokemonHasType(p, type) {
  return p.types.indexOf(type) !== -1;
}

function pokemonHasAnyType(p, types) {
  for (var i = 0; i < types.length; i++) {
    if (p.types.indexOf(types[i]) !== -1) return true;
  }
  return false;
}

/* Pick N random elements (non-repeating) */
function pickN(arr, n) {
  return shuffle(arr).slice(0, n);
}

/* ---- Bucket A: FILTER (6 tiles, multi-select) ---- */
function makeFilterQuestion(subtype) {
  /* subtype: "positive" | "negative" | "compound" */
  var availableTypes = gen1AvailableTypes();
  var tries = 0;
  while (tries++ < 40) {
    var q;
    if (subtype === "positive") {
      var t = pickN(availableTypes, 1)[0];
      q = {
        bucket: "filter",
        predicate: function(p) { return pokemonHasType(p, t); },
        questionText: "Выбери всех <b>" + TYPE_RU_PLURAL[t] + "</b> покемонов",
        answerExplain: "<b>" + TYPE_EMOJI[t] + " " + TYPE_RU_NOUN[t] + "</b>",
        types: [t], mode: "positive"
      };
    } else if (subtype === "negative") {
      var t2 = pickN(availableTypes, 1)[0];
      q = {
        bucket: "filter",
        predicate: function(p) { return !pokemonHasType(p, t2); },
        questionText: "Выбери всех, кто <b>НЕ " + TYPE_RU_PLURAL[t2] + "</b>",
        answerExplain: "НЕ <b>" + TYPE_EMOJI[t2] + " " + TYPE_RU_NOUN[t2] + "</b>",
        types: [t2], mode: "negative"
      };
    } else {
      var tt = pickN(availableTypes, 2);
      q = {
        bucket: "filter",
        predicate: function(p) { return !pokemonHasAnyType(p, tt); },
        questionText: "Выбери всех, кто <b>НЕ " + TYPE_RU_PLURAL[tt[0]] + "</b> и <b>НЕ " + TYPE_RU_PLURAL[tt[1]] + "</b>",
        answerExplain: "НЕ <b>" + TYPE_EMOJI[tt[0]] + " " + TYPE_RU_NOUN[tt[0]] + "</b> и НЕ <b>" + TYPE_EMOJI[tt[1]] + " " + TYPE_RU_NOUN[tt[1]] + "</b>",
        types: tt, mode: "compound"
      };
    }

    /* Build a 6-tile grid with 2-4 matches (so it's not trivial / not impossible) */
    var matches = POKEMON_TYPED.filter(q.predicate);
    var nonMatches = POKEMON_TYPED.filter(function(p) { return !q.predicate(p); });
    if (matches.length < 2 || nonMatches.length < 2) continue;

    var numMatch = 2 + Math.floor(Math.random() * 3); /* 2, 3 or 4 */
    numMatch = Math.min(numMatch, matches.length, 4);
    var numNon = 6 - numMatch;
    if (numNon > nonMatches.length) continue;

    var chosenMatches = pickN(matches, numMatch);
    var chosenNon = pickN(nonMatches, numNon);
    q.tiles = shuffle(chosenMatches.concat(chosenNon));
    return q;
  }
  return null;
}

/* ---- Bucket B: MATCH TYPE (show 1, pick 1 of same type from 6) ---- */
function makeMatchQuestion() {
  var tries = 0;
  while (tries++ < 40) {
    var target = POKEMON_TYPED[Math.floor(Math.random() * POKEMON_TYPED.length)];
    var targetTypes = target.types;
    var sameTypePool = POKEMON_TYPED.filter(function(p) {
      return p.id !== target.id && pokemonHasAnyType(p, targetTypes);
    });
    var differentPool = POKEMON_TYPED.filter(function(p) {
      return p.id !== target.id && !pokemonHasAnyType(p, targetTypes);
    });
    if (sameTypePool.length < 1 || differentPool.length < 5) continue;

    var correct = pickN(sameTypePool, 1)[0];
    var wrong = pickN(differentPool, 5);
    var choices = shuffle([correct].concat(wrong));

    var sharedType = null;
    for (var i = 0; i < targetTypes.length; i++) {
      if (correct.types.indexOf(targetTypes[i]) !== -1) { sharedType = targetTypes[i]; break; }
    }

    return {
      bucket: "match",
      target: target,
      correct: correct,
      choices: choices,
      questionText: "Какой покемон <b>того же типа</b>, что и " + target.ru + "?",
      answerExplain: target.ru + " и " + correct.ru + " — оба <b>" + TYPE_EMOJI[sharedType] + " " + TYPE_RU_PLURAL[sharedType] + "</b>"
    };
  }
  return null;
}

/* ---- Bucket C: ODD ONE OUT (4 tiles, 3 share a type, 1 doesn't) ---- */
function makeOddQuestion() {
  var availableTypes = gen1AvailableTypes();
  var tries = 0;
  while (tries++ < 40) {
    var t = pickN(availableTypes, 1)[0];
    var hasType = POKEMON_TYPED.filter(function(p) { return pokemonHasType(p, t); });
    var noType = POKEMON_TYPED.filter(function(p) { return !pokemonHasType(p, t); });
    if (hasType.length < 3 || noType.length < 1) continue;

    var three = pickN(hasType, 3);
    var odd = pickN(noType, 1)[0];
    var tiles = shuffle(three.concat([odd]));
    return {
      bucket: "odd",
      oddId: odd.id,
      sharedType: t,
      tiles: tiles,
      questionText: "Кто здесь <b>лишний</b>?",
      answerExplain: "Трое — <b>" + TYPE_EMOJI[t] + " " + TYPE_RU_PLURAL[t] + "</b>, а " + odd.ru + " — нет"
    };
  }
  return null;
}

/* ---- Bucket D: BATTLE (show mono-type defender, pick best mono-type attacker from 4) ---- */
function makeBattleQuestion() {
  var mono = monoTypePool();
  var tries = 0;
  while (tries++ < 40) {
    var defender = mono[Math.floor(Math.random() * mono.length)];
    var defType = defender.types[0];

    /* Find mono-type attackers that are super-effective (2x) vs defender */
    var superEff = mono.filter(function(p) {
      return p.id !== defender.id && effectiveness(p.types[0], [defType]) > 1;
    });
    /* And attackers that are neutral/weak (≤ 1x) */
    var weak = mono.filter(function(p) {
      return p.id !== defender.id && effectiveness(p.types[0], [defType]) <= 1;
    });
    if (superEff.length < 1 || weak.length < 3) continue;

    var correct = pickN(superEff, 1)[0];
    var wrong = pickN(weak, 3);
    var choices = shuffle([correct].concat(wrong));
    return {
      bucket: "battle",
      defender: defender,
      correct: correct,
      choices: choices,
      questionText: "Кого лучше взять в бой против <b>" + defender.ru + "</b> (" + TYPE_EMOJI[defType] + " " + TYPE_RU_NOUN[defType] + ")?",
      answerExplain: "<b>" + TYPE_EMOJI[correct.types[0]] + " " + TYPE_RU_NOUN[correct.types[0]] + "</b> сильнее <b>" + TYPE_EMOJI[defType] + " " + TYPE_RU_NOUN[defType] + "</b> — " + correct.ru + " одолеет"
    };
  }
  return null;
}

function generateTypesQuestions() {
  /* Fixed lesson plan: escalating difficulty, mix of all 4 buckets */
  var plan = [
    { bucket: "match", args: [] },
    { bucket: "match", args: [] },
    { bucket: "odd", args: [] },
    { bucket: "filter", args: ["positive"] },
    { bucket: "filter", args: ["positive"] },
    { bucket: "battle", args: [] },
    { bucket: "filter", args: ["negative"] },
    { bucket: "battle", args: [] },
    { bucket: "filter", args: ["compound"] },
    { bucket: "battle", args: [] }
  ];
  var out = [];
  for (var i = 0; i < plan.length; i++) {
    var step = plan[i];
    var q = null;
    for (var retry = 0; retry < 5 && !q; retry++) {
      if (step.bucket === "filter") q = makeFilterQuestion(step.args[0]);
      else if (step.bucket === "match") q = makeMatchQuestion();
      else if (step.bucket === "odd") q = makeOddQuestion();
      else if (step.bucket === "battle") q = makeBattleQuestion();
    }
    if (!q) {
      /* Ultra-fallback: positive filter is easiest to satisfy */
      q = makeFilterQuestion("positive");
    }
    out.push(q);
  }
  return out;
}

/* ========== TYPES MODE: RENDER ========== */

var typesSelected = {}; /* for filter bucket: { id: true } */

function renderTypesQuestion() {
  var q = questions[currentQuestion];
  answered = false;
  typesSelected = {};
  clearAutoAdvance();

  document.getElementById("types-counter").textContent = "Вопрос " + (currentQuestion + 1) + " / " + TOTAL_QUESTIONS;
  document.getElementById("types-score").textContent = "Счёт: " + score;
  document.getElementById("types-progress-fill").style.width = (((currentQuestion + 1) / TOTAL_QUESTIONS) * 100) + "%";

  var cancelBtn = document.getElementById("types-btn-cancel");
  if (cancelBtn) {
    cancelBtn.classList.toggle("hidden", currentQuestion !== 0);
  }

  var target = document.getElementById("types-target");
  var grid = document.getElementById("types-grid");
  var qLabel = document.getElementById("types-question-label");
  var submit = document.getElementById("types-btn-submit");
  var next = document.getElementById("types-btn-next");
  var feedback = document.getElementById("types-feedback");

  feedback.classList.add("hidden");
  submit.classList.add("hidden");
  next.classList.add("hidden");

  qLabel.innerHTML = q.questionText;

  if (q.bucket === "filter") {
    target.classList.add("hidden");
    target.innerHTML = "";
    grid.className = "types-grid grid-3x2";
    grid.innerHTML = q.tiles.map(function(p, i) {
      return '<button class="types-tile" data-id="' + p.id + '" data-index="' + i + '" onclick="toggleTypesTile(' + i + ')">' +
        '<img src="' + getPokemonImageUrl(p.id) + '" class="types-tile-img" alt="' + p.ru + '" onerror="this.src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png\'">' +
        '<span class="types-tile-name">' + p.ru + '</span>' +
      '</button>';
    }).join("");
    submit.classList.remove("hidden");
    submit.textContent = "Готово";
  } else if (q.bucket === "match") {
    target.classList.remove("hidden");
    target.innerHTML =
      '<div class="types-target-label">Подбери пару для:</div>' +
      '<div class="types-target-card">' +
        '<img src="' + getPokemonImageUrl(q.target.id) + '" class="types-target-img" alt="' + q.target.ru + '">' +
        '<div class="types-target-name">' + q.target.ru + '</div>' +
        renderTypeChips(q.target.types) +
      '</div>';
    grid.className = "types-grid grid-3x2";
    grid.innerHTML = q.choices.map(function(p, i) {
      return '<button class="types-tile" data-id="' + p.id + '" data-index="' + i + '" onclick="pickTypesSingle(' + i + ')">' +
        '<img src="' + getPokemonImageUrl(p.id) + '" class="types-tile-img" alt="' + p.ru + '" onerror="this.src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png\'">' +
        '<span class="types-tile-name">' + p.ru + '</span>' +
      '</button>';
    }).join("");
  } else if (q.bucket === "odd") {
    target.classList.add("hidden");
    target.innerHTML = "";
    grid.className = "types-grid grid-2x2";
    grid.innerHTML = q.tiles.map(function(p, i) {
      return '<button class="types-tile" data-id="' + p.id + '" data-index="' + i + '" onclick="pickTypesSingle(' + i + ')">' +
        '<img src="' + getPokemonImageUrl(p.id) + '" class="types-tile-img" alt="' + p.ru + '" onerror="this.src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png\'">' +
        '<span class="types-tile-name">' + p.ru + '</span>' +
      '</button>';
    }).join("");
  } else if (q.bucket === "battle") {
    target.classList.remove("hidden");
    target.innerHTML =
      '<div class="types-target-label">Против кого бой:</div>' +
      '<div class="types-target-card">' +
        '<img src="' + getPokemonImageUrl(q.defender.id) + '" class="types-target-img" alt="' + q.defender.ru + '">' +
        '<div class="types-target-name">' + q.defender.ru + '</div>' +
        renderTypeChips(q.defender.types) +
      '</div>';
    grid.className = "types-grid grid-2x2";
    grid.innerHTML = q.choices.map(function(p, i) {
      return '<button class="types-tile" data-id="' + p.id + '" data-index="' + i + '" onclick="pickTypesSingle(' + i + ')">' +
        '<img src="' + getPokemonImageUrl(p.id) + '" class="types-tile-img" alt="' + p.ru + '" onerror="this.src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png\'">' +
        '<span class="types-tile-name">' + p.ru + '</span>' +
      '</button>';
    }).join("");
  }
}

function renderTypeChips(types) {
  return '<div class="type-chips">' + types.map(function(t) {
    return '<span class="type-chip" style="background:' + TYPE_COLOR[t] + '">' + TYPE_EMOJI[t] + " " + TYPE_RU_NOUN[t] + '</span>';
  }).join("") + '</div>';
}

function toggleTypesTile(index) {
  if (answered) return;
  ensureAudio();
  playClickSound();
  var tile = document.querySelector('.types-tile[data-index="' + index + '"]');
  if (!tile) return;
  var id = parseInt(tile.getAttribute("data-id"), 10);
  if (typesSelected[id]) {
    delete typesSelected[id];
    tile.classList.remove("selected");
  } else {
    typesSelected[id] = true;
    tile.classList.add("selected");
  }
}

function pickTypesSingle(index) {
  if (answered) return;
  answered = true;
  ensureAudio();
  var q = questions[currentQuestion];
  var picked = q.choices ? q.choices[index] : q.tiles[index];
  var correctId;
  if (q.bucket === "match" || q.bucket === "battle") correctId = q.correct.id;
  else if (q.bucket === "odd") correctId = q.oddId;
  var isCorrect = picked.id === correctId;

  var tiles = document.querySelectorAll(".types-tile");
  tiles.forEach(function(t) {
    var tid = parseInt(t.getAttribute("data-id"), 10);
    t.classList.add("disabled");
    if (tid === correctId) t.classList.add("correct");
    if (tid === picked.id && !isCorrect) t.classList.add("wrong");
  });

  showTypesFeedback(isCorrect, q);
  if (isCorrect) score++;
  document.getElementById("types-score").textContent = "Счёт: " + score;
  document.getElementById("types-btn-cancel").classList.add("hidden");

  var next = document.getElementById("types-btn-next");
  next.textContent = currentQuestion < TOTAL_QUESTIONS - 1 ? "Следующий вопрос" : "Показать результат";
  next.classList.remove("hidden");
}

function submitTypesAnswer() {
  if (answered) return;
  answered = true;
  ensureAudio();
  playClickSound();
  var q = questions[currentQuestion];

  var correctIds = {};
  q.tiles.forEach(function(p) {
    if (q.predicate(p)) correctIds[p.id] = true;
  });

  /* Evaluate: binary — only full match counts */
  var isCorrect = true;
  q.tiles.forEach(function(p) {
    var selected = !!typesSelected[p.id];
    var shouldBe = !!correctIds[p.id];
    if (selected !== shouldBe) isCorrect = false;
  });

  /* Mark tiles */
  var tiles = document.querySelectorAll(".types-tile");
  tiles.forEach(function(t) {
    var tid = parseInt(t.getAttribute("data-id"), 10);
    t.classList.add("disabled");
    var shouldBe = !!correctIds[tid];
    var selected = !!typesSelected[tid];
    t.classList.remove("selected");
    if (shouldBe) t.classList.add("correct");
    if (selected && !shouldBe) t.classList.add("wrong");
    if (!selected && shouldBe) t.classList.add("missed");
  });

  if (isCorrect) score++;
  document.getElementById("types-score").textContent = "Счёт: " + score;

  showTypesFeedback(isCorrect, q);
  document.getElementById("types-btn-submit").classList.add("hidden");
  document.getElementById("types-btn-cancel").classList.add("hidden");

  var next = document.getElementById("types-btn-next");
  next.textContent = currentQuestion < TOTAL_QUESTIONS - 1 ? "Следующий вопрос" : "Показать результат";
  next.classList.remove("hidden");
}

function showTypesFeedback(isCorrect, q) {
  var feedback = document.getElementById("types-feedback");
  feedback.classList.remove("hidden", "correct", "wrong");
  if (isCorrect) {
    feedback.classList.add("correct");
    feedback.innerHTML = "Правильно! 🎉 " + q.answerExplain;
    playCorrectSound();
  } else {
    feedback.classList.add("wrong");
    feedback.innerHTML = "Не совсем. Ответ: " + q.answerExplain;
    playWrongSound();
  }
}

function nextTypesQuestion() {
  ensureAudio();
  playClickSound();
  clearAutoAdvance();
  currentQuestion++;
  if (currentQuestion >= TOTAL_QUESTIONS) {
    showResultScreen();
  } else {
    renderTypesQuestion();
  }
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
  if (diff === "types") return "🎯 Мастер типов";
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
