import SeccionPagina from "@/components/SeccionPagina";
import React from "react";
import {
	Text,
	Flex,
	VStack,
	HStack,
	Box,
	Center,
	Image,
	useBreakpointValue,
	Badge,
	Container,
	Code
} from "@chakra-ui/react";
import { motion, MotionConfig } from "framer-motion";
import { getCV } from "@/contexts/Portfolio";

export default function Habilidades() {
	const { habilidades } = getCV()
	const movil = useBreakpointValue({ base: true, md: false });
	return (
		<SeccionPagina id="habilidades" noFullHeight={!movil} withScrollY={movil}>
			<Container maxW={'5xl'}>
				<Text fontSize={"5xl"} align={"center"} mb={10}>
					Habilidades
				</Text>
				{/* <Podio /> */}

				<VStack gap={5}>
					{habilidades.map((skill, index) => (
						<Skill icon={skill.url_logo} key={index} titulo={skill.titulo} tags={skill.tags}>
							{skill.descripcion}
						</Skill>

					))}

				</VStack>

			</Container>
		</SeccionPagina>
	);
}

function Podio() {
	return (
		<Center>
			<MotionConfig transition={{ duration: 1 }}>
				<VStack gap={0}>
					<Flex direction={"row"} alignItems={"end"} h={"250px"}>
						<VStack h={"100%"} justifyContent={"end"}>
							<Image src={"/techLogo/iconjavascript.svg"} alt="javascript" />
							<Box
								w={"100px"}
								h={"50%"}
								bg={"gray.300"}
								borderRadius={"20px 20px 0 0"}
							></Box>
						</VStack>
						<VStack h={"100%"} justifyContent={"end"}>
							<Image src={"/techLogo/iconPython.svg"} alt="python" />
							<Box
								w={"100px"}
								h={"70%"}
								bg={"gray.200"}
								borderRadius={"20px 20px 0 0"}
							></Box>
						</VStack>
						<VStack h={"100%"} justifyContent={"end"}>
							<Image src={"/techLogo/iconcsharp.svg"} alt="csharp" />
							<Box
								w={"100px"}
								h={"30%"}
								bg={"gray.300"}
								borderRadius={"20px 20px 0 0"}
							></Box>
						</VStack>
					</Flex>
					<Box w={"320px"} h={"20px"} bg={"gold"} borderRadius={"5px"}></Box>
				</VStack>
			</MotionConfig>
		</Center>
	);
}

function Skill({ icon, titulo, tags, children }) {
	return (
		<Box
			alignItems={"center"}
			p={8}
			boxShadow={"xl"}
			borderRadius={"xl"}
			w={{ base: 'full', md: "inherit" }}
		>
			<Flex gap={8} direction={{ base: 'row', md: "row" }}>
				{icon && <Image src={icon} w={{ base: '50px', md: 'inherit' }} alignSelf={'center'} alt={titulo} />}
				<VStack alignItems={'start'}>
					<Text fontSize={'xl'} fontWeight={600}>{titulo}</Text>
					<Text fontSize={'sm'}>
						{children}
					</Text>

					<HStack wrap={"wrap"} justifyContent={'start'}>
						{
							tags?.map((item, index) => <Badge key={index} p={2} paddingBlock={1} fontSize={10} borderRadius={5} variant={"outline"}>{item}</Badge>)
						}
					</HStack>
				</VStack>
			</Flex>
		</Box>
	);
}
