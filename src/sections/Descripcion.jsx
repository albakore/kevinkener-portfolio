import SeccionPagina from "@/components/SeccionPagina";
import React from "react";
import { Text, Flex, Container, VStack, HStack, Button, Box, useBreakpointValue } from "@chakra-ui/react";
import { GetCV } from "@/contexts/Portfolio";
import Markdown from 'react-markdown'


export default function Descripcion({ ref }) {
	const movil = useBreakpointValue({ base: true, md: false })
	const { descripcion } = GetCV()
	return (
		<SeccionPagina id='descripcion' noFullHeight={!movil} withScrollY={movil}>
			{/* <Text fontSize={"3xl"} mb={5}>Sobre Mi</Text> */}
			<Container maxW={'5xl'}>
				<Flex ref={ref} maxW={'90vw'} direction={'column'} gap={5}  >
					
					<Text fontSize={'xl'}>
					<Markdown >
						{descripcion}
					</Markdown>
					</Text>

				</Flex>
			</Container>
		</SeccionPagina>
	);
}
