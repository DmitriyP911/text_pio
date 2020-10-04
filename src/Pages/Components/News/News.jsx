import React, { Component } from 'react';
import NewsList from '../NewsList/NewsList';
import style from './newsStyle.module.css';
import getData from '../../../helpers/getData';
import Modal from '../Modal/Modal'

export default class News extends Component {

    state = {
        imgArr: [],
        log: 'userInfo',
        openModal: false,
        modalImg: '',
        newsTitle: '',
        newsText: '',
        newsDate: ''
    }

    handleLogout () {
        localStorage.removeItem( 'userInfo' );
        window.location.reload()
    }

    handleOpenModal = ( { currentTarget } ) => {
        this.setState( {
            openModal: true,
            modalImg: currentTarget.childNodes[1].currentSrc,
            newsTitle: currentTarget.childNodes[0].innerText,
            newsText: currentTarget.childNodes[2].innerText,
            newsDate: currentTarget.childNodes[3].innerText
        } )
    }

    handleCloseModal = ( { target } ) => {
        if( target.localName !== 'img' ) {
            this.setState( {
                openModal: false,
                newsTitle: ''
            } )
        }
    }

    componentDidMount () {
        getData()
            .then( response => {
                const data = response.data.results;
                this.setState( {
                    imgArr: [...data],
                } )
            } )
    }

    render () {
        const { imgArr, openModal, modalImg, newsTitle, newsText, newsDate } = this.state;
        return (
            <div className={style.news}>
                <button onClick={this.handleLogout}>Logout</button>
                <NewsList
                    openModal={this.handleOpenModal}
                    imgList={imgArr} />
                {openModal && <Modal
                    title={newsTitle}
                    newsText={newsText}
                    onOpenModal={modalImg}
                    date={newsDate}
                    onCloseModal={this.handleCloseModal}
                />}
            </div>
        )
    }
}