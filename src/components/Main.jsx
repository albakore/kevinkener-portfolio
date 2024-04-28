'use client'
import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Clientes from "@/sections/Clientes"
import Contacto from "@/sections/Contacto"
import Descripcion from "@/sections/Descripcion"
import Habilidades from "@/sections/Habilidades"
import Inicio from "@/sections/Inicio"
import Proyectos from "@/sections/Proyectos"
import { Text, Button, Flex, Box, useBreakpointValue,useColorModeValue } from "@chakra-ui/react"
import Experiencia from '@/sections/Experiencia'
import { perfilContext } from '@/contexts/Portfolio'

const handleScrollY = (e,sections,funcion) => {

    const pageYOffset = e.currentTarget.scrollTop + 300;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });
    funcion(newActiveSection);
  };

  const handleScrollX = (e,sections,funcion) => {
    const pageXOffset = e.currentTarget.scrollLeft + 350;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetLeft = section.offsetLeft;
      const sectionWidth = section.offsetWidth;
      if (pageXOffset >= sectionOffsetLeft && pageXOffset < sectionOffsetLeft + sectionWidth) {
        newActiveSection = section.id;
      }
    });
    funcion(newActiveSection);
  };


export default function Main({perfil}) {

  const [activeSection, setActiveSection] = React.useState(null);
  const sections = React.useRef([]);
  const movil = useBreakpointValue({
    base: true,
    md: false
  })
  const bg = useColorModeValue('', !movil && 'linear-gradient(180deg, rgba(184, 175, 166, 1) 0%, rgb(103 99 98) 25%, rgb(87 83 82) 50%, rgb(49 46 48) 75%, rgba(29, 26, 33, 1) 100%)')
  


  React.useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    setActiveSection('inicio');
  }, []);


  return (
    <perfilContext.Provider value={perfil}>
      <Box
        onScroll={movil ? (e)=> handleScrollX(e,sections,setActiveSection) : (e)=> handleScrollY(e,sections,setActiveSection)}
        position={'fixed'}
        w={'100vw'}
        h={'100vh'}
        overflowY={{ base: 'hidden', md: 'auto' }}
        overflowX={{ base: 'auto', md: 'hidden' }}
        scrollSnapType={'x mandatory'}
      >
        {
          movil
          ? <Box zIndex={-1} pointerEvents={'none'} position={'fixed'} w={'100%'} h={'100svh'} top={0} left={0} bg={'radial-gradient(70vw 80vh  at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.5) 120%, rgba(0,0,0,1) 250%)'}></Box>
          : <Box zIndex={-1} pointerEvents={'none'} position={'fixed'} w={'100%'} h={'100svh'} top={0} left={0} bg={'radial-gradient(100vh 50vw  at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.5) 120%, rgba(0,0,0,1) 250%)'}></Box>
        }
          
        <Navbar seccionActiva={activeSection} />
        <Flex w={'max-content'} direction={{ base: 'row', md: 'column' }} bg={bg} >
          <Inicio />
          <Descripcion />
          <Habilidades />
          <Experiencia />
          <Proyectos />
          <Contacto />
        </Flex>

      </Box>
    </perfilContext.Provider>
  )
}
