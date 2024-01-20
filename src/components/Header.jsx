import React from "react";
import { Center, Text, Image, Flex, Button, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex as="header" position="fixed" w="100%" bg="#3c3644">
      <Image
        borderRadius="full"
        boxSize="80px"
        src="/src/assets/movieproject.png"
      ></Image>
      <Spacer />
      <Flex>
      <Button p="4" m="6" fontSize="md"  bg="#3c3644" color="white">Home</Button>
      <Button p="4" m="6"  fontSize="md" bg="#3c3644" color="white">Ultimos Lanzamientos</Button>
      <Button p="4" m="6"  fontSize="md" bg="#3c3644" color="white">Populares</Button>
      <Button p="4" m="6" fontSize="md" bg="#3c3644" color="white">Buscar</Button>
      </Flex>
      
    </Flex>
  );
}
