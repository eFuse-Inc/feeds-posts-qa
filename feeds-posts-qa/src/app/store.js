import { createStore } from 'redux'
import { postsReducer } from '../features/posts/postsReducer';

export const store = createStore(postsReducer)