import React, { Component } from 'react';
import ImageSection2 from "./imageSection2"
import {Link} from "react-router-dom"

interface State {
    lastSearch: string;
    tempSearch: string;
}
interface Props {
    view: string
}
export default class SearchSection extends Component <{}, {tempSearch: string, lastSearch: string}>{
    constructor(props : Props){
        super(props);

    
    this.state = {
        lastSearch: "Search",
        tempSearch: "tempSearch",
    }
    }
    //Checks keypresses to detect if the button pressed is enter
    isKeyEnter = (e: any) => {
    if (e.key === "Enter") {
        this.setState({lastSearch: 'enter clicked'})
    }
}
    //Checks for earlier searches
    componentDidMount() {
        let isTerm = localStorage.getItem('searchTerm')
        if (isTerm){
            this.setState({lastSearch: isTerm})
        }
    }

    updateSavedTerm = (event : any) => {
        this.setState({tempSearch:  event.target.value});
        localStorage.setItem('searchTerm', event.target.value)
        console.log('update term: ' + localStorage.getItem('searchTerm'))
        
    }

    clearLocal = () => {
        localStorage.clear()
        this.setState({lastSearch: "cleared"})
    }

    render() {
        const searchAdd = "/search:"
        let sURL = "/search:" + this.state.tempSearch; 
        return (
            
            <div className="searchSection">
                <button onClick={this.clearLocal}></button>
                <input autoFocus type="text" placeholder={this.state.lastSearch} className="searchField" onKeyPress={this.isKeyEnter} onChange={this.updateSavedTerm}></input>
                <Link to= {sURL} className='searchBtn' >Search now</Link>
            </div>
        )
    }

}

/*        return (
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
state = {
    lastSearch: "",
    currentSearch: "",
    tempSearch: "",
}

componentDidMount() {
    let isSearchSaved = localStorage.getItem("lastSearch" as string);
    if (isSearchSaved != "") {
        this.setState({ lastSearch: isSearchSaved })
        console.log("component is loaded moddafockka");
        console.log(isSearchSaved);
    }
}
searchChange = (e: any) => {
    this.setState({ tempSearch: e.target.value });
}

clickHandler = (updateSearch: string) => {
    this.setState({ tempSearch: updateSearch })
    localStorage.setItem("lastSearch", updateSearch)
    console.log("Clicked! currentstate: " + this.state.currentSearch)
    console.log("Clicked! lastSearch: " + this.state.lastSearch)
    console.log("Clicked! tempSearch: " + this.state.tempSearch)
}
render() {
    let savedLocalSearch = this.state.lastSearch

    return (
        <div>
            <p>last searched:  {savedLocalSearch}</p>
            <input
                type="text"
                placeholder="Please enter search term"
                onChange={(e) => { this.searchChange(e) }}
            ></input>
            <button onClick={(e) => { this.clickHandler(this.state.currentSearch) }}>Search!</button>
            <h1>{this.state.currentSearch}</h1>
            <h1>{this.state.lastSearch}</h1>
            <ImageSection2 view={this.state.lastSearch} />
            <div>



            </div>

        </div>
    )

}
}



/*
{//{this.state.currentSearch}}
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