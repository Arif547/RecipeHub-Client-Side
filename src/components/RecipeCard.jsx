import React from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <div>

                <div>
                    <img
                        src={recipe.image || "https://via.placeholder.com/400x250"}
                        alt={recipe.title}
                        className="w-full h-56 object-cover"
                    />
                    <div className='pt-5'>
                        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                        <p className="text-[16px] mb-4 line-clamp-3">{recipe.Description}</p>
                        <div className='flex justify-between items-center'>
                            <Link
                                to={`/recipe-details/${recipe._id}`}
                                className="inline-block btn btn-primary btn-outline px-4 py-2 text-sm"
                            >
                                View Details
                            </Link>
                            <p className="text-[18px] flex  items-center gap-2"><FaHeart /> {recipe.likes}</p>


                        </div>

                    </div>
                </div>


                {/* <div
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                    <img
                        src={recipe.image || "https://via.placeholder.com/400x250"}
                        alt={recipe.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{recipe.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">Cuisine: {recipe.cuisine}</p>
                        <p className="text-sm text-gray-500 mb-2">PrepTime: {recipe.prepTime}</p>
                        <p className="text-sm text-gray-500 mb-2">Ingredients: {recipe.ingredients}</p>
                        <p className="text-sm text-gray-700 mb-4">❤️ {recipe.likes} likes</p>
                        <Link
                            to={`/recipe-details/${recipe._id}`}
                            className="inline-block btn btn-primary text-white px-4 py-2  text-sm"
                        >
                            View Details
                        </Link>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default RecipeCard;