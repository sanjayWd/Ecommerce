import React from 'react'
import CollectionPreview from '../../../Components/Preview-Collection/Collection-Preview';
import SHOP_DATA from './Collection'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }   
    }

    render(){
        const {collections}= this.state; 
        return(
            <div className='ShopPage'>
                <h1 style={{textAlign:'center'}}>Collections</h1>
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}

export default ShopPage