import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import  Info from "../components/Home/Info";
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular Joe's"
      styleClass="default-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
