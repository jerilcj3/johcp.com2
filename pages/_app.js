import '../styles/globals.css'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'

function MyApp({ Component, pageProps }) {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: 'KOSxpA6kDcVoWBdFWCj6',
      }}
    >
      <Component {...pageProps} />
    </FpjsProvider>
  )
}

export default MyApp