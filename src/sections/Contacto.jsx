import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Text } from '@chakra-ui/react'
export default function Contacto() {
  return (
	<SeccionPagina id='contacto'>
    <Text fontSize={"5xl"} align={"center"} mb={10}>
      Contacto
    </Text>
  </SeccionPagina>
  )
}
