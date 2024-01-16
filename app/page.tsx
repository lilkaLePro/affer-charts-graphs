"use client"
import clsx from 'clsx'
import { FileSpreadsheet, HomeIcon, Space } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name:  "home" , icone: HomeIcon, href:'/' },
  { name:  "my space" , icone: Space , href:'/my-space' },
  { name:  "about" , icone: FileSpreadsheet, href:'/about' },
]


export default function Home() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-4">
      <div className='w-full h-[50px] fixed border-b-2 bg-accent justify-center items-center hidden md:flex'>
        <div className="z-10 flex md:max-w-xl w-full items-center justify-between font-mono text-md">
        <div className='w-8 h-8 bg-destructive font-semibold flex justify-center items-center rounded-sm'>Affer</div>
        {
          links.map((link) => {
            const LinkIcone = link.icone

            return (
              <Link key={link.name} href={link.href}
              className={clsx(
                "flex gap-2 border-b-2",
               { "border-b-2 text-destructive hover:border-none" : pathname === link.href }
              )} >
                <LinkIcone className='w-5 h-5' />
                <p className='font-semibold text-[18px] '>{link.name}</p>
              </Link>
              
            )
          })
        }     
        
        </div>
        
        </div>
        

      <div className="relative mt-32 text-center flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] md:max-w-3xl">
        <h1 className='md:text-6xl text-4xl font-bold '><span className='text-destructive'>Save</span> hours by bringing data to life few click </h1>
        {/* button */}
      </div>

      <div className="mb-32 mt-32 lg:max-w-5xl lg:w-full flex flex-col gap-10">
        <div className='w-full md:grid grid-cols-2 gap-3  bg-popover'>
          <div className='h-44 text-center'>MON CHART SIMPLE</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magni reprehenderit voluptas amet autem, tenetur inventore magnam, quis a itaque sequi possimus eaque atque? Excepturi officiis architecto velit quia quod.</p>
        </div>
        <div className='w-full grid md:grid-cols-2 gap-3  bg-popover '>
          <div className='h-44 text-center'>MON CHART SIMPLE</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magni reprehenderit voluptas amet autem, tenetur inventore magnam, quis a itaque sequi possimus eaque atque? Excepturi officiis architecto velit quia quod.</p>
        </div>
        
      </div>
    </main>
  )
}
