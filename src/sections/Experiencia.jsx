'use client'
import SeccionPagina from '@/components/SeccionPagina'
import React, { lazy } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Circle, Container, Flex, Spacer, Stack, StackDivider, Text, VStack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { GetCV } from '@/contexts/Portfolio'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Experiencia() {
	const movil = useBreakpointValue({ base: false, md: true })
	const {experiencia} = GetCV()
	return (
		<SeccionPagina id='experiencia' noFullHeight={movil} withScrollY={!movil}>
			<Container maxW={'5xl'}>
				<Text fontSize={"5xl"} align={"center"} mb={10}>
					Experiencia
				</Text>
				<Flex direction={'column'} marginInline={0}>
					{
						experiencia.map((exp,index)=>(
							<Periodo key={index} invertido={index % 2 && movil}>
								<Empleo data={exp} invertido={index % 2 && movil}/>
							</Periodo>
						))
					}
				</Flex>
			</Container>
		</SeccionPagina>
	)
}


function Periodo({ invertido, children }) {
	return (
		<Stack direction={invertido ? { base: 'row-reverse', md: 'row-reverse' } : { base: 'row-reverse', md: 'row' }} justifyContent={'space-between'}
			w={'100%'} gap={0}>
			{children}
			<Spacer />
		</Stack>
	)
}



function Empleo({ data, invertido = false }) {
	const movil = useBreakpointValue({ base: true, md: false });
	const colorBase = useColorModeValue('blackAlpha.200', !movil && '#333333')
	const colorActivo = useColorModeValue('whiteAlpha.50', !movil && '#3d3c3c')
	const colorAnio = useColorModeValue('gray.500', !movil && '#3d3c3c')
	const colorAnioTexto = useColorModeValue('white', !movil && 'white')
	const colorLinea = useColorModeValue('gray.500', !movil && '#373737')
	const [descripcion, setDescripcion] = React.useState(null)

	React.useEffect(() => {
		const loadMarkDown = async () => {
			const markdown = await fetch(data.descripcion)
			const res = await markdown.text()
			// const data = await fetch(markdown)
			// console.log(data2)
			setDescripcion(res)
		}
		loadMarkDown()
	},[])

	return (
		<Flex borderRadius={25} w={{ base: '100%', md: '50%' }} justifyContent={'space-between'} alignItems={'center'} direction={invertido ? { base: 'row-reverse', md: 'row-reverse' } : { base: 'row-reverse', md: 'row' }}
		>
			<Accordion allowMultiple bg={colorActivo} borderRadius={25} w={'100%'} marginInline={6} marginBlock={3}>
				<AccordionItem  borderRadius={20} bg={colorActivo}>
					<AccordionButton borderRadius={20} bg={colorBase}>
						{invertido ? <AccordionIcon /> : ''}
						<Box as="span"
							flex='1'
							textAlign={invertido ? 'left' : 'right'}
							ml={invertido ? 5 : 0}
							mr={!invertido ? 5 : 0}
						>
							<b>{data.empresa}</b>
							<Text>{data.cargo}</Text>
						</Box>

						{!invertido ? <AccordionIcon /> : ''}

					</AccordionButton>
					<AccordionPanel pb={4}>

						<VStack gap={0} alignItems={'start'} justifyContent={'stretch'}>
						<Markdown remarkPlugins={[remarkGfm]}>{descripcion ? descripcion : ''}</Markdown>
						</VStack>

					</AccordionPanel>
				</AccordionItem>
			</Accordion>
			<Center outline={'1px solid black'} outlineColor={colorLinea} w={0} h={'100%'} zIndex={20}>
				<Circle size={'35px'} bg={colorAnio} fontSize={12} color={colorAnioTexto} zIndex={21}>{data.anio}</Circle>
			</Center>
		</Flex>
	)
}