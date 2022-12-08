import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Currency = () => {
    const setCurrency = useState()[1];

    const options = [
        '£ Pound', '₹ Ruppee', '€ Euro', '$ Dollar'
        ];
    const defaultOption = options[0];

    return (
        <div className='alert alert-info' style={{marginLeft: '2rem' , size: 4, width:300, display: "flex"}}>
            Currency:&nbsp;
            <div style={{ height:50}}>
            <Dropdown 
                options={options} 
                onChange={setCurrency} 
                value={defaultOption} 
                placeholder="Select an option" 
                style={{ height:20 }}
            />
            </div>

            {/* 
            <input type="text" name="product" list="currencytName" />
            <datalist id="currencytName">
                <option>£ Pound</option>
                <option>₹ Ruppee</option>
                <option>€ Euro</option>
                <option>$ Dollar</option>
            </datalist> */}
             {/* <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={submitEvent}>
                        </input>  */}
              
        </div>
    );
};

export default Currency;