import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div>
      <footer className='bg-light'>
        <div className="footer container-fluid">
            <div className="row mt-2">
                <div className="col-md-2 footer-cols"><br/>
                    <h5 className="ms-5">About US</h5>
                    <hr className="text-dark" />
                    <Link class="p-1 rounded ps-5" href="#">Our Journey</Link><br/>
                    <Link class="p-1 rounded ps-5" href="#">Contact US</Link><br/>
                    <Link class="p-1 rounded ps-5" href="#">Our Journey</Link>
                </div>
                <div className="fdiv col-md-2 footer-cols"><br/>
                    <h5 className="text-center">Customer Care</h5>
                    <hr className="text-dark" />
                    <Link class="p-1 rounded p-5" href="#">Track Order</Link><br/>
                    <Link class="p-1 rounded p-3" href="#">Shipping Policy</Link><br/>
                    <Link class="p-1 rounded p-3" href="#">Terms & Conditions</Link><br/>
                    <Link class="p-1 rounded p-3" href="#">Terms Of Service</Link><br/>
                    <Link class="p-1 rounded p-5" href="#">Refund Policy</Link>
                </div>
                <div className="col-md-2 footer-cols"><br/>
                    <h5 className="ms-5">Offer & Reward</h5>
                    <hr className="text-dark" />
                    <Link class="p-1 rounded" href="#">Plant Parent Rewards Club</Link><br/>
                </div>
                <div className="col-md-2 footer-cols"><br/>
                    <h5 className="ms-5">Get In Touch</h5>
                    <hr className="text-dark" />
                    <pre>call: +91 9112625752 <br/>
                          Email: wadalkar@gmail.com
                    </pre>
                </div>
                
                <div className="col-md-2 footer-cols"><br/>
                    <h5 className="text-center">Subsribe</h5>
                    <hr className="text-dark" />
                    <input type="text" placeholder="Email" value="" id="email" /><br/><br/>
                    <button className="btn btn-success" type="submit">Subsribe</button><br />
                </div>
                <div className="col-md-2 footer-cols"><br/>
                    <h5 className="ms-5">Follow Us</h5>
                    <hr className="text-dark" />
                    
                </div>
            </div>
        </div><br/><br/>
      </footer>
      </div>
    </>
  )
}

export default Footer