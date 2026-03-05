import { ConnectSection } from '@/components/shared/connect-section'
import { Header } from '@/components/shared/header'
import { HeaderSection } from '@/components/shared/header-section'
import { HomePageWrapper } from '@/components/shared/home-page-wrapper'
import { ProjectSection } from '@/components/shared/project-section'
import { RandomStuffSection } from '@/components/shared/random-stuff-section'

export default function Home() {
	return (
		<HomePageWrapper>
			<div className='flex flex-col gap-[64px]'>
				<div className='flex flex-col gap-6'>
					<Header />
					<HeaderSection />
				</div>
				<ProjectSection />
				<ConnectSection />
				<RandomStuffSection />
			</div>
		</HomePageWrapper>
	)
}
