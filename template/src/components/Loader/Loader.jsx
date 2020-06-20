import React from 'react'
import { useSelector } from 'react-redux';
import { LOADER_VISIBLE_SELECTOR } from '../../redux/modules/loader'
import styles from './Loader.module.scss'

const Loader = () => {
    const isLoaderVisible = useSelector(LOADER_VISIBLE_SELECTOR)

    return (
        <React.Fragment>
            {isLoaderVisible &&
                <div className={styles.container}>
                    <div className={styles.loader}></div>
                </div>}
        </React.Fragment>
    )
}

export default Loader
