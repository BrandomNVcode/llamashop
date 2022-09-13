

export const getProducts = async () => {

    const resp = await fetch(`https://fakestoreapi.com/products`);
    let products = await resp.json();

    products = products.filter(product => product.category !== 'electronics');

    return products;
}





