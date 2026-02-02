// Kwiaciarnia Lilia - Wspólna baza produktów
// Ten plik jest używany przez quiz.html, sklep.html i kwiatomat.html

// Pobierz produkty z localStorage lub użyj domyślnych
function getProducts() {
    const stored = localStorage.getItem('liliaProducts');

    if (stored) {
        return JSON.parse(stored);
    }

    // Domyślne produkty
    return getDefaultProducts();
}

// Domyślne produkty (zapisane z panelu admina)
function getDefaultProducts() {
    return [
        // ========================================
        // WIEŃCE POGRZEBOWE
        // ========================================

        // Wieńce Standard 300 zł (Nr.29-34)
        {"id":1,"name":"Wieniec Standard 1","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.29_wynik.webp","kwiatomatAvailable":false},
        {"id":2,"name":"Wieniec Standard 2","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.30_wynik.webp","kwiatomatAvailable":false},
        {"id":3,"name":"Wieniec Standard 3","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.31_wynik.webp","kwiatomatAvailable":false},
        {"id":4,"name":"Wieniec Standard 4","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.32_wynik.webp","kwiatomatAvailable":false},
        {"id":5,"name":"Wieniec Standard 5","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.33_wynik.webp","kwiatomatAvailable":false},
        {"id":6,"name":"Wieniec Standard 6","price":300,"description":"Delikatna kompozycja pogrzebowa z goździków, gerber i margaretek","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.34_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Klasyczny 350 zł (Nr.23-28)
        {"id":7,"name":"Wieniec Klasyczny 1","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.23_wynik.webp","kwiatomatAvailable":false},
        {"id":8,"name":"Wieniec Klasyczny 2","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.24_wynik.webp","kwiatomatAvailable":false},
        {"id":9,"name":"Wieniec Klasyczny 3","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.25_wynik.webp","kwiatomatAvailable":false},
        {"id":10,"name":"Wieniec Klasyczny 4","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.26_wynik.webp","kwiatomatAvailable":false},
        {"id":11,"name":"Wieniec Klasyczny 5","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.27_wynik.webp","kwiatomatAvailable":false},
        {"id":12,"name":"Wieniec Klasyczny 6","price":350,"description":"Wieniec średniej wielkości z różami, gerberami i goździkami","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.28_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Duży 450 zł (Nr.16-22)
        {"id":13,"name":"Wieniec Duży 1","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.16_wynik.webp","kwiatomatAvailable":false},
        {"id":14,"name":"Wieniec Duży 2","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.17_wynik.webp","kwiatomatAvailable":false},
        {"id":15,"name":"Wieniec Duży 3","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.18_wynik.webp","kwiatomatAvailable":false},
        {"id":16,"name":"Wieniec Duży 4","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.19_wynik.webp","kwiatomatAvailable":false},
        {"id":17,"name":"Wieniec Duży 5","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.20_wynik.webp","kwiatomatAvailable":false},
        {"id":18,"name":"Wieniec Duży 6","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.21_wynik.webp","kwiatomatAvailable":false},
        {"id":19,"name":"Wieniec Duży 7","price":450,"description":"Okazała kompozycja pogrzebowa z dominacją róż","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.22_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Elegancki 500 zł (Nr.14-15)
        {"id":20,"name":"Wieniec Elegancki 1","price":500,"description":"Elegancka kompozycja pogrzebowa z wysokiej jakości kwiatów","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.14_wynik.webp","kwiatomatAvailable":false},
        {"id":21,"name":"Wieniec Elegancki 2","price":500,"description":"Elegancka kompozycja pogrzebowa z wysokiej jakości kwiatów","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.15_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Premium 550 zł (Nr.8-13)
        {"id":22,"name":"Wieniec Premium 1","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.8_wynik.webp","kwiatomatAvailable":false},
        {"id":23,"name":"Wieniec Premium 2","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.9_wynik.webp","kwiatomatAvailable":false},
        {"id":24,"name":"Wieniec Premium 3","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.10_wynik.webp","kwiatomatAvailable":false},
        {"id":25,"name":"Wieniec Premium 4","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.11_wynik.webp","kwiatomatAvailable":false},
        {"id":26,"name":"Wieniec Premium 5","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.12_wynik.webp","kwiatomatAvailable":false},
        {"id":27,"name":"Wieniec Premium 6","price":550,"description":"Ekskluzywna kompozycja pogrzebowa z dbałością o detale","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.13_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Ekskluzywny 600 zł (Nr.6-7)
        {"id":28,"name":"Wieniec Ekskluzywny 1","price":600,"description":"Wieniec z najwyższej jakości kwiatów w bogatej aranżacji","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.6_wynik.webp","kwiatomatAvailable":false},
        {"id":29,"name":"Wieniec Ekskluzywny 2","price":600,"description":"Wieniec z najwyższej jakości kwiatów w bogatej aranżacji","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.7_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Luksusowy 650 zł (Nr.1-3)
        {"id":30,"name":"Wieniec Luksusowy 1","price":650,"description":"Luksusowa kompozycja pogrzebowa z unikalnym układem","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.1_wynik.webp","kwiatomatAvailable":false},
        {"id":31,"name":"Wieniec Luksusowy 2","price":650,"description":"Luksusowa kompozycja pogrzebowa z unikalnym układem","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.2_wynik.webp","kwiatomatAvailable":false},
        {"id":32,"name":"Wieniec Luksusowy 3","price":650,"description":"Luksusowa kompozycja pogrzebowa z unikalnym układem","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.3_wynik.webp","kwiatomatAvailable":false},

        // Wieńce Specjalny 700 zł (Nr.4-5)
        {"id":33,"name":"Wieniec Specjalny 1","price":700,"description":"Wieniec specjalny - możliwe formy indywidualne (serce, krzyż)","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.4_wynik.webp","kwiatomatAvailable":false},
        {"id":34,"name":"Wieniec Specjalny 2","price":700,"description":"Wieniec specjalny - możliwe formy indywidualne (serce, krzyż)","category":"funeral","type":"wieniec","image":"assets/images/products/funeral/wience/Nr.5_wynik.webp","kwiatomatAvailable":false},

        // ========================================
        // WIĄZANKI POGRZEBOWE
        // ========================================

        // Bukiety do ręki 70 zł
        {"id":35,"name":"Bukiet pogrzebowy do ręki 1","price":70,"description":"Wiązanka pogrzebowa do ręki","category":"funeral","type":"wiazanka-bukiet","image":"assets/images/products/funeral/wiazanka-bukiet-70-01.jpg","kwiatomatAvailable":false},
        {"id":36,"name":"Bukiet pogrzebowy do ręki 2","price":70,"description":"Wiązanka pogrzebowa do ręki","category":"funeral","type":"wiazanka-bukiet","image":"assets/images/products/funeral/wiazanka-bukiet-70-02.jpg","kwiatomatAvailable":false},
        {"id":37,"name":"Bukiet pogrzebowy do ręki 3","price":70,"description":"Wiązanka pogrzebowa do ręki","category":"funeral","type":"wiazanka-bukiet","image":"assets/images/products/funeral/wiazanka-bukiet-70-03.jpg","kwiatomatAvailable":false},

        // Wiązanki na florecie 90 zł
        {"id":38,"name":"Wiązanka na florecie 1","price":90,"description":"Wiązanka pogrzebowa na podstawce floretowej","category":"funeral","type":"wiazanka-floret","image":"assets/images/products/funeral/wiazanka-floret-90-01.jpg","kwiatomatAvailable":false},
        {"id":39,"name":"Wiązanka na florecie 2","price":90,"description":"Wiązanka pogrzebowa na podstawce floretowej","category":"funeral","type":"wiazanka-floret","image":"assets/images/products/funeral/wiazanka-floret-90-02.jpg","kwiatomatAvailable":false},
        {"id":40,"name":"Wiązanka na florecie 3","price":90,"description":"Wiązanka pogrzebowa na podstawce floretowej","category":"funeral","type":"wiazanka-floret","image":"assets/images/products/funeral/wiazanka-floret-90-03.jpg","kwiatomatAvailable":false},
        {"id":41,"name":"Wiązanka na florecie 4","price":90,"description":"Wiązanka pogrzebowa na podstawce floretowej","category":"funeral","type":"wiazanka-floret","image":"assets/images/products/funeral/wiazanka-floret-90-04.jpg","kwiatomatAvailable":false},

        // Wiązanki na florecie 120/160 zł (z wyborem rozmiaru)
        {"id":42,"name":"Wiązanka na florecie 1","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v1.jpg","kwiatomatAvailable":false},
        {"id":43,"name":"Wiązanka na florecie 2","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v2.jpg","kwiatomatAvailable":false},
        {"id":44,"name":"Wiązanka na florecie 3","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v3.jpg","kwiatomatAvailable":false},
        {"id":45,"name":"Wiązanka na florecie 4","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v4.jpg","kwiatomatAvailable":false},
        {"id":46,"name":"Wiązanka na florecie 5","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v5.jpg","kwiatomatAvailable":false},
        {"id":47,"name":"Wiązanka na florecie 6","price":120,"description":"Wiązanka pogrzebowa na podstawce floretowej - dostępna w dwóch rozmiarach","category":"funeral","type":"wiazanka-floret","sizeOptions":[{"size":"średnia","price":120},{"size":"duża","price":160}],"image":"assets/images/products/funeral/wiazanka-floret-120-160-v6.jpg","kwiatomatAvailable":false},

        // ========================================
        // PRODUKTY OKOLICZNOŚCIOWE - FLOWER BOXY
        // ========================================

        {"id":48,"name":"Flower Box 1","price":250,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.1_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica","przeprosiny"]}},
        {"id":49,"name":"Flower Box 2","price":220,"description":"Elegancki box z żywymi kwiatami i Ferrero - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.2_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica","przeprosiny"]}},
        {"id":50,"name":"Flower Box 3","price":250,"description":"Elegancki box z żywymi kwiatami i maskotka (misiem) - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.3_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica"]}},
        {"id":51,"name":"Flower Box 4","price":170,"description":"Elegancki box z żywymi kwiatami i Ferrero - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.4_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["urodziny","gratulacje"]}},
        {"id":52,"name":"Flower Box 5","price":120,"description":"Elegancki box w kształcie serca z żywymi kwiatami i Raffaello - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.5_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","rocznica"]}},
        {"id":53,"name":"Flower Box 6","price":150,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.6_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"trwalosc","color":"kolorowo","occasion":["urodziny","gratulacje","bezOkazji"]}},
        {"id":54,"name":"Flower Box 7","price":150,"description":"Elegancki box z gipsówką","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.7_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"trwalosc","color":"pastele","occasion":["podziekowanie","bezOkazji"]}},
        {"id":55,"name":"Flower Box 8","price":150,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.8_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["romantyczna","przeprosiny"]}},
        {"id":56,"name":"Flower Box 9","price":150,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.9_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"trwalosc","color":"pastele","occasion":["podziekowanie","gratulacje"]}},
        {"id":57,"name":"Flower Box 10","price":90,"description":"Elegancki box z żywymi kwiatami i Ferrero - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.10_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","urodziny"]}},
        {"id":58,"name":"Flower Box 11","price":80,"description":"Elegancki box z żywymi kwiatami i Raffaello - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.11_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","urodziny","bezOkazji"]}},
        {"id":59,"name":"Flower Box 12","price":90,"description":"Elegancki box z żywymi kwiatami i Raffaello - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.12_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","urodziny"]}},
        {"id":60,"name":"Flower Box 13","price":50,"description":"Eleganckie pudełko z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.13_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","bezOkazji"]}},
        {"id":61,"name":"Flower Box 14","price":40,"description":"Eleganckie pudełko z gipsówką - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.14_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"kolorowo","occasion":["urodziny","bezOkazji"]}},
        {"id":62,"name":"Flower Box 15","price":60,"description":"Eleganckie pudełko z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.15_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","przeprosiny"]}},
        {"id":63,"name":"Flower Box 16","price":50,"description":"Eleganckie pudełko z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.16_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","bezOkazji"]}},
        {"id":64,"name":"Flower Box 17","price":80,"description":"Elegancki koszyczek z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.17_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"trwalosc","color":"kolorowo","occasion":["urodziny","gratulacje"]}},
        {"id":65,"name":"Flower Box 18","price":80,"description":"Eleganckie pudełko z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.18_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"trwalosc","color":"kolorowo","occasion":["urodziny","gratulacje"]}},
        {"id":66,"name":"Flower Box 19","price":140,"description":"Elegancki but z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.19_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica"]}},
        {"id":67,"name":"Flower Box 20","price":140,"description":"Elegancki but z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.20_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"kolorowo","occasion":["urodziny","gratulacje"]}},
        {"id":68,"name":"Flower Box 21","price":40,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.21_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","przeprosiny"]}},
        {"id":69,"name":"Flower Box 22","price":70,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.22_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","urodziny"]}},
        {"id":70,"name":"Flower Box 23","price":70,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.23_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"pastele","occasion":["podziekowanie","urodziny"]}},
        {"id":71,"name":"Flower Box 24","price":70,"description":"Elegancki box z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.24_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","przeprosiny"]}},
        {"id":72,"name":"Flower Box 25","price":60,"description":"Elegancka koperta z żywymi kwiatami - idealny prezent","category":"occasional","type":"box-zywy","image":"assets/images/gallery/occasional/boxy-zywe/Box nr.25_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"nowoczesnosc","priority":"symboliczny","color":"czerwien","occasion":["romantyczna","rocznica"]}},

        // ========================================
        // PRODUKTY OKOLICZNOŚCIOWE - BUKIETY ŻYWE
        // ========================================

        {"id":73,"name":"Bukiet żywy 1","price":170,"description":"Klasyczny bukiet z 20 żywych kwiatów - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.1_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"klasyka","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica","przeprosiny"]}},
        {"id":74,"name":"Bukiet żywy 2","price":120,"description":"Klasyczny bukiet z 15 żywych kwiatów - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.2_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"klasyka","priority":"wow","color":"czerwien","occasion":["romantyczna","rocznica","przeprosiny"]}},
        {"id":75,"name":"Bukiet żywy 3","price":100,"description":"Klasyczny bukiet z gipsówką - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.3_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"kolorowo","occasion":["urodziny","gratulacje","bezOkazji"]}},
        {"id":76,"name":"Bukiet żywy 4","price":50,"description":"Klasyczny bukiet z gipsówką - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.4_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"kolorowo","occasion":["urodziny","bezOkazji"]}},
        {"id":77,"name":"Bukiet żywy 5","price":100,"description":"Klasyczny bukiet z gipsówki - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.5_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"nowoczesnosc","priority":"wow","color":"kolorowo","occasion":["urodziny","gratulacje"]}},
        {"id":78,"name":"Bukiet żywy 6","price":100,"description":"Klasyczny bukiet z żywych kwiatów - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.6_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"klasyka","priority":"symboliczny","color":"kolorowo","occasion":["podziekowanie","urodziny","bezOkazji"]}},
        {"id":79,"name":"Bukiet żywy 9","price":50,"description":"Klasyczny bukiet z żywych kwiatów - świeżość i naturalny zapach","category":"occasional","type":"bukiet-zywy","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.9_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"klasyka","priority":"symboliczny","color":"kolorowo","occasion":["urodziny","bezOkazji"]}},

        // ========================================
        // PRODUKTY OKOLICZNOŚCIOWE - BUKIETY JADALNE
        // ========================================

        {"id":80,"name":"Bukiet jadalny 1","price":250,"description":"Pyszny bukiet ze słodyczy - prezent do zjedzenia!","category":"occasional","type":"bukiet-jadalny","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.7_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"wow","color":"czerwien","occasion":["urodziny","gratulacje"]}},
        {"id":81,"name":"Bukiet jadalny 2","price":250,"description":"Pyszny bukiet ze słodyczy - prezent do zjedzenia!","category":"occasional","type":"bukiet-jadalny","image":"assets/images/gallery/occasional/bukiety-zywe/Bukiet nr.8_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"wow","color":"kolorowo","occasion":["urodziny","gratulacje"]}},

        // ========================================
        // PRODUKTY OKOLICZNOŚCIOWE - WIECZNE RÓŻE
        // ========================================

        {"id":82,"name":"Wieczna róża 1","price":60,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 1_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["romantyczna","rocznica","podziekowanie"]}},
        {"id":83,"name":"Wieczna róża 2","price":60,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 2_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["romantyczna","rocznica","podziekowanie"]}},
        {"id":84,"name":"Wieczna róża 3","price":80,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 3_wynik.webp","kwiatomatAvailable":true,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["romantyczna","rocznica"]}},
        {"id":85,"name":"Wieczna róża 4","price":90,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 4_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["romantyczna","rocznica","gratulacje"]}},
        {"id":86,"name":"Wieczna róża 5","price":70,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 5_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["podziekowanie","gratulacje"]}},
        {"id":87,"name":"Wieczna róża 6","price":130,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 6_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"pastele","occasion":["romantyczna","rocznica"]}},
        {"id":88,"name":"Wieczna róża 7","price":130,"description":"Wieczna róża w eleganckim pudełku - zachwyca latami","category":"occasional","type":"wieczna-roza","image":"assets/images/gallery/occasional/wieczne-roze/Wieczna róża 7_wynik.webp","kwiatomatAvailable":false,"quizTags":{"personality":"praktycznosc","priority":"trwalosc","color":"czerwien","occasion":["romantyczna","rocznica","przeprosiny"]}}
    ];
}
