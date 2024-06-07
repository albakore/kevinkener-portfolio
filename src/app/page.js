'use client'
import React from 'react'
import Main from '@/components/Main'
import cv from 'public/curriculum/cv.json'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
      // initialColorMode: 'light',
      useSystemColorMode: true,
    },
    fonts: {
      heading: `'Urbanist Variable', sans-serif;`,
      body: `'Urbanist Variable', sans-serif`,
    },
    styles: {
      global: {
        'h1': {
          fontSize: '28px',
          fontWeight: 700
        },
        'h2': {
          fontSize: '20px',
          fontWeight: 500
        },
        'p': {
          fontSize: '16px',
          fontWeight: 400
        },
  
      },
    }
  })

export default async function page() {
  // console.log(res)
  // cv = await res.text()
  
  return (
    <ChakraProvider theme={theme} >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main perfil={cv}/>
    </ChakraProvider>
    
    // <div>{ cv}</div>
  )
}
