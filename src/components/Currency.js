import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event['value']
        });
    };

    const options = [
        ' £ ', ' ₹ ', ' € ', ' $ '
        ];
    const defaultOption = options[0];

    return (
        <div className='alert alert-info' style={{marginLeft: '2rem' , size: 4, width:300, display: "flex"}}>
            Currency:&nbsp;
            <div style={{ height:50}}>
            <Dropdown 
                options={options} 
                onChange={changeCurrency} 
                value={defaultOption} 
                placeholder="Select an option" 
                style={{ height:20 }}
            />
            </div>              
        </div>
    );
};

export default Currency;