import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import LottieRect from '../components/LottieRect';
import imgWiter from '../assets/image-1-1.png'
import TestimonialCards from '../components/TestimonialCards';
import { Typewriter } from 'react-simple-typewriter';
import Banner from '../components/Banner';
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe);

    return (
        <div>
            
            <Banner></Banner>
            {/* <div
                className="hero h-[650px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/rR6XwXLt/original-fajita-sizzling-hot-on-iron-plate-2025-03-26-21-19-35-utc.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold"><Typewriter
                            words={['Welcome to Recipe Hub',
                                'Discover Delicious Recipes',
                                'Save Your Favorite Dishes',
                                'Share Your Culinary Creations',
                                'Easy Meals for Busy Days',
                                'Tasty Ideas for Every Occasion',
                                'From Pantry to Plate',
                                'Cook Smarter, Eat Better',
                                'Your Kitchen Companion',
                                'Explore, Cook, Enjoy']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> </h1>
                        <p className="mb-5 text-2xl">
                            Your Personal Kitchen Companion
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            {/* <slider></slider> */}


            {/* Recipe Grid */}
            <div className='max-w-7xl mx-auto py-10 px-5 lg:py-28 md:py-20'>
                <Fade cascade>
                    <h2 className='text-5xl text-center font-bold mb-12'>Top Recipes</h2>
                </Fade>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe._id}
                            recipes={recipes}
                            setRecipes={setRecipes}
                            recipe={recipe}></RecipeCard>)
                    }
                </div>

                <div className='text-center mt-15'>
                    <Link to='/all-recipes' className="btn btn-primary px-7 py-6 text-[20px] text-white hover:bg-secondary border-0 shadow-none">All Recipes</Link>
                </div>
            </div>

            <section className='bg-[#F4E7DF]'>
                <div className='max-w-7xl mx-auto py-20 px-5 lg:py-28 lg:flex mb-5'>
                    <div className='lg:w-1/2 mb-5'>
                        <Slide triggerOnce>
                            <h2 className='text-5xl text-black font-bold mb-10'>Do you need <br></br>⎯ some help?</h2>
                        </Slide>
                        <img src={imgWiter} alt="" />
                    </div>

                    <div className='lg:w-1/2 flex flex-col gap-5'>
                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-2xl font-semibold">
                                How do I add a new recipe?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Navigate to the “Add Recipe” page from the navbar. Fill in the form with all the required details like title, ingredients, instructions, and categories, then click “Add Recipe” to submit.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-2xl font-semibold">
                                Can I edit or delete my submitted recipes?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Yes. Go to the “My Recipes” page to see all the recipes you’ve submitted. You can update or delete any of them directly from there using the buttons on each recipe card.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-2xl font-semibold">
                                Why can’t I like some recipes?
                            </div>
                            <div className="collapse-content text-[16px]">
                                You cannot like your own recipes to ensure fair ranking in the top recipes section. You can, however, like recipes submitted by other users.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-2xl font-semibold">
                                What happens when I click the “Like” button?
                            </div>
                            <div className="collapse-content text-[16px]">
                                When you click “Like” on a recipe details page, the recipe’s like count increases by 1 and is reflected in the database. This helps rank it higher in the “Top Recipes” section.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-2xl font-semibold">
                                How do I use the cuisine filter on the All Recipes page?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Use the dropdown at the top of the All Recipes page to filter recipes by cuisine (e.g., Italian, Mexican). The list will automatically update to match your selection.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <TestimonialCards></TestimonialCards>
            <LottieRect />

        </div >
    );
};

export default Home;