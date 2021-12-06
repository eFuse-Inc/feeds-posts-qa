import React from 'react';
import { FC } from 'react'
import { PostsList } from './ListOfPosts-styling'
import { Post } from './post'
import { IPost } from './postsReducer';


type ListOfPostsProps = {
  posts: IPost[]
}

export const ListOfPosts:FC<ListOfPostsProps> = ({ posts }: ListOfPostsProps) => {

  const finishedPosts = posts.map((post) => (
    <Post key={post.id} post={post} />
  ))

  return (
    <PostsList data-testid='post-list'>{finishedPosts}</PostsList>
  )
}