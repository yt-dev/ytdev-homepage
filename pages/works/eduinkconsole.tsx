import { Container, Badge, List, ListItem } from "@chakra-ui/react"
import { Title, Meta } from "@/components/work"
import P from "@/components/paragraph"
import Layout from "@/components/layouts/article"

const Work = () => (
  <Layout title="EDU.INK Console">
    <Container>
      <Title>
        EDU.INK Console <Badge>2019-2020</Badge>
      </Title>
      <P>A simplified version of the EDU.INK console.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, React Native, Firebase</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
