import React from 'react';
import  Toggle from '../Toggle/Toggle';
import './Toolbar.css';
const toolbar = props =>(
    <header className="toolbar">
        <nav className="navigation">
            <div>
                <Toggle click={props.drawerClicked}/>
            </div>
            <div className="menu">HELLO {props.username}</div>
            <div className="spacer" />
            <div className="items">
                <ul>
                    <li><a href="/">Logout</a></li>
                </ul>
                    
            </div>
        </nav>
    </header>
);

export default toolbar;