import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 5;

    useEffect(() => {
        fetch(`https://recipe-server-ashy.vercel.app/my-recipes?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setFilteredRecipes(data);
            });
    }, [user.email]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00A86B",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`https://recipe-server-ashy.vercel.app/recipes/${id}`, {
                    method: 'DELETE',
                });
                if (res.ok) {
                    const updated = recipes.filter(recipe => recipe._id !== id);
                    setRecipes(updated);
                    setFilteredRecipes(updated);
                    Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
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
        const updatedRecipe = Object.fromEntries(formData.entries());

        fetch(`https://recipe-server-ashy.vercel.app/recipes/${editingRecipe._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedRecipe),
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const updatedList = recipes.map(recipe =>
                        recipe._id === editingRecipe._id ? { ...recipe, ...updatedRecipe } : recipe
                    );
                    setRecipes(updatedList);
                    setFilteredRecipes(updatedList);
                    Swal.fire("Updated!", "Recipe updated successfully.", "success");
                    setEditingRecipe(null);
                }
            });
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(value.toLowerCase()) ||
            recipe.cuisine.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRecipes(filtered);
        setCurrentPage(1);
    };

    const indexOfLast = currentPage * recipesPerPage;
    const indexOfFirst = indexOfLast - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">My Recipes</h2>

            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by title or cuisine..."
                className="input input-bordered w-full max-w-sm mb-4"
            />

            <div className="overflow-x-auto">
                <table className="table table-zebra bg-base-100 text-base-content">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Cuisine</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecipes.map((recipe, index) => (
                            <tr key={recipe._id}>
                                <td>{indexOfFirst + index + 1}</td>
                                <td><img src={recipe.image} className="w-14 h-14 object-cover rounded" /></td>
                                <td>{recipe.title}</td>
                                <td>{recipe.cuisine}</td>
                                <td>{new Date(recipe.createdAt).toLocaleDateString()}</td>
                                <td className="flex gap-2">
                                    <button onClick={() => handleUpdateClick(recipe)} className="btn btn-sm btn-primary text-white">Update</button>
                                    <button onClick={() => handleDelete(recipe._id)} className="btn btn-sm btn-secondary text-white">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            {/* Modal */}
            {editingRecipe && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form onSubmit={handleUpdateSubmit} className="bg-base-100 text-base-content p-6 rounded-lg w-full max-w-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Update Recipe</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <input name="title" defaultValue={formData.title} placeholder="Title" className="input input-bordered w-full" />
                            <input name="image" defaultValue={formData.image} placeholder="Image URL" className="input input-bordered w-full" />
                            <input name="cuisine" defaultValue={formData.cuisine} placeholder="Cuisine" className="input input-bordered w-full" />
                            <input name="prepTime" defaultValue={formData.prepTime} placeholder="Preparation Time" className="input input-bordered w-full" />
                            <textarea name="ingredients" defaultValue={formData.ingredients} placeholder="Ingredients" className="textarea textarea-bordered w-full" />
                            <textarea name="instructions" defaultValue={formData.instructions} placeholder="Instructions" className="textarea textarea-bordered w-full" />
                            <textarea name="Description" defaultValue={formData.Description} placeholder="Description" className="textarea textarea-bordered w-full" />
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" onClick={() => setEditingRecipe(null)} className="btn btn-outline">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MyRecipes;