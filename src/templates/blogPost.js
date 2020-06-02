import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { parseImageUrl } from 'notabase/src/utils'


export default ({ data }) => {
  const { posts: { title, tags, publish_date, html, url, slug, desc, color, cover_image } } = data

  return (
    <Layout>
      <div id = "main">
        <p><a href="/">&#8592; Return to Blog</a></p>
        <div id = "info">{tags && tags.join(', ')}</div> 
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div id="replybox"></div>
        <script>
          window.replybox = {
	        site: 'qGOREJ7YMr', 
            };
          </script>
          <script src="https://cdn.getreplybox.com/js/embed.js"></script>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
      url
      desc
      color
      cover_image
    }
  }
`
