import { LucideMenu, Menu } from "lucide-react";
import { Button } from "../../button";
import NavLinks from "./navLink";
import { useAppstore } from "@/store";

const SideNav = () => {
    const {menuW , updateMenuW} = useAppstore()

    return (
        <div className={`justify-between min-h-screen border  w-64`}>
            <div>
               <Button variant='outline' className="mt-7 mb-3 font-semibold ml-5 hover:bg-background py-1">
                Menu
               </Button>
                <div className="">
                    <NavLinks />
                </div>
            </div>
        </div>
    )
}

export default SideNav;