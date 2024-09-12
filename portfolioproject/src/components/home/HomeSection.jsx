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
                <div class="flex items-center justify-center py-2 pl-5 pr-3 text-xl font-normal border rounded-full text-primarytext md:text-xl sm:pl-8 sm:pr-5 sm:py-3 border-bline">About me</div>
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
                        <a href="" class="font-medium border border-white px-7 py-4 rounded-full group relative flex items-center hover:text-slate-800 hover:bg-white top-0 duration-400 ease">
                            <span class="relative">View More</span>
                            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
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
                        <span>Visit Site</span>
                    </div>
                    <div class="flex flex-col text-right">
                        <h3 class="font-bold text-xl">Development & Deployment</h3>
                        <span>React, Figma, Photoshop, After Effects, Premiere Pro</span>
                    </div>
                </div>
            </div>

            <div class="flex m-24 justify-between items-center">
                <span class="font-semibold text-3xl">Awards</span>
                <div class="grid grid-cols-3 w-full text-center">
                    <span>Name</span>
                    <span>Agency</span>
                    <span>Date</span>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeHero;