// If you're building for a specific wallet, this is where you'd change things up,
// I'm just sticking with the defaults :D

import { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const url = useMemo(() => clusterApiUrl("devnet"), []);
  //   We can add more wallets here, but for now we're just using Phantom
  // const wallets = [
  //   new walletAdapterWallets.PhantomWalletAdapter(),
  //   new walletAdapterWallets.SolflareWalletAdapter(),
  // ];
  const phantom = new PhantomWalletAdapter();
  // const phantom = new walletAdapterWallets.PhantomWalletAdapter()

  return (
    // <ConnectionProvider endpoint={url}>
    //   {/* <WalletProvider wallets={[phantom]}> */}
    //   <WalletProvider wallets={wallets}>
    //     <WalletModalProvider>
    //         {children}
    //     </WalletModalProvider>
    //   </WalletProvider>
    // </ConnectionProvider>

        <WalletModalProvider>
    <ConnectionProvider endpoint={url}>
      <WalletProvider wallets={[phantom]}>
          {children}
      </WalletProvider>
    </ConnectionProvider>
          </WalletModalProvider>
  );
};

export default WalletContextProvider;
