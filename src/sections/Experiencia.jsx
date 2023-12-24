import SeccionPagina from '@/components/SeccionPagina'
import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Circle, Container, Flex, Spacer, Stack, StackDivider, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Experiencia() {
	const movil = useBreakpointValue({base:false,md:true})
  return (
	<SeccionPagina  id='experiencia' noFullHeight={movil} withScrollY={!movil}>
    <Container maxW={'5xl'}>
	<Text fontSize={'3xl'}>
      Experiencia
    </Text>
	<Flex direction={'column'} marginInline={5}>
		<Periodo>
			<Empleo />
		</Periodo>
		<Periodo invertido={movil}>
			<Empleo invertido={movil} />
		</Periodo>
		<Periodo>
			<Empleo />
		</Periodo>
	</Flex>
	</Container>
  </SeccionPagina>
  )
}


function Periodo({invertido,children}){
	return(
		<Stack direction={invertido ? {base:'row-reverse',md:'row-reverse'}: {base:'row-reverse',md:'row'}} justifyContent={'space-between'}
		// divider={
		// 	(
		// 		<StackDivider position={'relative'} h={'100%'} borderColor='gray.200' textAlign={'center'} w={'6px'}>
		// 			<Circle position={'absolute'} top={'calc(50% - 6px)'} left={'-6px'}  size='12px' bg='gray.300'/>
		// 		</StackDivider>
		// 	)
		// } 
		w={'100%'} gap={0}>
			{children}
			
			<Spacer/>
		</Stack>
	)
}



function Empleo({invertido = false}){
	return (
		<Flex borderRadius={25} w={{base:'100%',md:'50%'}} justifyContent={'space-between'} alignItems={'center'} direction={invertido ? {base:'row-reverse',md:'row-reverse'}: {base:'row-reverse',md:'row'}}
		>
			<Accordion allowMultiple  bg={'gray.50'} borderRadius={25} w={'100%'} marginInline={8} marginBlock={3}>
				<AccordionItem border={0} borderRadius={25}>
				<AccordionButton borderRadius={25}>
						<Box as="span" flex='1' textAlign='left'>
						Section 1 title
						<Text>Hola</Text>
						</Box>
						
						<AccordionIcon />

						</AccordionButton>
					<AccordionPanel pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
			<Center outline={'2px solid black'} outlineColor={'gray.300'} w={0} h={'100%'} zIndex={20}>
			<Circle  size={'35px'} bg='gray.500' fontSize={12} color={'white'}  zIndex={21}>2018</Circle>
			</Center>
		</Flex>
	)
}