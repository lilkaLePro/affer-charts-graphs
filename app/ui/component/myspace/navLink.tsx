"use client"
import clsx from "clsx";
import { LucideView, PlusSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

let links = [
    {name: "Mon space" , icone: LucideView, 
    href: '/my-space' },

    {name: "Mes graphs" , icone: LucideView , 
       href: '/my-space/graphs' , count : '(1)' },

    {name: "create charts" , icone: PlusSquare , 
    href: '/my-space/graphs/create' },
]

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
            {links.map(link => {
                const LinkIcone = link.icone;

            return (
                    <Link key={link.name} href={link.href}
                    className={clsx(
                        "flex grow gap-2 rounded-r-md pl-6 py-2 font-semibold text-muted-foreground",
                        {'text-alte bg-alte-foreground border-l-4 border-alte ' : pathname === link.href }
                    )}>
                    <LinkIcone className="w-5" /> 
                    <p className="">{link.name}</p>
                    <span className="text-destructive ">{link.count} </span>
                </Link>
            )
        })}
        </>
    )


}


export default NavLinks