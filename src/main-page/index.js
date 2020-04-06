import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import CarouselSlider from '../carousel';
import { Container } from 'react-bootstrap';
import styles from './index.module.css';

const MainPage = () => {
    return (
        <Container className={styles["container"]}>
            <Header/>
            <div>
                <CarouselSlider/>
            </div>
        </Container>
    )
}

export default MainPage;