import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListOfPosts } from "../posts/ListOfPosts"
import { Provider } from 'react-redux';
import { store } from '../../app/store';

const posts = [{text: "This is what is on my mind and a post value", id: 1, likes: 1}]

test('renders post list', () => {
  render(<Provider store={store}><ListOfPosts posts={posts} /></Provider>)

  const postList = screen.getByTestId('post-list')
  
  expect(postList).toBeInTheDocument()
});

