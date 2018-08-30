import {GET_DATA, GET_ARTICLE} from './actions';

const initialState = {
  articles: [],
  selectedArticle: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        articles: action.articles
      }
    case GET_ARTICLE:
      return {
        ...state,
        selectedArticle: action.article
      }
    default:
      return state;
  }
}
