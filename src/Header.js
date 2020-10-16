import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();


    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className="header">
            <Link to ="/">
                <AcUnitIcon className="header__logo"/>
                <h4>SLAY WITH US</h4>
            </Link>
          

            <div className="header__search">
                <input className="header__searchInput"
                type="text" />
                <SearchIcon
                className="header__searchIcon"/>
            </div>

             <div className="header__nav">
             <Link to ={!user && '/login'}>
                <div onClick={handleAuthenticaton}
                className="header__option">
                    <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}
                    </span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                   
                <div className="header__option">
                <span className="header__optionLineOne">Visit
                    </span>
                    <Link to = '/' className="header__Link">
                    <span className="header__optionLineTwo">Home</span>
                    </Link>
                    

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">To know</span>
                    <Link to = '/aboutus' className="header__Link">
                     <span className="header__optionLineTwo">About us</span>
                    </Link>
                    
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Service</span>
                <Link to = '/products' className="header__Link">
                    <span className="header__optionLineTwo">& Products</span>
                    </Link>
                     
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                    <Link to = '/orders' className="header__Link">
                    <span className="header__optionLineTwo">& Orders</span>
                    </Link>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">Queires</span>
                    <Link to ='/contactus' className="header__Link">
                    <span className="header__optionLineTwo">Contact Us</span>
                    </Link>
                </div>

                <Link to ="/checkout">
                <div className="header__optionBasket"> 
                    <ShoppingBasketIcon />
                     <span className="header__optionLineTwo header__basketCount">{basket.length}
                     </span>
                </div>
                </Link>
             </div>        
        </div>
    )

}

export default Header
