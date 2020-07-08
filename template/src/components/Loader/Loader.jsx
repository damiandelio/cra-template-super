import React from 'react'
import { useSelector } from 'react-redux'
import { loaderVisibleSelector } from '../../redux/modules/loader'
import styles from './Loader.module.scss'

const Loader = () => {
    const isLoaderVisible = useSelector(loaderVisibleSelector)

    return (
        <>
            {isLoaderVisible &&
                <div className={styles.container}>
                    <div className={styles.loader}></div>
                </div>}
        </>
    )
}

export default Loader
