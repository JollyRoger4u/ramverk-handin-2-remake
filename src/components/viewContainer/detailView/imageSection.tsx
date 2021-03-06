import React, { Component } from 'react';
import Axios, { AxiosResponse } from 'axios';

import SearchCard, { ImageUrls } from './searchComponent/searchCard';
import { ThemedCSSProperties, ThemeContext } from '../../../contexts/themeContext';

interface Props {
    view: string
}
interface State {
    imagesUrls: ImageUrls[],
    isLoading: boolean,
    view: string
}

export default class ImageSection extends Component<Props, State> {
    readonly accessKey = "fa8c88cf59c60c0b5207391d79029cad044c8acf7e10634328da3dbc62e87e89"
    readonly imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/"

    state: State = {
        imagesUrls: new Array(24).fill({}),
        isLoading: true,
        view: localStorage.getItem("lastSearch") as string
    }

    handleResponse(response: AxiosResponse) {
        if (response.data && response.data.results) {
            const images = response.data.results.map((img: any) => img.urls)
            this.setState({ imagesUrls: images, isLoading: false })
        }
    }
    //async await
    async componentDidMount() {
        //let imageSectionSaved = localStorage.getItem("likedImages")
        //console.log("likedImages in imageSection " + imageSectionSaved )
        try {
            const response = await Axios.get(this.imageDatabaseApiUrl, {
                params: {
                    client_id: this.accessKey,
                    // query: this.state.view,
                    query: localStorage.getItem('searchTerm'),
                    //page: Math.round(Math.random() * 100),
                    per_page: 24,
                }
            })
            this.handleResponse(response);
        } catch (error) {
            console.error(error)
        }
    }
    render() {

        return (
            <ThemeContext.Consumer>
                {({ theme }) => (

                    <div style={root(theme)} key={this.props.view}>
                        <h1>{this.state.view}</h1>
                        {this.state.imagesUrls.map((urls, index) =>
                            <SearchCard key={index} urls={urls} />
                            
                        )}
                    </div>
                )}

            </ThemeContext.Consumer>
        )

    }
}

const root: ThemedCSSProperties = (theme) => ({
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: `${theme.background.primary}B3`,
    boxShadow: `0 0px 80px 15px ${theme.background.primary}`
})