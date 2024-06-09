import React from 'react';
import './FormPage.css';

const FormPage = () => {
    return (
        <div className="form-body">
            <form action="" className="forms">
                <h1>Please fill the given <span style={{ color: 'crimson' }}>form</span></h1>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your business's name" />
                <textarea cols="50" rows="4" placeholder="Enter your business's description"></textarea>
                <h3>Enter your location</h3>
                <div>Google location</div>
                <input type="submit" id="submit" className="button" />
            </form>
        </div>
    );
};

export default FormPage;

