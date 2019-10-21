import React from 'react'
import { Link } from 'gatsby'

export default ({ pageContext }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <img
              src={pageContext.featured_media.source_url}
              alt='thumbnail'
            />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <Link to='/'>Voltar para home</Link>
  </div>
)