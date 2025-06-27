import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import imgWiter from '../assets/image-1-1.png'
import TestimonialCards from '../components/TestimonialCards';
import { Typewriter } from 'react-simple-typewriter';
import Banner from '../components/Banner';
import { Fade, Slide } from "react-awesome-reveal";
import Categorey from '../components/Categorey';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';

const Home = () => {
    const initialRecipe = useLoaderData();
    const [recipes, setRecipes] = useState(initialRecipe);

    return (
        <div>

            <Banner></Banner>


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
                    <Link to='/all-recipes' className="btn btn-primary px-7 py-6 text-[20px] text-white hover:btn-secondary border-0 shadow-none">All Recipes</Link>
                </div>
            </div>

            <AboutSection></AboutSection>




            <Categorey></Categorey>

            <TestimonialCards></TestimonialCards>
            <Services></Services>

            <section className='bg-[#fffdf7]'>
                <div className='max-w-7xl mx-auto py-20 px-5 lg:py-28 lg:flex'>
                    <div className='lg:w-1/2 mb-5'>
                        <Slide triggerOnce>
                            <h2 className='text-5xl text-black font-bold mb-10'>Do you need <br></br>⎯ some help?</h2>
                        </Slide>
                        <img src={imgWiter} alt="" />
                    </div>

                    <div className='lg:w-1/2 flex flex-col gap-5'>
                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-[20px] font-medium">
                                How do I add a new recipe?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Navigate to the “Add Recipe” page from the navbar. Fill in the form with all the required details like title, ingredients, instructions, and categories, then click “Add Recipe” to submit.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-[20px] font-medium">
                                Can I edit or delete my submitted recipes?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Yes. Go to the “My Recipes” page to see all the recipes you’ve submitted. You can update or delete any of them directly from there using the buttons on each recipe card.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-[20px] font-medium">
                                Why can’t I like some recipes?
                            </div>
                            <div className="collapse-content text-[16px]">
                                You cannot like your own recipes to ensure fair ranking in the top recipes section. You can, however, like recipes submitted by other users.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-[20px] font-medium">
                                What happens when I click the “Like” button?
                            </div>
                            <div className="collapse-content text-[16px]">
                                When you click “Like” on a recipe details page, the recipe’s like count increases by 1 and is reflected in the database. This helps rank it higher in the “Top Recipes” section.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-[20px] font-medium">
                                How do I use the cuisine filter on the All Recipes page?
                            </div>
                            <div className="collapse-content text-[16px]">
                                Use the dropdown at the top of the All Recipes page to filter recipes by cuisine (e.g., Italian, Mexican). The list will automatically update to match your selection.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div >
    );
};

export default Home;