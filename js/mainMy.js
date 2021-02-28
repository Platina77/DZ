let products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

function renderProducts(list) {
    function renderProduct(title, price){
        document.querySelector('.products').insertAdjacentHTML("beforeend", `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`);
    }
    
    list.forEach(item => {
        return renderProduct(item.title, item.price);
    });
}


renderProducts(products);

// const renderProducts = function(list) {
//     const productList = list.forEach(item => {
//         const renderProduct = (title, price) => {
//             return `<div class="product-item">
//                         <h3>${title}</h3>
//                         <p>${price}</p>
//                         <button class="by-btn">Добавить в корзину</button>
//                     </div>`;
//         }
//         renderProduct(item.title, item.price);
        
//     });
//     document.querySelector('.products').insertAdjacentHTML u = productList;
// };