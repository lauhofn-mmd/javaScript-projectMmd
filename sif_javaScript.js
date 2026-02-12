console.log("sif.js is running...")

//I used the object "array" literal method in a YouTube video called: "How to make your website with Multi Language | Multiple Languages" by Reda Tech رضا تك:
//Translation Menu array:
const menuTranslation = {
  dk: {
    hjem: "Hjem",
    butik: "Butik",
    omOs: "Om os",
    kontakt: "Kontakt",
    blog: "Blog",
  },
  en: {
    hjem: "Home",
    butik: "Shop",
    omOs: "About Us",
    kontakt: "Contact",
    blog: "Blog",
  },
  de: {
    hjem: "Startseite",
    butik: "Shop",
    omOs: "Über uns",
    kontakt: "Kontakt",
    blog: "Blog",
  }
};
//End of Translation Menu-------

//Flextop Menu translation array:
const flexTopTranslations = {
  dk: {
    left: "Søg",
    valuta: "Valuta"
  },
  en: {
    left: "Search",
    valuta: "Currency"
  },
  de: {
    left: "Suche",
    valuta: "Währung"
  }
};

//End of Translation Menu-------

//Loop for object literal = "let" and "in":
for (let lang in flexTopTranslations) {
  console.log(lang, flexTopTranslations[lang]);
}

//Translation (main) array:
const translation = {
    dk: {
        velkommen: "Velkommen til OilsByNature",
        limited_Title: "Limited Edition",
        limited_line1: "Vinterens fire<br>essentials",
        limited_line2: "Fire olier - én komplet<br>vinterplejerutine.",
        limited_line3: "Det perfekte <br> julegavesæt",
        h2_1: "Mød vores produkter",
        h2_2: "Abonner på vores e-mails",
        product_title1: "Økologisk Koldpresset Mandelolie",
        product_title2: "Økologisk Koldpresset Abrikoskerneolie",
        product_title3: "Økologisk Koldpresset Arganolie",
        product_title4: "Økologisk Koldpresset Jojobaolie",
        button1: "Shop nu",
        button2: "Læg i indkøbskurv",
        review1: "``Den her jojobaolie er simpelthen skøn - dejlig tynd, nem at smøre ud og trækker hurtigt ind i huden. Den er jeg især fan af``",
        review2: "``Min kone har testet selve olien, da hun bruger arganolie til hverdag. Hun synes at olien var af god kvalitet og tykkere end den hun normalt bruger. Den var både god til hår og hud. Især den måde den tørrede ind på.``",
        review3: "``Jeg er massør og jeg er helt vild med jeres mandelolie - det er blødt, har den helt perfekt konsistens (ikke for fedtet og tykt), det føles dejligt på huden og fungerer helt perfekt som massageolie. Nok den bedste, jeg har haft i hænderne og jeg har trods alt 12 års erfaring som massør :)``",
        review4: "``Jeg elsker jeres abrikoskerneolie - trækker super hurtigt ind i huden, mærkes dejlig blødt og er skøn i konsistensen. Som hudplejeprodukt er den helt fantastisk.``",
        p_1: "Oplev essensen af naturen i dens reneste form med vores 100% naturlige økologiske olier. Udformet uden tilsætningsstoffer eller kunstige dufte, fanger vores olier den sande essens af naturen, og er med til at skabe synlige resultater for både hud og hår. Hver dråbe er et vidnesbyrd om vores forpligtelse til Moder Jord - om enkel og effektiv forkælelse til krop og sjæl, uden at drive rovdrift på hendes fantastiske gaver.",
        p_2: "Vores olier er ikke blot skabt med omtanke på renhed og bæredygtighed, men også ud fra principper om medfølelse til alle jordens skabninger. Vi tror på at enhver selvplejende rutine tager udgangspunkt i omtanke, betænksomhed og respekt for andre væsener og derfor er vores produkter 100 % veganske og uden nogen form for animalske ingredienser.",
        p_3: "Dette betyder også, at du kan være sikker på, at vores olier er produceret ud fra klare etiske standarder, uden nogen form for dyreforsøg. Ved at købe cruelty-free produkter, er du med til at bane vej for en fremtid, hvor respekt for dyr og skønhedspleje går hånd i hånd.",
        p_4: "Tilmeld dig vores e-mail-liste for eksklusive tilbud og de seneste nyheder.",
        h3_1: "Olier af natur",
        p_5: "Danish Webstore Group ApS",
        p_6: "Møllevej 2A",
        p_7: "9240 Nibe",
        p_8: "CVR: 37640263",
        p_9: "Mail: info@oilsbynature.dk",
        h3_2: "Sikker forsendelse",
        p_10: "Nem bestilling og hurtig levering.",
        p_11: "Vi afsender alle ordrer dagligt",
        p_12: "Hurtig levering på 2-4 dage.",
        h3_3: "Menu",
        p_13: "Forretningsbetingelser",
        p_14: "Cookie- og privatlivspolitik",
        p_15: "Kontakt",
        p_16: "Arbejd hos os",
        p_17: "Returret",
        h3_4: "Trustpilot",
        p_18: "Vi værdsætter din mening!",
        p_19: "Sørg for at bedømme din oplevelse på Trustpilot",

    },

    en: {
        velkommen: "Welcome to OilsByNature",
        limited_Title: "Limited Edition",
        limited_line1: "Four winter<br>essentials",
        limited_line2: "Four oils - one complete<br>winter care routine.",
        limited_line3: "The perfect<br>Christmas gift set",
        h2_1: "Meet our products",
        h2_2: "Subscribe to our emails",
        product_title1: "Organic Cold Pressed Almond Oil",
        product_title2: "Organic Cold pressed Apricot Kernel Oil",
        product_title3: "Organic Cold-Pressed Argan Oil",
        product_title4: "Organic Cold Pressed Jojoba Oil",
        button1: "Shop now",
        button2: "Add to cart",
        review1: "``This jojoba oil is just wonderful - pleasantly light, easy to apply, and absorbs quickly into the skin. I'm especially a fan of that one.``",
        review2: "``My wife tested the oil, as she uses argan oil on a daily basis. She thinks the oil is of good quality and thicker than the one she normally uses. It was great for both hair and skin, especially the way it absorbed into the skin.``",
        review3: "``I am a massage therapist and I'm absolutely in love with your almond oil - it's soft, has the perfect consistency (not too greasy or thick), feels lovely on the skin, and works perfectly as a massage oil. Probably the best I've ever had in my hands, and I've got 12 years of experience as a massage therapist :)``",
        review4: "``I love your apricot oil - absorbs super fast into the skin, feels wonderfully soft, and has a great consistency. As a skincare product, it's absolutely fantastic.``",
        p_1: "Experience the essence of nature in its purest form with our 100% natural organic oils. Formulated without additives or artificial fragrances, our oils capture the true essence of nature and help create visible results for both skin and hair. Every drop is a testament to our commitment to Mother Earth—to simple and effective pampering for body and soul, without overexploiting her amazing gifts.",
        p_2: "Our oils are not only created with purity and sustainability in mind, but also based on principles of compassion for all creatures on earth. We believe that every self-care routine should be based on consideration, thoughtfulness, and respect for other beings, which is why our products are 100% vegan and free from any animal ingredients.",
        p_3: "This also means that you can be sure that our oils are produced according to clear ethical standards, without any form of animal testing. By buying cruelty-free products, you are helping to pave the way for a future where respect for animals and beauty care go hand in hand.",
        p_4: "Sign up for our email list for exclusive offers and the latest news.",
        h3_1: "Oils By Nature",
        p_5: "Danish Webstore Group ApS",
        p_6: "Møllevej 2A",
        p_7: "9240 Nibe",
        p_8: "CVR: 37640263",
        p_9: "Mail: info@oilsbynature.dk",
        h3_2: "Secure Shipping",
        p_10: "Easy ordering and fast delivery.",
        p_11: "We dispatch all orders daily.",
        p_12: "Quick delivery in 2-4 days.",
        h3_3: "Menu",
        p_13: "Business terms and conditions",
        p_14: "Cookie- and privacy policy",
        p_15: "Contact",
        p_16: "Work with us",
        p_17: "Return policy",
        h3_4: "Trustpilot",
        p_18: "We appriciate your opinion!",
        p_19: "Make sure you rate your experience on Trustpilot",  
    },

    de: {
        velkommen: "Willkommen bei OilsByNature",
        limited_Title: "Limited Edition",
        limited_line1: "Vier<br>Winter-Essentials",
        limited_line2: "Vier Öle - eine komplette<br>Winterpflege-Routine.",
        limited_line3: "Das perfekte Weihnachtsgeschenk-Set",
        h2_1: "Lernen Sie unsere Produkte kennen",
        h2_2: "Abonnieren Sie unsere E-Mails",
        product_title1: "Organisches Kaltgepresstes Mandelöl",
        product_title2: "Organisches Kaltgepresstes Aprikosenkernöl",
        product_title3: "Organisches Kaltgepresstes Arganöl",
        product_title4: "Organisches Kaltgepresstes Jojobaöl",
        button1: "Jetzt einkaufen",
        button2: "In den Warenkorb legen", 
        review1: "``Dieses Jojobaöl ist einfach wunderbar - angenehm leicht, lässt sich gut auftragen und zieht schnell in die Haut ein. Davon bin ich besonders begeistert.``",
        review2: "``Meine Frau hat das Öl getestet, da sie täglich Arganöl verwendet. Sie findet das Öl qualitativ hochwertig und dickflüssiger als das, das sie sonst verwendet. Es war sowohl für die Haare als auch für die Haut super, vor allem die Art, wie es in die Haut einzog.``",
        review3: "``Ich bin Massagetherapeutin und bin absolut verliebt in Ihr Mandelöl - es ist weich, hat die perfekte Konsistenz (nicht zu fettig oder dick), fühlt sich wunderbar auf der Haut an und funktioniert perfekt als Massageöl. Wahrscheinlich das Beste, das ich je in den Händen hatte, und ich habe 12 Jahre Erfahrung als Massagetherapeutin :)``",
        review4: "``Ich liebe euer Aprikosenöl - zieht super schnell in die Haut ein, fühlt sich wunderbar weich an und hat eine tolle Konsistenz. Als Pflegeprodukt einfach klasse.``",
        p_1: "Entdecken Sie die Essenz der Natur in ihrer reinsten Form mit unseren 100% natürlichen, biologischen Ölen. Ohne Zusätze oder künstliche Duftstoffe hergestellt, fangen unsere Öle die wahre Essenz der Natur ein und liefern sichtbare Ergebnisse für Haut und Haar. Jeder Tropfen ist ein Beweis für unser Engagement für Mutter Erde - eine einfache und wirksame Pflege für Körper und Seele, die ihre wunderbaren Gaben respektiert.",
        p_2: "Unsere Öle werden nicht nur mit einem Fokus auf Reinheit und Nachhaltigkeit hergestellt, sondern auch nach Prinzipien des Mitgefühls für alle Lebewesen der Erde. Wir glauben daran, dass jede Selbstpflegeroutine auf Achtsamkeit, Rücksichtnahme und Respekt für andere Wesen basiert. Deshalb sind unsere Produkte 100 % vegan und enthalten keinerlei tierische Inhaltsstoffe.",
        p_3: "Das bedeutet auch, dass Sie sicher sein können, dass unsere Öle nach klaren ethischen Standards produziert werden, ohne jegliche Form von Tierversuchen. Indem Sie cruelty-free Produkte kaufen, tragen Sie dazu bei, den Weg für eine Zukunft zu ebnen, in der Respekt für Tiere und Schönheitspflege Hand in Hand gehen.",
        p_4: "Tragen Sie sich in unsere E-Mail-Liste ein, um exklusive Angebote und die neuesten Nachrichten zu erhalten.",
        h3_1: "Oils By Nature",
        p_5: "Danish Webstore Group ApS",
        p_6: "Møllevej 2A",
        p_7: "9240 Nibe",
        p_8: "CVR: 37640263",
        p_9: "Mail: info@oilsbynature.dk",
        h3_2: "Sicherer Versand",
        p_10: "Einfache Bestellung und schnelle Lieferung.",
        p_11: "Wir versenden alle Bestellungen täglich.",
        p_12: "Schnelle Lieferung in 2-4 Tagen.",
        h3_3: "Speisekarte",
        p_13: "Geschäftsbedingungen",
        p_14: "Cookie- und Datenschutzrichtlinie",
        p_15: "Kontakt",
        p_16: "Arbeite mit uns",
        p_17: "Rückgaberecht",
        h3_4: "Trustpilot",
        p_18: "Wir freuen uns über Ihre Meinung!",
        p_19: "Stellen Sie sicher, dass Sie Ihre Erfahrung auf Trustpilot bewerten",
    }
}

//End of translation (main)--------

//"Button" fuctionality when changing the language (to main):
const languageSelectop = document.querySelector("select");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
});
//end of button fuctionality (to main)-------
//End of the method from the YouTube video.

//The fuctionality of the query was supporter by CodePilot by correcting and giving me inspiration on how to make the method with the Menu translation:
//Setting up a cleaner fuction for "the menu only":
function updateMenuLanguage(lang) {
  const t = menuTranslation[lang];

  document.querySelector("#hjem a").textContent = t.hjem;
  document.querySelector("#butik a").textContent = t.butik;
  document.querySelector("#omOs a").textContent = t.omOs;
  document.querySelector("#kontakt a").textContent = t.kontakt;
  document.querySelector("#blog a").textContent = t.blog;
}

const languageSelector = document.querySelector("#Language select");

languageSelector.addEventListener("change", function () {
  updateMenuLanguage(this.value);
});

updateMenuLanguage(languageSelector.value);
//end of the menu fuctionality------

//Helped by CodePilot by inspiring and understanding what to do with multi IDs and classes in the HTML to work on the JavaScript:
//"Flextop Menu" functionality:
function updateFlexTop(language) {
    const t = flexTopTranslations[language];

    // Left Text: (Søg / Search / Suche)
    const leftBox = document.getElementById("flex-topMenu-LEFT");
    if (leftBox) leftBox.textContent = t.left;

    // Inner flex: "Valuta"
    const innerFlex = document.getElementById("inner-flex-topMenu");
    if (innerFlex) {
        const firstDiv = innerFlex.querySelector("div"); //Only that div
        if (firstDiv) firstDiv.textContent = t.valuta + " ∨";
    }
}
const languageSelector1 = document.querySelector("#Language select");

languageSelector1.addEventListener("change", function () {
    updateFlexTop(this.value);
});

updateFlexTop(languageSelector1.value);
//End of flextop Menu----------

//"Limited text" functionality:
function updateLimitedBox(language) {
    const t = translation[language];

    const container = document.getElementById("limited_storTekst"); //The id it comes from
    if (!container) return;

    const titleDiv = container.querySelector("div:nth-child(1)"); //the <div> of it
    if (titleDiv) titleDiv.textContent = t.limited_title;

    const line1 = container.querySelector(".inner-flex-rubrik"); //The class of limited_line1 is
    if (line1) line1.innerHTML = t.limited_line1;

    const textLines = container.querySelectorAll(".inner-flex-text"); //The class of limited_line 2 and 3

    if (textLines[0]) textLines[0].innerHTML = t.limited_line2;
    if (textLines[1]) textLines[1].innerHTML = t.limited_line3;
}

languageSelectop.addEventListener("change", function () {
    updateLimitedBox(this.value);
});

updateLimitedBox(languageSelectop.value);
//End of Limited Text-----------
//End of this method.

//"Product titles" functionality:
function updateProductTitles(language) {
  const t = translation[language];

  document.querySelector(".product-title1 a").textContent = t.product_title1;
  document.querySelector(".product-title2 a").textContent = t.product_title2;
  document.querySelector(".product-title3 a").textContent = t.product_title3;
  document.querySelector(".product-title4 a").textContent = t.product_title4;
}

const languageSelect1 = document.querySelector("#Language select");

languageSelect1.addEventListener("change", function () {
  updateProductTitles(this.value);
});
//end of the product titles functionality--------

//"Reviews" functionality:
function updateReview(language) {
  const t = translation[language];

  document.querySelector(".review1 em").textContent = t.review1;
  document.querySelector(".review2 em").textContent = t.review2;
  document.querySelector(".review3 em").textContent = t.review3;
  document.querySelector(".review4 em").textContent = t.review4;
}

const languageSelect2 = document.querySelector("#Language select");

languageSelect2.addEventListener("change", function () {
  updateReview(this.value);
});
//end of reviews functionality--------

//Buttons functionality:
function updateButtons(language) {
    const t = translation[language];

    // Update button1
    const b1 = document.getElementById("button1");
    if (b1) b1.textContent = t.button1;

    // Update all button (1 and 2)
    const buttons2 = document.querySelectorAll("#button2");
    buttons2.forEach(btn => {
        btn.textContent = t.button2;
    });
}

// Hooking my Language selector
const languageSelect3 = document.querySelector("#Language select");

languageSelect3.addEventListener("change", function () {
    updateButtons(this.value);
});

updateButtons(languageSelect3.value);
//End of buttons fuctionality--------


//Inspiration of the method from a YouTube video called: "How to make your website with Multi Language | Multiple Languages" by Reda Tech رضا تك 
//Setting up "individual functionality of each object with their objects" (general):
let velkommen = document.getElementById("velkommen");
let h2_1 = document.getElementById("h2_1");
let h2_2 = document.getElementById("h2_2");
let h3_1 = document.getElementById("h3_1");
let h3_2 = document.getElementById("h3_2");
let h3_3 = document.getElementById("h3_3");
let h3_4 = document.getElementById("h3_4");
//time for the paragraphs:
let p_1 = document.getElementById("p_1");
let p_2 = document.getElementById("p_2");
let p_3 = document.getElementById("p_3");
let p_4 = document.getElementById("p_4");
let p_5 = document.getElementById("p_5");
let p_6 = document.getElementById("p_6");
let p_7 = document.getElementById("p_7");
let p_8 = document.getElementById("p_8");
let p_9 = document.getElementById("p_9");
let p_10 = document.getElementById("p_10");
let p_11 = document.getElementById("p_11");
let p_12 = document.getElementById("p_12");
let p_13 = document.getElementById("p_13");
let p_14 = document.getElementById("p_14");
let p_15 = document.getElementById("p_15");
let p_16 = document.getElementById("p_16");
let p_17 = document.getElementById("p_17");
let p_18 = document.getElementById("p_18");
let p_19 = document.getElementById("p_19");

const setLanguage = (language) => {
    if (language == "dk"){
        velkommen.innerText = translation.dk.velkommen;
        h2_1.innerText = translation.dk.h2_1;
        h2_2.innerText = translation.dk.h2_2;
        h3_1.innerText = translation.dk.h3_1, 
        h3_2.innerText = translation.dk.h3_2,
        h3_3.innerText = translation.dk.h3_3,
        h3_4.innerText = translation.dk.h3_4;

        p_1.innerText = translation.dk.p_1;
        p_2.innerText = translation.dk.p_2;
        p_3.innerText = translation.dk.p_3;
        p_4.innerText = translation.dk.p_4;
        p_5.innerText = translation.dk.p_5;
        p_6.innerText = translation.dk.p_6;
        p_7.innerText = translation.dk.p_7;
        p_8.innerText = translation.dk.p_8;
        p_9.innerText = translation.dk.p_9;
        p_10.innerText = translation.dk.p_10;
        p_11.innerText = translation.dk.p_11;
        p_12.innerText = translation.dk.p_12;
        p_13.innerText = translation.dk.p_13;
        p_14.innerText = translation.dk.p_14;
        p_15.innerText = translation.dk.p_15;
        p_16.innerText = translation.dk.p_16;
        p_17.innerText = translation.dk.p_17;
        p_18.innerText = translation.dk.p_18;
        p_19.innerText = translation.dk.p_19;


    }else if (language == "en"){
        velkommen.innerText = translation.en.velkommen;
        h2_1.innerText = translation.en.h2_1;
        h2_2.innerText = translation.en.h2_2;
        h3_1.innerText = translation.en.h3_1, 
        h3_2.innerText = translation.en.h3_2,
        h3_3.innerText = translation.en.h3_3,
        h3_4.innerText = translation.en.h3_4;

        p_1.innerText = translation.en.p_1;
        p_2.innerText = translation.en.p_2;
        p_3.innerText = translation.en.p_3;
        p_4.innerText = translation.en.p_4;
        p_5.innerText = translation.en.p_5;
        p_6.innerText = translation.en.p_6;
        p_7.innerText = translation.en.p_7;
        p_8.innerText = translation.en.p_8;
        p_9.innerText = translation.en.p_9;
        p_10.innerText = translation.en.p_10;
        p_11.innerText = translation.en.p_11;
        p_12.innerText = translation.en.p_12;
        p_13.innerText = translation.en.p_13;
        p_14.innerText = translation.en.p_14;
        p_15.innerText = translation.en.p_15;
        p_16.innerText = translation.en.p_16;
        p_17.innerText = translation.en.p_17;
        p_18.innerText = translation.en.p_18;
        p_19.innerText = translation.en.p_19;

    }else if (language == "de"){
        velkommen.innerText = translation.de.velkommen;
        h2_1.innerText = translation.de.h2_1;
        h2_2.innerText = translation.de.h2_2;
        h3_1.innerText = translation.de.h3_1, 
        h3_2.innerText = translation.de.h3_2,
        h3_3.innerText = translation.de.h3_3,
        h3_4.innerText = translation.de.h3_4;

        p_1.innerText = translation.de.p_1;
        p_2.innerText = translation.de.p_2;
        p_3.innerText = translation.de.p_3;
        p_4.innerText = translation.de.p_4;
        p_5.innerText = translation.de.p_5;
        p_6.innerText = translation.de.p_6;
        p_7.innerText = translation.de.p_7;
        p_8.innerText = translation.de.p_8;
        p_9.innerText = translation.de.p_9;
        p_10.innerText = translation.de.p_10;
        p_11.innerText = translation.de.p_11;
        p_12.innerText = translation.de.p_12;
        p_13.innerText = translation.de.p_13;
        p_14.innerText = translation.de.p_14;
        p_15.innerText = translation.de.p_15;
        p_16.innerText = translation.de.p_16;
        p_17.innerText = translation.de.p_17;
        p_18.innerText = translation.de.p_18;
        p_19.innerText = translation.de.p_19;
    }
}
//End of the method from the YouTube video.