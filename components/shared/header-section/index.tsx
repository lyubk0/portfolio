import { MainText } from '../main-text'
import { Section } from '../section'

interface Props {
	className?: string
}

export const HeaderSection = ({ className }: Props) => {
	return (
		<Section>
			<MainText>I&apos;m a Frontend developer based in Poland.</MainText>
			<MainText>
				I build scalable and responsive web applications using React and
				Next.js, turning ideas into clean and intuitive interfaces.
			</MainText>
			<MainText>
				Passionate about clean code, performance, and great user experience.
			</MainText>
		</Section>
	)
}
