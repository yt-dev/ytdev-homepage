import Image from "next/image"
import {
  Container,
  Badge,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react"

import { Title, Meta } from "@/components/work"
import P from "@/components/paragraph"
import Layout from "@/components/layouts/article"
import thumbnailLight from "@/public/images/works/mockup1-light.png"
import thumbnailDark from "@/public/images/works/mockup1-dark.png"

const Work = () => (
  <Layout title="EDU.INK App">
    <Container>
      <Title>
        EDU.INK App <Badge>2018-</Badge>
      </Title>
      <P>Mobile App to handle school communications.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React Native</span>
        </ListItem>
      </List>
      <Image
        src={useColorModeValue(thumbnailLight, thumbnailDark)}
        alt="EDU.INK App Mockup"
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
