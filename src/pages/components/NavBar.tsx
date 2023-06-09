import { HStack, Spacer } from "@chakra-ui/react"
import { FC } from "react"
import styles from "../../styles/Home.module.css"
import dynamic from "next/dynamic";
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


//  { ssr: false } disables server-rendering of the import. If you do not use dynamic import for your module, you will most likely encounter 
// `Hydration failed because the initial UI does not match what was rendered on the server`


const WalletMultiButtonDynamic = dynamic(
	async () =>
		(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
	{ ssr: false }
);  

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
		<WalletMultiButtonDynamic className={styles["wallet-adapter-button-trigger"]}/>
        {/* <WalletMultiButton className={styles['wallet-adapter-button-trigger']} /> */}
    </HStack>
  )
}

export default NavBar