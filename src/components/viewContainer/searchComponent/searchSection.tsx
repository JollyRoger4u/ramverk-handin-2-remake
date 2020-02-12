import React, { Component } from 'react';

interface Props {
    searchTerm: string;
}

interface State {
    currentSearchTerm: string
}

export default class SearchSection extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            currentSearchTerm: "2"
        }
    }
    render() {
        return (
            <div>
                <h1>GNAAA {this.props.searchTerm} </h1>
                <input type="text"
                    placeholder="what do you want to find?"
                    onKeyPress={this.isKeyEnter}
                    onChange={this.updateSearchTerm}
                    value={this.state.currentSearchTerm as string}



                />



                <button onClick={this.searchActivated.bind(this)}>Search now!</button>
            </div >
        )
    }
    updateSearchTerm = (event: any) => {
        this.setState({ currentSearchTerm: event.target.value.substr(0, 20) })
    }
    isKeyEnter = (event: any) => {
        if (event.key === "Enter") {
            this.searchActivated()
        }
    }
    searchActivated = () => {
        console.log("CLICK!")
    }
}