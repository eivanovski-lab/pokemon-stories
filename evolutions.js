/* Evolution trees — groups all 151 chains into themed sections */

/* Build family objects: { root, stages: [[p], [p,p,...], ...] } */
function buildEvolutionFamilies() {
  var roots = POKEDEX_DATA.filter(function(p) { return !p.evolvesFrom; });
  return roots.map(function(root) {
    var family = { root: root, stages: [[root]] };
    var current = [root];
    /* safety: walk forward up to 5 stages (Gen 1 max is 3) */
    for (var depth = 0; depth < 5; depth++) {
      var next = [];
      current.forEach(function(p) {
        if (p.evolvesTo && p.evolvesTo.length) {
          p.evolvesTo.forEach(function(nid) {
            var np = findById(nid);
            if (np) next.push(np);
          });
        }
      });
      if (next.length === 0) break;
      family.stages.push(next);
      current = next;
    }
    return family;
  });
}

function familyIds(f) {
  var ids = [];
  f.stages.forEach(function(stage) { stage.forEach(function(p) { ids.push(p.id); }); });
  return ids;
}

/* Themed groupings — manually curated to group kid-friendly categories */
var THEMES = [
  { id: "starters", title: "🌱 Стартеры Канто", intro: "Три покемона, которых Дубинский даёт новым тренерам. У каждого три стадии развития.", rootIds: [1, 4, 7] },
  { id: "eevee", title: "✨ Иви — покемон-хамелеон", intro: "Иви — особенный: у него нестабильная ДНК. В зависимости от того, как его воспитывают, он превращается в одну из 8 разных форм! В Канто известны только три из них — остальные открыли в следующих поколениях.", rootIds: [133] },
  { id: "pikachu", title: "⚡ Пикачу — символ покемонов", intro: "Самый узнаваемый покемон в мире. Пикачу — электрический, а Райчу — его более сильная форма после Грозового камня.", rootIds: [25] },
  { id: "bugs", title: "🦋 Гусеницы и бабочки", intro: "Первые покемоны, которых ловят в лесу. И главная магия: гусеница превращается в кокон, а кокон — в бабочку.", rootIds: [10, 13, 46, 48, 123, 127] },
  { id: "birds", title: "🕊️ Птицы и летающие", intro: "Все, кто летает в небе Канто.", rootIds: [16, 21, 83, 84, 142] },
  { id: "fire", title: "🔥 Огонь", intro: "Покемоны, которые рождаются с пламенем внутри.", rootIds: [37, 58, 77, 126] },
  { id: "water", title: "💧 Вода", intro: "Обитатели рек, озёр и морей.", rootIds: [54, 60, 72, 86, 90, 98, 116, 118, 120, 129, 131] },
  { id: "grass", title: "🌿 Трава и лесные", intro: "Покемоны-растения. Живут в лесах, на полянах и в зарослях.", rootIds: [43, 69, 102, 114] },
  { id: "electric", title: "⚡ Электрические", intro: "Молнии, магниты и батарейки.", rootIds: [81, 100, 125] },
  { id: "rocks", title: "🪨 Камни, земля, пещеры", intro: "Твёрдые, тяжёлые и упрямые — а ещё те, кто живёт глубоко под землёй.", rootIds: [27, 41, 50, 74, 95, 104, 111, 138, 140] },
  { id: "psychic", title: "🔮 Психика и призраки", intro: "Те, кто может читать мысли, проходить сквозь стены или появляться из ниоткуда.", rootIds: [63, 79, 92, 96, 122, 124] },
  { id: "fighters", title: "👊 Бойцы", intro: "Кулаки, удары ногами, броски. Для тех, кто любит настоящий бой.", rootIds: [56, 66, 106, 107, 128] },
  { id: "poison", title: "☠️ Ядовитые и змеи", intro: "Не хочется с ними встретиться в тёмном лесу.", rootIds: [23, 29, 32, 88, 109] },
  { id: "small", title: "🐭 Грызуны и маленькие", intro: "Маленькие, но милые.", rootIds: [19, 35, 39, 52] },
  { id: "dragon", title: "🐲 Драконы", intro: "Редкие и могучие покемоны-драконы.", rootIds: [147] },
  { id: "solo", title: "💎 Единственные в своём роде", intro: "Покемоны, у которых нет эволюций — они уже идеальны такими, какие есть.", rootIds: [108, 113, 115, 132, 137, 143] },
  { id: "legendary", title: "🏆 Легендарные и мифические", intro: "В Канто всего пять таких покемонов. Они существуют в единственном экземпляре на всю планету, не эволюционируют и связаны с мифами мира.", rootIds: [144, 145, 146, 150, 151] },
];

function familyHtml(family) {
  var root = family.root;

  /* Render badges (legendary/mythical/owner) */
  var badges = "";
  if (root.legendary) badges += '<span class="dex-badge dex-legendary">🏆</span>';
  if (root.mythical) badges += '<span class="dex-badge dex-mythical">✨</span>';

  /* Render stage row */
  var stageHtml = "";
  for (var i = 0; i < family.stages.length; i++) {
    var stage = family.stages[i];
    if (i > 0) stageHtml += '<span class="evo-arrow">→</span>';
    if (stage.length === 1) {
      stageHtml += evoMiniCard(stage[0]);
    } else {
      /* Branching (Eevee) */
      stageHtml += '<div class="evo-branches">' +
        stage.map(evoMiniCard).join("") +
      '</div>';
    }
  }

  /* Single (no evolutions) — render as one card */
  if (family.stages.length === 1) {
    return '<div class="evo-family evo-family-solo">' +
      '<div class="evo-chain">' + stageHtml + '</div>' +
    '</div>';
  }

  return '<div class="evo-family">' +
    '<div class="evo-chain">' + stageHtml + '</div>' +
  '</div>';
}

function evoMiniCard(p) {
  var owner = POKEDEX_ENTRIES[p.id] && POKEDEX_ENTRIES[p.id].owner;
  var ownerRing = owner ? ' evo-owner-' + owner : '';
  var typesHtml = p.types.map(function(t) { return typeChip(t, "xs"); }).join("");
  return '<button class="evo-mini' + ownerRing + '" data-id="' + p.id + '" onclick="openDexDetail(' + p.id + ')">' +
    '<img src="' + pokemonImg(p.id) + '" alt="' + p.ru + '" loading="lazy" onerror="this.src=\'' + pokemonImgFallback(p.id) + '\'">' +
    '<div class="evo-mini-name">' + p.ru + '</div>' +
    '<div class="evo-mini-types">' + typesHtml + '</div>' +
  '</button>';
}

function renderEvolutionPage() {
  var families = buildEvolutionFamilies();
  var familyByRoot = {};
  families.forEach(function(f) { familyByRoot[f.root.id] = f; });

  var content = document.getElementById("evo-content");
  var html = "";

  THEMES.forEach(function(theme) {
    var themeFamilies = theme.rootIds
      .map(function(id) { return familyByRoot[id]; })
      .filter(function(f) { return !!f; });
    if (themeFamilies.length === 0) return;

    html += '<section class="evo-section">' +
      '<h2 class="evo-section-title">' + theme.title + '</h2>' +
      '<p class="evo-section-intro">' + theme.intro + '</p>' +
      '<div class="evo-families' + (theme.id === "solo" || theme.id === "legendary" ? " evo-families-grid" : "") + '">' +
        themeFamilies.map(familyHtml).join("") +
      '</div>' +
    '</section>';
  });

  /* Stat: how many families covered */
  var covered = new Set();
  THEMES.forEach(function(th) { th.rootIds.forEach(function(id) { covered.add(id); }); });
  var uncovered = families.filter(function(f) { return !covered.has(f.root.id); });
  if (uncovered.length > 0) {
    html += '<section class="evo-section">' +
      '<h2 class="evo-section-title">🎲 Другие</h2>' +
      '<p class="evo-section-intro">Остальные покемоны Канто.</p>' +
      '<div class="evo-families">' +
        uncovered.map(familyHtml).join("") +
      '</div>' +
    '</section>';
  }

  html += '<div class="types-back">' +
    '<a href="encyclopedia.html" class="types-back-btn">← К энциклопедии</a>' +
    '<a href="encyclopedia-pokedex.html" class="types-play-btn">📖 Покедекс 151</a>' +
  '</div>';

  content.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof POKEDEX_DATA === "undefined") {
    document.getElementById("evo-content").innerHTML = "<p>Ошибка: данные не загрузились.</p>";
    return;
  }
  renderEvolutionPage();
});
