import React from 'react'
import { Page } from '../components';

const Links = () => (
	<Page>
		<a href={`${process.env.PUBLIC_URL}/pdf/project_pitch.pdf`}>
			Project Pitch and stakeholders
		</a>
		<a href={`${process.env.PUBLIC_URL}/pdf/user_research.pdf`}>
			User Research
		</a>
		<a href={`${process.env.PUBLIC_URL}/pdf/prioritize_development.pdf`}>
			Prioritize Development
		</a>
	</Page>
)

export default Links