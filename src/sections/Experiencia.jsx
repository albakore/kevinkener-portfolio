import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Circle, Container, Flex, Spacer, Stack, StackDivider, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { GetCV } from '@/contexts/Portfolio'
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
			// divider={
			// 	(
			// 		<StackDivider position={'relative'} h={'100%'} borderColor='gray.200' textAlign={'center'} w={'6px'}>
			// 			<Circle position={'absolute'} top={'calc(50% - 6px)'} left={'-6px'}  size='12px' bg='gray.300'/>
			// 		</StackDivider>
			// 	)
			// } 
			w={'100%'} gap={0}>
			{children}

			<Spacer />
		</Stack>
	)
}



function Empleo({data, invertido = false }) {
	const movil = useBreakpointValue({ base: true, md: false });
	const colorBase = useColorModeValue('', !movil && '#473936')
	const colorActivo = useColorModeValue('', !movil && '#584442')
	const colorAnio = useColorModeValue('gray.300', !movil && '#473936')
	const colorAnioTexto = useColorModeValue('white', !movil && 'white')
	const colorLinea = useColorModeValue('white', !movil && '#584442')
	return (
		<Flex borderRadius={25} w={{ base: '100%', md: '50%' }} justifyContent={'space-between'} alignItems={'center'} direction={invertido ? { base: 'row-reverse', md: 'row-reverse' } : { base: 'row-reverse', md: 'row' }}
		>
			<Accordion allowMultiple bg={colorActivo} borderRadius={25} w={'100%'} marginInline={6} marginBlock={3}>
				<AccordionItem  borderRadius={20} bg={colorActivo}>
					<AccordionButton borderRadius={20} bg={colorBase}>
						<Box as="span" flex='1' textAlign='left' >
							<b>{data.empresa}</b>
							<Text>{data.cargo}</Text>
						</Box>

						<AccordionIcon />

					</AccordionButton>
					<AccordionPanel pb={4}>
					{data.descripcion}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
			<Center outline={'2px solid black'} outlineColor={colorLinea} w={0} h={'100%'} zIndex={20}>
				<Circle size={'35px'} bg={colorAnio} fontSize={12} color={colorAnioTexto} zIndex={21}>{data.anio}</Circle>
			</Center>
		</Flex>
	)
}