import "@/assets/pagestyle/athorized.css"

import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="back" />
      {children}
    </>
  )
}

export default Layout