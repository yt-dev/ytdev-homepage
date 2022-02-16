import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        EDU.INK App <Badge>2018-</Badge>
      </Title>
      <P>
        EDU.INK App allows you to handle all school communications at your
        fingertips.
      </P>
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
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
