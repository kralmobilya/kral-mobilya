const images = Array.from({length:72},(_,i)=>i+1);
const groups = [
 {name:'Modern Masa + 4 Sandalye Takımı',cat:'masa',imgs:[1,2,3,4,5,6],desc:'Ahşap görünümlü tabla, siyah metal iskelet ve gri kumaş sandalyeler.'},
 {name:'Beyaz Raflı Dolap',cat:'dolap',imgs:[7,8],desc:'Raflı, beyaz depolama dolabı.'},
 {name:'Beyaz Dolap',cat:'dolap',imgs:[9,10],desc:'Beyaz gövdeli, raflı ve kapaklı dolap.'},
 {name:'Beyaz Depolama Dolabı',cat:'dolap',imgs:[11,12],desc:'Çok bölmeli beyaz dolap.'},
 {name:'Beyaz Kapaklı Dolap',cat:'dolap',imgs:[13,14],desc:'Beyaz, kapaklı tamamlayıcı dolap.'},
 {name:'Antrasit L Koltuk Takımı',cat:'koltuk',imgs:[15,16,17],desc:'Koyu renkli L koltuk ve orta sehpa kombinasyonu.'},
 {name:'L Koltuk Takımı',cat:'koltuk',imgs:[18,19,20,21,22],desc:'Modern L koltuk seçenekleri; farklı açılardan ürün görüntüleri.'},
 {name:'Açık Gri L Koltuk',cat:'koltuk',imgs:[23,24,25],desc:'Açık gri tonlarında modern oturma grubu.'},
 {name:'Gri Salon Takımı',cat:'koltuk',imgs:[26,27,28,29],desc:'Salon için farklı oturma kombinasyonları.'},
 {name:'Yemek Masası Takımı',cat:'masa',imgs:[30,31,32],desc:'Yemek alanları için masa ve sandalye seçenekleri.'},
 {name:'Yuvarlak Masa Takımı',cat:'masa',imgs:[33,34],desc:'Yuvarlak tabla ve uyumlu sandalye grubu.'},
 {name:'Kompakt Masa Takımı',cat:'masa',imgs:[35,36],desc:'Kompakt alanlar için masa ve sandalye seçeneği.'},
 {name:'Gri Salon Takımı',cat:'koltuk',imgs:[37,38],desc:'Gri tonlarda modern salon takımı.'},
 {name:'Gri Üçlü Koltuk',cat:'koltuk',imgs:[39],desc:'Modern gri renkli üçlü koltuk.'},
 {name:'Berjer Koltuklar',cat:'koltuk',imgs:[40,41],desc:'Tekli berjer koltuk seçenekleri.'},
 {name:'Koyu Gri Oturma Grubu',cat:'koltuk',imgs:[42],desc:'Koyu gri tonlarında salon grubu.'},
 {name:'Petrol Yeşili Oturma Grubu',cat:'koltuk',imgs:[43],desc:'Petrol yeşili tonlarında modern takım.'},
 {name:'Bej Üçlü Koltuk',cat:'koltuk',imgs:[44],desc:'Açık bej tonlarında üçlü koltuk.'},
 {name:'Mavi Oturma Grubu',cat:'koltuk',imgs:[45],desc:'Mavi tonlarında salon oturma grubu.'},
 {name:'Yeşil Oturma Grubu',cat:'koltuk',imgs:[46],desc:'Yeşil tonlarında modern salon takımı.'},
 {name:'Karma Salon Takımı',cat:'koltuk',imgs:[47],desc:'Farklı koltuk ve tamamlayıcı parçalarla salon kombinasyonu.'},
 {name:'Kahverengi Berjerler',cat:'koltuk',imgs:[48],desc:'Kahverengi tonlarında tekli koltuklar.'},
 {name:'Koyu Salon Takımı',cat:'koltuk',imgs:[49],desc:'Koyu tonlarda salon oturma grubu.'},
 {name:'Şifonyer / Makyaj Dolabı',cat:'dolap',imgs:[50],desc:'Çekmeceli ve aynalı tamamlayıcı mobilya.'},
 {name:'Beyaz Gardırop',cat:'dolap',imgs:[51],desc:'Beyaz renkli gardırop.'},
 {name:'Modern Gardırop',cat:'dolap',imgs:[52],desc:'Koyu çerçeveli modern gardırop.'},
 {name:'Aynalı Şifonyer',cat:'dolap',imgs:[53],desc:'Aynalı, çekmeceli yatak odası mobilyası.'},
 {name:'Sürgülü Gardırop',cat:'dolap',imgs:[54],desc:'Geniş depolama alanlı gardırop.'},
 {name:'Raflı Gardırop',cat:'dolap',imgs:[55],desc:'İç rafları görünen çok bölmeli gardırop.'},
 {name:'Beyaz Gardırop',cat:'dolap',imgs:[56],desc:'Beyaz renkli geniş gardırop.'},
 {name:'Gardırop Serisi',cat:'dolap',imgs:[57,58,59,60],desc:'Farklı açıları gösterilen gardırop modelleri.'},
 {name:'Ahşap Detaylı Gardırop',cat:'dolap',imgs:[61,62,63],desc:'Ahşap görünümlü detaylara sahip gardırop ve raflı modül.'},
 {name:'Yatak Odası Takımı',cat:'yatak',imgs:[64,65,66,67,68],desc:'Yatak ve baza/başlık seçenekleri.'},
 {name:'Modern Çift Kişilik Yatak',cat:'yatak',imgs:[69,70,71,72],desc:'Çift kişilik yatak ve başlık seçenekleri.'}
];
const grid=document.querySelector('#productGrid');
function render(filter='all'){
  const list=groups.filter(g=>filter==='all'||g.cat===filter);
  grid.innerHTML=list.map((g,idx)=>`<article class="product-card"><div class="product-image"><img src="urunler/urun-${String(g.imgs[0]).padStart(2,'0')}.jpg" alt="${g.name}" loading="lazy"><span class="badge">${g.imgs.length} fotoğraf</span></div><div class="product-body"><small>${g.cat==='koltuk'?'Koltuk & Salon':g.cat==='masa'?'Masa & Sandalye':g.cat==='dolap'?'Dolap & Şifonyer':'Yataklar'}</small><h3>${g.name}</h3><p>${g.desc}</p><div class="product-actions"><a href="urunler/urun-${String(g.imgs[0]).padStart(2,'0')}.jpg" target="_blank">Fotoğrafı Aç</a><a target="_blank" href="https://wa.me/905365072522?text=${encodeURIComponent('Merhaba, '+g.name+' ürünü hakkında bilgi almak istiyorum.')}">Bilgi Al</a></div></div></article>`).join('');
}
render();
document.querySelectorAll('.cat').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter);document.querySelector('#urunler').scrollIntoView({behavior:'smooth',block:'start'})}));
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();
