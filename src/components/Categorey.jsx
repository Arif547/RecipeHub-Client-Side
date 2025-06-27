import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link, useLoaderData } from 'react-router';

const Categorey = () => {

    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe);
    const [cuisine, setCuisine] = useState('all'); // Default selection
    const [loading, setLoading] = useState(false);
    const uniqueCuisines = ['all', ...new Set(initialRecipe.map(item => item.cuisine))];


    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            let url = 'http://localhost:3000/recipes';
            if (cuisine !== 'all') {
                url = `http://localhost:3000/recipes/cuisine/${cuisine}`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [cuisine]); // Fetch recipes when cuisine changes

    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 py-10 lg:py-28 md:py-20'>
                <h2 className='text-3xl lg:text-5xl text-center font-bold mb-10'>Our Recipes</h2>


                {/* Dropdown for selecting cuisine */}
                <div className="text-center mb-8">
                    <div className="tabs tabs-boxed justify-center flex-wrap gap-1.5">
                        {uniqueCuisines.map((type, idx) => (
                            <a
                                key={idx}
                                className={`tab  ${cuisine === type ? 'tab-active bg-[#008000] text-white' : ''} text-[16px] uppercase border border-[#008000]`}
                                onClick={() => setCuisine(type)}
                            >
                                {type}
                            </a>
                        ))}
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        loading ? (<div className="col-span-full text-center">
                            <span className="loading loading-spinner loading-lg text-primary"></span>
                            <p className="mt-2 text-lg font-medium">Loading recipes...</p>
                        </div>) : (
                            recipes.slice(0, 6).map(recipe => <RecipeCard
                                key={recipe._id}
                                recipes={recipes}
                                setRecipes={setRecipes}
                                recipe={recipe}></RecipeCard>

                            ))
                    }
                </div>

                <div className='text-center mt-15'>
                    <Link to='/all-recipes' className="btn btn-primary px-7 py-6 text-[20px] text-white hover:btn-secondary border-0 shadow-none">All Recipes</Link>
                </div>



            </div>


        </div>

    );
};

export default Categorey;