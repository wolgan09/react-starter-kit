import React from 'react'
import productImage from '../../assets/img/product.jpg';
import Box from '@material-ui/core/Box';
import '../Home/Home.css'
import _ from 'lodash';

export default function Home() {

    return (
        <div style={{ width: '100%' }}>
            <div className="text-banner-container">
                <h4 className="text-banner-title">
                    Biggest Deals On Top Brands</h4><h4 className="text-banner-subtitle"></h4></div>
            <Box justifyContent="center" flexWrap="wrap" display="flex" p={1} m={1} css={{ height: 100 }}>
                {_.times(16, (i) => (
                    <Box p={1} m={3}>
                        <img src={productImage} alt="product-image"></img>
                    </Box>))}
            </Box>
        </div>
    )
}
