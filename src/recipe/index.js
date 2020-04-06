import React from 'react';
import {Card, Container} from 'react-bootstrap';
import Header from '../header';
import CaloriesAndNutrients from '../calories-nutrients'
import Ingridients from '../ingridients';
import styles from "./index.module.css";

const Recipe = (props) => {
    const {label,
        image,
        healthLabels,
        dietLabels,
        calories,
        ingredientLines,
        totalWeight,
        totalNutrients
    } = props.location.state.data;
    
    return (
    <Container className={styles["container"]}>
        <Header/>
        <div className={styles["recipe-container"]}>
            <Card className={styles.card}>
                <Card.Img className={styles["card-img-top"]} variant="top" src={image} />
                <Card.Body className={styles["card-body"]}>
                    <Card.Title className={styles["card-title"]}>{label}</Card.Title>
                        <ul className={styles["product-card-ul"]}>
                            <li className={styles["product-card-li"]}>Total weight: {Math.round(totalWeight)} g.</li>
                            <li className={styles["product-card-li"]}>Total Calories: {Math.round(calories)} kcal.</li>
                        </ul>
                </Card.Body>
                </Card>
            <div className={styles["recipe-info-container"]}>
                <CaloriesAndNutrients {...props} />
                <Ingridients ingredientLines={ingredientLines}/>
            </div>
        </div>
    </Container>
    )
}

export default Recipe;