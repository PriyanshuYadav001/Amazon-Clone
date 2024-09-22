import React from 'react'
import './navbarBelt.css';
import amazonLogo from '../../../Images/amazon.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import india from '../../../Images/india.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavbarBelt() {

  const cartItems = useSelector((state)=> state.cart.items);
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={'/'} className="leftNavBeltLogo">
          <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo'/>
          <span className='navbar_inLogo'>.in</span>
        </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
          <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' style={{ fontSize : "22px"}}/>
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">Delivering to Alwar 301701</div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <ArrowDropDownOutlinedIcon />
          </div>
          <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in'/>
          <div className="searchIconNavbarBelt">
            <SearchIcon sx={{fontSize:'26px'}} className='searchIconNavbarBeltIcon'/>
          </div>
        </div>
      </div>
      <div className="rightSideNavbarBelt">
        <div className="indianFlagCode">
          <img src={india} className='indiaFlag'/>
          <div className="inidaCodeNavbarBelt" style={{marginTop:'25px', marginBottom:'0'}}>EN <ArrowDropDownOutlinedIcon sx={{fontSize:16, marginTop:0,marginLeft:-0.4}} className='indiaCodeNavbarBeltDrp'/></div>
        </div>
        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Hello, User</div>
          <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
        </div>
        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt">& Orders</div>
        </div>

        <Link to={'/cart'} className="helloSignInNavbarBelt">
          <div className="cartItemNumberNavbarBelt">{cartItems.length}</div>
          <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span></div>
        </Link>
      </div>
    </div>
  )
}

export default NavbarBelt
