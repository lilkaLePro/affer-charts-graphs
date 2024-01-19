import React from "react";
import SideNav from "../ui/component/myspace/sideNav";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight : '400' })


export default function Layout ({ children }: {children: React.ReactNode}){
    return (
        <div className={`${roboto.className} flex-col `}>
            <div className="h-14 w-full flex flex-row items-center justify-between fixed">
                <Link href="/" className="text-sm flex items-center px-3 gap-2 text-alte font-semibold ">
                    <ArrowLeftCircle /> Go back home

                </Link>
                <div className='text-secondary w-8 h-8 bg-destructive font-semibold flex justify-center items-center rounded-sm'>Affer</div>
                <div className="w-9 h-9 border rounded-full"></div>
            </div>

            {/* all sapce */}
        <div className="fixed top-14 w-full flex h-screen overflow-auto">

            <div className=" min-w-64 ">
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