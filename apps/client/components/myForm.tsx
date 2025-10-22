"use client"

import { z } from "zod"
import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { Monda, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(useGSAP)

const sans = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

const formSchema = z.object({
    username: z.string().min(8, {
        message: "⚠️ Username must be at least 8 characters"
    })
})



export function ProfileForm(){

    const buttonRef = useRef(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        }
    })
    
    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }





    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8 w-[50%]")}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className={cn(sans.className)}>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="manav__kamdar" {...field} />
                            </FormControl>
        
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={cn("bg-gray-600/70 w-full cursor-pointer")}>Submit</Button>
            </form>
        </Form>
    )
}