"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./ui/component/navbar"
import { Plus } from "lucide-react"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-4">
      <div className='shadow-md w-full h-[50px] fixed bg-accent justify-center items-center md:flex'>
        <Navbar />
      </div>

      <div className="relative mt-32 text-center flex flex-col gap-5 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] md:max-w-3xl">
        <h1 className='md:text-6xl text-primary text-4xl font-bold '><span className='text-destructive'>Save</span> hours by <span className='text-destructive'>bringing data to life</span> in a few click </h1>
        <div className="flex gap-10 mt-10">
        <Link href='/my-space/graphs/create'>
          <Button variant='destructive' className="text-md cursor-pointer">
          <Plus /> Start Creating  </Button>
        </Link>
        </div>
      </div>

      <div className="mb-32 mt-32 lg:max-w-5xl lg:w-full flex flex-col gap-10">
        
        <div className='w-full md:grid grid-cols-1 gap-3  bg-popover'>
        </div>

        <div className='w-full grid md:grid-cols-2 gap-3  bg-popover '>
          <div className='h-44 text-center'>MON CHART SIMPLE</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magni reprehenderit voluptas amet autem, tenetur inventore magnam, quis a itaque sequi possimus eaque atque? Excepturi officiis architecto velit quia quod.</p>
        </div>
        
      </div>
    </main>
  )
}
