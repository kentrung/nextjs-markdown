import Header from '../components/Header'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
