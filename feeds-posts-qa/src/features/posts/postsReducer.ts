export interface IPost {
  id: number;
  text: string;
  creator?: string;
  comments?: string[];
  likes: number;
}
export interface PostsState {
  posts: IPost[];
}

const initialState = {
  posts: []
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = { type: string; payload: any  }

export const postsReducer = (
  state: PostsState = initialState,
  action: Action
): PostsState => {
  let post;
  
  switch(action.type) {
    case "ADD_POST": 
      post = {
        text: action.payload,
        id: Date.now(),
        likes: 0
      }
      
      return { ...state, posts: [...state.posts, post] }
    
    case "LIKE_POST":
      post = state.posts.find(post => post.id === action.payload);
      if(post)
        if(post.likes >= 0) post.likes++;
        else post.likes--;
      else{
        throw "ERROR WHEN USER IS LIKING POST"
      }
      
      return {...state, posts: [...state.posts]}

    
    default:
      return state
  }
}