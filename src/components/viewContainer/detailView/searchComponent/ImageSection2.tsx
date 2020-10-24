import React, { Component } from 'react';
import Axios, { AxiosResponse } from 'axios';

import ImageCard, { ImageUrls } from '../imageCard';
import { ThemedCSSProperties, ThemeContext } from '../../../../contexts/themeContext';

interface Props {
    view: string
}
interface State {
    imagesUrls: ImageUrls[],
    isLoading: boolean,
    view: string,
}

export default class ImageSection extends Component<Props, State> {
    /** Not a good place for the key.. well.. what the heck.. - GET YOUR OWN! */
    readonly accessKey = "fa8c88cf59c60c0b5207391d79029cad044c8acf7e10634328da3dbc62e87e89"
    readonly imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/"
    constructor(props: Props) {
        super(props)

        this.state = {
            imagesUrls: new Array(24).fill({}),
            isLoading: true,
            view: "",
        }

    }

    componentWillReceiveProps(props: Props) {
        this.fetchData(props);
        console.log("will reaceive props triggered")

    }
    async fetchData(props: Props) {
        try {
            const response = await Axios.get(this.imageDatabaseApiUrl, {
                params: {
                    client_id: this.accessKey,
                    //query: this.props.view,
                    query: "ape",
                    //page: Math.round(Math.random() * 100),
                    per_page: 24,
                }
            })
            this.handleResponse(response);
        } catch (error) {
            console.error(error)
        }
    }

    handleResponse(response: AxiosResponse) {
        console.log(response)
        if (response.data && response.data.results) {
            const images = response.data.results.map((img: any) => img.urls)
            this.setState({ imagesUrls: images, isLoading: false })

        }
    }



    render() {
        { console.log("image propsview:" + this.props.view) }
        if (this.props.view != "") {
            return (

                <ThemeContext.Consumer>
                    {({ theme }) => (

                        <div style={root(theme)} key={this.props.view}>
                            {this.state.imagesUrls.map((urls, index) =>
                                <ImageCard key={index} urls={urls} />
                            )}
                        </div>
                    )}

                </ThemeContext.Consumer>

            )
        } else {
            return (
                <div><p>No searchdata found</p></div>
            )
        }

    }
}

const root: ThemedCSSProperties = (theme) => ({
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: `${theme.background.primary}B3`,
    boxShadow: `0 0px 80px 15px ${theme.background.primary}`
})