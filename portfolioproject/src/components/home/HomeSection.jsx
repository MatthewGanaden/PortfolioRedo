import design from '../../assets/Design.svg'
import development from '../../assets/Code.svg'
import testing from '../../assets/Test.svg'

import AE from '../../assets/tech/AE.svg'
import PremierePro from '../../assets/tech/PremierePro.svg'
import Photoshop from '../../assets/tech/Photoshop.svg'
import Figma from '../../assets/tech/Figma.svg'
import HTML from '../../assets/tech/HTML.svg'
import CSS from '../../assets/tech/CSS.svg'
import Vue from '../../assets/tech/Vue.svg'
import Wordpress from '../../assets/tech/Wordpress.svg'

import C from '../../assets/tech/C.svg'
import Cpp from '../../assets/tech/C++.svg'
import Java from '../../assets/tech/Java.svg'
import Python from '../../assets/tech/Python.svg'
import Javascript from '../../assets/tech/Javascript.svg'
import Git from '../../assets/tech/Git.svg'
import Arduino from '../../assets/tech/Arduino.svg'
import Selenium from '../../assets/tech/Selenium.svg'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
  ]

function HomeHero() {
    return (
        <div>
            <div class="flex gap-20 justify-between items-center m-24">
                <span class="text-xl max-w-xl">I am a fresh graduate mostly involved in developing both back-end and front-end of our projects, making our designs come to life.</span>
                <a href="" class="group relative inline-flex p-5 items-center justify-center rounded-full border px-6 font-medium text-neutral-200 text-xl overflow-hidden transition-all duration-300 ease-in-out hover:text-neutral-900">
                    <span class="relative z-10">About Me</span>
                    <div class="relative z-10 ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                        <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </a>
            </div>
            <div class="flex flex-col items-center m-24">
                <span class="font-semibold text-3xl text-green-500">What I do</span>
                <div class="flex flex-row flex-grow gap-5">
                    <div class="bg-neutral-900 rounded-3xl p-11">
                        <div class="pt-64 pr-14 pb-6">
                            <img src={design} alt="design"/>
                            <h2 class="text-2xl font-bold text-pink-400">Design</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-11">
                        <div class="pt-64 pr-14 pb-6">
                            <img src={development} alt="design"/>
                            <h2 class="text-2xl font-bold text-green-500">Code</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                    <div class="bg-neutral-900 rounded-3xl p-11">
                        <div class="pt-64 pr-14 pb-6">
                            <img src={testing} alt="design"/>
                            <h2 class="text-2xl font-bold text-sky-600">Test</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col pb-6">
                <span class="font-semibold text-3xl text-green-500 text-center">Techstack</span>
                <span class="text-center text-xl max-w-xl m-auto">As a Full-stack Developer, I use various technologies to meet requirements</span>
            </div>

            <div class="flex overflow-hidden space-x-6">
                <div class="flex space-x-6 animate-loop-scroll pb-6">
                    <img loading="lazy" src={AE} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={PremierePro} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Photoshop} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Figma} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Wordpress} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={HTML} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={CSS} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Vue} alt="AE" class="max-w-none"/>
                </div>
                <div class="flex space-x-6 animate-loop-scroll pb-6" aria-hidden="true">
                    <img loading="lazy" src={AE} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={PremierePro} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Photoshop} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Figma} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Wordpress} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={HTML} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={CSS} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Vue} alt="AE" class="max-w-none"/>
                </div>
            </div>

            <div class="flex overflow-hidden space-x-6">
                <div class="flex space-x-6 animate-reverse-loop-scroll pb-6">
                    <img loading="lazy" src={C} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Cpp} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Java} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Python} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Javascript} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Git} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Arduino} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Selenium} alt="AE" class="max-w-none"/>
                </div>
                <div class="flex space-x-6 animate-reverse-loop-scroll pb-6" aria-hidden="true">
                    <img loading="lazy" src={C} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Cpp} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Java} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Python} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Javascript} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Git} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Arduino} alt="AE" class="max-w-none"/>
                    <img loading="lazy" src={Selenium} alt="AE" class="max-w-none"/>
                </div>
            </div>

            <div class="flex flex-col gap-6 m-24">
                <span class="font-semibold text-3xl">Projects</span>
                <div class="flex gap-8 p-14 rounded-3xl bg-neutral-900 w-full justify-between items-center">
                    <div class="flex flex-col">
                        <h2 class="font-bold text-2xl text-pink-400">DDStudios</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>

                        <a href="https://ddstudiosph.com/" target="_blank" class="mt-5 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-700 px-6 font-medium w-36 transition-colors duration-300 ease-in-out hover:text-neutral-900">
                            <span class="relative z-10">Visit Site</span>
                            <div class="relative z-10 w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </a>
                                            
                    </div>
                    <div class="flex flex-col text-right">
                        <h3 class="font-bold text-xl">Development & Deployment</h3>
                        <span>Wordpress</span>
                    </div>
                </div>
                <div class="flex gap-8 p-14 rounded-3xl bg-neutral-900 w-full justify-between items-center">
                    <div class="flex flex-col">
                        <h2 class="font-bold text-2xl text-pink-400">MatthewGanaden</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        
                        <a href="" class="mt-5 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-700 px-6 font-medium w-36 transition-colors duration-300 ease-in-out hover:text-neutral-900">
                            <span class="relative z-10">Visit Site</span>
                            <div class="relative z-10 w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </a>
                    </div>
                    <div class="flex flex-col text-right">
                        <h3 class="font-bold text-xl">Development & Deployment</h3>
                        <span>React, Figma, Photoshop, After Effects, Premiere Pro</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col m-24 lg:flex-row">
                <span class="font-semibold text-3xl">Awards</span>
                <div class="flex flex-col w-full pt-10 lg:pl-36">
                    <div class="grid grid-cols-[3fr_3fr_1fr] px-10 pb-4 border-b">
                        <span>Name</span>
                        <span>Agency</span>
                        <span class="justify-self-end">Date</span>
                    </div>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="flex flex-col m-24 lg:flex-row">
                <span class="font-semibold text-3xl">Certificates</span>
                <div class="flex flex-col w-full pt-10 lg:pl-36">
                    <div class="grid grid-cols-[3fr_3fr_1fr] px-10 pb-4 border-b">
                        <span>Name</span>
                        <span>Agency</span>
                        <span class="justify-self-end">Date</span>
                    </div>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" class="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span class="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div class="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span class="justify-self-end">2021</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;