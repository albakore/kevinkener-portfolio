'use client'
import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Text, Box, VStack, HStack, Flex, Button, Container, Center,Image,useColorMode,useColorModeValue, IconButton } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { GetCV } from '@/contexts/Portfolio'
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLight, CiDark  } from "react-icons/ci";

export default function Inicio() {
  const { perfil,curriculum } = GetCV()
  const { toggleColorMode } = useColorMode()
  const modoImagen = useColorModeValue('/img/profile/Kevin_Kener_2.jpg','/img/profile/Kevin_Kener.jpg')
  const bg = useColorModeValue('', '')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <SeccionPagina id='inicio' bg={bg} >
      <Box position={'absolute'} top={0} left={0} m={5}>
      <ThemeMode onClick={toggleColorMode}/>
      </Box>
      <Center h={'100%'}>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems={'center'} gap={5} >
          <Box filter={'drop-shadow(-1px 3px 10px #999999 )'} >
          <Box w={{ base: '200px', md: '300px' }} h={{ base: '200px', md: '400px' }} bg={'gray.200'} borderRadius={{ base: 100, md: 5 }} overflow={'hidden'}  clipPath={{base:null,md:"polygon(80px 0%, 100% 0, 100% 80px, 100% calc(100% - 80px), calc(100% - 80px) 100%, 80px 100%, 0 100%, 0% 80px)"}}>
            <Center overflow={'hidden'}>
              <Image src={modoImagen}  alt='Kevin Kener'/>
            </Center>
          </Box>
          </Box>
          <VStack w={'400px'} alignItems={{ base: 'center', md: 'start' }} gap={1}>
            <Text fontSize={'6xl'} lineHeight={'60px'} >{`${perfil.nombre} ${perfil.apellido}`}</Text>
            <Text fontSize={'2xl'}>{perfil.rol}</Text>
            <Flex direction={'row'} gap={3}>
              <Link href={perfil.redes.github} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaGithub />{new URL(perfil.redes.github).pathname}</Link>
              <Link href={perfil.redes.linkedin} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaLinkedin/>{'/'+ new URL(perfil.redes.linkedin).pathname.split('/').pop()}</Link>
              {/* <Link href={perfil.redes.instagram} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaInstagram/>Instagram </Link>
              <Link href={perfil.redes.facebook} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaFacebook/>Facebook </Link>
              <Link href={perfil.redes.twitter} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaXTwitter/>X </Link> */}
            </Flex>
            
            <Button as={Link} download href={curriculum} bg={'black'} color={'white'} _hover={{bg:'gray.700', color:'white' }}>Obtener CV</Button>
          </VStack>

        </Flex>
      </Center>

    </SeccionPagina>
  )
}

function ThemeMode({onClick}) {
  const themeIcon = useColorModeValue(<CiLight fontSize={50}/>, <CiDark fontSize={50}/>)
  return (
    <IconButton onClick={onClick} w={50} h={50} bg={'transparent'} _hover={{bg:'transparent',color:'white'}}>
      {themeIcon}
    </IconButton>
  )
  
}
