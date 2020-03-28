import React from 'react';
import Rocket from '../assets/rocket.png';

function RocketBtn(props) {

    const handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
   }

    return (
            <button className="rocket-btn" onClick={() => handleScrollToStats()}><img src={Rocket} alt="rocket"></img></button>
    );
}

export default RocketBtn;