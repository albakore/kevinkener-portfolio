'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'

export default function SeccionPagina({id,children,bg,noFullHeight=false, withScrollY=false}) {
  return (
	<Box as='section' data-section id={id}
	 w={'100vw'} 
	 h={!noFullHeight ? '100svh': 'inherit'} 
	 p={5}  
		  style={{ scrollSnapAlign: 'start', overflowY: withScrollY ? 'scroll' : 'inherit' }}
		  bg={bg}
	>
		{children}
	</Box>
  )
}
