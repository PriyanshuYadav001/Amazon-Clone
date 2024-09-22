import React from 'react'
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { width } from '@mui/system';

function NavbarBanner() {
  const options = [
    {'name':'Fresh'},
    {'name':'Amazon miniTV'},
    {'name':'Sell'},
    {'name':'Best Sellers'},
    {'name':"Today's deals"},
    {'name':'Mobiles'},
    {'name':'Electronics'},
    {'name':'Prime'},
    {'name':'Customer Service'},
    {'name':'Fashion'},
    {'name':'Home & Kitchen'}


  ]
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">

        <div className="optionsNavbarBanner">
          <MenuIcon sx={{fontSize:"24px"}}/>
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {
          options.map((item,idx)=>{
            return(
              <Link  to={'/products'}className="optionsNavbarBanner" key={idx}>
                <div className="allOptionsNavbarBanner">{item.name}</div>
              </Link>
            );
          })
        }

      </div>
    </div>
  )
}

export default NavbarBanner
