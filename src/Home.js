import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            alt="Home banner"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            <div className="home__row">
                <Product
                id={12345}
                title="The Lean Startup: How constant innovation creates radically successful paperback"
                price={700}
                rating={5}
                image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" />
                <Product
                id={12345}
                title="The Lean Startup: How constant innovation creates radically successful paperback"
                price={700}
                rating={5}
                image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" />
            </div>

            <div className="home__row">
                <Product
                id={12345}
                title="The Lean Startup: How constant innovation creates radically successful paperback"
                price={700}
                rating={5}
                image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" />
                <Product
                id={12345}
                title="The Lean Startup: How constant innovation creates radically successful paperback"
                price={700}
                rating={5}
                image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" />
                <Product
                id={12345}
                title="The Lean Startup: How constant innovation creates radically successful paperback"
                price={700}
                rating={5}
                image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" />
            </div>
        </div>
    )
}

export default Home
