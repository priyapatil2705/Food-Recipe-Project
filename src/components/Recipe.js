//import React, { useState , useEffect } from 'react';
// import axios from 'axios';
import React from "react";

const Recipe = (props) => {
    const {recipes} = props;
    return (
        <> 
            <div className='row'>
               {
                    recipes.map((recipe,key) => {
                        return (
                            <div className='col-md-4' key={recipe.recipe.label}>
                                <div className='card py-2'>
                                    <img className="img-fluid w-50 mx-auto rounded-circle" src={recipe.recipe.image}/>
                                    <div className='card-body'>
                                        <label>{recipe.recipe.label}</label>
                                    </div>
                                    {/* <ul className="list-group list-group-flush">
                                        {
                                            recipe.recipe.ingredientLines.map(ingredient => {
                                                return (
                                                    <li className="list-group-item">{ingredient}</li>
                                                )
                                            })
                                        }
                                    </ul> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Recipe