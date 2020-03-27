import React from 'react';
import Rocket from '../assets/rocket.png';

function RocketBtn(props) {
    return (
            <button className="rocket-btn"><img src={Rocket} alt="rocket"></img></button>
    );
}

export default RocketBtn;