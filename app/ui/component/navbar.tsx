import clsx from 'clsx'
import { FileSpreadsheet, HomeIcon, Space } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthButton } from '../AuthButton'


const links = [
    { name:  "home" , icone: HomeIcon, href:'/' },
    { name:  "my space" , icone: Space , href:'/my-space' },
    { name:  "about" , icone: FileSpreadsheet, href:'/about' },
  ]
  

export default function Navbar() {
  const pathname = usePathname();


return (
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
        <p className='font-semibold text-[18px] hidden md:block'>{link.name}</p>
      </Link>
      
    )
  }) 
}
<AuthButton />
</div>

)}