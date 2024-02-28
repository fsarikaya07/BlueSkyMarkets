import React from 'react';
import {Link} from 'react-router-dom';

export default class LogoBox extends React.Component {
    render(){
        
        return (
            <>
                <div className="logo-box">
                    <Link to={`/`}>
                        <img src={"assets/images/bluesky/blueskylogo189.png"} alt="Logo" height={90}/>
                    </Link>
                </div>
            </>
        )
    }
}