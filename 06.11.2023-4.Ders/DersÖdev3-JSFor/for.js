// 250 ye kadar olan sayıların toplamı nedir? 
let number1 = 0;
for (i = 0; i < 250; i++) {
    number1 += i;
}
console.log("1.Soru: 250 ye kadar olan sayıların toplamı nedir? Cevap = " + number1)

// 25 ile 125 arasındaki sayıların toplamı nedir?
let number2 = 0;
for (i = 26; i < 125; i++) {
    number2 += i;
}
console.log("2.Soru: 25 ile 125 arasındaki sayıların toplamı nedir? Cevap = " + number2)

// 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir?
let number3 = 0;
let unitCount = 0;
for (i = 2; i < 1000; i++) {
    number3 += i;
    unitCount++;
}
let averageNumber = number3 / unitCount;
console.log("3.Soru: 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir? Cevap = " + averageNumber)

// Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın
let number4 = 0;
let numbersDividedByFive = [];
for (i = 2; i < 100; i++) {
    if (i % 5 == 0) {
        numbersDividedByFive.push(i);
    }
}
console.log("4.Soru: Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın. Cevap = " + numbersDividedByFive)

// Dizinin en büyük sayısıı for döngüsü ile bul
// Dizinin en küçük sayısıı for döngüsü ile bul
var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
let minNumber = 0;
let maxNumber = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log("5.Soru: Dizinin en büyük ve en küçük sayısını for ile bul. Cevap = En küçük: " + minNumber + " , En Büyük: " + maxNumber)