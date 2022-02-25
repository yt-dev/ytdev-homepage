import Head from "next/head"
import NavBar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../footer"
import { Router } from "next/router"

interface MainProps {
  router: Router
}
const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>YT Huang - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ythuang's homepage" />
        <meta name="author" content="YT Huang" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kuon_one" />
        <meta name="twitter:creator" content="@kuon_one" />
        <meta name="twitter:image" content="/thumbnail.png" />
        <meta property="og:site_name" content="YT Huang's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Box height={50} />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
