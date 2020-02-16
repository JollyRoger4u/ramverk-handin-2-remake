import React, { Component } from 'react';
import ImageSection from "../imageSection"

interface State {
    lastSearch: string;
    currentSearch: string;
    test: any;
}
export default class SearchSection extends Component {

    state = {
        lastSearch: "",
        currentSearch: "",
        test: ""
    }


    searchChange = (e: any) => {
        this.setState({ test: this.state.currentSearch })
        this.setState({ currentSearch: e.target.value });


    }
    clickHandler = (currentSearch: string) => {
        console.log(currentSearch)
        localStorage.setItem("lastSearch", currentSearch)
        this.forceUpdate()
    }
    render() {
        let savedLocalSearch = this.state.currentSearch
        let imageWindow = <ImageSection view={this.state.currentSearch} />
        return (
            <div>
                <p>last searched: {savedLocalSearch}</p>
                <input
                    type="text"
                    placeholder="Please enter search term"
                    onChange={(e) => { this.searchChange(e) }}
                ></input>
                <button onClick={(e) => { this.clickHandler(this.state.currentSearch) }}>Search!</button>
                <h1>{this.state.currentSearch}</h1>
                <h1>{this.state.test}</h1>
                {imageWindow}
                <div>



                </div>

            </div>
        )

    }
}



/*
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
        let updateImages = <ImageSection view={this.state.currentSearchTerm} />
        { console.log(this.state.searchPerformed) }

        return (
            <div>
                <input type="text"
                    placeholder="what do you want to find?"
                    onKeyPress={this.isKeyEnter}
                    onChange={this.updateSearchTerm}
                    value={this.state.currentSearchTerm as string}
                />
                <p>{this.state.currentSearchTerm}</p>
                <button onClick={(e) => this.searchActivated(e)}>Search now!</button>
                <div>{updateImages}</div>
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
            this.searchActivated(e)
        }
    }
    //Executes the actual search
    searchActivated = (e: any) => {
        localStorage.setItem("lastSearch", this.state.currentSearchTerm);
        this.setState({ currentSearchTerm: e.target.value.substr(0, 20) })
        this.setState({ searchPerformed: true })
        console.log("CLICK!")
        console.log(this.state.searchPerformed)

    }
}
*/