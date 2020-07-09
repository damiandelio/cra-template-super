import axios from 'axios'

// const APY_KEY = ''
const URL_BASE = 'https://jsonplaceholder.typicode.com'
const URL_COMMENTS = URL_BASE + '/comments'

export async function fetchComments(postId) {
  const { data } = await axios({
    method: 'get',
    url: URL_COMMENTS,
    headers: {},
    params: {
      postId
    }
  })

  return data
}
