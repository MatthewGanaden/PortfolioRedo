import design from '../../assets/Design.svg'
import code from '../../assets/Code.svg'
import test from '../../assets/Test.svg'

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
                <div class="flex items-center justify-center py-2 pl-5 pr-3 text-xl font-normal border rounded-full text-primarytext md:text-xl sm:pl-8 sm:pr-5 sm:py-3 border-bline">About me</div>
            </div>
            <div class="flex flex-col items-center m-16">
                <span class="font-semibold text-3xl text-green-500">What I do</span>
                <div class="flex flex-row flex-grow gap-5">
                    <div class="bg-neutral-900 rounded-3xl p-6">
                        <div class="relative flex flex-col gap-2 pt-28 ">
                            <img src={design} alt="design"/>
                            <h2 class="text-2xl font-bold text-pink-400">Design</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-6">
                    <div class="relative flex flex-col gap-2 pt-28 ">
                    <img src={code} alt="design"/>
                        <h2 class="text-2xl font-bold text-green-500">Code</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                    </div>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-6">
                        <img src={test} alt="design"/>
                        <h2 class="text-2xl font-bold text-sky-600">Test</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;