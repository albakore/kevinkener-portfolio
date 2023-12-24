'use client'
import React from 'react'
import { Box,VStack,HStack,Flex,Link, useBreakpointValue } from '@chakra-ui/react'
import { motion ,MotionConfig} from 'framer-motion'

export default function Navbar({seccionActiva}) {
  const movil = useBreakpointValue({
	base: '-50% 0%',
	md: '0% -50%',
  })
  const lista = ['inicio','descripcion','habilidades','experiencia','proyectos','clientes','contacto']
  return (
	<Flex 
	as={motion.nav}
	position={'fixed'} 
	top={{base:'inherit',md:'50vh'}} 
	bottom={{base:'10px',md:'inherit'}} 
	left={{base:'50vw',md:'inherit'}}
	right={{md:'20px'}}
	translate={movil}
	direction={{base:'row',md:'column'}}
	gap={2} 
	p={2} 
	borderRadius={50}
	initial={{opacity:0.0, scale:0.9}}
	animate={{translate:`${movil}`,opacity:0.1}}
	whileHover={{translate:`${movil}`,opacity:1,scale:1,boxShadow:'0 0 10px 10px RGBA(0, 0, 0, 0.08)'}}
	>
		{lista.map((item,index)=> <IconSeccion key={index} activo={seccionActiva == item} to={item}/>)}
	</Flex>
  )
}

function IconSeccion({activo, to}){
	const seccion = React.useRef(null)

	const handleScroll = () => seccion.current.scrollIntoView({ block: 'start',  behavior: 'smooth' })

	React.useEffect(()=>{
		seccion.current = document.getElementById(to)
	},[to])

	return(
		<MotionConfig transition={{ duration: 0.2 }}>
			<Link onClick={handleScroll}>
				<Box 
				as={motion.div}
				w={8} 
				h={8} 
				bg={activo ? 'teal.400' : 'gray.500'} 
				borderRadius={50} 
				initial={{scale:1}}
				animate={activo ? {scale:1.2} : {}}
				exit={{scale:1}}
				whileHover={{ scale: 1.2 }}
				>
				</Box>
			</Link>
		</MotionConfig>
	)
}
