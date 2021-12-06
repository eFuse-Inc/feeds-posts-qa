import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from "./post"
import { Provider } from 'react-redux';
import { store } from '../../app/store';

const post = {id: 1, text: "This is what is on my mind and a post value", likes: 1}

test('renders post list', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)

  const postItem = screen.getByTestId('post')
  
  expect(postItem).toBeInTheDocument()
});

test('renders users display information', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const userDisplayInfo = screen.getByTestId('user-display-info')
  
  expect(userDisplayInfo).toBeInTheDocument()
});

test('renders profile picture', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const profilePicture = screen.getByTestId('post-profile-picture')
  
  expect(profilePicture).toBeInTheDocument()
});

test('renders profile section', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const profileSection = screen.getByTestId('profile-area')
  
  expect(profileSection).toBeInTheDocument()
});

test('renders profile user name', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const profileUserName = screen.getByTestId('user-name')
  
  expect(profileUserName).toBeInTheDocument()
  expect(profileUserName).toHaveTextContent('Caleb Quinn')
});

test('renders location section', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const locationSection = screen.getByTestId('location-section')
  
  expect(locationSection).toBeInTheDocument()
});

test('renders map marker icon', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const mapMarker = screen.getByTestId('map-marker')
  
  expect(mapMarker).toBeInTheDocument()
});

test('renders the users location', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const userLocation = screen.getByTestId('user-location')
  
  expect(userLocation).toBeInTheDocument()
  expect(userLocation).toHaveTextContent('OH, USA')
});

test('renders the post time', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const postedTime = screen.getByTestId('posted-time')
  
  expect(postedTime).toBeInTheDocument()
  expect(postedTime).toHaveTextContent('1 minute ago')
});

test('renders the post text', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const postValue = screen.getByTestId('post-value')
  
  expect(postValue).toBeInTheDocument()
  expect(postValue).toHaveTextContent('This is what is on my mind and a post value')
});

test('renders the like and comment spans', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const likeElement = screen.getByTestId('post-likes')
  const commentElement = screen.getByTestId('post-comments')
  
  expect(likeElement).toBeInTheDocument()
  expect(commentElement).toBeInTheDocument()

  // expect(likeElement).toHaveTextContent('0 Likes')
  expect(commentElement).toHaveTextContent('0 Comments')
});

test('renders the like comment section', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const likeCommentSection = screen.getByTestId('like-comment-section')
  
  expect(likeCommentSection).toBeInTheDocument()
});

test('renders the like button', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const likeBtn = screen.getByTestId('like-btn')
  
  expect(likeBtn).toBeInTheDocument()
});

test('renders the comment button', () => {
  render(<Provider store={store}><Post post={post} /></Provider>)


  const commentBtn = screen.getByTestId('comment-btn')
  
  expect(commentBtn).toBeInTheDocument()
});