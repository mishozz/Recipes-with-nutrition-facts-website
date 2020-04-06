import React from 'react';
import RecipeCard from '../recipe-card';
import {CardDeck} from 'react-bootstrap';
import './index.css';
import { render } from '@testing-library/react';

const renderRecipeCards = (data) => {
        return data.map((item,index)=>{
            return (
                <RecipeCard key={index.toString()} {...item.recipe}></RecipeCard>
            )
        })
}

const RecipeList = (props) => {
    const {data} = props;
    return (
        <div>
            { data.length !== 0 ?
            <CardDeck>
            {renderRecipeCards(data)}
             </CardDeck> :
             <p>No data</p>
            }
        </div>
    )
}

export default RecipeList