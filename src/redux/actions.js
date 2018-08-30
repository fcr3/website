export const GET_DATA = "GET DATA";
export const GET_ARTICLE = "GET ARTICLE";

function handleGetData(articles) {
  return {
    type: GET_DATA,
    articles
  }
}

function handleGetArticle(article) {
  return {
    type: GET_ARTICLE,
    article
  }
}

export function getData() {
  return dispatch => {
    dispatch(handleGetData());
  }
}

export function getArticle(title) {
  return dispatch => {
    dispatch(handleGetArticle(null));
  }
}
