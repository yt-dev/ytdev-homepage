import { useRouter } from "next/router"
import { Container } from "@chakra-ui/react"

import { Title } from "@/components/work"
import P from "@/components/paragraph"
import Layout from "@/components/layouts/article"

const Work = () => {
  const router = useRouter()
  const { wid } = router.query

  return (
    <Layout title="Untitled">
      <Container>
        <Title>Untitled</Title>
        <P>{wid}</P>
        <P>Page pending edit...</P>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from "../../components/chakra"
