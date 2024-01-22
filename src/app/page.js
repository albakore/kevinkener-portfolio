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
import { useScroll, motion, } from "framer-motion"
import Experiencia from '@/sections/Experiencia'
import { perfilContext } from '@/contexts/Portfolio'
import perfil_cv from "../contexts/cv.json"

export default function Home() {

  const [activeSection, setActiveSection] = React.useState(null);
  const sections = React.useRef([]);
  const movil = useBreakpointValue({
    base: true,
    md: false
  })
  const bg = useColorModeValue('', !movil && 'linear-gradient(180deg, rgba(184,175,166,1) 0%, rgba(105,88,84,1) 25%, rgba(98,77,72,1) 50%, rgba(55,45,54,1) 75%, rgba(29,26,33,1) 100%)')
  
  const handleScrollY = (e) => {

    const pageYOffset = e.currentTarget.scrollTop + 300;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  const handleScrollX = (e) => {
    const pageXOffset = e.currentTarget.scrollLeft + 350;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetLeft = section.offsetLeft;
      const sectionWidth = section.offsetWidth;
      if (pageXOffset >= sectionOffsetLeft && pageXOffset < sectionOffsetLeft + sectionWidth) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  React.useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    setActiveSection('inicio');
  }, []);


  return (
    <perfilContext.Provider value={perfil_cv}>
      <Box as={motion.main}
        onScroll={movil ? handleScrollX : handleScrollY}
        position={'fixed'}
        w={'100vw'}
        h={'100vh'}
        overflowY={{ base: 'hidden', md: 'auto' }}
        overflowX={{ base: 'auto', md: 'hidden' }}
        scrollSnapType={'x mandatory'}
      >
        {
          movil
          ? <Box pointerEvents={'none'} position={'fixed'} w={'100%'} h={'100svh'} top={0} left={0} bg={'radial-gradient(70vw 80vh  at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.5) 120%, rgba(0,0,0,1) 250%)'}></Box>
          : <Box pointerEvents={'none'} position={'fixed'} w={'100%'} h={'100svh'} top={0} left={0} bg={'radial-gradient(100vh 50vw  at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.5) 120%, rgba(0,0,0,1) 250%)'}></Box>
      }
          
        <Navbar seccionActiva={activeSection} />
        <Flex w={'max-content'} direction={{ base: 'row', md: 'column' }}  bg={bg} >
          <Inicio />
          <Descripcion />
          <Habilidades />
          <Experiencia />
          <Proyectos />
          {/* <Clientes /> */}
          <Contacto />
        </Flex>

      </Box>
    </perfilContext.Provider>
  )
}
