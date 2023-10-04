import React from 'react'
import classes from './Card.module.css'


const Card = (props) => {
  return (
    <>
      <div className={`col-sm-3 ${classes.div1}`}>
        <div className={`card cover sm ${classes.card1}`} >
          <img src={props.Image} className={`${classes.topimg}`} alt="..." />
          <div className="card-body">
            <h5 className="card-text">{props.Name}</h5>
            <hr />
            <h5 className="card-price">Price:{props.Price}</h5>
            <a href="#" className="btn btn-success text-center" >Add To Cart</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card