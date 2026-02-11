// Array
const produkter = [ 

    {
        src: 'billeder/mandel-main.webp',
        alt: 'Mandelolie',
        link: '#',
        name: 'Økologisk Koldpresset Mandelolie',
        pris: '149,00 DKK',
        hover: 'billeder/mandel-second.webp',
    },

    {
        src: 'billeder/abrikos-main.webp',
        alt: 'Abrikos',
        link: '#',
        name: 'Økologisk Koldpresset Abrikosolie',
        pris: '149,00 DKK',
        hover: 'billeder/abrikos-second.webp',
    },

    {
        src: 'billeder/argan-main.webp',
        alt: 'Arganolie',
        link: '#',
        name: 'Økologisk Koldpresset Jojobaolie',
        pris: '149,00 DKK',
        hover: 'billeder/argan-second.webp',        
    },

    {
        src: 'billeder/jojoba-main.webp',
        alt: 'Arganolie',
        link: '#',
        name: 'Økologisk Koldpresset Mandelolie',
        pris: '149,00 DKK',
        hover: 'billeder/jojoba-second.webp',  
    }, 
]

const container = document.getElementsByClassName('products-cards')[0];

for (let i = 0; i < produkter.length; i++) {
    container.innerHTML += '<div> <img src="' + produkter[i].src + '" alt="' + produkter[i].alt + '"> <p class="product-title"><a href="' + produkter[i].link + '">' + produkter[i].name + '</a></p> <p class="product-price">' + produkter[i].pris + '</p> <button>Læg i indkøbskurv</button></div>'
}