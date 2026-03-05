import { IconSvgElement } from '@hugeicons/react'
import Link from 'next/link'

interface Props {
	label: string
	href: string
	icon?: IconSvgElement
	className?: string
}

export const SocialItem = ({ className, label, href, icon }: Props) => {
	return (
		<Link
			target='_blank'
			rel='noopener noreferrer'
			href={href}
			className={`text-sm flex items-center gap-2 hover:text-foreground cursor-pointer hover:underline underline-offset-4 decoration-2 font-medium text-muted-foreground ${className}`}
		>
			{/* {icon && <HugeiconsIcon strokeWidth={2} size={16} icon={icon} />} */}
			{label}
		</Link>
	)
}
