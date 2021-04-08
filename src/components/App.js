import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

// Base URL for API requests
const baseURL = `practiceapi.devmountain.com/api`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  };
  
  componentDidMount() {

    axios.get(`https://${baseURL}/posts`)
      .then(response => {
        this.setState({ posts: response.data })
      }).catch(error => console.log('ERROR RETREIVING POSTS', error))

  };

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;
    console.log('posts', posts)

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {posts.map(post => (
            <Post
              key={post.id}
              text={post.text}
              creationDate={post.date}
            />
          ))}

        </section>
      </div>
    );
  }
}

export default App;