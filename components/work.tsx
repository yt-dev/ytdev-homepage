import NextLink from "next/link"
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

interface TitleProps {}
export const Title: React.FC<TitleProps> = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

interface WorkImageProps {
  src?: string
  alt?: string
}
export const WorkImage: React.FC<WorkImageProps> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

interface MetaProps {}
export const Meta: React.FC<MetaProps> = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
