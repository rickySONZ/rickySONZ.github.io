import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards'
import About from './About';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <About/>
            <Cards />
        </div>
    );
}

export default Home;
