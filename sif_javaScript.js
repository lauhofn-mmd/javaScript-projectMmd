console.log("sif.js is running...")

const translation = {
    dk: {
        header: "Velkommen til OilsByNature",
        topMenu_venster: "Søg",
        topMenu_tekst: "Valuta",
        hjem: "Hjem",
        butik: "Butik" + "Shop nu",
        omOS: "Om os",
        kontakt: "Kontakt",
        blog: "Blog",
        limited_storTekst: "Vinterens fire essentials Fire olier - én komplet vinterplejerutine. Det perfekte julegavesæt",
        h2: "Mød vores produkter" + "Abonner på vores e-mails",
        product_title1: "Økologisk Koldpresset Mandelolie",
        product_title2: "Økologisk Koldpresset Abrikoskerneolie",
        product_title3: "Økologisk Koldpresset Arganolie",
        product_title4: "Økologisk Koldpresset Jojobaolie",
        button: "Læg i indkøbskurv",
        review1: "Den her jojobaolie er simpelthen skøn - dejlig tynd, nem at smøre ud og trækker hurtigt ind i huden. Den er jeg især fan af",
        review2: "Min kone har testet selve olien, da hun bruger arganolie til hverdag. Hun synes at olien var af god kvalitet og tykkere end den hun normalt bruger. Den var både god til hår og hud. Især den måde den tørrede ind på.",
        review3: "Jeg er massør og jeg er helt vild med jeres mandelolie - det er blødt, har den helt perfekt konsistens (ikke for fedtet og tykt), det føles dejligt på huden og fungerer helt perfekt som massageolie. Nok den bedste, jeg har haft i hænderne og jeg har trods alt 12 års erfaring som massør :)",
        review4: "Jeg elsker jeres abrikoskerneolie - trækker super hurtigt ind i huden, mærkes dejlig blødt og er skøn i konsistensen. Som hudplejeprodukt er den helt fantastisk.",
        p: "Oplev essensen af naturen i dens reneste form med vores 100% naturlige økologiske olier. Udformet uden tilsætningsstoffer eller kunstige dufte, fanger vores olier den sande essens af naturen, og er med til at skabe synlige resultater for både hud og hår. Hver dråbe er et vidnesbyrd om vores forpligtelse til Moder Jord - om enkel og effektiv forkælelse til krop og sjæl, uden at drive rovdrift på hendes fantastiske gaver." + "Vores olier er ikke blot skabt med omtanke på renhed og bæredygtighed, men også ud fra principper om medfølelse til alle jordens skabninger. Vi tror på at enhver selvplejende rutine tager udgangspunkt i omtanke, betænksomhed og respekt for andre væsener og derfor er vores produkter 100 % veganske og uden nogen form for animalske ingredienser." + "Dette betyder også, at du kan være sikker på, at vores olier er produceret ud fra klare etiske standarder, uden nogen form for dyreforsøg. Ved at købe cruelty-free produkter, er du med til at bane vej for en fremtid, hvor respekt for dyr og skønhedspleje går hånd i hånd." + "Tilmeld dig vores e-mail-liste for eksklusive tilbud og de seneste nyheder." +
        "Danish Webstore Group ApS" + "Møllevej 2A" + "9240 Nibe" + "CVR: 37640263" + "Mail: info@oilsbynature.dk" + "Nem bestilling og hurtig levering." + "Vi afsender alle ordrer dagligt" + "Hurtig levering på 2-4 dage." +
        "Forretningsbetingelser" + "Cookie- og privatlivspolitik" + "Vi værdsætter din mening!" + "Sørg for at bedømme din oplevelse på Trustpilot",
        h3: "Olier af natur" + "Sikker forsendelse" + "Menu" + "Kontakt" + "Arbejd hos os" + "Returret" + "Trustpilot",
    },

    en: {
        header: "Welcome to OilsByNature",
        topMenu_venster: "Search",
        topMenu_tekst: "Currency",
        hjem: "Home",
        butik: "Shop",
        omOS: "About Us",
        kontakt: "Contact",
        blog: "Blog",
        limited_storTekst: "Four winter essentials Four oils - one complete winter care routine. The perfect Christmas gift set",
        button: "Shop now" + "Add to cart",
        h2: "Meet our products",
        h2: "Subscribe to our emails",
        product_title1: "Organic Cold Pressed Almond Oil",
        product_title2: "Organic Cold pressed Apricot Kernel Oil",
        product_title3: "Organic Cold-Pressed Argan Oil",
        product_title4: "Organic Cold Pressed Jojoba Oil",
        review1: "This jojoba oil is just wonderful - pleasantly light, easy to apply, and absorbs quickly into the skin. I'm especially a fan of that one.",
        review2: "My wife tested the oil, as she uses argan oil on a daily basis. She thinks the oil is of good quality and thicker than the one she normally uses. It was great for both hair and skin, especially the way it absorbed into the skin.",
        review3: "I am a massage therapist and I'm absolutely in love with your almond oil - it's soft, has the perfect consistency (not too greasy or thick), feels lovely on the skin, and works perfectly as a massage oil. Probably the best I've ever had in my hands, and I've got 12 years of experience as a massage therapist :)",
        review4: "I love your apricot oil - absorbs super fast into the skin, feels wonderfully soft, and has a great consistency. As a skincare product, it's absolutely fantastic.",
        p: "Experience the essence of nature in its purest form with our 100% natural organic oils. Formulated without additives or artificial fragrances, our oils capture the true essence of nature and help create visible results for both skin and hair. Every drop is a testament to our commitment to Mother Earth—to simple and effective pampering for body and soul, without overexploiting her amazing gifts." + "Our oils are not only created with purity and sustainability in mind, but also based on principles of compassion for all creatures on earth. We believe that every self-care routine should be based on consideration, thoughtfulness, and respect for other beings, which is why our products are 100% vegan and free from any animal ingredients." + "This also means that you can be sure that our oils are produced according to clear ethical standards, without any form of animal testing. By buying cruelty-free products, you are helping to pave the way for a future where respect for animals and beauty care go hand in hand." + "Sign up for our email list for exclusive offers and the latest news." +
        "Danish Webstore Group ApS" + "Møllevej 2A" + "9240 Nibe" + "CVR: 37640263" + "Mail: info@oilsbynature.dk" + "Easy ordering and fast delivery." + "We dispatch all orders daily." + "Quick delivery in 2-4 days." +
        "Business terms and conditions" + "Cookie- and privacy policy" + "We appriciate your opinion!" + "Make sure you rate your experience on Trustpilot" + "Contact" + "Work with us" + "Return policy",
        h3: "Oils By Nature",
        h3: "Secure Shipping",
        h3: "Menu",
        h3: "Trustpilot",
    },

    de: {
        header: "Willkommen bei OilsByNature",
        topMenu_venster: "Suche",
        topMenu_tekst: "Währung",
        hjem: "Heim",
        butik: "Genschäft",
        omOS: "Om os",
        kontakt: "Kontakt",
        blog: "Blog",
        limited_storTekst: "Vier Winter-Essentials Vier Öle - eine komplette Winterpflege-Routine. Das perfekte Weihnachtsgeschenk-Set",
        button: "Jetzt einkaufen" + "In den Warenkorb legen",
        h2: "Lernen Sie unsere Produkte kennen" + "Abonnieren Sie unsere E-Mails",
        product_title1: "Organisches Kaltgepresstes Mandelöl",
        product_title2: "Organisches Kaltgepresstes Aprikosenkernöl",
        product_title3: "Organisches Kaltgepresstes Arganöl",
        product_title4: "Organisches Kaltgepresstes Jojobaöl",
        review1: "Dieses Jojobaöl ist einfach wunderbar - angenehm leicht, lässt sich gut auftragen und zieht schnell in die Haut ein. Davon bin ich besonders begeistert.",
        review2: "Meine Frau hat das Öl getestet, da sie täglich Arganöl verwendet. Sie findet das Öl qualitativ hochwertig und dickflüssiger als das, das sie sonst verwendet. Es war sowohl für die Haare als auch für die Haut super, vor allem die Art, wie es in die Haut einzog.",
        review3: "Ich bin Massagetherapeutin und bin absolut verliebt in Ihr Mandelöl - es ist weich, hat die perfekte Konsistenz (nicht zu fettig oder dick), fühlt sich wunderbar auf der Haut an und funktioniert perfekt als Massageöl. Wahrscheinlich das Beste, das ich je in den Händen hatte, und ich habe 12 Jahre Erfahrung als Massagetherapeutin :)",
        review4: "Ich liebe euer Aprikosenöl - zieht super schnell in die Haut ein, fühlt sich wunderbar weich an und hat eine tolle Konsistenz. Als Pflegeprodukt einfach klasse.",
        p: "Entdecken Sie die Essenz der Natur in ihrer reinsten Form mit unseren 100% natürlichen, biologischen Ölen. Ohne Zusätze oder künstliche Duftstoffe hergestellt, fangen unsere Öle die wahre Essenz der Natur ein und liefern sichtbare Ergebnisse für Haut und Haar. Jeder Tropfen ist ein Beweis für unser Engagement für Mutter Erde - eine einfache und wirksame Pflege für Körper und Seele, die ihre wunderbaren Gaben respektiert." + "Unsere Öle werden nicht nur mit einem Fokus auf Reinheit und Nachhaltigkeit hergestellt, sondern auch nach Prinzipien des Mitgefühls für alle Lebewesen der Erde. Wir glauben daran, dass jede Selbstpflegeroutine auf Achtsamkeit, Rücksichtnahme und Respekt für andere Wesen basiert. Deshalb sind unsere Produkte 100 % vegan und enthalten keinerlei tierische Inhaltsstoffe." + "Das bedeutet auch, dass Sie sicher sein können, dass unsere Öle nach klaren ethischen Standards produziert werden, ohne jegliche Form von Tierversuchen. Indem Sie cruelty-free Produkte kaufen, tragen Sie dazu bei, den Weg für eine Zukunft zu ebnen, in der Respekt für Tiere und Schönheitspflege Hand in Hand gehen." + "Tragen Sie sich in unsere E-Mail-Liste ein, um exklusive Angebote und die neuesten Nachrichten zu erhalten." +
        "Danish Webstore Group ApS" + "Møllevej 2A" + "9240 Nibe" + "CVR: 37640263" + "Mail: info@oilsbynature.dk" + "Einfache Bestellung und schnelle Lieferung." + "Wir versenden alle Bestellungen täglich." + "Schnelle Lieferung in 2-4 Tagen." +
        "Geschäftsbedingungen" + "Cookie- und Datenschutzrichtlinie" + "Wir freuen uns über Ihre Meinung!" + "Stellen Sie sicher, dass Sie Ihre Erfahrung auf Trustpilot bewerten" + "Kontakt" + "Arbeite mit uns" + "Rückgaberecht",
        h3: "Oils By Nature" + "Sicherer Versand" + "Speisekarte" + "Trustpilot",  
    }
}

const languageSelectop = document.querySelector("select");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

let h3 = document.getElementById("h3");
let h2 = document.getElementById("h2");

const setLanguage = (language) => {
    if (language == "dk"){
        h2.innerText = translation.dk.h2;
        h3.innerText = translation.dk.select;


    }else if (language == "en"){
        h2.innerText = translation.en.select;
        h3.innerText = translation.en.select;

    }else if (language == "de"){
        h2.innerText = translation.de.select;
        h3.innerText = translation.de.select;
    }
}