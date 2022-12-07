import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { totalExpenses  } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');

    const submitEvent = (event) => {
        if(event.target.value > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }
        if(event.target.value < totalExpenses) {
            alert("The value cannot be less than spent £"+totalExpenses);
            return;
        }
        setBudget(event.target.value);
    }

    return (
        <div className='alert alert-info'>
            <span>Currency:
            <input type="text" name="product" list="currencytName" />
            <datalist id="currencytName">
                <option>£ Pound</option>
                <option>₹ Ruppee</option>
                <option>€ Euro</option>
                <option>$ Dollar</option>
            </datalist>
             {/* <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={submitEvent}>
                        </input>  */}
            </span>
        </div>
    );
};

export default Currency;