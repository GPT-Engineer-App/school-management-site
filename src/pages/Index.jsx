import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
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

  const [user, setUser] = useState({ name: "", surname: "" });
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogin = () => {
    setUser({ name: "Jan", surname: "Kowalski" });
    setIsLoginOpen(false);
  };

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
  }, [user]);

  return (
    <Container maxW="container.xl" p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl" display="flex" alignItems="center">
          <FaSchool /> Librus Clone
        </Heading>
        <Button leftIcon={<FaUserCircle />} colorScheme="teal" variant="solid" onClick={() => setIsLoginOpen(true)}>
          Logowanie
        </Button>
      </Flex>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader>Logowanie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Imię" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} mb={4} />
            <Input placeholder="Nazwisko" value={user.surname} onChange={(e) => setUser({ ...user, surname: e.target.value })} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLogin}>
              Zaloguj
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={8}>
        <Text fontSize="lg">
          Zalogowany jako: {user.name} {user.surname}
        </Text>
        <Box p={6} shadow="lg" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" display="flex" alignItems="center">
            <FaBell /> Ogłoszenia
          </Heading>
          <Text mt={4} fontSize="lg">
            Witajcie w nowym semestrze! Nie zapomnijcie o zebraniu z rodzicami w przyszły czwartek. Pamiętajcie również o nadchodzących konkursach matematycznych oraz olimpiadzie biologicznej. Wszystkie szczegóły znajdziecie na tablicy ogłoszeń.
          </Text>
        </Box>

        <Box p={6} shadow="lg" borderWidth="1px" borderRadius="md">
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
