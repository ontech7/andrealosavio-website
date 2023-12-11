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
  children?: JSX.Element | JSX.Element[] | string
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
