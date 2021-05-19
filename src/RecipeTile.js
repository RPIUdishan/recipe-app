import React from 'react';
import './RecipeTile.css';

function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        != null && (
            <div className="recipeTile">
                <img src={recipe["recipe"]["image"]} className="recipeImage" />
                <p className="recipeName">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}


export default RecipeTile;
