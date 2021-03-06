import React from 'react';
import Tilt from 'react-parallax-tilt';
import cortechs from './cortechs.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br3 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3"><img style={{paddingTop: '10px' }} alt='logo' src={cortechs}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;
