import React, { useContext } from 'react';
import classes from './Header.module.css';
import { SlLocationPin} from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
    const[{basket}, dispatch] = useContext(DataContext)
    return (
        <section className={classes.fixed}> 
            <section className="header">
                <div className={classes.header__container}>
                    <div className={classes.logo__container}>
                        <Link to="/" className="logo"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" /></Link>

                        
                        <div className={classes.delivery}>
                            <span>
                            <SlLocationPin />
                            </span>

                            <div>
                                <p>Deliver to</p>
                                <span>Ethiopia</span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.search}>
                        {/* SEARCH  */}
                        <select name='' id=''>
                            <option value=''>All</option>
                            
                        </select>
                        
                        <input type='text' name='' id='' placeholder='Search Amazon' />
                        
                        <BsSearch size={25} />
                    </div>


                    <div className={classes.order__container}>
                        
                            <Link to='/' className={classes.language}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="/" />
                                
                                <select name="" id="">
                                    <option value=''>EN</option>
                                </select>
                            </Link>

                            {/* Sign in */}
                            <Link to="/auth">
                                <p>Sign in</p>
                                <span>Account & Lists</span>
                            
                            </Link>

                            {/* Order */}
                            <Link to="/orders">
                                <p>Return</p>
                                <span>& Orders</span>
                            </Link>

                            {/* Cart */}
                            <Link to="/cart" className={classes.cart}>
                                <BiCart size={35} />
                                <span>{basket.length}</span>
                            </Link>
                        
                        
                    </div>
                </div>
            </section>

            <LowerHeader />
        </section>
    );
}

export default Header;
