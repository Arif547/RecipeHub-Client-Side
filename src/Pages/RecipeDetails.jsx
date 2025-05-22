import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const RecipeDetails = () => {

    const { _id, title, ingredients, instructions, cuisine, prepTime, image, categories,
        likes, userEmail } = useLoaderData();

    const { user } = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(likes || 0);
    const [isLiking, setIsLiking] = useState(false);

    const handleLike = async () => {
        if (!user) {
            toast.error('Please log in to like recipes');
            return;
        }

        if (user?.email === userEmail) {
            toast.error("You can't like your own recipe!");
            return;
        }

        try {
            setIsLiking(true);
            const res = await fetch(`https://recipe-server-ashy.vercel.app/recipes/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) throw new Error('Failed to update like');

            const data = await res.json();
            setLikeCount(data.updatedLikes);
            toast.success('Thanks for liking!');
        } catch (err) {
            toast.error('Error updating like');
        } finally {
            setIsLiking(false);
        }
    };
    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Recipe of {title}
                </h2>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                    <img
                        src={image || 'https://via.placeholder.com/400x300'}
                        alt={title}
                        className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                    />

                    <div className="p-6 flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Cuisine:</span> {cuisine}</p>
                        <p className="text-gray-600 mb-1"><span className="font-medium">Prep Time:</span> {prepTime} mins</p>

                        <span className="font-medium text-gray-600">Categories:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {(Array.isArray(categories) ? categories : [categories])?.map((cat, index) => (
                                <span key={index} className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <div className="mb-4">
                            <h4 className="text-lg font-semibold">Ingredients:</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                {ingredients}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-lg font-semibold">Instructions:</h4>
                            <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={handleLike}
                                className="btn btn-primary text-white"
                                disabled={isLiking}
                            >
                                ❤️ {isLiking ? 'Liking...' : 'Like'}
                            </button>
                            <p className="text-black text-2xl">Total Likes: {likeCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;