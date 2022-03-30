import React from 'react';
import './header.css';

const Header = ({ children, size }) => {
	return <div className={`${size}`}>{children}</div>;
};

export default Header;
