import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioItems from '../components/PortfolioItems'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioItems />
  </Layout>
)

export default IndexPage
