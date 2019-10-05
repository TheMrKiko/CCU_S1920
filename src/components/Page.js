import React from 'react'
import { FullpageSection } from '@ap.cx/react-fullpage'

const Page = ({ children }) => (
	<FullpageSection>
		<div className="page">
			{children}
		</div>
	</FullpageSection>
)

export default Page