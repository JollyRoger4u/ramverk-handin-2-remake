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


            </div>

        )
    }
}

/*
                <ViewSection key={savedTerm} >
                    <ImageLink view={savedTerm} />

                </ViewSection>
                <ViewSection key="sky" >
                    <ImageLink view="sky" />

                </ViewSection>
*/