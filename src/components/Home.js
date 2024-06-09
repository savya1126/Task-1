import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [timer, setTimer] = useState('');

    useEffect(() => {
        const deadline = new Date("jun 10, 2024 12:30:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const t = deadline - now;

            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((t % (1000 * 60)) / 1000);

            if (t < 0) {
                clearInterval(interval);
                setTimer('EXPIRED');
            } else {
                setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="offer">
                <h3>Get 90% off in premium package until <span id="timer">{timer}</span></h3>
            </div>
            <nav className="navbar">
                <img src="/lg.png" alt="Logo" width="100" height="100" />
            </nav>
            <div className="hero">
                <div className="left">
                    <h3 className="sub-title">Prime platform to digitally promote your business.</h3>
                    <h1 className="title">Market your business online and boost your digital presence</h1>
                    <p className="description">
                        Welcome to Nfilili where your digital desires meet limitless possibilities!
                        Explore, discover, and indulge in our vibrant marketplace curated just for you.
                        Let your journey begin!
                    </p>
                    <div className="cta">
                        <input type="email" name="email" id="email-input" placeholder="Enter your business's email" />
                        <button className="button">Send</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/ill.png" alt="illustration" width="400" height="400" />
                </div>
            </div>
        </div>
    );
};

export default Home;
