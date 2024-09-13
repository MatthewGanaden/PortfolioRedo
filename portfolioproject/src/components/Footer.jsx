import video from '../assets/HomeBG.webm'
import image from '../assets/MattFace.png'
import CurrentTime from './Time.jsx'

function Footer() {
    return (
        <div>
            <div class="relative grid grid-cols-3 gap-8 box-border mx-11 mt-6 p-14 rounded-t-3xl bg-neutral-900">
                <div class="hidden lg:flex border-box bg-gray-200 overflow-hidden rounded-3xl relative justify-center aspect-square w-auto max-w-96">
                    <video class="absolute z-0 top-0 left-0 size-full object-cover" autoPlay loop muted>
                            <source src={video} type="video/webm"/>
                        </video>
                        <img src={image} alt="logo" class="z-10 absolute object-fill"></img>
                </div>
                    
                <div class="col-span-2">
                    <div class="grid grid-cols-3 grid-rows-2 h-full">       
                        <nav class="flex flex-col gap-1">
                            <span class="font-bold text-xl pb-2">Menu</span>     
                            <a href="" class="transition-all duration-300 ease-in-out hover:text-sky-600">Home</a>
                            <a href="" class="transition-all duration-300 ease-in-out hover:text-sky-600">Projects</a>
                            <a href="" class="transition-all duration-300 ease-in-out hover:text-sky-600">About</a>
                        </nav>
                        <nav class="flex flex-col gap-1">
                            <span class="font-bold text-xl pb-2">Follow Me</span>
                            <a href="" class="transition-all duration-300 ease-in-out hover:text-sky-600">LinkedIn</a>
                            <a href="" class="transition-all duration-300 ease-in-out hover:text-sky-600">Github</a>
                        </nav>

                        <div class="flex flex-col gap-1">
                            <span class="font-bold text-xl pb-2">Work With Me</span>
                            <span class="underline">mjdganaden@gmai.com</span>
                        </div>
                            
                        <div class="col-span-2 flex flex-col justify-end">
                            <span class="font-bold text-xl pb-2">Based in Baguio City, Philippines</span>
                            <span>Current Time: <CurrentTime /></span>
                        </div>
                        <div class="flex flex-col justify-end">
                            <span class="font-bold text-xl pb-2">Availability:</span>
                            <span>Current availability for full-time job</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;