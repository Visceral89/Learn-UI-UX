import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const lemon = localFont({
  src: [
    {
      path: '/fonts/LEMONMILK-Bold.woff2',
      weight: '700' 
    },
    {
      path: '/fonts/LEMONMILK-Regular.woff2',
      weight: '400' 
    },
  ],
  variable: '--font-lemon-bold',
})

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={`${lemon.variable} font-sans`}><Component {...pageProps} /></main>)
}
