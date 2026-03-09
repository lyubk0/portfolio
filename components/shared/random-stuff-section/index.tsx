'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useRecentTrackQuery } from '@/hooks/last-fm-queries'
import { parseTrack } from '@/lib/parse-track'
import Image from 'next/image'
import Link from 'next/link'
import { MainText } from '../main-text'
import { Section } from '../section'
import { SectionTitle } from '../section-title'

interface Props {
	className?: string
}

export const RandomStuffSection = ({ className }: Props) => {
	const { data, isLoading } = useRecentTrackQuery()
	const parsedData = data && parseTrack(data)

	return (
		<Section>
			<SectionTitle title='Random Stuff' />
			<MainText>
				{isLoading ? (
					<span className='inline-flex items-center gap-2'>
						Last listened to <Skeleton className='w-[120px] h-4 inline-block' />{' '}
						by <Skeleton className='w-[80px] h-4 inline-block' />
					</span>
				) : (
					<>
						Last listened to{' '}
						<Link
							href={parsedData?.url || ''}
							className='cursor-pointer underline decoration-dashed underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition'
						>
							<span className='font-medium text-foreground mr-1'>
								{parsedData?.name}
							</span>
							{parsedData?.cover && (
								<span className='inline-flex justify-center items-center relative align-middle'>
									<Image
										width={24}
										height={24}
										src={parsedData.cover}
										alt={`${parsedData?.name} cover`}
										className='size-5 rounded-full inline-block mx-2 animate-spin'
										style={{ animationDuration: '3s' }}
									/>
									<span className='size-1 inline-block bg-background absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full' />
								</span>
							)}
						</Link>{' '}
						by {parsedData?.artist} {parsedData?.timeLabel}
					</>
				)}
			</MainText>
		</Section>
	)
}
