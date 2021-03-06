import React from 'react'
import {withRouter} from  'react-router-dom'
import './Menu-Item.scss'
const MenuItem = ({title,imageUrl,size,history,LinkUrl,match}) =>(
    
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${LinkUrl}`)}>
        
        <div className='background-image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }} 
         />
        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div> 

)

export default withRouter(MenuItem) 