//utils
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import classes from "./MainNavigation.module.css";
import useScrollListener from "util-hooks/useScroll/useScroll";
import { useSelector } from 'react-redux'

export default function MainNavigation() {
    const [navClassList, setNavClassList] = useState('');
    const scroll = useScrollListener();
  
    //data from redux
    const nums = useSelector((state) => state.userFavorites)

    // update classList of nav on scroll
    useEffect(() => {
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
        setNavClassList('nav-bar--hidden')
    }
        else{
            setNavClassList('')
        }
  
    }, [scroll.y, scroll.lastY]);

  return (
    <header 
    className={navClassList === 'nav-bar--hidden' ? classes.navBarHidden : classes.header }  
    data-testid="navigation-header"

>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              All Meetups
            </Link>
          </li>

          <li>
            <Link to='/meetup'>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>{nums.data.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
