import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPostSection } from "./MainPostSection"
import { store } from '../../app/store';
import { Provider } from 'react-redux';

test('renders main section header', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const mainPostSection = screen.getByTestId('main-post-section')
  
  expect(mainPostSection).toBeInTheDocument()
});

test('renders profile picture', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const profilePicture = screen.getByTestId('profile-picture')
  
  expect(profilePicture).toBeInTheDocument()
});

test('renders the text input box', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const textInput = screen.getByTestId('text-input')
  
  expect(textInput).toBeInTheDocument()
});

test('renders the divider', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const sectionDivider = screen.getByTestId('divider')
  
  expect(sectionDivider).toBeInTheDocument()
});

test('renders the post button section', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const postButtonSection = screen.getByTestId('post-btn-section')
  
  expect(postButtonSection).toBeInTheDocument()
});

test('renders the post button', () => {
  render(<Provider store={store}><MainPostSection /></Provider>)

  const postButton = screen.getByTestId('post-btn')
  
  expect(postButton).toBeInTheDocument()
});
