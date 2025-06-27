import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import {
    FiClock,
    FiHeart,
    FiUser,
    FiBookmark,
    FiShare2,
    FiPrinter
} from 'react-icons/fi';
import {
    IoRestaurantOutline,
    IoTimeOutline,
    IoHeartOutline,
    IoHeart
} from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';

const RecipeDetails = () => {
    const { _id, title, ingredients, instructions, cuisine, prepTime, image, categories,
        likes, userEmail, userName, Description } = useLoaderData();

    const { user } = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(likes || 0);
    const [isLiking, setIsLiking] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

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
            setIsLiked(!isLiked);
            toast.success('Thanks for liking!');
        } catch (err) {
            toast.error('Error updating like');
        } finally {
            setIsLiking(false);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `Check out this amazing ${cuisine} recipe!`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success('Recipe link copied to clipboard!');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleSave = () => {
        // Implement save functionality
        toast.success('Recipe saved to your collection!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <IoRestaurantOutline className="text-primary" />
                        <span className="text-primary font-medium">Recipe Details</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        {Description || `Discover the perfect blend of flavors in this ${cuisine} masterpiece`}
                    </p>
                </div>

                {/* Recipe Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={image || 'https://via.placeholder.com/800x400'}
                            alt={title}
                            className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                        {/* Action Buttons Overlay */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={handleShare}
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
                                title="Share Recipe"
                            >
                                <FiShare2 className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={handleSave}
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
                                title="Save Recipe"
                            >
                                <FiBookmark className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={handlePrint}
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
                                title="Print Recipe"
                            >
                                <FiPrinter className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Recipe Info Cards */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500 rounded-lg">
                                        <IoTimeOutline className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-600 font-medium">Prep Time</p>
                                        <p className="text-lg font-bold text-blue-800">{prepTime} mins</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500 rounded-lg">
                                        <IoRestaurantOutline className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-purple-600 font-medium">Cuisine</p>
                                        <p className="text-lg font-bold text-purple-800">{cuisine}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-pink-500 rounded-lg">
                                        <IoHeart className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-pink-600 font-medium">Likes</p>
                                        <p className="text-lg font-bold text-pink-800">{likeCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <BiCategory className="text-gray-600 w-5 h-5" />
                                <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {(Array.isArray(categories) ? categories : [categories])?.map((cat, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium border border-green-300 hover:shadow-md transition-shadow duration-200"
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Ingredients */}
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                                    <div className="p-2 bg-orange-500 rounded-lg">
                                        <FiUser className="w-5 h-5 text-white" />
                                    </div>
                                    Ingredients
                                </h3>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {ingredients}
                                    </div>
                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200">
                                <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                                    <div className="p-2 bg-teal-500 rounded-lg">
                                        <IoRestaurantOutline className="w-5 h-5 text-white" />
                                    </div>
                                    Instructions
                                </h3>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {instructions}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handleLike}
                                        disabled={isLiking}
                                        className={`
                                            flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                                            ${isLiked
                                                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl'
                                                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-pink-100 hover:to-red-100 hover:text-pink-600'
                                            }
                                        `}
                                    >
                                        {isLiked ? (
                                            <IoHeart className="w-5 h-5" />
                                        ) : (
                                            <IoHeartOutline className="w-5 h-5" />
                                        )}
                                        {isLiking ? 'Liking...' : 'Like Recipe'}
                                    </button>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <FiUser className="w-4 h-4" />
                                    <span className="text-sm">
                                        Created by <span className="font-medium">{userName || userEmail}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Recipes Section Placeholder */}
                <div className="text-center py-8">
                    <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                        <IoRestaurantOutline className="text-gray-600" />
                        <span className="text-gray-600 font-medium">More recipes coming soon...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;