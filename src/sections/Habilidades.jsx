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
	Code,
	Wrap,
	WrapItem,
	useColorModeValue
} from "@chakra-ui/react";
import { motion, MotionConfig } from "framer-motion";
import { GetCV } from "@/contexts/Portfolio";

export default function Habilidades() {
	const { habilidades } = GetCV();
	const movil = useBreakpointValue({ base: true, md: false });
	const colorBase = useColorModeValue('gray.100', !movil && 'blackAlpha.200')
	
	return (
		<SeccionPagina id="habilidades" noFullHeight={!movil} withScrollY={movil}>
			<Container maxW={"5xl"}>
				<Text fontSize={"5xl"} align={"center"} mb={10}>
					Habilidades
				</Text>
				{/* <Podio /> */}

				<VStack gap={5}>
					{habilidades.map((sectorHabil, index) => (
						<Box
							key={index}
							boxShadow={"md"}
							p={5}
							borderRadius={"lg"}
							bg={colorBase}
							w={"full"}
						>
							<Text fontSize={'2xl'} mb={2} align={'center'}>{sectorHabil.tipo}</Text>
							<HStack justifyContent={'center'} alignItems={'center'}>
								<Wrap justify={{base:'start',md:'center'}} alignItems={'center'} >
									{sectorHabil.habilidades.map((habilidad, index2) => (
										<WrapItem key={index2} w={{base:'full',md:'inherit'}}>
											<Skill
												icon={habilidad.url_logo}
												
												titulo={habilidad.titulo}
												tags={habilidad.tags}
											>
												{habilidad.descripcion}
											</Skill>
										</WrapItem>
									))}
								</Wrap>
							</HStack>
						</Box>
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
	const movil = useBreakpointValue({ base: true, md: false });
	const colorActivo = useColorModeValue('blue.300', !movil && 'blackAlpha.300')
	return (
		<Box
			alignItems={"center"}
			p={5}
			boxShadow={"xl"}
			borderRadius={"xl"}
			w={{ base: "full", md: "inherit" }}
			bg={colorActivo}
		>
			<Flex gap={4} direction={{ base: "row", md: "row" }}>
				{icon && (
					<Image
						src={icon}
						w={{ base: "50px", md: "40px" }}
						alignSelf={"center"}
						alt={titulo}
					/>
				)}
				<VStack alignItems={"start"} gap={1}>
					<Text fontSize={"md"} fontWeight={600}>
						{titulo}
					</Text>
					<Text fontSize={"sm"}>{children}</Text>

					<HStack wrap={"wrap"} justifyContent={"start"}>
						{tags?.map((item, index) => (
							<Badge
								key={index}
								p={2}
								paddingBlock={1}
								fontSize={10}
								borderRadius={5}
								variant={"outline"}
							>
								{item}
							</Badge>
						))}
					</HStack>
				</VStack>
			</Flex>
		</Box>
	);
}
