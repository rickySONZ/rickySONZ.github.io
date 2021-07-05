import React from 'react';
import Cards from './Cards'
import About from './About';

const Home = () => {
    return (
        <div className="portfolio">

        <h3>View My Projects</h3>
        <p>Feel free to click on any of the projects listed below to view them.</p>
          <Cards />
            
        </div>
    );
}

export default Home;
