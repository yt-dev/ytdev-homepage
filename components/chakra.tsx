import {
  cookieStorageManager,
  localStorageManager,
  ChakraProvider,
} from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import theme from "../lib/theme"

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: { cookies: req.headers.cookie ?? "" },
})

interface ChakraProps {
  cookies: any
}
const Chakra: React.FC<ChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra
