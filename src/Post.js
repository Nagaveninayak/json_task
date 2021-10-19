import React from 'react'
import axios from 'axios'

class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res)=>{
                    const posts = res.data
                    this.setState({posts})
                    // console.log('post', posts)
                })
    }

    render(){
        return(
            <div>
                <p>Posts here</p>
                <ol>
                {
                    this.state.posts.map((post)=>{
                        if(post.id < 11){
                            return <li key = {post.id}>Title - {post.title}<br/> Post - {post.body}</li>
                        }
                    })
                }
                </ol>
            </div>
        )
    }
}

export default Post