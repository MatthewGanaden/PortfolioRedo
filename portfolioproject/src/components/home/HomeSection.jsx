import video from '../../assets/HomeBG.webm'
import image from '../../assets/MattFace.png'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
  ]

function HomeHero() {
    return (
        <div>
            <div class="flex gap-20 justify-between items-center m-16">
                <span class="text-xl max-w-xl">I am a fresh graduate mostly involved in developing both back-end and front-end of our projects, making our designs come to life.</span>
                <span>About me</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-semibold text-2xl">What I do</span>
                <div class="flex gap-5 ">
                    <div class="bg-neutral-900 rounded-3xl p-6">
                        <h2>Design</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-6">
                        <h2>Design</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-6">
                        <h2>Design</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;