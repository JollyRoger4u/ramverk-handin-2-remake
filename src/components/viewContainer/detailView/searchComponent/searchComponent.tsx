import React, { Component, CSSProperties } from 'react';
import SearchSection from './searchSection';
import SavedImageHandler from './SavedImagesHandler';
import { ThemedCSSProperties, ThemeContext } from '../../../../contexts/themeContext';

interface State {
    stateImages:any
}

export default class SearchComponent extends Component {
    state: State = {
        stateImages: []
    }

    render() {
        // let savedImages = JSON.parse(localStorage.getItem("storedImages") || "[]");
        // console.log(savedImages)
       
        return(
        <ThemeContext.Consumer>
            {({ theme }) => (

                <div style={root(theme)}>
                    <SearchSection />
                    <SavedImageHandler />              
                </div>
        )}

        </ThemeContext.Consumer>
    )}
}
const root: ThemedCSSProperties = (theme) => ({
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: `${theme.background.primary}B3`,
    boxShadow: `0 0px 80px 15px ${theme.background.primary}`
})
