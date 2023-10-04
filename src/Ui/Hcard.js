import React from 'react'

const Hcard = () => {
    return (
        <>
            <div className='d-flex ml-10 container'>
                <div className="card-group">

                    {/* <!--bootstrap card with 3 horizontal images--> */}
                    <div className="row">
                        <div className="col-md-3">
                            <img className="card-img-top" src='./Assets/Images/HomePage/Plants.webp'/>

                                <div className="card-body">
                                    <h3 className="card-title text-center">Plants</h3>
                                </div>
                        </div>

                        <div className="col-md-3">
                            <img className="card-img-top" src='./Assets/Images/HomePage/Pots.webp'/>

                                <div className="card-body">
                                    <h3 className="card-title text-center">Pots & Plantters</h3>
                                </div>
                        </div>

                        <div className="col-md-3">
                            <img className="card-img-top" src='./Assets/Images/HomePage/Seeds.webp'/>
                                <div className="card-body">
                                    <h3 className="card-title text-center">Seeds</h3>
                                </div>
                        </div>

                        <div className="col-md-3" >
                            <img className="card-img-top" src='./Assets/Images/HomePage/Gift.webp' style={{height:"20.5rem"}}/>
                                <div className="card-body">
                                    <h3 className="card-title text-center">Gifts</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hcard