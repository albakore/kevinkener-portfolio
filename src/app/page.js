'use client'
import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Clientes from "@/sections/Clientes"
import Contacto from "@/sections/Contacto"
import Descripcion from "@/sections/Descripcion"
import Habilidades from "@/sections/Habilidades"
import Inicio from "@/sections/Inicio"
import Proyectos from "@/sections/Proyectos"
import { Text, Button, Flex, Box, useBreakpointValue } from "@chakra-ui/react"
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
        <Navbar seccionActiva={activeSection} />
        <Flex w={'max-content'} direction={{ base: 'row', md: 'column' }}   >
          <Inicio />
          <Descripcion />
          <Habilidades />
          <Experiencia />
          <Proyectos />
          <Clientes />
          <Contacto />
        </Flex>

      </Box>
    </perfilContext.Provider>
  )
}
