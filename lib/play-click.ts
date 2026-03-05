let ctx: AudioContext | null = null

const getCtx = (): AudioContext => {
	if (!ctx) ctx = new AudioContext()
	return ctx
}

export const playClick = async () => {
	const ctx = getCtx()

	if (ctx.state === 'suspended') {
		await ctx.resume()
	}

	const t = ctx.currentTime
	const duration = 0.008
	const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate)
	const data = buffer.getChannelData(0)
	for (let i = 0; i < data.length; i++) {
		data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 50)
	}

	const noise = ctx.createBufferSource()
	noise.buffer = buffer

	const filter = ctx.createBiquadFilter()
	filter.type = 'bandpass'
	filter.frequency.value = 4000
	filter.Q.value = 3

	const gain = ctx.createGain()
	gain.gain.value = 0.5

	noise.connect(filter)
	filter.connect(gain)
	gain.connect(ctx.destination)
	noise.start(t)
}
