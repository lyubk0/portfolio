import Link from 'next/link'
import { ProjectCard } from '../project-card'
import { Section } from '../section'
import { SectionTitle } from '../section-title'

interface Props {
	className?: string
}

export const ProjectSection = ({ className }: Props) => {
	return (
		<Section>
			<SectionTitle title='Projects' />

			<Link
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/lyubk0/next-sneakers'
			>
				<ProjectCard videoSrc='/next-sneakers.mp4' />
			</Link>
			<Link
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/lyubk0/next-pizza'
			>
				<ProjectCard videoSrc='/next-pizza.mp4' />
			</Link>
		</Section>
	)
}
