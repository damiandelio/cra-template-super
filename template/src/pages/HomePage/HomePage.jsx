import React, { useEffect } from 'react'
import axiosLoader, { GET_COMMENTS_CFG } from '../../axiosConfigs'
import styles from './HomePage.module.scss'

const HomePage = () => {
    let postId = 1;

    useEffect(() => {
        axiosLoader(
            GET_COMMENTS_CFG(postId),
            (res) => {
                console.log('Api data:')
                console.log(res.data)
            },
            (err) => console.log(err)
        )
    }, [postId])

    return (
        <React.Fragment>
            <main className={styles.mainCointainer} >
                <h1>Super! <span role="img" aria-label="Super">🦸‍♂️</span></h1>
                <a href="https://github.com/damiandelio/cra-template-super" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </main>
        </React.Fragment>
    )
}

export default HomePage
