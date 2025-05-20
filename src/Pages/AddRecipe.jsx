import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import swal from 'sweetalert';

const AddRecipe = () => {

    const { user } = use(AuthContext);
    // console.log(user);

    const handleAddRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.userName = user.displayName;
        newRecipe.userEmail = user.email;
        newRecipe.userPhoto = user.photoURL;

        // console.log(newRecipe);

        // send coffee data to the db
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    // console.log('added successfully.')
                    Swal.fire({
                        title: "Recipe added successfully!",
                        icon: "success",
                        draggable: true
                    });

                    //   form.reset()
                }
            })
    }

    return (
        <div className='max-w-[1240px] mx-auto mt-10 px-5 py-10 md:py-[120px]'>
            <h2 className="text-2xl font-bold mb-4 text-center">Add Your New Recipe</h2>

            <form onSubmit={handleAddRecipe}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Image URL</label>
                        <input type="url" name="image" className="input w-full" placeholder="Image URL" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Recipe Title</label>
                        <input type="text" name="title" className="input w-full" placeholder="Recipe Title" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Ingredients</label>
                        <input type="text" name="ingredients" className="input w-full" placeholder="e.g. Sugar, Milk, Coffee" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Instructions</label>
                        <textarea name="instructions" className="textarea w-full" placeholder="Preparation steps..." required></textarea>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Cuisine Type</label>
                        <select name="cuisine" className="select w-full" required>
                            <option value="">Select Cuisine</option>
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Preparation Time (mins)</label>
                        <input type="number" name="prepTime" className="input w-full" placeholder="Preparation Time" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:col-span-2">
                        <label className="label">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
                                <label key={cat} className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value={cat} className="checkbox" />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" className="input w-full" placeholder="e.g. Sweet, Spicy" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-2xl">Price</label>
                        <input type="text" name="price" className="input w-full" placeholder="Price per serving" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:col-span-2">
                        <label className="label">Details</label>
                        <input type="text" name="details" className="input w-full" placeholder="Additional Details" />
                    </fieldset>

                    {/* Like Count - Hidden by default, managed in backend */}
                    <input type="hidden" name="likes" value="0" />
                </div>

                <input type="submit" className="btn w-full mt-6" value="Add Recipe" />
            </form>

        </div>
    );
};

export default AddRecipe;