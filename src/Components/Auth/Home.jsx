import React, { Component } from 'react'
import Navbar from '../Layout/Navbar'
import { Button, Grid } from '@material-ui/core'
import PostCard from '../Card/PostCard'
import { getCategories } from '../../utils/Utils'
export default class Home extends Component{
    render(){
        const categories = getCategories();
        console.log(categories)
       
        // const printCatgerory = () =>(
           
        // )
        return(
           <div>{
            Object.keys(categories).map((item)=>{
               return <div>{item}</div>
            })
               }</div>
        );
    }
}