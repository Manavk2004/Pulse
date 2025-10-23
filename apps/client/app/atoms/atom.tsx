import { atom, useAtom } from "jotai"



export const currentScreen = atom<React.ComponentType | null>(null)
export const userId = atom<string>("")