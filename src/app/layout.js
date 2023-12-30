'use client';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import './global.css'
import '@fontsource-variable/urbanist';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const theme = extendTheme({
  fonts: {
    heading: `'Urbanist Variable', sans-serif;`,
    body: `'Urbanist Variable', sans-serif`,
  },
})

export default function RootLayout({ children }) {
  return (
    <html  lang="es" >
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}