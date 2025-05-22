import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { useLoaderData } from 'react-router';
import Cuisine from '../components/Cuisine';

const AllRecipes = () => {
    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe);
    const [cuisine, setCuisine] = useState('all'); // Default selection


    useEffect(() => {
        const fetchRecipes = async () => {
            let url = 'https://recipe-server-ashy.vercel.app/recipes';
            if (cuisine !== 'all') {
                url = `https://recipe-server-ashy.vercel.app/recipes/cuisine/${cuisine}`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, [cuisine]); // Fetch recipes when cuisine changes

    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 py-10 lg:py-28 md:py-20'>
                <h2 className='text-3xl lg:text-5xl text-center font-bold mb-10'>All Recipes Loved by Foodies</h2>


                {/* Dropdown for selecting cuisine */}
                <div className="text-center mb-8">
                    <h3 className='text-2xl font-medium mb-4'>Filter By Cuisine: </h3>
                    <select
                        className="p-2 border rounded"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}

                    >
                        <option value="all">All</option>
                        {
                            initialRecipe.map(cuisine => (
                                <option key={cuisine._id} value={cuisine.cuisine}>
                                    {cuisine.cuisine}
                                </option>
                            ))}
                        {/* {
                            initialRecipe.map(cuisine => <Cuisine key={cuisine._id} cuisine={cuisine}></Cuisine>)
                        } */}
                        {/* <option value="all">All</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Indian">Indian</option>
                        <option value="Others">Others</option> */}
                        {/* Add more cuisines as needed */}
                    </select>
                </div>


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