// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';

// Store
import { store } from '../../init/store';

// Actions
import {
    showNextPhoto,
    showPrevPhoto,
    showSelectedPhoto
} from '../../bus/gallery/actions';

// Instruments
import Styles from './styles.m.css';

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate();
    }

    _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
        this.forceUpdate();
    }

    _showSelectedPhoto = ({ target: { value }}) => {
        store.dispatch(showSelectedPhoto(value));
        this.forceUpdate();
    }

    render () {
        const { gallery } = store.getState();
        const photo = gallery.photos.find((_, index) => index === gallery.selectedPhotoIndex);

        const buttonActiveStyle1 = cx({ [Styles.buttonActive]: gallery.selectedPhotoIndex === 0 });
        const buttonActiveStyle2 = cx({ [Styles.buttonActive]: gallery.selectedPhotoIndex === 1 });
        const buttonActiveStyle3 = cx({ [Styles.buttonActive]: gallery.selectedPhotoIndex === 2 });
        const buttonActiveStyle4 = cx({ [Styles.buttonActive]: gallery.selectedPhotoIndex === 3 });

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button onClick={this._showPrevPhoto}>←</button>
                    <button
                        className = { buttonActiveStyle1 }
                        onClick={this._showSelectedPhoto}
                        value = '0'
                    >
                        1
                    </button>
                    <button
                        className = { buttonActiveStyle2 }
                        onClick={this._showSelectedPhoto}
                        value = '1'
                    >
                        2
                    </button>
                    <button
                        className = { buttonActiveStyle3 }
                        onClick={this._showSelectedPhoto}
                        value = '2'
                    >
                        3
                    </button>
                    <button
                        className = { buttonActiveStyle4 }
                        onClick={this._showSelectedPhoto}
                        value = '3'
                    >
                        4
                    </button>
                    <button onClick={this._showNextPhoto}>→</button>
                </div>
            </section>
        );
    }
}
