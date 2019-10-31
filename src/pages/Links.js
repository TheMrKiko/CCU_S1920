import React from 'react'
import { Page } from '../components';

const Links = () => (
	<Page>
		<ul>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/project_pitch.pdf`}>
					Project Pitch and stakeholders
				</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/user_research.pdf`}>
					User Research
				</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/prioritize_development.pdf`}>
					Prioritize Development
				</a>
			</li>
		</ul>
	</Page>
)

export default Links