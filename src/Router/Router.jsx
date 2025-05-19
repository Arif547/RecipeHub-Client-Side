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

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                // loader: () => fetch('/company-jobs.json'),
            },
            {
                path: '/add-recipe',
                element: <PrivateRoute>
                    <AddRecipe></AddRecipe>
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