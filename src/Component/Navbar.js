import React from 'react'
import { NavLink} from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/'}> <span><i class="fa-solid fa-house-chimney"></i></span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/plant'}>Plant</NavLink>
                            </li>
                            {/* Dropdown start */}
                            {/* <Link title="Plants" className='btn btn-outline m-2' to={'/plant'}>
                                <NavDropdown.Item href="#">IndoorPlant</NavDropdown.Item>
                                <NavDropdown.Item href="#">OutdoorPlant</NavDropdown.Item>
                                <NavDropdown.Item href="#">HangingPlant</NavDropdown.Item>
                                <NavDropdown.Item href="#">FloweringPLant</NavDropdown.Item>
                                <NavDropdown.Item href="#">FruitPLant</NavDropdown.Item>
                            </Link> */}
                            {/* Dropdown end */}

                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/seeds'}>Seeds</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/pots'}>Pots&Plantters</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/combo'}>Combo</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='btn btn-success m-2' to={'/gifts'}>Gifts</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className='btn btn-success m-2' to={'/blog'}>Blog</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className='btn btn-success m-2' to={'/contactus'}>ContactUs</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                            {/* <button type='submit'><i="fa-regular fa-cart-shopping" /></button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar