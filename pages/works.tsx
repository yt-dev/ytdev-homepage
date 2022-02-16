import type { NextPage } from "next/types"
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbEduink from "../public/images/works/eduink_app.png"
import thumbTrip from "../public/images/works/trip_app.png"
import thumbConsole from "../public/images/works/console_app.png"

const Works: NextPage = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="eduinkapp"
            title="EDU.INK App"
            thumbnail={thumbEduink}
          >
            School communication app for iOS and Android
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="eduinktrip"
            thumbnail={thumbTrip}
            title="EDU.INK Trip"
          >
            Companion app for EDU.INK Trips module.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="eduinkconsole"
            thumbnail={thumbConsole}
            title="EDU.INK Console"
          >
            A simplified version of the EDU.INK console.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"
