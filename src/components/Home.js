import React from 'react';
import Deals from './Deals';
import Deal from './Deal';
//import Header from './Header';
import './home.scss';
import Product from './Product';

function Home() {
  return (
        <div className='home'>
            <div className='home__container'>
                <img src='https://m.media-amazon.com/images/I/81AJi1Tw+VL._SX3000_.jpg' alt='' className='home__image' />
            
                <div className='home__row'>
                    <Product title='Olay Regenerist Retinol 24 Max Moisturizer' addPrice={36.09} image='https://m.media-amazon.com/images/I/718mXByu96L._AC_UL640_FMwebp_QL65_.jpg' rating={5} count={5724} addBrand='https://m.media-amazon.com/images/I/41xhzdbIs0L._AC_AC_SX240_SY140_.jpg' addMoto='Name a more iconic beauty brand, we’ll wait' addButton={true}/>
                    <Product title='Naked WHEY 5LB 100% Grass Fed Unflavored Whey Protein Powder' image='https://m.media-amazon.com/images/I/61Ihp7WAvoL._AC_SX240_SY230_.jpg' rating={5} count='11,825' addBrand='https://m.media-amazon.com/images/I/31YDZ+as0+L._AC_AC_SX240_SY90_.png' addMoto='Naked Nutrition - Nutrition With Nothing to Hide' addButton={true} />
                    <Product title='Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel' image='https://m.media-amazon.com/images/I/71EjkRNNcwL._AC_SX540_SY280_.jpg' rating={5} count='72,623' addButton={true} />
                    <Product title='Melissa &amp; Doug Blue&apos;s Clues &amp; You! Water...' addPrice={10.80} image='https://m.media-amazon.com/images/I/81z2pXAGFdL._AC_SX240_SY280_.jpg' rating={5} count='381' addBrand='https://m.media-amazon.com/images/I/81-wWbQav-L._AC_AC_SX240_SY140_.png' addMoto='Discover craft kits that build creativity!' addButton={true}/>
                </div>
                <div className='home__row'>
                    <Deal headline='Customers&apos;s most-loved deals' 
                        image='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/CategoryCard/CML_SP22_Deals_CC_DT_2x._SY608_CB636853462_.jpg' />
                    <Deals headline='Back to School' 
                        image1='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_Deal_desk_2x._SY232_CB632794662_.jpg' 
                        product1='Deals'
                        image2='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_SchoolEssentials_desk_2x._SY232_CB633224176_.jpg' 
                        product2='Essentials'
                        image3='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_CML_desk_2x._SY232_CB632794662_.jpg' 
                        product3='Most-loved picks'
                        image4='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_SchoolSupplies_desk_2x._SY232_CB632794662_.jpg'
                        product4='Supplies' />
                    <Deals headline='Deals on most-loved picks' 
                        image1='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_W_Fashion_DT_NW_2x._SY232_CB636783951_.jpg' 
                        product1='Women&apos;s fashion'
                        image2='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_M_Fashion_DT_SE_2x._SY232_CB636783951_.jpg' 
                        product2='Men&apos;s fashion'
                        image3='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_Beauty_DT_NE_2x._SY232_CB636783951_.jpg' 
                        product3='Beauty'
                        image4='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_HomeKitchen_DT_SW_2x._SY232_CB636783951_.jpg'
                        product4='Home and kitchen' />                
                    <Deal headline='Summer-ready home security' 
                        image='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-MWQwMzdhOGUt-w758._SY608_CB634926707_.jpg'/>
                </div>
                <div className='home__row'>
                    <Product title='RevitaLash Cosmetics, RevitaLash Advanced Eye...' image='https://m.media-amazon.com/images/I/51HsRM58O7L._AC_SX540_SY280_.jpg' rating={5} count='7541' addPrice={150.00} addButton={true}/>
                    <Product title='Reolink 2K Security Camera System Wireless...' image='https://m.media-amazon.com/images/I/513cnvXQR-L._AC_SX240_SY280_.jpg' rating={4} count='131' addBrand='https://m.media-amazon.com/images/I/21MT5FlIskL._AC_AC_SX240_SY140_.png' addMoto='100% Wire-Free Solar Powered' addButton={true}/>
                </div>
            </div>
        </div>
  )
}

export default Home