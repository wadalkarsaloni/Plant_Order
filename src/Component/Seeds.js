import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from '../Ui/Card.module.css'
import { Link } from 'react-router-dom'
import SeedsData from '../SeedsData'

const Seeds = () => {
  const [seedData, setseedData] = useState(SeedsData);

  const FilterItem = (enteredCategory) => {
    const updatedItems = SeedsData.filter((current) => {
      return current.Categories === enteredCategory;
    });
    setseedData(updatedItems);
  }
  return (
    <>
      {/* Banner */}
      <img className={`${classes.banner}`} src='./Assets/Images/Carousal/seedbanner.webp' alt='' />
      {/* Content Plant */}

      <div className={`${classes.content}`}>
      <h1>Seeds</h1>
        <p style={{ textAlign: "justify" }}>
          Growing your own vegetables and herbs at home has never been easier and with our
          extensive range of organic seeds, you can buy any seeds online with the guarantee
          of quality. Ugaoo is India's most trusted seller of organic seeds online and is
          one of the biggest online seeds stores. Explore our range of organic seeds and buy
          seeds online India for your garden.
          <br /><br />
          <div className='seed_div'>
            <h1 className='para'>
              Our very new shades of green.<br/>
              Check out our latest sales and offers.
            </h1><br/>
            <a className='btn1 btn btn-success d-grid col-2 mx-auto' href='https://www.ugaoo.com/collections/thunder-sale'>View All Products</a>
          </div>
        </p>
      </div>
      <div className={`${classes.order} container d-block bg-light mt-75 `}>
        <h3 className='text-center'>Sort By</h3><br/>
        <Link className={`${classes.tag1}`} onClick={() => setseedData(SeedsData)}>All</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('FlowerSeed')}>FlowerSeed</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('FruitSeed')}>FruitSeed</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Herbs')}>Herbs</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Vegetable Seed')}>Vegetable Seed</Link><hr />
      </div>
      <br /><br />
      <div className={`container ${classes.main_div}`}>
        <div className="row" >
          {
            seedData.map((cval) => {
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

export default Seeds