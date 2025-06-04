const tours = {"baku": {"az": {"name": "Bakı - Abşeron", "description": "Bakı və Abşeron yarımadası Azərbaycanın paytaxtı və mədəniyyət mərkəzidir. Tarixi İçərişəhər, Alov Qüllələri və Xəzər sahillərində unudulmaz gəzinti sizi gözləyir."}, "ru": {"name": "Баку — Апшерон", "description": "Баку и Апшеронский полуостров — сердце Азербайджана. Вас ждёт экскурсия по Старому городу, созерцание Огненных башен и прогулка по набережной Каспия."}, "en": {"name": "Baku - Absheron", "description": "Baku and the Absheron Peninsula are the cultural and historical heart of Azerbaijan. Explore the Old City, Flame Towers, and walk along the Caspian Sea promenade."}, "price": "$60"}, "guba": {"az": {"name": "Quba", "description": "Quba bölgəsi təbii gözəllikləri, meşələri və dağ mənzərələri ilə məşhurdur. Dağ kəndləri və Qırmızı Qəsəbə sizi gözləyir."}, "ru": {"name": "Губа", "description": "Губа славится своими горами, лесами и живописными деревнями. Также здесь находится Красная Слобода — уникальное поселение горских евреев."}, "en": {"name": "Guba", "description": "Guba is known for its mountain landscapes, forests, and traditional mountain villages. Discover the Red Settlement — home to Mountain Jews."}, "price": "$75"}, "gobustan": {"az": {"name": "Qobustan — Palçıq Vulkanları", "description": "Qobustan UNESCO-nun qoruduğu qayaüstü rəsmlərlə məşhurdur. Palçıq vulkanları isə unikal geoloji fenomenlərdən biridir."}, "ru": {"name": "Гобустан — Грязевые вулканы", "description": "Гобустан известен наскальными рисунками, охраняемыми ЮНЕСКО. А грязевые вулканы — уникальное природное явление Азербайджана."}, "en": {"name": "Gobustan – Mud Volcanoes", "description": "Gobustan is home to UNESCO-protected rock carvings and some of the world"s most fascinating mud volcanoes — a rare natural phenomenon."}, "price": "$85"}, "gabala": {"az": {"name": "Qəbələ", "description": "Qəbələ dağ mənzərələri, şəlalələr və qədim tarixi ilə məşhurdur. Həmçinin əyləncə parkları və xizək mərkəzləri ilə zəngindir."}, "ru": {"name": "Габала", "description": "Габала — это горы, водопады и древняя история. Также здесь находятся парки развлечений, канатная дорога и горнолыжные курорты."}, "en": {"name": "Gabala", "description": "Gabala is known for its mountains, waterfalls, and ancient history. The region also offers amusement parks, cable cars, and ski resorts."}, "price": "$90"}};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderTour() {
  const tourKey = getQueryParam("name");
  const lang = getQueryParam("lang") || "ru";
  const tour = tours[tourKey];

  if (!tour || !tour[lang]) return;

  const data = tour[lang];
  const container = document.getElementById("tour-details");
  container.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Цена:</strong> ${tour.price}</p>
    <p>${data.description}</p>
    <div class="tour-images">
      <img src="public/${tourKey}_main.jpg" class="thumb" />
      <img src="public/${tourKey}_thumb1.jpg" class="thumb" />
      <img src="public/${tourKey}_thumb2.jpg" class="thumb" />
    </div>
    <div class="language-switch">
      <a href="?name=${tourKey}&lang=az">AZ</a> | 
      <a href="?name=${tourKey}&lang=ru">RU</a> | 
      <a href="?name=${tourKey}&lang=en">EN</a>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", renderTour);
