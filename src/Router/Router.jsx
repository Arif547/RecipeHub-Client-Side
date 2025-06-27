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
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import DashboardLayout from '../Pages/DashboardLayout';
import Services from '../components/Services';
import Profile from '../Pages/Profile';

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('https://recipe-server-ashy.vercel.app/top-recipes'),
                Component: Home,

            },
            {
                path: '/all-recipes',
                loader: () => fetch('https://recipe-server-ashy.vercel.app/recipes'),
                element: <AllRecipes></AllRecipes>,

            },
            {
                path: 'recipe-details/:id',
                loader: ({ params }) => fetch(`https://recipe-server-ashy.vercel.app/recipes/${params.id}`),
                element: <RecipeDetails></RecipeDetails>
                ,

            },
            {
                path: '/aboutUs',
                Component: AboutUs,
            },
            {
                path: '/services',
                Component: Services,
            },
            {
                path: '/contact',
                Component: Contact,
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
            },
            {
                index: true,
                path: 'add-recipe',
                element: <PrivateRoute>
                    <AddRecipe></AddRecipe>
                </PrivateRoute>,

            },
            {
                path: 'my-recipes',
                element: <PrivateRoute>
                    <MyRecipes></MyRecipes>
                </PrivateRoute>,

            },
        ]
    }



])

export default Router;