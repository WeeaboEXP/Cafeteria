let products = [
    {
        name: 'Café Americano',
        image1: '../../pic/cup1.jpg',
        image2: '../../pic/cup2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Cappuccino',
        image1: '../../pic/cup3.jpg',
        image2: '../../pic/cup4.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Veranda Blend',
        image1: '../../pic/cup5.jpg',
        image2: '../../pic/cup6.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Caffee Latte',
        image1: '../../pic/cup7.jpg',
        image2: '../../pic/cup8.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Chocolate Mocha',
        image1: '../../pic/cup9.jpg',
        image2: '../../pic/cup10.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Café Misto',
        image1: '../../pic/cup11.jpg',
        image2: '../../pic/cup1.jpg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="../pagamento.html" class="btn-flat btn-hover btn-shop-now">Comprar Agora</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))