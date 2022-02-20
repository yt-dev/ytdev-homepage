import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

type Dict<T = any> = Record<string, T>
type StyleFunctionProps = {
  colorScheme: string
  colorMode: "light" | "dark"
  orientation?: "horizontal" | "vertical"
  theme: Dict
  [key: string]: any
}

const styles = {
  global: (props: Dict | StyleFunctionProps) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: Dict | StyleFunctionProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
}

const colors = {
  grassTeal: "#88ccca",
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
