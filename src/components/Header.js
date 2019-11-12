import React from 'react'
import { Menu } from '.';

import logo from '../logo.svg'

const Header = () => (
	<header id="header">
		<img src={logo}></img>
		<Menu />
	</header>
)

export default Header