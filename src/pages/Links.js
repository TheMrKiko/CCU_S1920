import React from 'react'
import { Page } from '../components';

const Links = () => (
	<Page>
		<a href={`${process.env.PUBLIC_URL}/pdf/project_pitch.pdf`}>
			Project Pitch and stakeholders
		</a>
	</Page>
)

export default Links