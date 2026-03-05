'use client'

import { playClick } from '@/lib/play-click'
import { cn } from '@/lib/utils'
import { Lightbulb, LightbulbOff } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Button } from './button'

export const ThemeToggle = ({ className }: { className?: string }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const isDark = resolvedTheme === 'dark'

	const handleClick = () => {
		playClick()
		setTheme(isDark ? 'light' : 'dark')
	}

	return (
		<Button
			size={'icon-sm'}
			onClick={handleClick}
			className={cn(className, 'cursor-pointer')}
			aria-label='Toggle theme'
			variant={'ghost'}
		>
			<AnimatePresence mode='wait' initial={false}>
				<motion.span
					key={isDark ? 'dark' : 'light'}
					initial={{ opacity: 0, filter: 'blur(4px)' }}
					animate={{ opacity: 1, filter: 'blur(0px)' }}
					exit={{ opacity: 0, filter: 'blur(4px)' }}
					transition={{ duration: 0.1 }}
				>
					{isDark ? <Lightbulb size={18} /> : <LightbulbOff size={18} />}
				</motion.span>
			</AnimatePresence>
		</Button>
	)
}
