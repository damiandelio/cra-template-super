import React from 'react'
import { useQuery } from 'react-query'
import { fetchComments } from '../../apiCalls'
import styles from './HomePage.module.scss'

export default function HomePage() {
  const { isLoading, isError, data, error } = useQuery('comments', () =>
    fetchComments(1)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className={styles.superContainer}>
        <h1>
          Super!
          <span role='img' aria-label='Super'>
            🦸‍♂️
          </span>
        </h1>
        <a
          href='https://github.com/damiandelio/cra-template-super'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
      <div className={styles.messagesContainer}>
        {data.map((message) => (
          <section key={message.id}>
            <h4>{message.name}</h4>
            <p>{message.body}</p>
          </section>
        ))}
      </div>
    </>
  )
}
