import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
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
        const confirm = window.confirm('Are you sure you want to delete this recipe?');
        if (!confirm) return;

        const res = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setRecipes(recipes.filter(recipe => recipe._id !== id));
            toast.success('Recipe deleted successfully');
        }
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
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6 text-center">My Recipes</h2>
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

                        <div className="flex justify-end gap-3">
                            <button type="submit" className="btn btn-success btn-sm">Save</button>
                            <button onClick={() => setEditingRecipe(null)} type="button" className="btn btn-outline btn-sm">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MyRecipes;
