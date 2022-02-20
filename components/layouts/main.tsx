import Head from "next/head"
import NavBar from "../navbar"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../footer"
import { Router } from "next/router"
// import VoxelDogLoader from "../voxel-dog-loader"
// import dynamic from "next/dynamic"

// const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />,
// })

interface MainProps {
  router: Router
}
const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ytdev's homepage" />
        <meta name="author" content="YT Huang" />
        <meta name="author" content="YT Dev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" /> */}
        <meta property="og:site_name" content="ytdev's homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>YT Dev - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}
        <Box height={50} />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
