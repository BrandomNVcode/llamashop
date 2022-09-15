

export const getProducts = async () => {

    const resp = await fetch(`https://fakestoreapi.com/products`);
    let products = await resp.json();

    products = products.filter(product => product.category !== 'electronics');

    return products;
}


export const getSingleProduct = async (id) => {

    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    let product = await resp.json();

    return product;
}







