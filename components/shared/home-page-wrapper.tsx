'use client'

import { motion } from 'motion/react'
import React from 'react'

export const HomePageWrapper = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}
