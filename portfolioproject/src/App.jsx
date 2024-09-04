import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import video from './assets/HomeBG.webm'
import image from './assets/MattFace.png'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'About', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
        <div class="flex flex-col gap-8 box-border m-10 px-7 rounded-3xl bg-neutral-900 absolute inset-x-0 top-0 z-50 h-[calc(100%-5rem)]">
          <nav class="flex items-center justify-between pt-10 lg:px-8">
              <a href="">Matthew Ganaden</a>
            <div class="hidden gap-36 text-base lg:flex lg:items-center text-primarytext">
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">About</a>
            </div>
              <a href="">Download Resume</a>
          </nav>

          <div class="flex  gap-10 items-center justify-between pt-10 lg:px-8">
            <h1 class="font-bold text-3xl max-w-md">Full Stack Developer</h1>
            <span class="hidden md:block text-xl max-w-md">I like to challenge myself through developing websites, enhancing my skills and satisfying client needs and requirements</span>
          </div>

          <div class="border-box bg-gray-200 overflow-hidden rounded-3xl relative flex justify-center h-lvh">
            
              <video class="absolute z-0 top-0 left-0 size-full object-cover" autoPlay loop muted>
                <source src={video} type="video/webm"/>
              </video>
              <img src={image} alt="logo" class="z-10 sticky"></img>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <span>Designing,</span>
              <span>Coding</span>
            </div>

            <div class="gap-36 text-base lg:flex lg:items-center text-primarytext ">
              <span>Github</span>
              <span>LinkedIn</span>
            </div>

            <div>
              <span>email</span>
            </div>
          </div>
        </div>

  )
}
