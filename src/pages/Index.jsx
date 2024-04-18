import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaSchool, FaBell, FaTable } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [schedule, setSchedule] = useState({
    Monday: "Matematyka, Język angielski, WF",
    Tuesday: "Biologia, Chemia, Historia",
    Wednesday: "Informatyka, Fizyka, Geografia",
    Thursday: "Plastyka, Muzyka, Technika",
    Friday: "Religia, Język polski, WOS",
  });

  useEffect(() => {
    const fetchSchedule = async () => {
      const newSchedule = {
        Monday: "Matematyka, Język angielski, WF",
        Tuesday: "Biologia, Chemia, Historia",
        Wednesday: "Informatyka, Fizyka, Geografia",
        Thursday: "Plastyka, Muzyka, Technika",
        Friday: "Religia, Język polski, WOS",
      };
      setSchedule(newSchedule);
    };

    fetchSchedule();
  }, []);

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
          <Text mt={4}>Poniedziałek: {schedule.Monday}</Text>
          <Text>Wtorek: {schedule.Tuesday}</Text>
          <Text>Środa: {schedule.Wednesday}</Text>
          <Text>Czwartek: {schedule.Thursday}</Text>
          <Text>Piątek: {schedule.Friday}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
