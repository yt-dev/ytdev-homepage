import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Chakra from "@/components/chakra"
import Layout from "@/components/layouts/main"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default MyApp
