import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'
import WalletContextProvider from './components/WalletContextProvider'

const colors = {
    background: "F9F9F9",
    accent : "2F00FF",
    bodyText : "121212",
}

const theme = extendTheme({colors})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <WalletContextProvider>
                <Component {...pageProps} />
            </WalletContextProvider>
        </ChakraProvider>
    )
}

export default MyApp