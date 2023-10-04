import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from '../Ui/Card.module.css'
import { Link } from 'react-router-dom'
import PotsData from '../PotsData'

const Pots = () => {
  const [potData, setpotData] = useState(PotsData);

  const FilterItem = (enteredCategory) => {
    const updatedItems = PotsData.filter((current) => {
      return current.Categories === enteredCategory;
    });
    setpotData(updatedItems);
  }
  return (
    <>
      <img className={`${classes.banner}`} src='./Assets/Images/Carousal/potbanner.webp' alt='' />
      
      <div className={`${classes.content}`}>
      <h1>Pots & Plantters</h1>
        <p style={{textAlign:"justify"}}>
          Plant pots are the best way to give your indoor plants a boost in
          the decor department. Explore our range of pots for plants and
          select the most premium planters online to beautify your home
          gardens. Buy from Ugaoo’s extensive range of plant pots online for
          your indoor and outdoor plants. Level up your home decor with a
          range of premium metal flower pots online.
          <br />
          Gardening has transformed from a means to grow food and flowers to a
          decor accent in recent times. Home gardens, both indoors and outdoors
          are not only about growing plants but about the decor aesthetic and
          the entire look of your home garden.In this whole endeavour plant pots
          play a key role, they up the look of your plants and allow you to add
          your own personal touch to your plants. Pots for plants are the new decor
          superheroes and if you don’t believe us just browse the million websites
          selling a million different stunning plant pots online.
          A flowerpot, planter, planterette or plant pot, is a container in which flowers and other plants are cultivated and displayed. Historically, and still to a significant extent today, they are made from plain terracotta with no ceramic glaze, with a round shape, tapering inwards.Cheap containers could easily take damage, yet tougher and more expensive materials could suck your bank account dry.To win at the game of material selection, a gardener has to weigh the good and bad before deciding yay or nay.But how can a smart gardener go about making the right decision? With knowledge – that’s how.
          Plant containers come in a wide variety of materials, with each type having notable advantages and disadvantages.
          
        </p>

      </div>
      <div className={`${classes.order} container d-block bg-light mt-75 `}>
        <h3 className='text-center'>Sort By</h3><br/>
        <Link className={`${classes.tag1}`} onClick={() => setpotData(PotsData)}>All</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('CeramicPot')}>CeramicPot</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('HangingPot')}>HangingPot</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('PlasticPlanter')}>PlasticPlanter</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Stand')}>Stand</Link><hr />
      </div>
      <br /><br />
      <div className={`container ${classes.main_div}`}>
        <div className="row" >
          {
            potData.map((cval) => {
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

export default Pots