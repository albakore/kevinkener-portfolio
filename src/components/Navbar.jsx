'use client'
import React from 'react'
import { Box, VStack, HStack, Flex, Link, useBreakpointValue, Tooltip, Center, useColorModeValue } from '@chakra-ui/react'
import { motion, MotionConfig } from 'framer-motion'
import { IoHome } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { FaUserTie, FaCode, FaLaptop, FaComments } from "react-icons/fa";


const listaMenu = {
	inicio: <IoHome />,
	descripcion: <IoIosPaper />,
	habilidades: <FaCode />,
	experiencia: <FaUserTie />,
	proyectos: <FaLaptop />,
	contacto: <FaComments />,
}

export default function Navbar({ seccionActiva }) {
	const movil = useBreakpointValue({
		base: '-50% 0%',
		md: '0% -50%',
	})
	
	// const lista = ['inicio', 'descripcion', 'habilidades', 'experiencia', 'proyectos', 'contacto']

	return (
		<Flex
			as={motion.nav}
			position={'fixed'}
			top={{ base: 'inherit', md: '50vh' }}
			bottom={{ base: '10px', md: 'inherit' }}
			left={{ base: '50vw', md: 'inherit' }}
			right={{ md: '20px' }}
			translate={movil}
			direction={{ base: 'row', md: 'column' }}
			gap={2}
			p={2}
			borderRadius={50}
			initial={{ opacity: 0.0, scale: 0.9 }}
			animate={{ translate: `${movil}`, opacity: 0.3 }}
			whileHover={{ translate: `${movil}`, opacity: 1, scale: 1, boxShadow: '0 0 10px 10px RGBA(0, 0, 0, 0.08)' }}
			zIndex={1000}
		>
			{Object.keys(listaMenu).map((labelSeccion, index) => <IconSeccion key={index} label={labelSeccion} icono={listaMenu[labelSeccion]} activo={seccionActiva == labelSeccion} to={labelSeccion} />)}
		</Flex>
	)
}

function IconSeccion({ label, icono, activo, to }) {
	const seccion = React.useRef(null)
	const movil = useBreakpointValue({
		base: 'top',
		md: 'left',
	})

	const modo_movil = useBreakpointValue({
		base: true,
		md: false,
	})
	const colorBase = useColorModeValue('gray.500', !modo_movil && '#372D36')
	const colorActivo = useColorModeValue('blue.300', !modo_movil && '#624d48')
	const handleScroll = () => seccion.current.scrollIntoView({ block: 'start', behavior: 'smooth' })

	React.useEffect(() => {
		seccion.current = document.getElementById(to)
	}, [to])

	return (
		<MotionConfig transition={{ duration: 0.2 }} >
			<Tooltip label={label} placement={movil} hasArrow>
				<Link onClick={handleScroll}>
					<Center
						as={motion.div}
						w={8}
						h={8}
						bg={activo ? colorActivo : colorBase}
						borderRadius={50}
						initial={{ scale: 1 }}
						animate={activo ? { scale: 1.2 } : {}}
						exit={{ scale: 1 }}
						whileHover={{ scale: 1.2 }}
						color={activo ? 'black.400' : 'white'}
						opacity={1}
					>
						{icono}
					</Center>

				</Link>
			</Tooltip>
		</MotionConfig>
	)
}
