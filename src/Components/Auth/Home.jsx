import React, { Component } from 'react'
import { getCategories } from '../../utils/Utils'

export default class Home extends Component{
    render(){
        const categories = getCategories();
        return(
           <div>{
            Object.keys(categories).map((item)=>{
               return <div>{item}</div>
            })
               }

               </div>
        );
    }
}
