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

        //Sets default state
        this.state = {
            currentSearchTerm: ""
        }
        //Overrides default if lastSearch has a proper value
        if (props.searchTerm) {
            this.state = {
                currentSearchTerm: props.searchTerm
            }
        }
    }
    render() {
        return (
            <div>
                <input type="text"
                    placeholder="what do you want to find?"
                    onKeyPress={this.isKeyEnter}
                    onChange={this.updateSearchTerm}
                    value={this.state.currentSearchTerm as string}
                />
                <p>{this.state.currentSearchTerm}</p>
                <button onClick={this.searchActivated.bind(this)}>Search now!</button>
            </div >
        )
    }
    //runs to update the state so that the correct search gets executed when searchActivated runs
    updateSearchTerm = (event: any) => {
        this.setState({ currentSearchTerm: event.target.value.substr(0, 20) })
    }
    //Checks keypresses to detect if the button pressed is enter
    isKeyEnter = (event: any) => {
        if (event.key === "Enter") {
            this.searchActivated()
        }
    }
    //Executes the actual search
    searchActivated = () => {
        localStorage.setItem("lastSearch", this.state.currentSearchTerm);
        console.log("CLICK!")
    }
}