import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from '../Ui/Card.module.css'
import { Link } from 'react-router-dom'
import GiftsData from '../GiftsData'

const Gifts = () => {
  const [giftData, setgiftData] = useState(GiftsData);

  const FilterItem = (enteredCategory) => {
    const updatedItems = GiftsData.filter((current) => {
      return current.Categories === enteredCategory;
    });
    setgiftData(updatedItems);
  }
  return (
    <>
      <img className={`${classes.banner}`} src='./Assets/Images/Carousal/giftbanner.webp' alt='' />
      <div className={`${classes.content}`}>
      <h1>Gift</h1>
        <p style={{textAlign:"justify"}}>
          Welcome to Ugaoo, your one-stop-shop for all your plant gifting needs.
          We offer a wide variety of plants that make great gifts for any occasion,
          including birthdays, weddings, anniversaries, and more. Our selection
          includes everything from succulents and cacti to bamboo and bonsai trees,
          all available in beautiful and unique planters that are sure to impress
          Give new employees a warm welcome, express appreciation to valued clients, 
          or simply recognize your teams hard work—with the gift that keeps on growing!
          <div className='gift_div'>
            <h1 className='p1'>
              Our very new shades of gifts!
              Check out our latest sales and offers.
            </h1>
            <a className='btn1 btn btn-success d-grid col-2 mx-auto' href='https://www.ugaoo.com/collections/thunder-sale'>View All Products</a>
          </div>
        </p>
      </div>
      <div className={`${classes.order} container d-block bg-light mt-25 `}>
        <h3 className='text-center'>Sort By</h3><br/>
        <Link className={`${classes.tag1}`} onClick={() => setgiftData(GiftsData)}>All</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Anniversary Gift')}>Anniversary Gift</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Birthday Gift')}>Birthday Gift</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Congratulations Gift')}>Congratulations Gift</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Thankyou Gift')}>Thankyou Gift</Link><hr/>
      </div>
      <br />
      <div className={`container ${classes.main_div}`}>
        <div className="row" >
          {
            giftData.map((cval) => {
              return (
                <>
                  <Card
                    Image={cval.Image}
                    Name={cval.Name}
                    Price={cval.Price}
                  />
                </>
              )
            }
            )
          }
        </div>
      </div>
    </>
  )
}
export default Gifts