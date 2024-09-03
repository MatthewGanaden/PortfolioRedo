import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'About', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (


        <div class="box-border m-10 mb-10 rounded-3xl bg-neutral-900 absolute inset-x-0 top-0 z-50 ">
          <nav class="flex items-center justify-between p-6 lg:px-8">
            <div class="">
              <a href="">Matthew Ganaden</a>
            </div>
            <div class="hidden gap-36 text-base lg:flex lg:items-center text-primarytext">
              <div>
                <a href="">Home</a>
              </div>
              <div>
                <a href="">Projects</a>
              </div>
              <div>
                <a href="">About</a>
              </div>
            </div>
            <div>
              <a href="">Download Resume</a>
            </div>
          </nav>

          <div class="flex items-center justify-between p-6 pt-32 lg:px-8">
            <h1 class="font-bold text-3xl max-w-md">Full Stack Developer</h1>
            <span class="text-xl max-w-md">I like to challenge myself through developing websites, enhancing my skills and satisfying client needs and requirements</span>
          </div>


        </div>

  )
}
