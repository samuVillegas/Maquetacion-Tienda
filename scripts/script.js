const data = localStorage.getItem('data');

const loadProducts = () => {
    const dataObj = data !== null? JSON.parse(data):[];
    const items = document.getElementById('items');
    let content = '';
    dataObj.forEach(element => {
        content +=`
        <div class="card m-3" style="width: 18rem;">
            <img src="${element.product_img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.product_description}</h5>
                <p class="card-text">${element.product_price}</p>
                <a href="#" class="btn btn-primary" onclick='addProduct(${element.product_id})'>
                    <img src='images/plus-square.svg'> Añadir carrito
                </a>
            </div>
        </div>
        `
    });

    items.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () =>{
    loadProducts();
})

const addProduct = (id) =>{
    const flag = window.confirm('¿Estás seguro de agregar al carrito este producto?');
    if(flag){
        //Buscar en el array de data del local que id corresponde y almacenarlo en otro campo del local
    }
}

