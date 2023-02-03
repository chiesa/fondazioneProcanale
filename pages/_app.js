import '../styles/global.css'
import Head from 'next/head'
import {MoralisProvider} from "react-moralis" 
import Header from '../components/header'
import Donation from '../components/donation'
import Footer from '../components/footer'
import { NotificationProvider } from "web3uikit"


function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>Samuele Chiesa</title>
        <meta name="description" content="Personal website of Samuele Chiesa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <MoralisProvider initializeOnMount={false}>
          <NotificationProvider>
              <Header /> 
              <Component {...pageProps} />
              <Donation /> 
              <Footer />
          </NotificationProvider>
      </MoralisProvider>
    </div>
  )
}

export default MyApp