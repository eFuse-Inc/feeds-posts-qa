import React from 'react';
import './App.css'
import { MainPostSection } from '../features/posts/MainPostSection';
import { ListOfPosts } from '../features/posts/ListOfPosts'
import { useSelector } from 'react-redux';
import { PostsState } from '../features/posts/postsReducer';

function App(): JSX.Element {
  const posts = useSelector<PostsState, PostsState["posts"]>(
    (state) => state.posts
  )
  
  return (
    <div className="App">
      <div className="main-post-header">
        <MainPostSection />
        <ListOfPosts posts={posts} />
      </div>
    </div>
  );
}

export default App;
