import * as React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import  Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/products";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular Joe's"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products/>
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
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 75, height: 75) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight:426) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
