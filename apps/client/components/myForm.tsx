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
import { useMutation, useQuery } from "convex/react"
import { api } from "../../../packages/backend/convex/_generated/api"
import { userId } from "@/app/atoms/atom"
import { useAtom, useSetAtom } from "jotai"
import { User } from "lucide-react"
import { redirect } from "next/navigation"
import { theUserName } from "@/app/atoms/atom"
import { useConvex } from "convex/react"


gsap.registerPlugin(useGSAP)

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

const formSchema = z.object({
    username: z.string().min(8, {
        message: "⚠️ Username must be at least 8 characters"
    })
})



export function ProfileForm(){

    const [ userIds, setUserIds ] = useAtom<string>(userId)

    const addUser = useMutation(api.user.add)
    const convex = useConvex()
    const changeUserName = useSetAtom(theUserName)

    const buttonRef = useRef(null)

    const [ userName, setUserName ] = useState<string>("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        }
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>){
        changeUserName(values.username)
        await addUser({
            username: values.username,
            id: userIds
        }) 
        const userId = await convex.query(api.user.getId, { username: values.username })
        const id = userId?._id

        redirect(`/homepage/${id}`)


    }





    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8 w-[50%]")}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className={cn(inter.className)}>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="manav__kamdar" {...field} />
                            </FormControl>
        
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={cn("bg-gray-500/20 w-full cursor-pointer hover:text-[#6c47ff]", inter.className)}>Submit</Button>
            </form>
        </Form>
    )
}