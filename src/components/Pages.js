import React from 'react'
import { Home, Members, Links } from '../pages'
import ReactFullpage from '@fullpage/react-fullpage';

const Pages = () => (
	<ReactFullpage.Wrapper>
		<Home />
		<Links />
		<Members />
	</ReactFullpage.Wrapper>
)

export default Pages