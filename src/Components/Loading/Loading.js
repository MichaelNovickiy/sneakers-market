import React from 'react';
import {CircularProgress} from "@mui/material";
import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress color="success" size={80} className={styles.circle}/>
        </div>
    );
};

export default Loading;