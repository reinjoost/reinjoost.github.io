// lang.js — общий язык для отдельных страниц (товар / набор / допродажа).
// Хранит выбор языка в localStorage, чтобы он совпадал с тем, что выбрано
// на главной странице каталога.

const PAGE_I18N = {
  et: {
    backToCatalog: "← Rein Joost — Roosikataloog",
    addToCart: "Lisa ostukorvi",
    requestConsult: "Küsi nõu",
    deliverySoon: "kättesaadav peagi",
    pickup: "Järele tulek kohapeal",
    omadusedTitle: "Omadused",
    omHeight: "Kõrgus",
    omWidth: "Laius",
    omColor: "Värv",
    omBloom: "Õitseb",
    omFragrance: "Lõhn",
    omStock: "Saadaval",
    priceOnRequest: "Hind küsimisel",
  },
  ru: {
    backToCatalog: "← Rein Joost — Каталог роз",
    addToCart: "В корзину",
    requestConsult: "Запросить консультацию",
    deliverySoon: "скоро будет доступна",
    pickup: "Самовывоз",
    omadusedTitle: "Характеристики",
    omHeight: "Высота",
    omWidth: "Ширина",
    omColor: "Цвет",
    omBloom: "Цветение",
    omFragrance: "Аромат",
    omStock: "Наличие",
    priceOnRequest: "Цена по запросу",
  },
  en: {
    backToCatalog: "← Rein Joost — Rose catalogue",
    addToCart: "Add to cart",
    requestConsult: "Request a consultation",
    deliverySoon: "coming soon",
    pickup: "Self pick-up",
    omadusedTitle: "Characteristics",
    omHeight: "Height",
    omWidth: "Width",
    omColor: "Colour",
    omBloom: "Blooms",
    omFragrance: "Fragrance",
    omStock: "In stock",
    priceOnRequest: "Price on request",
  },
};

function getSiteLang(){
  return localStorage.getItem('reinjoost_lang') || 'et';
}

function setPageLang(lang){
  localStorage.setItem('reinjoost_lang', lang);

  document.querySelectorAll('.lang-tab').forEach(t=>{
    t.classList.toggle('active', t.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const val = PAGE_I18N[lang][el.dataset.i18n];
    if(val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-et]').forEach(el=>{
    const val = el.dataset[lang];
    if(val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = lang;
}

function initPageLang(){
  document.querySelectorAll('.lang-tab').forEach(tab=>{
    tab.addEventListener('click', ()=> setPageLang(tab.dataset.lang));
  });
  setPageLang(getSiteLang());
}
