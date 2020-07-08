import React, { useEffect } from 'react'
import axiosLoader, { getCommentsCfg } from '../../axiosConfigs'
import styles from './HomePage.module.scss'

const HomePage = () => {
    let postId = 1;

    useEffect(() => {
        axiosLoader({
            config: getCommentsCfg(postId), // add your axios configs to /axiosConfigs.js
            onSuccess: res => {
                console.log('Api data:')
                console.log(res.data)
            },
            onError: err => {
                console.log(err)
            } 
        })
    }, [postId])

    return (
        <>
            <main className={styles.mainCointainer} >
                <h1>Super! <span role="img" aria-label="Super">🦸‍♂️</span></h1>
                <a href="https://github.com/damiandelio/cra-template-super" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </main>
        </>
    )
}

export default HomePage
