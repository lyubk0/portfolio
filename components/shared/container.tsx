import React from 'react'

interface Props {
	className?: string
	children?: React.ReactNode
}

export const Container = ({ className, children }: Props) => {
	return (
		<div className={`pt-20 px-4 pb-10 max-w-145.5 mx-auto ${className}`}>
			{children}
		</div>
	)
}
