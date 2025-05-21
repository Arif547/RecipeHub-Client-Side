import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import AddRecipe from '../Pages/AddRecipe';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import MyRecipes from '../Pages/MyRecipes';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from '../provider/PrivateRoute';
import AllRecipes from '../Pages/AllRecipes';
import RecipeDetails from '../Pages/RecipeDetails';

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('http://localhost:3000/top-recipes'),
                Component: Home,

            },
            {
                path: '/add-recipe',
                element: <PrivateRoute>
                    <AddRecipe></AddRecipe>
                </PrivateRoute>,

            },
            {
                path: '/all-recipes',
                loader: () => fetch('http://localhost:3000/recipes'),
                element: <AllRecipes></AllRecipes>,

            },
            {
                path: '/recipe-details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element: <PrivateRoute>
                    <RecipeDetails></RecipeDetails>
                </PrivateRoute>,

            },
            {
                path: '/my-recipes',
                element: <PrivateRoute>
                    <MyRecipes></MyRecipes>
                </PrivateRoute>,

            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }
])

export default Router;