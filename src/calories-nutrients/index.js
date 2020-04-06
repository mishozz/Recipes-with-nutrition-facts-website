import React from 'react';
import './index.css';

const hundredGrams = 100;

const convertPerHundredGrams = (calories, weight) => {
    return calories * hundredGrams / weight;
}

const CaloriesAndNutrients = (props) => {
    const {label,
        image,
        healthLabels,
        dietLabels,
        calories,
        ingridientLines,
        totalWeight,
        totalNutrients
    } = props.location.state.data;

    const {
        PROCNT,
        FAT,
        CHOCDF
    } = totalNutrients

    const caloriesQuantity = Math.floor(convertPerHundredGrams(calories,totalWeight));
    const proteinQuantity = Math.floor(convertPerHundredGrams(PROCNT.quantity,totalWeight));
    const fatQuantity = Math.floor(convertPerHundredGrams(FAT.quantity,totalWeight));
    const carbsQuantity = Math.floor(convertPerHundredGrams(CHOCDF.quantity,totalWeight));

    return (
        <div className="calories-nutrients-container">
            <div className="calories-nutrients-inner">
                <h3>{caloriesQuantity} calories per 100g.</h3>
            </div>
            <div className="calories-nutrients-inner">
                <ul className="calories-nutrients-ul">
                    <li className="calories-nutrients-li">Protein: {proteinQuantity}g.</li>
                    <li className="calories-nutrients-li">Carbs: {carbsQuantity}g.</li>
                    <li className="calories-nutrients-li">Fat: {fatQuantity}g.</li>
                </ul>
            </div>
        </div>
    )
}

export default CaloriesAndNutrients;