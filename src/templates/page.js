import React from 'react'
import { Link } from 'gatsby'

export default ({ pageContext }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <Link to='/'>Voltar para home</Link>
  </div>
)
