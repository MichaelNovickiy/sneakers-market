import React from 'react';
import styles from './Paginator.module.scss';

export const Paginator = ({pages, currentPage, setCurrentPage}) => {
    return (
        <div className={styles.pages}>
            {pages.map((page, index) => (
                <span className={currentPage === page ? styles.current_page : styles.page}
                      key={index}
                      onClick={() => {
                          setCurrentPage(page)
                      }}
                >
                        {page}
                    </span>))
            }
        </div>
    );
};