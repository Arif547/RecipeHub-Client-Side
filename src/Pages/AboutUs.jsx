import React from 'react';
import Lottie from 'lottie-react';
import cookingAnimation from '../assets/food.json'; // Replace with your Lottie file

const AboutUs = () => {
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

            {/* Section 2: Our Mission */}
            <section className="py-[112px] px-4 md:px-12 bg-green-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-5xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-lg">
                        At RecipeHub, we aim to empower every home cook to explore their creativity and embrace healthy, delicious cooking with ease. We're not just a recipe platform — we're a culinary community.
                    </p>
                </div>
            </section>

            {/* Section 3: Why Choose RecipeHub */}
            <section className="py-[112px] px-4 md:px-12">
                <div className="text-center mb-10">
                    <h3 className="text-5xl font-bold">Why Choose RecipeHub?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-5xl mb-4">🍽️</div>
                        <h4 className="text-xl font-semibold mb-2">Tons of Recipes</h4>
                        <p>Explore a diverse collection of recipes for every taste, occasion, and dietary need.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-5xl mb-4">👩‍🍳</div>
                        <h4 className="text-xl font-semibold mb-2">For Every Skill Level</h4>
                        <p>Whether you’re a beginner or a pro, you’ll find recipes that match your expertise.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-5xl mb-4">🌱</div>
                        <h4 className="text-xl font-semibold mb-2">Healthy & Fresh</h4>
                        <p>Embrace wholesome ingredients and mindful eating without sacrificing flavor.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Community / Team */}
            <section className="py-[112px] px-4 md:px-12 bg-green-100 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-5xl font-semibold mb-4">Join Our Community</h3>
                    <p className="text-lg mb-4">
                        RecipeHub is powered by people — home cooks, food bloggers, and culinary creators. Join our growing community to share your recipes, tips, and love for food!
                    </p>
                    <p className="text-lg font-medium text-green-800">Let’s cook, learn, and grow together 🍳</p>
                </div>
            </section>

            {/* Section 5: CTA */}
            <section className="py-[112px] text-center">
                <h3 className="text-5xl font-bold mb-6">Start Your Culinary Journey</h3>
                <a
                    href="/all-recipes"
                    className="btn btn-primary bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition"
                >
                    Explore Recipes
                </a>
            </section>

        </div>
    );
};

export default AboutUs;
