'use client'

import { useState } from 'react'

interface Props {
	videoSrc: string
	className?: string
}

export const ProjectCard = ({ videoSrc, className }: Props) => {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div className='rounded-2xl bg-secondary p-4'>
			{!isLoaded && (
				<div className='rounded-xl bg-muted animate-pulse h-[268px] w-full' />
			)}
			<video
				className={`rounded-xl ${!isLoaded ? 'hidden' : ''}`}
				src={videoSrc}
				muted
				loop
				autoPlay
				playsInline
				disablePictureInPicture
				controlsList='nodownload nofullscreen noremoteplayback'
				onCanPlay={() => setIsLoaded(true)}
			/>
		</div>
	)
}
