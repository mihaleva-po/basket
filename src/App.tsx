import React, {useState} from 'react';
import './App.css';
import {ListProducts} from "./components/listProducts/listProducts";
import {Amount} from "./components/amount/amount";


function App() {

    const [totalAmount, setTotalAmount] = useState(0);

    const handleTotalAmountChange = (amount: number) => {
        setTotalAmount(amount);
    };

    return (
        <div className="App">
            <ListProducts onTotalAmountChange={handleTotalAmountChange}/>
            <Amount totalAmount={totalAmount}/>
        </div>
    );
}

export default App;
