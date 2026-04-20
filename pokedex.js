/* Pokedex: 151 Gen 1 Pokemon encyclopedia — data + rendering */

var POKEDEX_DATA = [
  {id:1, en:"Bulbasaur", ru:"Бульбазавр", types:["grass","poison"], evolvesTo:[2]},
  {id:2, en:"Ivysaur", ru:"Ивизавр", types:["grass","poison"], evolvesFrom:1, evolvesTo:[3]},
  {id:3, en:"Venusaur", ru:"Венузавр", types:["grass","poison"], evolvesFrom:2},
  {id:4, en:"Charmander", ru:"Чармандер", types:["fire"], evolvesTo:[5]},
  {id:5, en:"Charmeleon", ru:"Чармелеон", types:["fire"], evolvesFrom:4, evolvesTo:[6]},
  {id:6, en:"Charizard", ru:"Чаризард", types:["fire","flying"], evolvesFrom:5},
  {id:7, en:"Squirtle", ru:"Сквиртл", types:["water"], evolvesTo:[8]},
  {id:8, en:"Wartortle", ru:"Вартортл", types:["water"], evolvesFrom:7, evolvesTo:[9]},
  {id:9, en:"Blastoise", ru:"Бластойз", types:["water"], evolvesFrom:8},
  {id:10, en:"Caterpie", ru:"Катерпи", types:["bug"], evolvesTo:[11]},
  {id:11, en:"Metapod", ru:"Метапод", types:["bug"], evolvesFrom:10, evolvesTo:[12]},
  {id:12, en:"Butterfree", ru:"Баттерфри", types:["bug","flying"], evolvesFrom:11},
  {id:13, en:"Weedle", ru:"Видл", types:["bug","poison"], evolvesTo:[14]},
  {id:14, en:"Kakuna", ru:"Какуна", types:["bug","poison"], evolvesFrom:13, evolvesTo:[15]},
  {id:15, en:"Beedrill", ru:"Бидрилл", types:["bug","poison"], evolvesFrom:14},
  {id:16, en:"Pidgey", ru:"Пиджи", types:["normal","flying"], evolvesTo:[17]},
  {id:17, en:"Pidgeotto", ru:"Пиджеотто", types:["normal","flying"], evolvesFrom:16, evolvesTo:[18]},
  {id:18, en:"Pidgeot", ru:"Пиджеот", types:["normal","flying"], evolvesFrom:17},
  {id:19, en:"Rattata", ru:"Раттата", types:["normal"], evolvesTo:[20]},
  {id:20, en:"Raticate", ru:"Ратикейт", types:["normal"], evolvesFrom:19},
  {id:21, en:"Spearow", ru:"Спироу", types:["normal","flying"], evolvesTo:[22]},
  {id:22, en:"Fearow", ru:"Фироу", types:["normal","flying"], evolvesFrom:21},
  {id:23, en:"Ekans", ru:"Эканс", types:["poison"], evolvesTo:[24]},
  {id:24, en:"Arbok", ru:"Арбок", types:["poison"], evolvesFrom:23},
  {id:25, en:"Pikachu", ru:"Пикачу", types:["electric"], evolvesTo:[26]},
  {id:26, en:"Raichu", ru:"Райчу", types:["electric"], evolvesFrom:25},
  {id:27, en:"Sandshrew", ru:"Сэндшру", types:["ground"], evolvesTo:[28]},
  {id:28, en:"Sandslash", ru:"Сэндслэш", types:["ground"], evolvesFrom:27},
  {id:29, en:"Nidoran♀", ru:"Нидоран♀", types:["poison"], evolvesTo:[30]},
  {id:30, en:"Nidorina", ru:"Нидорина", types:["poison"], evolvesFrom:29, evolvesTo:[31]},
  {id:31, en:"Nidoqueen", ru:"Нидоквин", types:["poison","ground"], evolvesFrom:30},
  {id:32, en:"Nidoran♂", ru:"Нидоран♂", types:["poison"], evolvesTo:[33]},
  {id:33, en:"Nidorino", ru:"Нидорино", types:["poison"], evolvesFrom:32, evolvesTo:[34]},
  {id:34, en:"Nidoking", ru:"Нидокинг", types:["poison","ground"], evolvesFrom:33},
  {id:35, en:"Clefairy", ru:"Клефэйри", types:["fairy"], evolvesTo:[36]},
  {id:36, en:"Clefable", ru:"Клефейбл", types:["fairy"], evolvesFrom:35},
  {id:37, en:"Vulpix", ru:"Вульпикс", types:["fire"], evolvesTo:[38]},
  {id:38, en:"Ninetales", ru:"Найнтейлс", types:["fire"], evolvesFrom:37},
  {id:39, en:"Jigglypuff", ru:"Джигглипафф", types:["normal","fairy"], evolvesTo:[40]},
  {id:40, en:"Wigglytuff", ru:"Вигглитафф", types:["normal","fairy"], evolvesFrom:39},
  {id:41, en:"Zubat", ru:"Зубат", types:["poison","flying"], evolvesTo:[42]},
  {id:42, en:"Golbat", ru:"Голбат", types:["poison","flying"], evolvesFrom:41},
  {id:43, en:"Oddish", ru:"Оддиш", types:["grass","poison"], evolvesTo:[44]},
  {id:44, en:"Gloom", ru:"Глум", types:["grass","poison"], evolvesFrom:43, evolvesTo:[45]},
  {id:45, en:"Vileplume", ru:"Вайлплюм", types:["grass","poison"], evolvesFrom:44},
  {id:46, en:"Paras", ru:"Парас", types:["bug","grass"], evolvesTo:[47]},
  {id:47, en:"Parasect", ru:"Парасект", types:["bug","grass"], evolvesFrom:46},
  {id:48, en:"Venonat", ru:"Веноат", types:["bug","poison"], evolvesTo:[49]},
  {id:49, en:"Venomoth", ru:"Веномот", types:["bug","poison"], evolvesFrom:48},
  {id:50, en:"Diglett", ru:"Диглетт", types:["ground"], evolvesTo:[51]},
  {id:51, en:"Dugtrio", ru:"Дагтрио", types:["ground"], evolvesFrom:50},
  {id:52, en:"Meowth", ru:"Мяут", types:["normal"], evolvesTo:[53]},
  {id:53, en:"Persian", ru:"Персиан", types:["normal"], evolvesFrom:52},
  {id:54, en:"Psyduck", ru:"Псайдак", types:["water"], evolvesTo:[55]},
  {id:55, en:"Golduck", ru:"Голдак", types:["water"], evolvesFrom:54},
  {id:56, en:"Mankey", ru:"Манки", types:["fighting"], evolvesTo:[57]},
  {id:57, en:"Primeape", ru:"Праймэйп", types:["fighting"], evolvesFrom:56},
  {id:58, en:"Growlithe", ru:"Гроулит", types:["fire"], evolvesTo:[59]},
  {id:59, en:"Arcanine", ru:"Арканайн", types:["fire"], evolvesFrom:58},
  {id:60, en:"Poliwag", ru:"Поливаг", types:["water"], evolvesTo:[61]},
  {id:61, en:"Poliwhirl", ru:"Поливирл", types:["water"], evolvesFrom:60, evolvesTo:[62]},
  {id:62, en:"Poliwrath", ru:"Поливрат", types:["water","fighting"], evolvesFrom:61},
  {id:63, en:"Abra", ru:"Абра", types:["psychic"], evolvesTo:[64]},
  {id:64, en:"Kadabra", ru:"Кадабра", types:["psychic"], evolvesFrom:63, evolvesTo:[65]},
  {id:65, en:"Alakazam", ru:"Алаказам", types:["psychic"], evolvesFrom:64},
  {id:66, en:"Machop", ru:"Мачоп", types:["fighting"], evolvesTo:[67]},
  {id:67, en:"Machoke", ru:"Мачок", types:["fighting"], evolvesFrom:66, evolvesTo:[68]},
  {id:68, en:"Machamp", ru:"Мачамп", types:["fighting"], evolvesFrom:67},
  {id:69, en:"Bellsprout", ru:"Беллспраут", types:["grass","poison"], evolvesTo:[70]},
  {id:70, en:"Weepinbell", ru:"Випинбелл", types:["grass","poison"], evolvesFrom:69, evolvesTo:[71]},
  {id:71, en:"Victreebel", ru:"Виктрибел", types:["grass","poison"], evolvesFrom:70},
  {id:72, en:"Tentacool", ru:"Тентакул", types:["water","poison"], evolvesTo:[73]},
  {id:73, en:"Tentacruel", ru:"Тентакруэл", types:["water","poison"], evolvesFrom:72},
  {id:74, en:"Geodude", ru:"Джеодуд", types:["rock","ground"], evolvesTo:[75]},
  {id:75, en:"Graveler", ru:"Гравелер", types:["rock","ground"], evolvesFrom:74, evolvesTo:[76]},
  {id:76, en:"Golem", ru:"Голем", types:["rock","ground"], evolvesFrom:75},
  {id:77, en:"Ponyta", ru:"Понита", types:["fire"], evolvesTo:[78]},
  {id:78, en:"Rapidash", ru:"Рапидаш", types:["fire"], evolvesFrom:77},
  {id:79, en:"Slowpoke", ru:"Слоупок", types:["water","psychic"], evolvesTo:[80]},
  {id:80, en:"Slowbro", ru:"Слоубро", types:["water","psychic"], evolvesFrom:79},
  {id:81, en:"Magnemite", ru:"Магнемайт", types:["electric","steel"], evolvesTo:[82]},
  {id:82, en:"Magneton", ru:"Магнетон", types:["electric","steel"], evolvesFrom:81},
  {id:83, en:"Farfetch'd", ru:"Фарфетчд", types:["normal","flying"]},
  {id:84, en:"Doduo", ru:"Додуо", types:["normal","flying"], evolvesTo:[85]},
  {id:85, en:"Dodrio", ru:"Додрио", types:["normal","flying"], evolvesFrom:84},
  {id:86, en:"Seel", ru:"Сил", types:["water"], evolvesTo:[87]},
  {id:87, en:"Dewgong", ru:"Дьюгонг", types:["water","ice"], evolvesFrom:86},
  {id:88, en:"Grimer", ru:"Граймер", types:["poison"], evolvesTo:[89]},
  {id:89, en:"Muk", ru:"Мак", types:["poison"], evolvesFrom:88},
  {id:90, en:"Shellder", ru:"Шеллдер", types:["water"], evolvesTo:[91]},
  {id:91, en:"Cloyster", ru:"Клойстер", types:["water","ice"], evolvesFrom:90},
  {id:92, en:"Gastly", ru:"Гастли", types:["ghost","poison"], evolvesTo:[93]},
  {id:93, en:"Haunter", ru:"Хонтер", types:["ghost","poison"], evolvesFrom:92, evolvesTo:[94]},
  {id:94, en:"Gengar", ru:"Генгар", types:["ghost","poison"], evolvesFrom:93},
  {id:95, en:"Onix", ru:"Оникс", types:["rock","ground"]},
  {id:96, en:"Drowzee", ru:"Дроузи", types:["psychic"], evolvesTo:[97]},
  {id:97, en:"Hypno", ru:"Гипно", types:["psychic"], evolvesFrom:96},
  {id:98, en:"Krabby", ru:"Крабби", types:["water"], evolvesTo:[99]},
  {id:99, en:"Kingler", ru:"Кинглер", types:["water"], evolvesFrom:98},
  {id:100, en:"Voltorb", ru:"Волторб", types:["electric"], evolvesTo:[101]},
  {id:101, en:"Electrode", ru:"Электрод", types:["electric"], evolvesFrom:100},
  {id:102, en:"Exeggcute", ru:"Экзеггкут", types:["grass","psychic"], evolvesTo:[103]},
  {id:103, en:"Exeggutor", ru:"Экзеггутор", types:["grass","psychic"], evolvesFrom:102},
  {id:104, en:"Cubone", ru:"Кьюбон", types:["ground"], evolvesTo:[105]},
  {id:105, en:"Marowak", ru:"Маровак", types:["ground"], evolvesFrom:104},
  {id:106, en:"Hitmonlee", ru:"Хитмонли", types:["fighting"]},
  {id:107, en:"Hitmonchan", ru:"Хитмончан", types:["fighting"]},
  {id:108, en:"Lickitung", ru:"Ликитанг", types:["normal"]},
  {id:109, en:"Koffing", ru:"Коффинг", types:["poison"], evolvesTo:[110]},
  {id:110, en:"Weezing", ru:"Визинг", types:["poison"], evolvesFrom:109},
  {id:111, en:"Rhyhorn", ru:"Райхорн", types:["ground","rock"], evolvesTo:[112]},
  {id:112, en:"Rhydon", ru:"Райдон", types:["ground","rock"], evolvesFrom:111},
  {id:113, en:"Chansey", ru:"Ченси", types:["normal"]},
  {id:114, en:"Tangela", ru:"Тангела", types:["grass"]},
  {id:115, en:"Kangaskhan", ru:"Кангасхан", types:["normal"]},
  {id:116, en:"Horsea", ru:"Хорси", types:["water"], evolvesTo:[117]},
  {id:117, en:"Seadra", ru:"Сидра", types:["water"], evolvesFrom:116},
  {id:118, en:"Goldeen", ru:"Голдин", types:["water"], evolvesTo:[119]},
  {id:119, en:"Seaking", ru:"Сикинг", types:["water"], evolvesFrom:118},
  {id:120, en:"Staryu", ru:"Старью", types:["water"], evolvesTo:[121]},
  {id:121, en:"Starmie", ru:"Старми", types:["water","psychic"], evolvesFrom:120},
  {id:122, en:"Mr. Mime", ru:"Мистер Майм", types:["psychic","fairy"]},
  {id:123, en:"Scyther", ru:"Сайтер", types:["bug","flying"]},
  {id:124, en:"Jynx", ru:"Джинкс", types:["ice","psychic"]},
  {id:125, en:"Electabuzz", ru:"Электабазз", types:["electric"]},
  {id:126, en:"Magmar", ru:"Магмар", types:["fire"]},
  {id:127, en:"Pinsir", ru:"Пинсир", types:["bug"]},
  {id:128, en:"Tauros", ru:"Таурос", types:["normal"]},
  {id:129, en:"Magikarp", ru:"Магикарп", types:["water"], evolvesTo:[130]},
  {id:130, en:"Gyarados", ru:"Гаярдос", types:["water","flying"], evolvesFrom:129},
  {id:131, en:"Lapras", ru:"Лапрас", types:["water","ice"]},
  {id:132, en:"Ditto", ru:"Дитто", types:["normal"]},
  {id:133, en:"Eevee", ru:"Иви", types:["normal"], evolvesTo:[134,135,136]},
  {id:134, en:"Vaporeon", ru:"Вапореон", types:["water"], evolvesFrom:133},
  {id:135, en:"Jolteon", ru:"Джолтеон", types:["electric"], evolvesFrom:133},
  {id:136, en:"Flareon", ru:"Флареон", types:["fire"], evolvesFrom:133},
  {id:137, en:"Porygon", ru:"Поригон", types:["normal"]},
  {id:138, en:"Omanyte", ru:"Оманайт", types:["rock","water"], evolvesTo:[139]},
  {id:139, en:"Omastar", ru:"Омастар", types:["rock","water"], evolvesFrom:138},
  {id:140, en:"Kabuto", ru:"Кабуто", types:["rock","water"], evolvesTo:[141]},
  {id:141, en:"Kabutops", ru:"Кабутопс", types:["rock","water"], evolvesFrom:140},
  {id:142, en:"Aerodactyl", ru:"Аэродактиль", types:["rock","flying"]},
  {id:143, en:"Snorlax", ru:"Снорлакс", types:["normal"]},
  {id:144, en:"Articuno", ru:"Артикуно", types:["ice","flying"], legendary:true},
  {id:145, en:"Zapdos", ru:"Запдос", types:["electric","flying"], legendary:true},
  {id:146, en:"Moltres", ru:"Молтрес", types:["fire","flying"], legendary:true},
  {id:147, en:"Dratini", ru:"Дратини", types:["dragon"], evolvesTo:[148]},
  {id:148, en:"Dragonair", ru:"Драгонэйр", types:["dragon"], evolvesFrom:147, evolvesTo:[149]},
  {id:149, en:"Dragonite", ru:"Драгонайт", types:["dragon","flying"], evolvesFrom:148},
  {id:150, en:"Mewtwo", ru:"Мьюту", types:["psychic"], legendary:true},
  {id:151, en:"Mew", ru:"Мью", types:["psychic"], mythical:true},
];

/* POKEDEX_ENTRIES[id] = { owner?, description, fact } — ручные статьи (15 для v1). */
var POKEDEX_ENTRIES = {
  1: {
    owner: "romus",
    description: "Травяной покемон с большой зелёной луковицей на спине. Луковица растёт вместе с Бульбазавром, и когда он эволюционирует — из неё появляется цветок. Бульбазавр добрый, любит спать на солнце: в луковице идёт фотосинтез, и солнечный свет ему буквально как еда.",
    fact: "Бульбазавр — один из трёх стартовых покемонов Канто. Он достался Ромусу в Эпизоде 4: Бульбазавр помог поймать себя, найдя закономерность между атаками — ровно две секунды паузы."
  },
  4: {
    owner: "makster",
    description: "Огненный покемон-ящерица. На хвосте у Чармандера всегда горит пламя — оно показывает, как он себя чувствует. Если пламя яркое и большое — Чармандер здоров и весел. Если маленькое и еле тлеет — он устал или заболел. Пламя нельзя тушить — это для него опасно.",
    fact: "В Эпизоде 19 Чармандер Макстера эволюционирует в Чармелеона, когда защищает Ромуса в бою. Это будет впервые, когда он почувствует настоящий огонь в сердце."
  },
  7: {
    owner: "romus",
    description: "Водный покемон-черепашка с голубым панцирем. Когда страшно — Сквиртл прячет голову, лапки и хвост внутрь панциря. Умеет выпускать струю воды изо рта — такую сильную, как из пожарного шланга. Смелый, если рядом друзья.",
    fact: "В Эпизоде 20 Сквиртл Ромуса эволюционирует в Вартортла, когда по команде хозяина строит ледяную стену, чтобы защитить команду."
  },
  10: {
    owner: "kristi",
    description: "Маленький зелёный покемон-гусеница. Катерпи ест листья с утра до вечера — чтобы набрать сил и превратиться в Метапода, а потом в Баттерфри. На голове у него красный рожок, из которого выделяется странный запах — так он отпугивает врагов.",
    fact: "В Эпизоде 8 Катерпи сам пошёл за командой Кристи через реку — после того, как она дала ему листик и погладила. Он стал первым «бонусным» покемоном, который решил присоединиться добровольно."
  },
  12: {
    owner: "kristi",
    description: "Финальная эволюция маленького Катерпи. Баттерфри — нежный летающий покемон-бабочка с узорными крыльями. Летает за цветочным нектаром и помогает опылять леса. С крыльев осыпается пыльца — если враг её вдохнёт, может заснуть.",
    fact: "У Баттерфри три стадии эволюции: гусеница Катерпи → кокон Метапод → бабочка Баттерфри. Целое превращение, как в реальной природе!"
  },
  17: {
    owner: "makster",
    description: "Быстрый покемон-птица, следующая форма после маленького Пиджи. Пиджеотто патрулирует свой лес и ловит Раттат и Спироу. Его крылья сильнее, чем кажутся — он может поднять на лапах другого небольшого покемона и перелететь.",
    fact: "В Эпизоде 8 Пиджеотто Макстера перевёз через реку Иви и Сикстейлс — у него сильные лапы, и он умеет мягко опускать покемонов на лёд."
  },
  25: {
    owner: "kristi",
    description: "Электрический покемон-мышка с жёлтой шерстью и красными щёчками. В щёчках у Пикачу копится электричество — если он сердится или удивляется, может ударить током. Самый узнаваемый покемон в мире. Очень умный и преданный.",
    fact: "Пикачу не любит сидеть в покеболе — предпочитает на плече тренера. У Кристи Пикачу тоже почти всегда рядом, хотя в битве — молния!"
  },
  37: {
    owner: "kristi",
    description: "Огненный лисёнок с шестью пушистыми хвостами. Когда Вульпикс рождается — у неё всего один белый хвост. Остальные пять отрастают постепенно, по мере того как она учится управлять огнём. У неё очень горячая шерсть — как у живой грелки.",
    fact: "Сикстейлс (так Кристи называет свою Вульпикс) — это она, девочка. Иногда она тихонько напевает сама себе, кружа хвостами в тёплом воздухе."
  },
  63: {
    owner: "romus",
    description: "Психический покемон, похожий на маленького жёлтого лисёнка. Абра спит 18 часов в день — даже во время опасности. Но как только почувствует угрозу — мгновенно телепортируется на 100 метров, даже не открывая глаз. Поймать его — целое искусство.",
    fact: "Ромус поймал свою Абру терпением — не нападая, а просто сидя рядом и ожидая, пока тот проснётся и сам выберет пойти с ним."
  },
  131: {
    description: "Огромный морской покемон, похожий на плезиозавра. Лапрас добрый и умный, отлично понимает людей. Может перевозить на спине сразу нескольких путешественников через море. Поёт песни, когда ему хорошо — говорят, слышно за километры.",
    fact: "В Эпизоде 8 Лапрас дедушки Мориса помог команде переправиться через Серебряную реку. Дедушка сказал: «Лапрасу уже 40 лет, он помнит ещё прадеда Кристи». Лапрасы живут долго."
  },
  133: {
    owner: "kristi",
    description: "Маленький пушистый покемон с волшебной нестабильной ДНК. Иви может эволюционировать в разные формы в зависимости от того, как его воспитывают. В Канто известны три формы: Вапореон (водный), Джолтеон (электрический), Флареон (огненный). Позже откроют ещё пять.",
    fact: "Иви Кристи пока не эволюционировал — и поэтому её Иви особенно редок. В какую форму он превратится — зависит от того, какой способ тренировки она выберет. А может, и от их дружбы."
  },
  144: {
    description: "Легендарная птица-зима. Живёт высоко в горах, среди вечных снегов. Когда Артикуно взмахивает ледяными крыльями — температура падает, и идёт снег. Видеть её — редкая удача: говорят, встреча с Артикуно — к долгим, ясным зимам.",
    fact: "Артикуно, Запдос и Молтрес вместе называют «легендарной тройкой птиц Канто». Каждая отвечает за свою стихию: лёд, гром, огонь. И их в мире по одной."
  },
  145: {
    description: "Легендарная птица-гроза. Живёт в грозовых облаках и на высоких линиях электропередач. Когда Запдос взмахивает крыльями — сверкают молнии, гремит гром, в деревне может погаснуть свет. Увидеть его — значит попасть в очень сильную грозу.",
    fact: "Когда Запдос в хорошем настроении — облака вокруг него сияют жёлтым светом. Можно перепутать с рассветом."
  },
  146: {
    description: "Легендарная птица-огонь. Живёт у вулканов и на раскалённых горах. Когда Молтрес взмахивает крыльями — поднимается пламя, и деревья расцветают раньше срока. Говорят, весной он летит на юг — и за ним приходит весна.",
    fact: "Если Молтрес ранится — он окунается в лаву вулкана, чтобы восстановить силы. Для него кипящая лава — как для нас прохладная ванна."
  },
  150: {
    description: "Психический покемон, которого создали учёные. Они взяли ДНК древнего Мью и много лет выращивали Мьюту в лаборатории. Он получился невероятно сильным и очень умным — умнее большинства людей. Но сердитым: его создали без разрешения, и он это чувствует.",
    fact: "Мьюту — не эволюция Мью. Он клон, научный эксперимент. В мире покемонов это единственный известный случай, когда покемона создал человек, а не природа."
  },
  151: {
    description: "Древний предок всех покемонов. Мью живёт где-то в джунглях и очень редко показывается людям. В ДНК Мью содержится геном любого покемона — поэтому он может превращаться в кого угодно, как Дитто. Ласковый, игривый, любопытный, как ребёнок.",
    fact: "Учёные считают, что все известные покемоны (больше 1000 видов) произошли от Мью за миллионы лет эволюции. Он — как Ева всего покемоньего мира."
  }
};

/* ========== TYPE PALETTE (mirrored from quiz) ========== */
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

var OWNER_LABELS = {
  kristi: { name: "Кристи", color: "#7B4BC4" },
  makster: { name: "Макстер", color: "#4CAF50" },
  romus: { name: "Ромус", color: "#EF5350" }
};

/* ========== HELPERS ========== */

function pokemonImg(id) {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
}
function pokemonImgFallback(id) {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
}
function typeChip(t, size) {
  size = size || "";
  return '<span class="dex-type-chip dex-type-' + size + '" data-type="' + t + '">' +
    '<span class="dex-type-emoji">' + TYPE_EMOJI[t] + '</span>' +
    '<span class="dex-type-name">' + TYPE_RU_NOUN[t] + '</span>' +
  '</span>';
}
function padId(n) {
  var s = String(n);
  while (s.length < 3) s = "0" + s;
  return s;
}
function findById(id) {
  for (var i = 0; i < POKEDEX_DATA.length; i++) {
    if (POKEDEX_DATA[i].id === id) return POKEDEX_DATA[i];
  }
  return null;
}

/* ========== GRID RENDERING ========== */

var activeTypeFilter = null;
var activeSearch = "";

function filterPokedex() {
  return POKEDEX_DATA.filter(function(p) {
    if (activeTypeFilter && p.types.indexOf(activeTypeFilter) === -1) return false;
    if (activeSearch) {
      var q = activeSearch.toLowerCase();
      if (p.ru.toLowerCase().indexOf(q) === -1 && p.en.toLowerCase().indexOf(q) === -1) return false;
    }
    return true;
  });
}

function renderGrid() {
  var grid = document.getElementById("dex-grid");
  var filtered = filterPokedex();
  if (filtered.length === 0) {
    grid.innerHTML = '<p class="dex-empty">Никого не нашли. Попробуй другой тип или имя.</p>';
    return;
  }
  grid.innerHTML = filtered.map(function(p) {
    var badge = "";
    if (p.legendary) badge = '<span class="dex-badge dex-legendary">🏆 Легендарный</span>';
    else if (p.mythical) badge = '<span class="dex-badge dex-mythical">✨ Мифический</span>';
    var entry = POKEDEX_ENTRIES[p.id];
    var ownerBadge = "";
    if (entry && entry.owner) {
      var o = OWNER_LABELS[entry.owner];
      ownerBadge = '<span class="dex-badge dex-owner" style="background:' + o.color + '">У ' + o.name + '</span>';
    }
    return '<button class="dex-card" data-id="' + p.id + '" onclick="openDexDetail(' + p.id + ')">' +
      '<div class="dex-card-img">' +
        '<img src="' + pokemonImg(p.id) + '" alt="' + p.ru + '" loading="lazy" onerror="this.src=\'' + pokemonImgFallback(p.id) + '\'">' +
      '</div>' +
      '<div class="dex-card-id">#' + padId(p.id) + '</div>' +
      '<div class="dex-card-name">' + p.ru + '</div>' +
      '<div class="dex-card-types">' + p.types.map(function(t) { return typeChip(t, "sm"); }).join("") + '</div>' +
      badge + ownerBadge +
    '</button>';
  }).join("");
  document.getElementById("dex-count").textContent = filtered.length + " из 151";
}

/* ========== FILTER UI ========== */

function renderTypeFilters() {
  var wrap = document.getElementById("dex-type-filters");
  var types = ["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","steel","fairy"];
  wrap.innerHTML =
    '<button class="dex-filter-chip active" data-type="" onclick="setTypeFilter(null)">Все</button>' +
    types.map(function(t) {
      return '<button class="dex-filter-chip" data-type="' + t + '" onclick="setTypeFilter(\'' + t + '\')">' +
        TYPE_EMOJI[t] + ' ' + TYPE_RU_NOUN[t] +
      '</button>';
    }).join("");
}

function setTypeFilter(t) {
  activeTypeFilter = t;
  document.querySelectorAll(".dex-filter-chip").forEach(function(btn) {
    btn.classList.toggle("active", btn.getAttribute("data-type") === (t || ""));
  });
  renderGrid();
}

function onSearchInput(val) {
  activeSearch = val.trim();
  renderGrid();
}

/* ========== DETAIL MODAL ========== */

function openDexDetail(id) {
  var p = findById(id);
  if (!p) return;
  var entry = POKEDEX_ENTRIES[id];
  var modal = document.getElementById("dex-modal");
  var body = document.getElementById("dex-modal-body");

  var badges = "";
  if (p.legendary) badges += '<span class="dex-badge dex-legendary">🏆 Легендарный</span>';
  if (p.mythical) badges += '<span class="dex-badge dex-mythical">✨ Мифический</span>';
  if (entry && entry.owner) {
    var o = OWNER_LABELS[entry.owner];
    badges += '<span class="dex-badge dex-owner" style="background:' + o.color + '">Покемон ' + o.name + '</span>';
  }

  body.innerHTML =
    '<div class="dex-detail-header">' +
      '<div class="dex-detail-img">' +
        '<img src="' + pokemonImg(p.id) + '" alt="' + p.ru + '" onerror="this.src=\'' + pokemonImgFallback(p.id) + '\'">' +
      '</div>' +
      '<div class="dex-detail-info">' +
        '<div class="dex-detail-id">#' + padId(p.id) + '</div>' +
        '<h2 class="dex-detail-name">' + p.ru + '</h2>' +
        '<div class="dex-detail-en">' + p.en + '</div>' +
        '<div class="dex-detail-types">' + p.types.map(function(t) { return typeChip(t, "lg"); }).join("") + '</div>' +
        (badges ? '<div class="dex-detail-badges">' + badges + '</div>' : '') +
      '</div>' +
    '</div>' +
    renderEvolutionChain(p) +
    renderEntryContent(p, entry);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDexDetail() {
  document.getElementById("dex-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function renderEvolutionChain(p) {
  /* Walk backwards to the base form */
  var base = p;
  while (base.evolvesFrom) {
    var prev = findById(base.evolvesFrom);
    if (!prev) break;
    base = prev;
  }
  /* Walk forwards from base, building chain; branch at first node with >1 evolutions */
  if (!base.evolvesTo || base.evolvesTo.length === 0) {
    /* No evolutions at all */
    if (!p.evolvesFrom) return '<div class="dex-evo-empty">Не эволюционирует — единственная форма.</div>';
  }

  var cards = [];
  function renderNode(n, isCurrent) {
    var classes = "dex-evo-card" + (isCurrent ? " current" : "");
    return '<button class="' + classes + '" onclick="openDexDetail(' + n.id + ')">' +
      '<img src="' + pokemonImg(n.id) + '" alt="' + n.ru + '" onerror="this.src=\'' + pokemonImgFallback(n.id) + '\'">' +
      '<div class="dex-evo-name">' + n.ru + '</div>' +
      '<div class="dex-evo-types">' + n.types.map(function(t) { return typeChip(t, "xs"); }).join("") + '</div>' +
    '</button>';
  }

  var html = '<div class="dex-evo-section"><h3 class="dex-section-title">🥚 Эволюция</h3>';
  /* Stage 1 — always just one (base) */
  html += '<div class="dex-evo-row">';
  html += renderNode(base, base.id === p.id);
  if (base.evolvesTo && base.evolvesTo.length > 0) {
    if (base.evolvesTo.length === 1) {
      /* Linear chain */
      var mid = findById(base.evolvesTo[0]);
      html += '<span class="dex-evo-arrow">→</span>';
      html += renderNode(mid, mid.id === p.id);
      if (mid.evolvesTo && mid.evolvesTo.length > 0) {
        html += '<span class="dex-evo-arrow">→</span>';
        var last = findById(mid.evolvesTo[0]);
        html += renderNode(last, last.id === p.id);
      }
    } else {
      /* Branching — Eevee case */
      html += '<span class="dex-evo-arrow">→</span>';
      html += '<div class="dex-evo-branches">';
      base.evolvesTo.forEach(function(nid) {
        var n = findById(nid);
        if (n) html += renderNode(n, n.id === p.id);
      });
      html += '</div>';
    }
  }
  html += '</div></div>';
  return html;
}

function renderEntryContent(p, entry) {
  if (!entry) {
    return '<div class="dex-entry-soon">' +
      '<h3 class="dex-section-title">📖 Описание</h3>' +
      '<p class="dex-soon-note">Статью про этого покемона ещё пишут. Скоро тут будет интересный рассказ! ✍️</p>' +
    '</div>';
  }
  var html = '<div class="dex-entry-description">' +
    '<h3 class="dex-section-title">📖 Описание</h3>' +
    '<p>' + entry.description + '</p>' +
  '</div>';
  if (entry.fact) {
    html += '<div class="dex-entry-fact">' +
      '<h3 class="dex-section-title">💡 Интересный факт</h3>' +
      '<p>' + entry.fact + '</p>' +
    '</div>';
  }
  return html;
}

/* ========== INIT ========== */

document.addEventListener("DOMContentLoaded", function() {
  renderTypeFilters();
  renderGrid();
  var searchInput = document.getElementById("dex-search");
  if (searchInput) {
    searchInput.addEventListener("input", function(e) { onSearchInput(e.target.value); });
  }
  /* Close modal on backdrop click or Escape */
  var modal = document.getElementById("dex-modal");
  modal.addEventListener("click", function(e) {
    if (e.target === modal) closeDexDetail();
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) closeDexDetail();
  });
});
