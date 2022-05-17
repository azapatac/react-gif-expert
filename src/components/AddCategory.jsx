import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handdleAdd = () => {       
        setInputValue(inputValue);
    }
    
    const handdleOnChange = (e) => {
        // console.log('Target: ' + e.target.value);
        setInputValue(e.target.value);
        // console.log('Input: '+ inputValue);
    }

    const handdleSubmit = (e) => {        
        console.log('i ' + inputValue);
        e.preventDefault();
        //console.log('e ' + e.target);
        //setCategories( cats => [...cats, inputValue]);  
        
        //TODO Validate why inputValue is undefined
        if (inputValue !== undefined && inputValue.trim().length > 2) {          
            console.log('entro  ')  
            setCategories( cats => [inputValue, ...cats]);  
            setInputValue('')
        }
    }

    return (

        <form onSubmit={handdleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handdleOnChange }/>

            <button onClick={handdleAdd}>Add</button>

            {/* <h1>{ inputValue }</h1> */}
        </form>
  )    
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired 
}
