import { Action } from "./postsReducer"

export const addPost = (postText: string): Action => ({
  type: "ADD_POST",
  payload: postText
})

export const likePost = (postId: number): Action => ({
  type: "LIKE_POST",
  payload: postId
})
