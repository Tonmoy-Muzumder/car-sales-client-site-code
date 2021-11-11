import React from 'react';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
const Footer = () => {
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
             <div><p>© Copyright 2021, CarX All right reserved.</p></div>
         </div>
        </Box>
        </Box>
        </Box>
        </>
    );
};

export default Footer;