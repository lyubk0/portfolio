import { USERNAME } from '@/constants/last-fm-config-constants'
import { RecenttracksResponse } from '@/types/last-fm-types'
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { data } = await axios.get<RecenttracksResponse>(
			'https://ws.audioscrobbler.com/2.0/',
			{
				params: {
					method: 'user.getRecentTracks',
					user: USERNAME,
					api_key: process.env.LASTFM_API_KEY,
					format: 'json',
					limit: 1,
				},
			},
		)

		return NextResponse.json(data.recenttracks.track[0])
	} catch (error) {
		console.log('get recent track error', error)
	}
}
