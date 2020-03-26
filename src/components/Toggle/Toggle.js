import React from 'react';

import './Toggle.css';
const drawer = props =>(
    <button className="toggle" onClick={props.click}>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
    </button>
);

export default drawer;