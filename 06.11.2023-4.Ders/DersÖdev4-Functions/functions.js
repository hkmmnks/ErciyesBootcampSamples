//1.Soru: "   Çağatay Yıldız" isimli metindeki boşlukları kaldır.
let metin1 = "   Çağatay Yıldız";
metin1 = metin1.replaceAll(" ", "")
console.log(metin1);

//2.Soru: "cagatay yildiz" kelimesindeki boşlukları sil tüm harfleri büyült.
let metin2 = "cagatay yildiz";
metin2 = metin2.replaceAll(" ", "").toUpperCase();
console.log(metin2);

//3.Soru: "******Çağatay Yıldız" isimli metindeki yıldızları kaldır.
let metin3 = "******Çağatay Yıldız";
metin3 = metin3.replace("******", "");
console.log(metin3);

//4.Soru: "Çağatay  Yıldız"metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap.
let metin4 = "Çağatay  Yıldız";
metin4 = metin4.replace("  ", " ");
console.log(metin4);

//5.Soru: "**Tech Career**" isimli metindeki yıldızları kaldır.
let metin5 = "**Tech Career**";
metin5 = metin5.replaceAll("*", "")
console.log(metin5);

//6.Soru: "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy.
let metin6 = "Tech Career";
metin6 = ("***" + metin6 + "***");
console.log(metin6);

//7.Soru: "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült.
let metin7 = "Tech Career Bilişim teknolojileri";
metin7 = metin7.substring(0, 20) + metin7.substring(20).toUpperCase();
console.log(metin7);


//8.Soru: "tech career" kelimelerin ilk harflerini büyült.
let metin8 = "tech career";
metin8 = metin8.substring(0, 1).toUpperCase() + metin8.substring(1, 5) + metin8.substring(5, 6).toUpperCase() + metin8.substring(6);
console.log(metin8);