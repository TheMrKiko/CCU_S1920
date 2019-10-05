import React from 'react'
import { Home } from '../pages'
import ReactFullpage from '@fullpage/react-fullpage';

const Pages = () => (
	<ReactFullpage.Wrapper>
		<Home />
		<Home />
	</ReactFullpage.Wrapper>
)

export default Pages