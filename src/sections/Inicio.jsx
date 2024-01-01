import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Text,Box,VStack,HStack,Flex,Button,Container, Center } from '@chakra-ui/react'
import { getCV } from '@/contexts/Portfolio'

export default function Inicio() {
  const {perfil} = getCV()

  return (
	<SeccionPagina id='inicio' >
   <Center h={'100%'}>
   <Flex direction={{base:'column',md:'row'}} alignItems={'center'} gap={5}>
    <Box w={{base:'200px',md:'300px'}} h={{base:'200px',md:'400px'}} bg={'gray.200'} borderRadius={{base:100,md:30}}></Box>
    <VStack w={'400px'} alignItems={{base:'center',md:'start'}} gap={1}>
      <Text fontSize={'6xl'} lineHeight={'60px'} >{`${perfil.nombre} ${perfil.apellido}`}</Text>
      <Text fontSize={'2xl'}>{perfil.rol}</Text>
      <Button>Contactar</Button>
    </VStack>
    
    </Flex>
   </Center>
    
  </SeccionPagina>
  )
}
