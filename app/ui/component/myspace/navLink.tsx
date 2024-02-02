"use client"
import clsx from "clsx";
import { LucideView, PlusSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { roboto } from "../../font";


let links = [
    {name: "Mon space" , icone: LucideView, 
    href: '/my-space' },

    {name: "create charts" , icone: PlusSquare , 
    href: '/my-space/graphs/create' },

    {name: "Mes graphs" , icone: LucideView , 
       href: '/my-space/graphs' , count : '(1)' },
]

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <div className={`flex flex-col mx-2 gap-2 `}>
            {links.map(link => {
                const LinkIcone = link.icone;
                // CHANGER LE FONT AVEC UN FONT PLUS FLUID
            return (
                    <Link key={link.name} href={link.href}
                    className={clsx(
                        "flex grow rounded-xl items-center gap-2 pl-6 py-2 hover:text-destructive",
                        {'text-destructive border-alte bg-muted ' : pathname === link.href },
                    )}>
                    <LinkIcone className="w-5 font-thin" /> 
                    <p className="text-sm font-semibold">{link.name}</p>
                    <span className="text-destructive ">{link.count} </span>
                </Link>
            )
        })}
        </div>
    )


}


export default NavLinks