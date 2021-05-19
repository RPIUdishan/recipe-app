import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './RecipeTile.css';

function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        != null && (
            <div className="recipeTile">
                <Row>
                    <Col>
                        <img src={recipe["recipe"]["image"]} className="recipeImage" />
                        <p className="recipeName">{recipe["recipe"]["label"]}</p>
                    </Col>
                </Row>
            </div>
        )
    );
}


export default RecipeTile;
