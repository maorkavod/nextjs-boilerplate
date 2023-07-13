import Layout from '../components/Layout/Layout'
import './globals.scss'
import React from 'react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}