import React, { Component, CSSProperties } from 'react';
import SearchSection from './searchSection';
import ViewSection from '../../viewSection';
import ImageLink from '../../imageLink';



export default class SearchComponent extends Component {
    render() {
        let savedTerm: string = localStorage.getItem('lastSearch') as string
        return (
            <div>
                <SearchSection searchTerm={savedTerm} />
                <ViewSection key={savedTerm} >
                    <ImageLink view="forest" />

                </ViewSection>
                <ViewSection key="ape" >
                    <ImageLink view="ape" />

                </ViewSection>
            </div>

        )
    }
}

