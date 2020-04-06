import React from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';
import styles from './index.module.css';

const RecipeCard = (props) => {
    const {image, label, calories, totalWeight } = props
    return (
    <Card className={styles["card"]} style={{ width: '18rem' }}>
        <Card.Img className={styles["card-img-top"]} variant="top" src={image} />
        <Card.Body className={styles["card-body"]}>
            <Card.Title className={styles["card-title"]}>{label}</Card.Title>
                <ul className={styles["product-card-ul"]}>
                    <li className={styles["product-card-li"]}>Total weight: {Math.round(totalWeight)} g.</li>
                    <li className={styles["product-card-li"]}>Total Calories: {Math.round(calories)} kcal.</li>
                </ul>
            <Button className={styles["product-card-btn"]} variant="primary">
                <Link to={{
                    pathname: `/recipe/:${label}`,
                    state: {
                        data : {...props}
                    }
                }}className={styles["product-card-link"]}>View details</Link>
            </Button>
        </Card.Body>
    </Card>
    )
}


export default RecipeCard;