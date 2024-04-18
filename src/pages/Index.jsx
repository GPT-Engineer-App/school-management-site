import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaSchool, FaBell, FaTable } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl" display="flex" alignItems="center">
          <FaSchool /> Librus Clone
        </Heading>
        <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid">
          Logowanie
        </Button>
      </Flex>

      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" display="flex" alignItems="center">
            <FaBell /> Ogłoszenia
          </Heading>
          <Text mt={4}>Witajcie w nowym semestrze! Nie zapomnijcie o zebraniu z rodzicami w przyszły czwartek.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" display="flex" alignItems="center">
            <FaTable /> Plan lekcji
          </Heading>
          <Text mt={4}>Poniedziałek: Matematyka, Język angielski, WF</Text>
          <Text>Wtorek: Biologia, Chemia, Historia</Text>
          <Text>Środa: Informatyka, Fizyka, Geografia</Text>
          <Text>Czwartek: Plastyka, Muzyka, Technika</Text>
          <Text>Piątek: Religia, Język polski, WOS</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
