import React from 'react';
import {Link} from 'react-router-dom';

export default class LogoWhite extends React.Component {
    render(){
        
        return (
            <>
                <div className="logo">
                    <Link to={`/`}>
                        <img src={"assets/images/bluesky/blueskylogo189.png"} alt="Logo" width={110} />
                    </Link>
                </div>
            </>
        )
    }
}