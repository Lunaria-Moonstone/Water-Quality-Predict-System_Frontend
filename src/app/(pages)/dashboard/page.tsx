"use client"

import { useRouter } from "next/navigation"

function Dashboard() {
  const router = useRouter()
  router.replace('/dashboard/overlook')

  return (
    <></>
  )
}

export default Dashboard

