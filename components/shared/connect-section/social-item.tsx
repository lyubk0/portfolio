import Link from 'next/link'
import { ComponentType, SVGProps } from 'react'

interface Props {
	label: string
	href: string
	Icon?: ComponentType<SVGProps<SVGSVGElement>>
	className?: string
}

export const SocialItem = ({ className, label, href, Icon }: Props) => {
	return (
		<Link
			target='_blank'
			rel='noopener noreferrer'
			href={href}
			className={`text-sm flex items-center gap-2 hover:text-foreground cursor-pointer hover:underline underline-offset-4 decoration-2 font-medium text-muted-foreground ${className}`}
		>
			{Icon && <Icon className='w-4 h-4' />}
			{label}
		</Link>
	)
}
