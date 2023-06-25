import '../styles/global.css'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>Fondazione pro Canale ETS</title>
        <meta name="description" content="Fondazione pro Canale ETS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <Header /> 
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp