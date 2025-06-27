// Profile.jsx - User Profile Page with Stats Cards UI
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaSignOutAlt, FaRegEnvelope } from 'react-icons/fa';
import { MdOutlineDateRange, MdFastfood, MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { GiKnifeFork } from 'react-icons/gi';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [joinedDate, setJoinedDate] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/my-recipes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTotalRecipes(data.length));

        if (user.metadata?.creationTime) {
            setJoinedDate(new Date(user.metadata.creationTime).toLocaleDateString());
        }
    }, [user.email, user.metadata]);

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="bg-base-200 shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
                <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL || 'https://i.ibb.co/0Jmshvb/avatar.png'} alt="User Avatar" />
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
                    <p className="flex items-center gap-2 text-base-content"><FaRegEnvelope /> {user.email}</p>
                    <p className="flex items-center gap-2 text-base-content mt-1"><MdOutlineDateRange /> Joined: {joinedDate || 'N/A'}</p>

                    <button onClick={logOut} className="btn btn-error btn-sm mt-5 flex items-center gap-2">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stats shadow bg-base-100">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <MdFastfood className="text-3xl" />
                        </div>
                        <div className="stat-title">Total Recipes</div>
                        <div className="stat-value text-primary">{totalRecipes}</div>
                        <div className="stat-desc">You've shared {totalRecipes} recipes</div>
                    </div>
                </div>

                <div className="stats shadow bg-base-100">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <GiKnifeFork className="text-3xl" />
                        </div>
                        <div className="stat-title">Favorite Cuisine</div>
                        <div className="stat-value text-secondary">Indian</div>
                        <div className="stat-desc">Based on your activity</div>
                    </div>
                </div>

                <div className="stats shadow bg-base-100">
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <MdOutlineStarBorderPurple500 className="text-3xl" />
                        </div>
                        <div className="stat-title">Engagement</div>
                        <div className="stat-value text-accent">High</div>
                        <div className="stat-desc">Keep up the great work!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;