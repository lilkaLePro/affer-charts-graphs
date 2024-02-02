"use client"

import { LogIn } from "lucide-react"
import { Button } from "./button"
import {signIn} from 'next-auth/react'


export const AuthButton = () => {
    return (<div>
        <Button variant='destructive' onClick={() => {
            signIn()
        }}  className="cursor-pointer flex gap-4 font-bold">
            <LogIn />
            Login
        </Button>
    </div>)
}