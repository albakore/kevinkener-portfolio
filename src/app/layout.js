import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
// import './global.css'
import '@fontsource-variable/urbanist';
import { Suspense } from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Kevin Kener',
  description: 'Desarrollador Fullstack',
}



export default function RootLayout({ children }) {
  return (
    <html lang="es" >
      <body>
        {children}
      </body>
      {/* <Script src="https://web3forms.com/client/script.js" async defer></Script> */}
    </html>
  )
}
