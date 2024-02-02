"use client"
import SideNav from "../ui/component/myspace/sideNav";
import { ArrowLeftCircle, Menu, MenuSquare, X } from "lucide-react";
import Link from "next/link";
import { Roboto } from 'next/font/google'
import { Button, buttonVariants } from "../ui/button";
// import { useAppstore } from "@/store";

const roboto = Roboto({ subsets: ['latin'], weight : '400' })

export default function Layout ({ children }: {children: React.ReactNode}){
// const {menuW , updateMenuW} = useAppstore()
    return (
        <div className={`${roboto.className} flex-col `}>
            <div className="h-14 w-full flex flex-row items-center fixed z-40">
                <Link href="/" className="text-sm px-3 gap-2 text-alte font-semibold ">
                    <Button variant="outline" className="text-destructive flex gap-5">
                    <ArrowLeftCircle /> 
                    <div className='text-secondary w-8 h-8 bg-destructive font-semibold flex justify-center items-center rounded-sm'>Affer</div>
                    </Button>
                </Link>
                <div className="cursor-pointer text-destructive p-[] rounded-lg border">
                    <Menu className=" hover:bg-muted  m-2"/>
                    <X className="hidden"/>
                </div>
            </div>

            {/* all sapce */}
        <div className="fixed top-14 w-full flex h-screen overflow-auto">
        
        
        
            <div className=" hidden md:block">
                <SideNav />
            </div>
            
            <div className=" flex flex-row justify-between w-full">
                {/* content */}
                <div> {children} </div>
            </div>

        </div>

        </div>
    )
}