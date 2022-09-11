import React, { Component } from 'react'
import axios from 'axios'

class HttpGet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMsg : ''
      }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                this.setState({posts : response.data})
            })
            .catch(() => {
                console.log("error");
                this.setState({errorMsg : 'Error Retriving data'})
            })
    }

  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        list of posts 
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title} hey {post.id}</div>) : null
        }
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default HttpGet