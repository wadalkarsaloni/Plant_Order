import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from '../Ui/Card.module.css'
import { Link } from 'react-router-dom'
import ComboData from '../ComboData'

const Combo = () => {
  const [comboData, setcomboData] = useState(ComboData);

  const FilterItem = (enteredCategory) => {
    const updatedItems = ComboData.filter((current) => {
      return current.Categories === enteredCategory;
    });
    setcomboData(updatedItems);
  }
  return (
    <>
      <img className={`${classes.banner}`} src='./Assets/Images/Carousal/combobanner.webp' />

      <div className={`${classes.content}`}>
      <h1>Combo</h1>
        <p style={{textAlign:"justify"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 
          1500s, when an unknown printer took a galley of type and scrambled it to 
          make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
          When it comes to adding a touch of nature to your living spaces,
          live plants are the perfect choice. With their lush green leaves
          and vibrant colors, they not only beautify your home but also provide
          numerous health benefits. You can easily find a wide
          variety of live plants online in India.
        </p>
      </div>
      
      <div className={`${classes.order1} container d-block bg-light mt-75 `}>
        <h3 className='text-center'>Sort By</h3>
        <Link className={`${classes.tag1}`} onClick={() => setcomboData(ComboData)}>All</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('Flowers&chocolate')}>Flowers&chocolate</Link><hr />
        <Link className={`${classes.tag1}`} onClick={() => FilterItem('PlantsCombo')}>PlantsCombo</Link><hr />
      </div>
      <br /><br />
      <div className={`container ${classes.main_div}`}>
        <div className="row" >
          {
            comboData.map((cval) => {
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

export default Combo