import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const SadEmoji = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaZnAyJh-pFzMYYbFUDuSdzk_KtbpTlTbsw&usqp=CAU"
    return (
        <div style={{textAlign: 'center', color: 'gray'}}>
            <img src={SadEmoji} alt="" />
            <h1 style={{fontSize: 200,color:'black' }}>404</h1>
            <h3 style={{ color: 'red'}}>Oops! Nothing Was Found</h3>
            <p>The link you followed probably broken, or the page has been removed.</p>

<br />
<br />
<br />
                    <div>
                        <Link to="/"><button  className='bg-primary text-white fs-4'>Back to Home</button></Link>
                    </div>
                    <br />
                    <br />
                    <br />
        </div>
    );
};

export default NotFoundPage;