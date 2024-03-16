import styles from './productCard.module.scss';

export interface Product {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    count: number
}

interface ProductCardProps {
    product: Product;
    onCountChange: (newCount: number) => void;
    onDeleteProduct: () => void;
}


export function ProductCard({product, onCountChange, onDeleteProduct}: ProductCardProps) {

    const handleClickMinus = () => {
        if (product.count > 1) {
            onCountChange(product.count - 1);
        }
    };

    const handleClickPlus = () => {
        if (product.count < 10) {
            onCountChange(product.count + 1);
        }
    }

    const handleClickDelete = () => {
        onDeleteProduct();
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container-img']}>
                <img alt={'icon'} src={product.image}/>
            </div>

            <div className={styles['text']}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={styles['container-svg']}>
                    <svg onClick={handleClickDelete} width="31" height="31" viewBox="0 0 59 59" xmlSpace="preserve">
                        <g>
                            <path
                                d="M47.125 7.75H43.25a1 1 0 0 1-1-1V5c0-2.757-2.242-5-5-5h-15.5c-2.757 0-5 2.243-5 5v1.75a1 1 0 0 1-1 1h-3.875a5 5 0 0 0-5 5v4.75a1 1 0 0 0 1 1h43.25c.554 0 1-.447 1-1v-4.75c0-2.762-2.237-5-5-5zm-8.875-1c0 .553-.446 1-1 1h-15.5a1 1 0 0 1-1-1V5c0-.552.449-1 1-1h15.5a1 1 0 0 1 1 1v1.75zM46.877 21h-34.75a1 1 0 0 0-1 1v32a5 5 0 0 0 5 5h26.75a5 5 0 0 0 5-5V22a1 1 0 0 0-1-1zM21.376 52a2 2 0 0 1-4 0V27.25a2 2 0 0 1 4 0V52zm10.125 0a2 2 0 0 1-4 0V27.25a2 2 0 0 1 4 0V52zm10.124 0a2 2 0 0 1-4 0V27.25a2 2 0 0 1 4 0V52z"
                                fill="#030104" data-original="#030104"/>
                        </g>
                    </svg>
                </div>

            </div>
            <div className={styles['number']}>
                <div className={styles['count']}>
                    <p className={styles['btn']} onClick={handleClickMinus}>-</p>
                    <p>{product.count}</p>
                    <p className={styles['btn']} onClick={handleClickPlus}>+</p>
                </div>

                <p className={styles['price']}> {product.price}$ </p>
            </div>
        </div>
    )
}
