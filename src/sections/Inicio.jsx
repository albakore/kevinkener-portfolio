import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Text, Box, VStack, HStack, Flex, Button, Container, Center,Image,useColorMode,useColorModeValue } from '@chakra-ui/react'
import { GetCV } from '@/contexts/Portfolio'

export default function Inicio() {
  const { perfil } = GetCV()
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('', '')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <SeccionPagina id='inicio' bg={bg} >
      <Center h={'100%'}>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems={'center'} gap={5}>
          <Box w={{ base: '200px', md: '300px' }} h={{ base: '200px', md: '400px' }} bg={'gray.200'} borderRadius={{ base: 100, md: 30 }} overflow={'hidden'} boxShadow={'lg'} border={'1px solid rgba(98,77,72,0.5)'}>
            <Center overflow={'hidden'}>
              <Image src='/img/profile/Kevin_Kener.jpg'  alt='Kevin Kener'/>
          </Center>
          </Box>
          <VStack w={'400px'} alignItems={{ base: 'center', md: 'start' }} gap={1}>
            <Text fontSize={'6xl'} lineHeight={'60px'} >{`${perfil.nombre} ${perfil.apellido}`}</Text>
            <Text fontSize={'2xl'}>{perfil.rol}</Text>
            <Button onClick={toggleColorMode}>Contactar</Button>
          </VStack>

        </Flex>
      </Center>

    </SeccionPagina>
  )
}
