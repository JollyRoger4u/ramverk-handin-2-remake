import * as React from 'react';
import SearchCard from './searchCard'



function SavedImageHandler(){
    let savedImages = JSON.parse(localStorage.getItem("storedImages") || "[]");

    return (savedImages.map((image: any, i:number) => <SearchCard urls={image} key = {i}/>))
}

export default SavedImageHandler