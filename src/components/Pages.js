import React from 'react'
import { Home, Members, Links } from '../pages'
import ReactFullpage from '@fullpage/react-fullpage';

const Pages = () => (
	<ReactFullpage.Wrapper>
		<Home />
		<Members />
		<Links />
	</ReactFullpage.Wrapper>
)

export default Pages