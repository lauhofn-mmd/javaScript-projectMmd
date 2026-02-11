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
    }
];

const container = document.getElementsByClassName('products-cards')[0];

for (let i = 0; i < produkter.length; i++) {
    container.innerHTML += 
        '<div>' +
            '<img src="' + produkter[i].src + '" ' +
                 'class="product-picture" ' +
                 'alt="' + produkter[i].alt + '" ' +
                 'data-main="' + produkter[i].src + '" ' +
                 'data-hover="' + produkter[i].hover + '">' +
            '<p class="product-title"><a href="' + produkter[i].link + '">' + produkter[i].name + '</a></p>' +
            '<p class="product-price">' + produkter[i].pris + '</p>' +
            '<button>Læg i indkøbskurv</button>' +
        '</div>';
}

const produktBilleder = document.getElementsByClassName('product-picture');

for (let i = 0; i < produktBilleder.length; i++) {
    addHoverEffect(produktBilleder[i]);
}

function addHoverEffect(billede) {

    const mainImg = billede.dataset.main;
    const hoverImg = billede.dataset.hover;

    billede.addEventListener('mouseover', () => {
        billede.src = hoverImg;
    });

    billede.addEventListener('mouseout', () => {
        billede.src = mainImg;
    });
}
