import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`} style={{ marginLeft: '2rem' , size: 4, width:250}}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;