import { cn } from '@/lib/utils'
import { ThemeToggle } from '../ui/theme-toggle'

interface Props {
	className?: string
}

export const Header = ({ className }: Props) => {
	return (
		<header className={cn(className, 'flex justify-between items-center')}>
			<h1 className='text-sm font-medium'>Vladyslav Liubchenko</h1>
			<ThemeToggle />
		</header>
	)
}
