import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';
import React from 'react';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos />,
        prevArrow: <MdOutlineArrowBackIosNew />
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                const src = item?.images ? item?.images[0] : item.image;
                return (
                    <React.Fragment key={index}>
                        {isProductItem ? (
                            <ProductItem
                                src={src}
                                prevSrc={src}
                                name={item.name}
                                price={item.price}
                                details={item}
                                isHomePage={false}
                                slideItem
                            />
                        ) : (
                            <img src={item} alt='test' />
                        )}
                    </React.Fragment>
                );
            })}
        </Slider>
    );
}


// Custom Arrow components to avoid passing currentSlide to DOM
// function NextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className} style={style} onClick={onClick}>
//             <MdArrowForwardIos />
//         </div>
//     );
// }

// function PrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className} style={style} onClick={onClick}>
//             <MdOutlineArrowBackIosNew />
//         </div>
//     );
// }


export default SliderCommon;