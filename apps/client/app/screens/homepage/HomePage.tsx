"use client"
import React from 'react'
import { api } from '@@/packages/backend/convex/_generated/api'
import { useQuery } from 'convex/react'
import { useAtom } from 'jotai'

function HomePagePage({params}: { params: { [key: string]: string}}) {



  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default HomePagePage
