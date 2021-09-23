import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/products"
import Contact from "../components/Home/contact"
// import { Carousel, CarouselItem } from "react-bootstrap"
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular Joe's"
      styleClass="default-background"
    />
    {/* <Carousel>
      {data.slideShow.edges.map(({ node }) => (
        <CarouselItem key={node.id} className=" text-center">
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base.split('-').join(' ').split('.')[0]}
          />
        </CarouselItem>
      ))}
    </Carousel> */}
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          src
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
              src
            }
          }
        }
      }
    }
  
  }
`
  // slideShow: allFile(
    //   filter: { relativeDirectory: { eq: "new" } }
    //   sort: { fields: base, order: ASC }
    // ) {
    //   edges {
    //     node {
    //       id
    //       base
    //       childImageSharp {
    //         gatsbyImageData(
    //           height: 600
    //           placeholder: BLURRED
    //           quality: 70
    //           blurredOptions: {width: 100}
    //           transformOptions: {cropFocus: CENTER, fit: COVER}
    //         )
    //       }
    //     }
    //   }
    // }
export default IndexPage
