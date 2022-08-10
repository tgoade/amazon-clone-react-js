import './header.scss';

function Brand({ addBrand, addMoto }){
    return(
        <div className='brand'>
            <img src={`${addBrand}`} alt='' />
            <p className='moto'>{addMoto}</p>
        </div>
    )
}

export default Brand;