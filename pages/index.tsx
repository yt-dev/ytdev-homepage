import type { NextPage } from "next/types"
import NextLink from "next/link"
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { IoLogoGithub } from "react-icons/io5"

import Paragraph from "@/components/paragraph"
import { BioSection, BioYear } from "@/components/bio"
import Layout from "@/components/layouts/article"
import Section from "@/components/section"

const Home: NextPage = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a front-end developer based in China!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            YT Huang
          </Heading>
          <p>Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/avatar.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a software engineer who has been working in the industry for
          more than three years. I&apos;m a fan of JavaScript, TypeScript,
          React, Next.js, and Vue.js.
        </Paragraph>
        <Box display="flex" justifyContent="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in China.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduate at college
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Works at{" "}
          <Link href="https://edu.ink/" target="_blank">
            EDU.INK Limited
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Anime, Music, Web3, Metaverse,{" "}
          <Link href="https://copilot.github.com/" target="_blank">
            GitHub Copilot
          </Link>{" "}
          and more.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/yt-dev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @yt-dev
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box display="flex" justifyContent="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from "../components/chakra"
