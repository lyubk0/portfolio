import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
	className?: string
}

export const Section = ({ className, children }: PropsWithChildren<Props>) => {
	return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
}
