import Head from 'next/head'
import styled from 'styled-components'

import Styles from './Styles'
import { Nav, Footer } from '../'

// General component used for all pages in the app
// Define global styles here

const Wrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 82.5vh;
  padding: 2rem 0;
`

// TODO add other meta tags

export const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link href="https://fonts.googleapis.com/css?family=Gaegu|Ubuntu|Comfortaa|Montserrat" rel="stylesheet" />
    </Head>

    <Styles />

    <Nav />

    <Wrapper>
      { children }
    </Wrapper>

    <Footer />
  </div>
)
