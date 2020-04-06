import React from 'react';
import './index.css';

const Ingridients = (props)=>{
    
    const {ingredientLines} = props;
    
    const renderIngredients = (ingredientLines)=> {
        return ingredientLines.map((item,index)=>{
            return (
                <li key={index.toString()}>
                    {item}
                </li>
            )
        })
    }
    
    return (
        <div>
            <ul className="ingredients-ul">
                {renderIngredients(ingredientLines)}
            </ul>
        </div>
    )
}

export default Ingridients;