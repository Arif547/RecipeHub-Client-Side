import React from 'react';
import Lottie from 'lottie-react';
import cookingAnimation from '../assets/food.json'; // Replace with your Lottie file

const AboutSection = () => {
    return (
        <div className="bg-[#fffdf7] text-gray-800">

            {/* Section 1: Hero */}
            <section className="py-16 px-4 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Lottie animationData={cookingAnimation} loop={true} />
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-green-700 mb-4">About RecipeHub</h2>
                        <p className="text-lg mb-4">
                            Welcome to <strong>RecipeHub</strong> — your ultimate destination for discovering, sharing, and enjoying the world’s best recipes.
                        </p>
                        <p className="text-lg mb-4">
                            Whether you're experimenting in the kitchen or preparing family favorites, RecipeHub helps you create magic with ingredients and love.
                        </p>
                        <p className="text-lg">Let’s make cooking easier, tastier, and more fun — together.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutSection;
