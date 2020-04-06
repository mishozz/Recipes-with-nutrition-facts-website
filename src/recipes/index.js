import React, {useEffect,Fragment} from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from '../header';
import RecipeList from '../recipe-list';
import styles from './index.module.css';

const Recipes = (props) => {
    const {recipeHits} = props.location.state;
    const location = useLocation();


    useEffect(() => {
        console.log(recipeHits);
    }, [location])

    return (
        <Container className={styles["container"]}>
            <Header/>        
            <RecipeList data={recipeHits}/>
        </Container>
    )
}

export default Recipes;