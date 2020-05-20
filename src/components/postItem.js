import React from "react"
import { Link } from "gatsby"
import '../assets/scss/main.scss';


export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data

    return (
        <div style={{ margin: 10 }}>        
            <Link to={`blog/posts/${url}/`}>
              <h2 style={{ margin: 0 }}>{title}</h2>
              <div id = "info">Tags: {tags && tags.join(', ')} • Published: {publish_date}</div>
              <p style = {{ color: "grey" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
              <hr/>
            </Link>
        </div>
    )
}