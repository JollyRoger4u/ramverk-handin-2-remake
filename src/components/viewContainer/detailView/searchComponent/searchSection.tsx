import React, { Component } from 'react';
import ImageSection from "../imageSection"


interface Props {
    searchTerm: string;
}

interface State {
    currentSearchTerm: string,
    searchPerformed: boolean;
    test: number
}

export default class SearchSection extends Component<Props, State>{

    constructor(props: Props) {
        super(props)
        let tempSearchTerm: string = props.searchTerm;
        //Sets default state
        this.state = {
            currentSearchTerm: "",
            searchPerformed: false,
            test: 5
        }
        //Overrides default if lastSearch has a proper value
        if (props.searchTerm) {
            this.state = {
                currentSearchTerm: tempSearchTerm,
                searchPerformed: true,
                test: 55
            }
        }
    }
    render() {
        <ImageSection view={this.state.currentSearchTerm}></ImageSection>
        return (
            <div>
                <input type="text"
                    placeholder="what do you want to find?"
                    onKeyPress={this.isKeyEnter}
                    onChange={this.updateSearchTerm}
                    value={this.state.currentSearchTerm as string}
                />
                <p>{this.state.currentSearchTerm}</p>
                <button onClick={() => this.searchActivated()}>Search now!</button>
                <ImageSection view={this.state.currentSearchTerm}></ImageSection>
                <h2>{this.state.currentSearchTerm}</h2>
            </div >

        )
    }
    //runs to update the state so that the correct search gets executed when searchActivated runs
    updateSearchTerm = (event: any) => {
        this.setState({ currentSearchTerm: event.target.value.substr(0, 20) })
    }
    //Checks keypresses to detect if the button pressed is enter
    isKeyEnter = (e: any) => {
        if (e.key === "Enter") {
            this.searchActivated()
        }
    }
    //Executes the actual search
    searchActivated = () => {
        localStorage.setItem("lastSearch", this.state.currentSearchTerm);
        this.setState({ searchPerformed: true })
        console.log("CLICK!")

    }
}