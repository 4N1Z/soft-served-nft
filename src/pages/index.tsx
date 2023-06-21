import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./components/NavBar";
import Disconnected from "./components/Disconnected";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import Connected from "./components/Connected";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <div className={styles.container}>
      <Head>
        <title>Soft Served NFT</title>
        <meta name="The NFT Collection of SSN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"

        h="calc(100vh)"
        // bgImage={"url(/bg.svg)"}
        // bgImage={"url(/home-background.svg)"}
        // bgImage={connected ? "" : "url(/home-background.svg)"}
        bgImage={connected ? "" : "url(/bg.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />
          <Spacer />
          {/* If connected, the second view, otherwise the first */}
          {/* Your component hierarchy */}
          <Center>
            <WalletModalProvider>
              {/* <Connected/> */}
              {/* <Disconnected /> */}
              {connected ? <Connected /> : <Disconnected />}
            </WalletModalProvider>
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://bento.me/aniz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                built with ❤️ by Aniz
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
