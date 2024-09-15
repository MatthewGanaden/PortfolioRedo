import video from '../../assets/HomeBG.webm'
import image from '../../assets/MattFace.png'
import menu from '../../assets/menu.svg'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function HomeHero() {
    return (
        <div class="relative">
            <div class="flex flex-col gap-8 box-border mx-11 my-6 px-14 rounded-3xl bg-neutral-900 relative z-50 h-[calc(100vh-3rem)]">
            <div class="flex justify-between items-center pt-6">
                <img src="/logo.png" className="h-9 sm:h-14 mr-20" alt="Flowbite React Logo"/>
                <div>
                    <ul class="hidden lg:flex gap-16">
                        <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
                <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                    <div class="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">Download Resume</div>
                    <div class="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                            <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </button>

                <span onClick="Menu(this)"><img src={menu} class="w-11 bg-white"alt="design"/></span>

                <div>
                    <ul class="lg:hidden flex flex-col items-center z-auto absolute bg-neutral-900 w-full left-0 my-10 transition-all ease-in duration-300">
                        <li class="mx-4 my-6 "><a href="">Home</a></li>
                        <li class="mx-4 my-6 "><a href="">Projects</a></li>
                        <li class="mx-4 my-6 "><a href="">About</a></li>
                    </ul>
                </div>
                
            </div>
                <div class="flex gap-10 items-center justify-between pt-32">
                    <h1 class="font-bold text-4xl leading-none max-w-md">Full Stack Developer</h1>
                    <span class="hidden lg:block text-xl leading-tight max-w-md">I like to challenge myself through developing websites, enhancing my skills and satisfying client needs and requirements</span>
                </div>

                <div class="border-box bg-gray-200 overflow-hidden rounded-3xl relative flex justify-center h-lvh">
                    <video class="absolute z-0 top-0 left-0 size-full object-cover" autoPlay loop muted>
                        <source src={video} type="video/webm"/>
                    </video>
                        <img src={image} alt="logo" class="z-10 sticky"></img>
                </div>

                <div class="flex justify-between pb-6">
                    <div class="flex flex-col">
                        <span>Designing,</span>
                        <span>Coding</span>
                    </div>

                    <div class="gap-5 text-base lg:flex lg:items-center text-primarytext ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="fill-white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                    </div>

                    <div>
                        <span class="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">mjdganaden@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;