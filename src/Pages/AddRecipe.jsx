import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddRecipe = () => {
    const { user } = useContext(AuthContext);

    const handleAddRecipe = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.categories = formData.getAll('categories');
        newRecipe.userName = user.displayName;
        newRecipe.userEmail = user.email;
        newRecipe.userPhoto = user.photoURL;
        newRecipe.createdAt = new Date().toISOString();

        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newRecipe),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Recipe added successfully!',
                        icon: 'success',
                    });
                    form.reset();
                }
            });
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Add New Recipe</h2>

            <form onSubmit={handleAddRecipe} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Image URL</label>
                    <input type="url" name="image" className="input input-bordered w-full" placeholder="https://..." required />
                </div>

                {/* Title */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Recipe Title</label>
                    <input type="text" name="title" className="input input-bordered w-full" placeholder="e.g. Chicken Curry" required />
                </div>

                {/* Ingredients */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Ingredients</label>
                    <input type="text" name="ingredients" className="input input-bordered w-full" placeholder="Sugar, Milk, Coffee" required />
                </div>

                {/* Cuisine */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Cuisine Type</label>
                    <select name="cuisine" className="select select-bordered w-full" required>
                        <option value="">Select Cuisine</option>
                        <option>Italian</option>
                        <option>Mexican</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        <option>Others</option>
                    </select>
                </div>

                {/* Prep Time */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Preparation Time (mins)</label>
                    <input type="number" name="prepTime" className="input input-bordered w-full" placeholder="e.g. 30" required />
                </div>

                {/* Categories */}
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-base">Categories</label>
                    <div className="flex flex-wrap gap-4">
                        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat) => (
                            <label key={cat} className="flex items-center gap-2 text-sm">
                                <input type="checkbox" name="categories" value={cat} className="checkbox checkbox-sm" />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Instructions (Full Width) */}
                <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="font-medium text-base">Instructions</label>
                    <textarea
                        name="instructions"
                        className="textarea textarea-bordered w-full h-36 resize-none"
                        placeholder="Step-by-step preparation..."
                        required
                    ></textarea>
                </div>

                {/* Description (Full Width) */}
                <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="font-medium text-base">Short Description</label>
                    <textarea
                        name="Description"
                        className="textarea textarea-bordered w-full h-24 resize-none"
                        placeholder="Brief overview of the recipe..."
                    ></textarea>
                </div>

                {/* Hidden Likes */}
                <input type="hidden" name="likes" value="0" />

                {/* Submit Button (Full Width) */}
                <div className="md:col-span-2">
                    <button type="submit" className="btn btn-primary text-lg font-semibold">
                        Add Recipe
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddRecipe;
