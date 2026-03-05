import { USERNAME } from '@/constants/last-fm-config-constants'
import { getRecentTrack } from '@/services/last-fm-services'
import { useQuery } from '@tanstack/react-query'

export const useRecentTrackQuery = () => {
	return useQuery({
		queryKey: ['recent-track', USERNAME],
		queryFn: getRecentTrack,
		refetchInterval: 30_000,
		refetchIntervalInBackground: true,
	})
}
