import React from 'react'
import InfoItem from './InfoItem'
import './ProductPage.css'


function ProductPage(props) {
  return (
    <div className='product__container'>
        <div className='product__wrap'>
        <div className='product__row product__heading'>
            <div className='product__title'>
                <h1 >{props.title}</h1>
            </div>
            <div className='product__row product__order'>
                <p className='product__price'>
                    <span className='span__price'>{props.price}₫</span>
                    / pax
                </p>
                <button className='buy-btn'>
                    <i className='fas fa-shopping-cart'></i>Buy now
                </button>
            </div>
        </div>
        
        <section className='product__img__container product__row'>
            <div className=' product__img__left product__img__div'>
                <img 
                className='product__img'
                alt=''
                src={props.img1}
                />
            </div>
            <div className='product__col product__img__right'>
                <div className='product__row product__img__top'>
                    <div className='product__img__div'>
                        <img 
                            className='product__img'
                            alt=''
                            src={props.img2}
                        ></img>
                    </div>
                    <div className='product__img__vicetop product__img__div'>
                        <img 
                            className='product__img'
                            alt=''
                            src={props.img3}
                        ></img>
                    </div>
                </div>
                <div className='product__img__bottom product__img__div'>
                    <img 
                        className='product__img'
                        alt=''
                        src={props.img4}
                    ></img>
                </div>
            </div>
        </section>
        <section className='product__row product__info'>
            <div className='product__info__left'>
                <p className='product__description'>{props.des}</p>
                <div className='product__orderbox product__row'>
                    <div className='product__orderbox__info' >
                        <p>Departure day <b>{props.departureday}</b></p>
                        <p>Time <b>{props.time}</b></p>
                        <p>Starting gate <b>{props.starting}</b></p>
                        <p>Availavle slot <b>{props.avaiable}</b></p>
                    </div>
                    <div className='product__calenderbox product__box'>
                        <i className='fas fa-calendar'></i>
                        <p>Other day</p>
                    </div>
                </div>
                <div className='product__boxsupport'>
                    <label>
                        You need support ?
                    </label>
                    <div className='product__groupcontact product__row'>
                        <div className='product__groupcontact__phone product__box' >
                            <i class="fas fa-phone"></i>
                            <p>Free calls over the internet</p>
                        </div>
                        <div className='product__groupcontact__mail product__box' >
                            <i class="fas fa-envelope"></i>
                            <p>Send a support request now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product__info__right product__services__wrap' >
                <div className='product__col product__services'>
                    <ul className='product__row product__service__line'>
                        <InfoItem
                        src='fas fa-flag'
                        label='Time'
                        info={props.timetravel}
                        />
                        <InfoItem
                        src='fas fa-bus'
                        label='Transport'
                        info={props.transport}
                        />
                        <InfoItem
                        src='fas fa-map'
                        label='Sight seeing'
                        info={props.sightseeing}
                        />
                        <InfoItem
                        src='fas fa-fire-alt'
                        label='Culinary'
                        info={props.culianary}
                        />
                    </ul>
                    <ul className='product__row product__service__line'>
                        <InfoItem
                            src='fas fa-hotel'
                            label='Hotel'
                            info={props.hotel}
                        />
                        <InfoItem
                        src='fas fa-clock'
                        label='Ideal time'
                        info={props.idealtime}
                        />
                        <InfoItem
                        src='fas fa-users'
                        label='Suitable object'
                        info={props.suitable}
                        />
                        <InfoItem
                        src='fas fa-star'
                        label='Endow'
                        info={props.endow}
                        />
                    </ul>
                </div>
            </div>
        </section>
    </div>
    </div>
    
  )
}

export default ProductPage