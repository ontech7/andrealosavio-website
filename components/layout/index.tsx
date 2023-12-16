import type { ReactNode } from 'react'

import Footer from './footer'
import CustomHead from './head'
import Header from './header'

export default function Layout({
  title,
  description,
  metas,
  children
}: {
  title: string
  description?: string
  metas?: JSX.Element | JSX.Element[]
  children?: ReactNode
}) {
  return (
    <>
    
      <CustomHead 
        pageTitle={title} 
        pageDescription={description ?? ""} 
        metas={metas}
      />

      <Header />

      {children}

      <Footer />

    </>
  )
}
