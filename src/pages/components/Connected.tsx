import { FC } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";


const Connected: FC = () => {
  const handleMinting = (): void => {
    alert("Minting");
  };
  return (
    <VStack spacing={2}>
      <Container>
        <VStack spacing={2}>
          <Heading
            color="black"
            as="h1"
            size="xl"
            noOfLines={2}
            textAlign="center"
            className="main_title"
          >
            Welcome Soft Servers
          </Heading>

          <Text padding={2} color="#242424" fontSize="l" textAlign="center">
            Each Soft Served is randomly generated and can be staked to receive
            <Text as="b"> $SSN</Text> Use your <Text as="b"> $SSN</Text> to
            upgrade your Soft Served Network and receive perks within the
            community!
          </Text>
        </VStack>
      </Container>

     
      <HStack spacing={2}   paddingBottom={2}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
      </HStack>

      <Button
        className="mintButton"
        bgColor="accent"
        color="black"
        maxW="380px"
        onClick={handleMinting}
       
      >
        <HStack>
          <Text>mint SSN&apos;s</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  );
};

export default Connected;
