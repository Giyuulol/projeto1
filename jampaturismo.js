document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        {
            imgSrc: 'visita-guiada-joao-pessoa.avif', 
            title: 'Passeio Centro Histórico',
            description:'Aproveite o Incrivel centro histórico de João Pessoa.',
            link:'https://www.civitatis.com/pt/joao-pessoa/visita-guiada-joao-pessoa?aid=117&cmp=cu&cmpint=119787'
            
        },
        {
            imgSrc: 'passeiojacare.jpg', 
            title: 'Passeio Pôr do Sol',
            description:'Aproveite o maravilhoso Pôr do Sol do Jacaré.',
            link:'https://www.getyourguide.com/regiao-nordeste-do-brasil-l1835/excursao-ao-por-do-sol-na-praia-do-jacare-t26543/?ranking_uuid=6289c102-57b8-44fd-bac0-dda3b5c5bab9'
            
        },
        {
            imgSrc: 'passeiolitoralsul.jpg',
            title: 'Passeio Litoral Sul',
            description:'Aproveite as Praias do Litoral Sul.',
            link:'https://www.getyourguide.com/regiao-nordeste-do-brasil-l1835/de-joao-pessoa-excursao-de-1-dia-praias-do-litoral-sul-t26533/?ranking_uuid=f86ef3ab-a986-4537-9747-a7eca35dba4a'
        }
    ];

    const cardContainer = document.getElementById('cardContainer');

    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const cardLink = document.createElement('a');
        cardLink.href = card.link; 
        cardLink.setAttribute('target', '_blank');

        const cardImage = document.createElement('img');
        cardImage.src = card.imgSrc;
        cardImage.alt = card.title;
        cardLink.appendChild(cardImage);

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card-title';
        cardTitle.textContent = card.title;

        const cardDescription = document.createElement('p');
        cardDescription.className = 'card-description';
        cardDescription.textContent = card.description;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);

        cardLink.appendChild(cardContent);
        cardElement.appendChild(cardLink);


        cardContainer.appendChild(cardElement);
    });
});