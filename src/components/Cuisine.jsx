import React from 'react';

const Cuisine = ({ cuisine }) => {
    return (
        <div>
            <option value={cuisine.cuisine}>{cuisine.cuisine}</option>
        </div>
    );
};

export default Cuisine;