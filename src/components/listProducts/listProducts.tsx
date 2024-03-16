import styles from './listProducts.module.scss';
import {Product, ProductCard} from "../productCard/productCard";
import {useEffect, useState} from "react";
import {getProducts} from "../api/getProducts";

interface ListProductsProps {
    onTotalAmountChange: (amount: number) => void; // тип функции, принимающей число
}

export function ListProducts({onTotalAmountChange}: ListProductsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsWithCount, setProductsWithCount] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        setProductsWithCount(products.map(product => ({...product, count: 1})));
    }, [products]);

    const handleCountChange = (productId: number, newCount: number) => {
        const updatedProducts = productsWithCount.map(product => {
            if (product.id === productId) {
                return {...product, count: newCount};
            }
            return product;
        });
        setProductsWithCount(updatedProducts);
    };

    const handleDeleteProduct = (productId: number) => {
        const updatedProducts = productsWithCount.filter(product => product.id !== productId);
        setProductsWithCount(updatedProducts);
    };

    const totalAmount = productsWithCount.reduce(
        (total, product) => total + product.price * product.count, 0);

    console.log(typeof (totalAmount));

    let amount = Number(totalAmount.toFixed(2));

    useEffect(() => {
        onTotalAmountChange(amount);
    }, [amount, onTotalAmountChange]);

    return (
        <div className={styles['container']}>
            {productsWithCount.map((product, i) => (
                <ProductCard
                    product={product}
                    onCountChange={(newCount) => handleCountChange(product.id, newCount)}
                    onDeleteProduct={() => handleDeleteProduct(product.id)}
                    key={i}
                />
            ))}
        </div>
    );
}
