import { Track } from '@/types/last-fm-types'

export const parseTrack = (track: Track) => {
	const isNowPlaying = track['@attr']?.nowplaying === 'true'

	const artist = track.artist?.['#text'] ?? 'Unknown Artist'
	const name = track.name ?? 'Unknown Track'
	const cover =
		track.image?.find(i => i.size === 'extralarge')?.['#text'] ||
		track.image?.find(i => i.size === 'large')?.['#text'] ||
		null

	let timeLabel: string | null = null
	if (!isNowPlaying && track.date?.uts) {
		const utsSeconds = Number(track.date.uts)
		const diffMs = Date.now() - utsSeconds * 1000
		const diffMin = Math.floor(diffMs / 60_000)
		const diffH = Math.floor(diffMin / 60)

		if (diffMin < 1) timeLabel = 'just now'
		else if (diffMin < 60) timeLabel = `${diffMin} min ago`
		else if (diffH < 24) timeLabel = `${diffH} h ago`
		else {
			// Больше суток — показываем дату
			timeLabel = track.date['#text']
		}
	}

	if (isNowPlaying) timeLabel = 'just now'

	return { artist, name, cover, isNowPlaying, timeLabel, url: track.url }
}
