'use client'
import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Input, Link, Text, Textarea, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { GetCV } from '@/contexts/Portfolio';
import { FaFacebook, FaGithub, FaLinkedin, FaSoundcloud } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';



export default function Contacto() {
  const movil = useBreakpointValue({ base: false, md: true })
  const { perfil } = GetCV()
  const [token, setToken] = React.useState(null);
  const captchaRef = React.useRef(null);


  const contactoHandler = async (event,tokenState) => {
    event.preventDefault()
    const form = new FormData(event.target)
    form.append('token',tokenState)
    await fetch('/api/contact', {
      method: 'POST',
      body: form
    })
  }
  
  const onLoad = () => {
    // captchaRef.current.execute();
  };

  React.useEffect(() => {

  }, [token]);

  return (
    <SeccionPagina id='contacto' noFullHeight={movil} withScrollY={!movil}>
      <Text fontSize={"5xl"} align={"center"} mb={10}>
        Contacto
      </Text>

      <Container maxW={'4xl'}>
        <Flex gap={5} justifyContent={'center'} direction={{base:'column', md:'row'}} >
          <Box w={{ base: 'full', md: '50%' }}>
            <form onSubmit={(e)=> contactoHandler(e,token)} >
              <VStack>
                <FormControl>
                  <FormLabel m={0}>Nombre completo</FormLabel>
                  <Input type="text" name='name' required />
                </FormControl>
                <FormControl>
                  <FormLabel m={0}>Correo electronico</FormLabel>
                  <Input type="email" name='email' required />
                </FormControl>
                <FormControl>
                  <FormLabel m={0}>Mensaje</FormLabel>
                  <Textarea name="message" id="message" cols="30" rows="3" required></Textarea>
                </FormControl>
                <Box>
                  <Center marginBlock={4}>
                    <Button type='submit' w={'full'}>Enviar</Button>
                  </Center>
                  <Center marginBlock={4} >
                    <Box alignSelf={'center'} overflow={'hidden'} borderRadius={10}>
                      <Box transform={'scale(1.05)'} >
                      {/* <div class="h-captcha" data-captcha="true"></div> */}
                        <HCaptcha
                          sitekey={process.env.NEXT_PUBLIC_WEB3FORM_PUBLIC_APIKEY}
                          onLoad={onLoad}
                          onVerify={setToken}
                          ref={captchaRef}
                        />
                      </Box>
                    </Box>
                  </Center>
                </Box>
              </VStack>
            </form>
          </Box>
          <VStack alignItems={'center'} w={{ base: 'full', md: '50%' }}>
            <Text align={'center'}>Redes Sociales</Text>
            <Link href={perfil.redes.github} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaGithub />{new URL(perfil.redes.github).pathname}</Link>
            <Link href={perfil.redes.linkedin} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaLinkedin/>{'/'+ new URL(perfil.redes.linkedin).pathname.split('/').pop()}</Link>
            <Link href={perfil.redes.facebook} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaFacebook/>{new URL(perfil.redes.facebook).pathname}</Link>
            <Link href={perfil.redes.twitter} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaXTwitter/>{new URL(perfil.redes.twitter).pathname}</Link>
            <Link href={perfil.redes.soundcloud} isExternal display={'inline-flex'} alignItems={'center'} gap={1}><FaSoundcloud/>{new URL(perfil.redes.soundcloud).pathname}</Link>
          </VStack>
        </Flex>
      </Container>
    </SeccionPagina>
  )
}
