
import styles from './amount.module.scss';

interface AmountProps {
    totalAmount: number
}

export function Amount({ totalAmount }:AmountProps) {
    return (
        <div className={styles['container']}>
            <div className={styles['info']}>
                <h3>Итого:</h3>
                <h1>{totalAmount}$</h1>
            </div>

        </div>
    )
}
