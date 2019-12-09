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
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/low_fidelity_prototype.pdf`}>
					Low-Fidelity Prototype
				</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/formative_user_study​.pdf`}>
					Formative User Study
				</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/usability_testing.pdf`}>
					Usability Testing
				</a>
			</li>
			<li>
				<a href={`${process.env.PUBLIC_URL}/pdf/fully_functional_prototype.pdf`}>
					Fully Functional Prototype
				</a>
			</li>
		</ul>
	</Page>
)

export default Links