'use client'
import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Badge, Box, Container, Button, Flex, HStack, Image, Link, Text, VStack, useBreakpointValue, Spacer, useColorModeValue } from '@chakra-ui/react'
import { GetCV } from '@/contexts/Portfolio'

export default function Proyectos() {
  const { proyectos } = GetCV()
  const movil = useBreakpointValue({ base: true, md: false });
  return (
    <SeccionPagina id='proyectos' noFullHeight={!movil} withScrollY={movil}>
      <Container maxW={'5xl'}>
        <Text fontSize={"5xl"} align={"center"} mb={10}>
          Proyectos
        </Text>
        <VStack alignItems={'stretch'}>
          {
            proyectos.map((proyecto, index) => (
              <ProyectoCard
                key={index}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                img={proyecto.url_imagen}
                url={proyecto.url_proyecto}
                tags={proyecto.tags}
              />
            ))
          }
        </VStack>



      </Container>
    </SeccionPagina>
  )
}


function ProyectoCard({ url, img, alt, titulo, descripcion, tags, children }) {
  const movil = useBreakpointValue({ base: true, md: false });
  const colorBase = useColorModeValue('whiteAlpha.400', !movil && 'whiteAlpha.50')
  return (
    <Box
      alignItems={"center"}
      p={8}
      boxShadow={"xl"}
      borderRadius={"xl"}
      bg={colorBase}
    >
      <Flex gap={8} direction={{ base: 'column', md: "row" }} >
        {img && <Image src={img} w={{ base: '300px', md: '300px' }} alignSelf={'center'} alt={alt} />}
        <VStack alignItems={{ base: 'center', md: 'start' }} w={'full'}>
          <Text fontSize={'xl'} fontWeight={600}>{titulo}</Text>
          <Text fontSize={'sm'}>
            {descripcion}
          </Text>
          {children}
          <HStack wrap={"wrap"} justifyContent={'start'}>
            {
              tags?.map((item, index) => <Badge key={index} p={2} paddingBlock={1} fontSize={10} borderRadius={5} variant={"outline"}>{item}</Badge>)
            }
          </HStack>
          <Spacer />
          {url && <Button as={Link} href={url} alignSelf={{ base: 'center', md: 'flex-start' }} isExternal>Ir al proyecto</Button>}
        </VStack>
      </Flex>
    </Box>
  );
}