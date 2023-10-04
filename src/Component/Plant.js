import React, { useState } from 'react'
import PlantsData from '../PlantsData'
import classes from './Plant.module.css'
import { Link } from 'react-router-dom'


const Plant = () => {

    const [plantdata, setplantData] = useState(PlantsData);

    const FilterItem = (enteredCategory) => {
        const updatedItems = PlantsData.filter((current) => {
            return current.Categories === enteredCategory;
        });
        setplantData(updatedItems);
    }

    return (
        <>
            {/* Banner */}
            <img className={`${classes.banner}`} src='./Assets/Images/Carousal/banner2.webp' alt='' />

            <div>
                <div className={`${classes.content}`}>
                    {/* Content Plant */}
                    <h1>Plant</h1><br/>
                    <p style={{ textAlign: "justify" }}>
                        Welcome to our online nursery, where you can find
                        a wide variety of natural plants available for purchase.
                        We specialize in providing a seamless plant online shopping
                        experience, making it convenient for you to buy plants online
                        and have them delivered right to your doorstep..<br /><br />
                        <h1>Types of Plants</h1><br />
                        When it comes to adding a touch of nature to your living spaces,
                        live plants are the perfect choice. With their lush green leaves
                        and vibrant colors, they not only beautify your home but also provide
                        numerous health benefits. If you're considering incorporating live plants
                        into your indoor decor, you're in luck! You can easily find a wide
                        variety of live plants online in India.
                        Transform your living spaces into lush green havens with our online plants.
                        Whether you're in search of indoor plants to freshen up your home or outdoor
                        plants to create a vibrant garden, we have a wide range of options to suit
                        your needs. From flowering plants to foliage plants, succulents to bonsai,
                        you'll find a diverse selection to choose from.
                    </p>

                </div>
                {/* Content end */}

                {/* button section */}
                <div className={`${classes.order} container d-block bg-light mt-75 `}>
                    <h3 className='text-center'>Sort By</h3>
                    <Link className={`${classes.tag1}`} onClick={() => setplantData(PlantsData)}>All</Link><hr />
                    <Link className={`${classes.tag1}`} onClick={() => FilterItem('IndoorPlant')}>IndoorPlant</Link><hr />
                    <Link className={`${classes.tag1}`} onClick={() => FilterItem('OutdoorPlant')}>OutdoorPlant</Link><hr />
                    <Link className={`${classes.tag1}`} onClick={() => FilterItem('HangingPlant')}>HangingPlant</Link><hr />
                    <Link className={`${classes.tag1}`} onClick={() => FilterItem('FruitPlant')}>FruitPlant</Link><hr />
                    <Link className={`${classes.tag1}`} onClick={() => FilterItem('FloweringPlant')}>FloweringPlant</Link><hr />
                </div>
                <br /><br />
            </div>
            {/* cards section */}
            <div className={`container ${classes.main_div}`}>
                <div className="row" >
                    {
                        plantdata.map((cval) => {
                            return (
                                <>
                                    {/* <img src=''/> */}
                                    <div className={`col-sm-3 ${classes.div1}`}>
                                        <div className={`card cover sm ${classes.card1}`} >
                                            <img className={`${classes.topimg}`} src={cval.Image} alt="..." />

                                            <div className="card-body">
                                                <p className="card-text">{cval.Name}</p>
                                                <hr />
                                                <p className="card-price">Price:{cval.Price}</p>
                                                <a href="#" className="btn btn-success text-center" >View Product</a>
                                            </div>
                                        </div>

                                    </div>
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

export default Plant