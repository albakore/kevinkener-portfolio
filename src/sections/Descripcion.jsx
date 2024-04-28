'use client'
import SeccionPagina from "@/components/SeccionPagina";
import React from "react";
import { Text, Flex, Container, VStack, HStack, Button, Box, useBreakpointValue } from "@chakra-ui/react";
import { GetCV } from "@/contexts/Portfolio";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Descripcion({ ref }) {
	const { descripcion } = GetCV()
	const movil = useBreakpointValue({ base: true, md: false })
	const [documento, setDocumento] = React.useState(null)
	React.useEffect(() => {
		const fetchDescripcion = async () => {
			const res = await fetch(descripcion)
			setDocumento(await res.text())
		}
		fetchDescripcion()
	}, [])


	if (!documento) {
		return (
			<SeccionPagina id='descripcion' noFullHeight={!movil} withScrollY={movil}>
				{/* <Text fontSize={"3xl"} mb={5}>Sobre Mi</Text> */}
				<Container maxW={'5xl'}>
					<Flex ref={ref} maxW={'90vw'} direction={'column'} gap={5}  >
						<Markdown remarkPlugins={[remarkGfm]}>{documento}</Markdown>
					</Flex>
				</Container>
			</SeccionPagina>
		)
	}

	return (
		<SeccionPagina id='descripcion' noFullHeight={!movil} withScrollY={movil}>
			{/* <Text fontSize={"3xl"} mb={5}>Sobre Mi</Text> */}
			<Container maxW={'5xl'}>
				<Flex ref={ref} maxW={'90vw'} direction={'column'} gap={5}  >

					<Text fontSize={'xl'}>
						<Markdown remarkPlugins={[remarkGfm]}>{documento}</Markdown>
					</Text>

				</Flex>
			</Container>
		</SeccionPagina>
	);
}
