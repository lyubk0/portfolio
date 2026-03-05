import { cn } from '@/lib/utils'

interface Props {
	title: string
	className?: string
}

export const SectionTitle = ({ title, className }: Props) => {
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<h1 className='font-medium text-sm'>{title}</h1>
			<div className='w-full h-px bg-border' />
		</div>
	)
}
