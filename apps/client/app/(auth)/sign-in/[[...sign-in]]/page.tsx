import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="bg-black w-screen flex justify-center h-screen items-center" suppressHydrationWarning>
            <SignIn />
        </div>
    )
}