


export async function getProducts() {
    const URL = 'https://fakestoreapi.com/products';
    const response = await fetch(URL);
    return response.json();
}
