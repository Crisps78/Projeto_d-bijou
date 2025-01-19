const products =[
    { "id": "1", "name":"Conjunto Nó-(Choker regulável e brinco)-Dourado", "price": 25.5, "link":"https://pag.ae/7_hhbDnxN", "img": "img/1.jpeg"},
    { "id": "2", "name":"Conjunto Nó-(Choker regulável e brinco)-Prateado", "price": 25.5, "link":"", "img": "img/2.jpeg"},
    { "id": "3", "name":"Brinco Ear Cuff-Prateado", "price": 19.5, "link":"", "img": "img/3.jpeg"},
    { "id": "4", "name":"Meia Pétala-Prateado", "price": 15.5, "link":"", "img": "img/4.jpeg"}
];

products.forEach(createProduct);

function createProduct(product) {
    const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const item = `<div class="gallery-item">
        <img src="${product.img}" alt="Imagem ${product.id}" data-toggle="modal" data-target="#imageModal" onclick="openModal(this)">
        <h5>${product.name}</h5>
        <p><strong>Preço: ${formattedPrice}</strong></p>
        <a href="${product.link}" target="_blank">
          <button class="btn btn-success">Comprar</button>
        </a>
    </div>`;

    const galery = document.querySelector(".gallery");
    const currentHTML = galery.innerHTML;

    galery.innerHTML = currentHTML + item;
}



