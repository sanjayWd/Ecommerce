import React from 'react'
 import CollectionItem from '../Collection-item/Collection-Item'
import './Collection.styles.scss';

const CollectionPreview =({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,index)=>index<4)
                .map(({id,...otherItemProps})  => (
                 <CollectionItem key={id} {...otherItemProps}/>
                // <div key={item.id}>{item.imageUrl}</div>  
                ))
            }

        </div>
     
    </div>
)

export default CollectionPreview