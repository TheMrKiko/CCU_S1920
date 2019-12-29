import React from 'react'
import { Page } from '../components';
import metro from '../img/metro.jpg'

const FileLink = ({ children, href }) => (
	<a href={href}>
		<div className="file-link">
			<div className="file-link-img">
				<img alt="link" src={metro} />
			</div>
			<span className="file-link-text">
				{children}
			</span>
		</div>
	</a>
)

const Links = () => (
	<Page>
		<ul id="file-list">
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/project_pitch.pdf`}>
					Project Pitch and stakeholders
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/user_research.pdf`}>
					User Research
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/prioritize_development.pdf`}>
					Prioritize Development
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/low_fidelity_prototype.pdf`}>
					Low-Fidelity Prototype
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/formative_user_study​.pdf`}>
					Formative User Study
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/usability_testing.pdf`}>
					Usability Testing
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/fully_functional_prototype.pdf`}>
					Fully Functional Prototype
				</FileLink>
			</li>
			<li>
				<FileLink href={`${process.env.PUBLIC_URL}/pdf/final_presentation.pdf`}>
					Final Presentation
				</FileLink>
			</li>
		</ul>
	</Page>
)

export default Links