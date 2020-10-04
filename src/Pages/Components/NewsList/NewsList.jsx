import React from 'react';
import shortid from 'shortid';
import style from './newsListStyle.module.css';

const NewsList = ( { imgList, openModal } ) => (
    <ul className={style.list}>
        {
            imgList.map( el => (
                <li onClick={openModal} key={shortid.generate()} className={style.newsItem}>
                    {el.original_title ? <h3>{el.original_title}</h3> : <h3>We dont have info about author</h3>}
                    <img className={style.img} src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="news img" />
                    {el.overview ? <p>{el.overview}</p> : <p>NOTHING</p>}
                    <span>{el.release_date}</span>
                </li>
            ) )
        }
    </ul>
)

export default NewsList;