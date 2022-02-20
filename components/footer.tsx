import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} YT Huang. All Rights Reserved.
    </Box>
  )
}

export default Footer
