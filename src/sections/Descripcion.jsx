import SeccionPagina from "@/components/SeccionPagina";
import React from "react";
import { Text, Flex,Container, VStack, HStack, Button, Box, useBreakpointValue } from "@chakra-ui/react";
import { getCV } from "@/contexts/Portfolio";
import Markdown from 'react-markdown'


export default function Descripcion({ref}) {
	const movil = useBreakpointValue({base:true,md:false})
	const {descripcion} = getCV()
	return (
		<SeccionPagina id='descripcion' noFullHeight={!movil} withScrollY={movil}>
			{/* <Text fontSize={"3xl"} mb={5}>Sobre Mi</Text> */}
			<Container maxW={'5xl'}>
			<Flex ref={ref} maxW={'90vw'}  direction={'column'} gap={5}  >
				{/* <HStack alignItems={'start'} gap={5}>
					<VStack w={'50%'} alignItems={'start'}>
						<Text fontSize={"xl"} as="h1">
							Titulito
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab
							dicta suscipit. Dolore ea reprehenderit temporibus dignissimos rem
							itaque repellat, beatae commodi suscipit laboriosam esse
							praesentium quisquam voluptatem, quidem aut?
						</Text>
					</VStack>
          			<Box w={'50%'} h='300px' bg={'gray.200'} borderRadius={20}></Box>
				</HStack>

				<HStack alignItems={'start'} gap={5}>
				<Box w={'50%'} h='300px' bg={'gray.200'} borderRadius={20}></Box>
					<VStack w={'50%'} alignItems={'start'}>
						<Text fontSize={"xl"} as="h1">
							Titulito
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab
							dicta suscipit. Dolore ea reprehenderit temporibus dignissimos rem
							itaque repellat, beatae commodi suscipit laboriosam esse
							praesentium quisquam voluptatem, quidem aut?
						</Text>
					</VStack>
				</HStack>

				<HStack alignItems={'start'} gap={5}>
				<Box w={'50%'} h='300px' bg={'gray.200'} borderRadius={20}></Box>
					<VStack w={'50%'} alignItems={'start'}>
						<Text fontSize={"xl"} as="h1">
							Titulito
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab
							dicta suscipit. Dolore ea reprehenderit temporibus dignissimos rem
							itaque repellat, beatae commodi suscipit laboriosam esse
							praesentium quisquam voluptatem, quidem aut?
						</Text>
					</VStack>
				</HStack>

				<HStack alignItems={'start'} gap={5}>
				<Box w={'50%'} h='300px' bg={'gray.200'} borderRadius={20}></Box>
					<VStack w={'50%'} alignItems={'start'}>
						<Text fontSize={"xl"} as="h1">
							Titulito
						</Text>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab
							dicta suscipit. Dolore ea reprehenderit temporibus dignissimos rem
							itaque repellat, beatae commodi suscipit laboriosam esse
							praesentium quisquam voluptatem, quidem aut?
						</Text>
					</VStack>
				</HStack> */}
				<Markdown>
						{descripcion}
						</Markdown>
				<Text fontSize={'xl'}>
						
				</Text>

			</Flex>
			</Container>
		</SeccionPagina>
	);
}
