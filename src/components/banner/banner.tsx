import React from 'react';
import banner from '../../assets/banner.jpg';

export const Banner: React.FC = () => {
    return (
        <div className="banner">
            <h1>Welcome to My Portfolio</h1>
            <p>This is a showcase of my work and projects.</p>
            <img src={banner} alt="banner" />
        </div>
    );
};
