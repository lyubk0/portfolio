import { Track } from '@/types/last-fm-types'
import axios from 'axios'

export const getRecentTrack = async (): Promise<Track | undefined> => {
	try {
		const { data } = await axios.get<Track>('/api/last-fm/recent-track')
		return data
	} catch (error) {
		console.log('Last fm getRecentTrack error', error)
		return undefined
	}
}
