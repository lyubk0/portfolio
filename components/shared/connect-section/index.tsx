import { TelegramIcon } from '@hugeicons/core-free-icons'
import { Fragment } from 'react/jsx-runtime'
import { Section } from '../section'
import { SectionTitle } from '../section-title'
import { SocialItem } from './social-item'

const SOCIALS = [
	{ label: 'Telegram', href: 'https://t.me/lyubk0o', icon: TelegramIcon },
	{
		label: 'Mail',
		href: 'mailto:vladliubchenko.dev@gmail.com',
	},
	{
		label: 'Github',
		href: 'https://github.com/lyubk0',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/vlad-liubchenko-0a8325371/',
	},
]

interface Props {
	className?: string
}

export const ConnectSection = ({ className }: Props) => {
	return (
		<Section>
			<SectionTitle title='Connect' />
			<div className='flex items-center gap-3 flex-wrap'>
				{SOCIALS.map((social, index) => (
					<Fragment key={social.label}>
						<SocialItem {...social} />
						{index < SOCIALS.length - 1 && (
							<span className='size-0.5  bg-foreground rounded-full' />
						)}
					</Fragment>
				))}
			</div>
		</Section>
	)
}
