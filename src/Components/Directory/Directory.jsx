import React from 'react'
import MenuItem from '../Menu-Item/Menu-Item'
import './Directory.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections:
        [    
            {
                id:1,
                title:'hats',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                LinkUrl:'hats'
            },
            
            {
                id:2,
                title:'jackets',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                LinkUrl:'Jacket'
            },
            
            {
                id:3,
                title:'sneakers',
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                LinkUrl:''
            },
            
            {
                id:4,
                title:'womens',
                size:'large',
                imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                LinkUrl:''
            },
            
            {   
                id:5,
                title:'Mens',
                size:'large',
                imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                LinkUrl:''
            }]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id,...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))  
                }

            </div>
        );
    }

}
export default Directory;