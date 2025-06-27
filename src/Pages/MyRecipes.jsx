import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);
    const [formData, setFormData] = useState({});



    useEffect(() => {
        fetch(`http://localhost:3000/my-recipes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [user.email]);

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`http://localhost:3000/recipes/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setRecipes(recipes.filter(recipe => recipe._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    setRecipes(recipes.filter(recipe => recipe._id !== id));

                }
            }
        });


    };

    const handleUpdateClick = (recipe) => {
        setEditingRecipe(recipe);
        setFormData(recipe);
    };


    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedRecipe = Object.fromEntries(formData.entries())

        fetch(`http://localhost:3000/recipes/${editingRecipe._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe),
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        
                        icon: "success",
                        title: "Recipe updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setRecipes(prevRecipes =>
                        prevRecipes.map(recipe =>
                            recipe._id === editingRecipe._id ? { ...recipe, ...updatedRecipe } : recipe
                        )
                    );
                    setEditingRecipe(null)

                }
            })
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <h2 className="text-2xl font-bold mb-6 text-center">My Recipes</h2>

            {recipes.length === 0 ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-center text-gray-500 text-lg">You have not added any recipes yet.</p>
                </div>
            ) :
                (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map(recipe => (
                            <div
                                key={recipe._id}
                                className="bg-white shadow rounded-xl p-4 border"
                            >
                                <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover rounded" />
                                <h3 className="text-xl font-semibold mt-3">{recipe.title}</h3>
                                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                                <p><strong>Prep Time:</strong> {recipe.prepTime} min</p>
                                <p><strong>Likes:</strong> {recipe.likes}</p>
                                <p><strong>Category:</strong> {(Array.isArray(recipe.categories) ? recipe.categories : [recipe.categories]).join(', ')}</p>
                                <p className="text-sm mt-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p className="text-sm"><strong>Instructions:</strong> {recipe.instructions}</p>

                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => handleUpdateClick(recipe)}
                                        className="btn btn-sm btn-info text-white"
                                    >Update</button>

                                    <button
                                        onClick={() => handleDelete(recipe._id)}
                                        className="btn btn-sm btn-error text-white"
                                    >Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            {/* Modal */}
            {editingRecipe && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <form onSubmit={handleUpdateSubmit} className="bg-white p-6 rounded-xl w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-4">Update Recipe</h3>
                        <input name="title" defaultValue={formData.title || ''} placeholder="Title" className="input input-bordered w-full mb-2" />
                        <input name="image" defaultValue={formData.image || ''} placeholder="Image URL" className="input input-bordered w-full mb-2" />
                        <input name="cuisine" defaultValue={formData.cuisine || ''} placeholder="Cuisine" className="input input-bordered w-full mb-2" />
                        <input name="prepTime" defaultValue={formData.prepTime || ''} placeholder="Preparation Time" className="input input-bordered w-full mb-2" />
                        <textarea name="ingredients" defaultValue={formData.ingredients || ''} placeholder="Ingredients" className="textarea textarea-bordered w-full mb-2" />
                        <textarea name="instructions" defaultValue={formData.instructions || ''} placeholder="Instructions" className="textarea textarea-bordered w-full mb-4" />
                        <textarea name='Description' class="textarea h-24 w-full" defaultValue={formData.Description || ''} placeholder="Description"></textarea>


                        <div className="flex justify-end mt-2.5 gap-3">
                            <button type="submit" className="btn btn-primary hover:btn-secondary">Save</button>
                            <button onClick={() => setEditingRecipe(null)} type="button" className="btn btn-primary btn-outline">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MyRecipes;
