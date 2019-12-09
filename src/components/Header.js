import React from 'react'
import { Menu } from '.';

import logo from '../icon.png'

const Header = () => (
	<header id="header">
		<img id="logo" src={logo}></img>
		<Menu />
	</header>
)

export default Header