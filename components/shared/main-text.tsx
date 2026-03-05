import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
	className?: string
}

export const MainText = ({ className, children }: PropsWithChildren<Props>) => {
	return (
		<p className={cn('text-sm leading-6 text-muted-foreground', className)}>
			{children}
		</p>
	)
}
