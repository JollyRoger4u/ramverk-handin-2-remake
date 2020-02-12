import React, { Component, CSSProperties } from 'react';
import SearchSection from './SearchSection';





export default class SearchComponent extends Component {
    render() {
        localStorage.setItem('lastSearch', 'dickweasle')
        let savedTerm: string = localStorage.getItem('lastSearch') as string
        return (<SearchSection searchTerm={savedTerm} />)
    }
}

