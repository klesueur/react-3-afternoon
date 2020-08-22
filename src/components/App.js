import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Post from './Post/Post';
import Header from './Header/Header';
import Compose from './Compose/Compose';
// import {ToastContainer, toast} from 'react-toastify'
const baseUrl = 'https://practiceapi.devmountain.com/api'


class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`${baseUrl}/posts`).then(
      results => {
        // console.log(results)
        this.setState({
          posts: results.data
        })
      })
    }

  updatePost(id, text) {
    axios.put(`${baseUrl}/posts?id=${id}`, {text} )
    .then(results => {
      this.setState({ posts: results.data })
    })
  }

  deletePost(id) {
    axios.delete(`${baseUrl}/posts?id=${id}`)
    .then( results => {
      this.setState({ posts: results.data })
    })
  }

  createPost() {

  }

  render() {
    const { posts } = this.state;
    const renderedPosts = posts.map(element => {
      return <Post key={posts.id} 
                  text={posts.text} 
                  date={posts.date} 
                  id={posts.id}
                  updatedPostFn={this.updatePost} 
                  deletePostFn={this.deletePost} />
    })
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {renderedPosts}
        </section>
      </div>
    );
  }
}

export default App;
