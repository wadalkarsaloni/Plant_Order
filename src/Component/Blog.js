import React from 'react'
import classes from './Blog.module.css'

const Blog = () => {
  return (
    <>
      <h2>Gardening Basics</h2>
      <div className={`${classes.main_div}`}>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/desk_plants.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4 className="card-text">How to Care for Your Office Plants to Keep Them Thriving</h4>
            <p>Having indoor plants, especially in an office setting, can bring a breath of fresh air and enhance the ambiance. Not only do they add a touch of greenery to your...</p>
            <a href='https://www.ugaoo.com/blogs/gardening-basics/how-to-care-for-your-office-plants-to-keep-them-thriving'>Read More</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/football_lily.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4>All About Football Lily: From Flower to Bulb</h4>
            JULY 29, 2023
            <p>When you first hear the term "Football Lily," images of a sports field might come to mind, but in the realm of horticulture, Football Lily refers to a stunning and...</p>
            <a href='https://www.ugaoo.com/blogs/gardening-basics/all-about-football-lily-from-flower-to-bulb'>Read More</a>
          </div>
        </div>
      </div>
      <div className='d-grid col-2 mx-auto'>
        <a type='submit' className='btn btn-success' href='https://www.ugaoo.com/blogs/gardening-basics'>View All</a>
      </div>
      <hr />
      {/* second div */}
      <h2>Garden Maintenance</h2>
      <div className={`${classes.main_div}`}>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/garden_tools.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4 className="card-text">Monsoon Gardening Tools and Equipment: Must-Haves for Rainy Season Plant Care</h4>
            JULY 29, 2023
            <p>Welcome to the enchanting world of monsoon gardening! As nature showers its blessings upon us, it's time to embrace the beauty and rejuvenation that the rainy season brings to our...</p>
            <a href='https://www.ugaoo.com/blogs/garden-maintenance/monsoon-gardening-tools-and-equipment-must-haves-for-rainy-season-plant-care'>Read More</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/greenhouse-still-life.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4>Monsoon Container Gardening: Tips for Growing Plants in Pots during the Rainy Season</h4>
            JULY 29, 2023
            <p>Welcome to the magical world of monsoon container gardening, where nature's beauty combines with the joy of nurturing your own plants. The rainy season brings refreshing showers and lush greenery,...</p>
            <a href='https://www.ugaoo.com/blogs/garden-maintenance/monsoon-container-gardening-tips-for-growing-plants-in-pots-during-the-rainy-season'>Read More</a>
          </div>
        </div>
      </div>
      <div className='d-grid col-2 mx-auto'>
        <a type='submit' className='btn btn-success' href='https://www.ugaoo.com/blogs/garden-maintenance'>View All</a>
      </div>
      <hr />
      {/* second div end */}
      {/* third blog start */}
      <h2>Ornamental Gardening</h2>
      <div className={`${classes.main_div}`}>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/bloom.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4 className="card-text">6 Flowering Vines That Bloom All Summer</h4>
            MAY 17, 2023
            <p>Flowering vines are Mother Nature's gift, gracing our surroundings with their exquisite beauty and elegance. They not only add captivating vertical interest but also create enchanting displays of vibrant colors...</p>
            <a href='https://www.ugaoo.com/blogs/ornamental-gardening/6-flowering-vines-that-bloom-all-summer'>Read More</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/shutterstock.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4>Ideas of Keeping Indoor plants on stairs</h4>
            JUNE 05, 2023
            <p>Indoor plants have become an essential element in interior design, and incorporating them on your staircase can transform it into a stunning focal point. In this blog post, we will...</p>
            <a href='https://www.ugaoo.com/blogs/ornamental-gardening/ideas-of-keeping-indoor-plants-on-stairs'>Read More</a>
          </div>
        </div>
      </div>
      <div className='d-grid col-2 mx-auto'>
        <a type='submit' className='btn btn-success' href='https://www.ugaoo.com/blogs/ornamental-gardening'>View All</a>
      </div>
      <hr />
      {/* four div start*/}
      <h2>Green Lifestyle</h2>
      <div className={`${classes.main_div}`}>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/colorful_pots.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4 className="card-text">How to Choose Best Color Pots for your plants</h4>
            JUNE 22, 2023
            <p>When it comes to gardening, choosing the right pots for your plants is just as important as selecting the perfect soil and providing adequate sunlight and water. One often overlooked...</p>
            <a href='https://www.ugaoo.com/blogs/ornamental-gardening/6-flowering-vines-that-bloom-all-summer'>Read More</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: "35rem", borderRadius: "0", overflow: "hidden" }}>
          <img className={`${classes.img1}`} src="./Assets/Images/blog/macrame_pot.webp" style={{ borderRadius: "0" }} />
          <div className="card-body">
            <h4>Macrame Plant Hanger: A Step-By-Step Guide</h4>
            JUNE 19, 2023
            <p>Looking to add a touch of boho-chic elegance to your home? Macrame plant hangers are the perfect solution. Not only do they bring a natural and organic aesthetic, but they...</p>
            <a href='https://www.ugaoo.com/blogs/green-lifestyle/macrame-plant-hanger-a-step-by-step-guide'>Read More</a>
          </div>
        </div>
      </div>
      <div className='d-grid col-2 mx-auto'>
        <a type='submit' className='btn btn-success' href='https://www.ugaoo.com/blogs/green-lifestyle'>View All</a>
      </div>
      <hr />
    </>
  )

}
export default Blog