import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { useLoaderData } from 'react-router';

const AllRecipes = () => {
    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe);

    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 py-10 lg:py-28 md:py-20'>
                <h2 className='text-3xl lg:text-5xl text-center font-bold mb-10'>All Recipes Loved by Foodies</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe._id}
                            recipes={recipes}
                            setRecipes={setRecipes}
                            recipe={recipe}></RecipeCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllRecipes;