let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let Name = prompt("İsminizi Giriniz");
let myName = document.querySelector("#myName");

if(Name){
    myName.innerHTML = `${Name}`

} else {
    alert("Bir İsim Giriniz.")
    location.reload();
}

// İsim Girme ve Ekranda gösterme kısmı yukarıda.  Prompt ile isim girmesini istedik,
//  "İf" ile eğer isim girilirse ekranda gösterilmesini sağladık.
// "Else" ile eğer isim girilMEZSE döngüyü başa çevirip isim girmesini istedik (alert ve reload).
 

// Saat kısmına geçiyoruz.

function clockFunction(){
    let dateTime = new Date
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hrs}: ${min}: ${sec}: ${day}`

}

setInterval(clockFunction, 1000);

// clockfunction ile saatin işlevlerini belirlemeye başladık.
// sonrasında let ile birlikte "day" yani günlere en yukarıda belirlediğimiz günleri atatık
// saat dakika ve saniyelere ise "get" ile birlikte otomatik yaptık. 
// queryselector ile birlikte index içinde #myClock idsini bulup innerhtml ile gönderdik.
// setınterval ile birlikte saat functionu saniyede 1 yaparak her saniye yenilenmesini sağladık.