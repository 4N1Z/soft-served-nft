import { FC, MouseEventHandler, useCallback } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";

import { WalletProvider} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const Disconnected: FC = () => {

  const modalState = useWalletModal()
  const { wallet, connect } = useWallet()

  
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return
      }

      if (!wallet) {
        modalState.setVisible(true)
      } else {
        connect().catch(() => {})
      }
    },
    [wallet, connect, modalState]
  )

  return (
    <Container>
      <VStack spacing={20}>
        <Heading
          color="black"
          as="h1"
          size="xl"
          noOfLines={2}
          textAlign="center"
          className="main_title"
        >
          Mint your Soft Served NFT's.
        </Heading>
        <Button
          bgColor="accent"
          color="black"
          maxW="380px"
          onClick={handleClick}
        >
          <HStack>
            <Text>become a soft server </Text>
            <ArrowForwardIcon />
          </HStack>
        </Button>
      </VStack>
    </Container>
  );
};

export default Disconnected;
