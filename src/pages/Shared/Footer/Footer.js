import React from 'react';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const Footer = () => {

    const fb = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const git = <FontAwesomeIcon icon={faGithub} />

    return (
        <>
        <Box className="bg-primary">
        <Box display="grid">
        <Box gridColumn="span 8">
         <div style={{ fontSize: 20, color: 'white' }}>
             <div style={{margin: 30}}>
                 <Link to="/"  style={{textDecoration: 'none', color: 'white', margin: 20}}>Advertise</Link> 
                 <Link to="/" style={{textDecoration: 'none', color: 'white', margin: 20}}>Questions</Link>
                 <Link  to="/" style={{textDecoration: 'none', color: 'white', margin: 20}}>Terms & Condition</Link>
                 <Link to="/" style={{textDecoration: 'none', color: 'white', margin: 20}}>Disclaimer</Link>
                 <Link to="/" style={{textDecoration: 'none', color: 'white', margin: 20}}> Privacy</Link>
                 <Link to="/" style={{textDecoration: 'none', color: 'white', margin: 20}}>Site Map</Link>
             </div>
             <div>
                 
                 <div>
                 <div style={{fontSize:20}}>
                <span>FOLLOW US : </span>
            <Link style={{color: 'white', textDecoration: 'none'}} to=""> {fb} </Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to=""> {twitter} </Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to=""> {linkedIn} </Link>
            <Link style={{color: 'white', textDecoration: 'none'}} to=""> {git}</Link> 
           </div>
                 </div>
             </div>
             <hr />
             <div><p>© Copyright 2021, CarX All right reserved.</p></div>
         </div>
        </Box>
        </Box>
        </Box>
        </>
    );
};

export default Footer;