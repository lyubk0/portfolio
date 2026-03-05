export interface RecenttracksResponse {
	recenttracks: Recenttracks
}

export interface Recenttracks {
	track: Track[]
	'@attr': Attr
}

export interface TrackAttr {
	nowplaying?: string
}

export interface Track {
	artist: Artist
	streamable: string
	image: Image[]
	mbid: string
	album: Album
	name: string
	url: string
	date: Date
	'@attr'?: TrackAttr
}

export interface Artist {
	mbid: string
	'#text': string
}

export interface Image {
	size: string
	'#text': string
}

export interface Album {
	mbid: string
	'#text': string
}

export interface Date {
	uts: string
	'#text': string
}

export interface Attr {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}
