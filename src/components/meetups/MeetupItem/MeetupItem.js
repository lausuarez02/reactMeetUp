//hooks
import { useFetch} from "util-hooks/useFetch/useFetch";
//utils
import { useDispatch, useSelector } from 'react-redux'
import {useState ,useEffect} from "react";
import { useLocation } from "react-router-dom"
import classes from "./MeetupItem.module.css";
//components
import Card from 'components/ui/Card'
import { addToFavorites, removeFromFavorites } from "reduxStore/reducers/user/user";



export default function MeetupItem({image,title, address,description, id}) {
  const dispatch = useDispatch()
  const { data } = useFetch({
    url: "/data.json",
  });
  const pathName = useLocation().pathname;

  const test = useSelector((state) => state.userFavorites)

  const avoidDefaultAddFavorites = ({e, image,title, address,description, id}) => {
    e.preventDefault();
    dispatch(addToFavorites({image,title, address,description,id}))
  }

  const avoidDefaultRemoveFavorites = ({e, id}) => {
    e.preventDefault();
    dispatch(removeFromFavorites(id))

  }

  if (!data) return <p data-testid="component">Loading...</p>;

  return (
    <li className={classes.item} data-testid="component">
      
        {
           pathName === "/favorites" ? 

              <Card>
                    <div className={classes.image}>
                      <img src={image ? image : data.image} alt={title ? title : data.title} />
                    </div>
                    <div className={classes.content}>
                      <h3>{title ? title : data.title}</h3>
                      <address>{address ? address : data.address}</address>
                      <p>{description ? description : data.description}</p>
                    </div>
                    <div className={classes.actions}>
                     <button data-testid="RemoveFavorites" onClick={(e) => avoidDefaultRemoveFavorites({e:e,id: id})}>Remove from favorites</button>
                      
                    </div>
              </Card>

           :
           data.map((data) => {
            return(
            <Card key={data.id}>
                  <div className={classes.image}>
                    <img src={image ? image : data.image} alt={title ? title : data.title} />
                  </div>
                  <div className={classes.content}>
                    <h3>{title ? title : data.title}</h3>
                    <address>{address ? address : data.address}</address>
                    <p>{description ? description : data.description}</p>
                  </div>
                  <div className={classes.actions}>
                    <button data-testid="AddToFavorites" onClick={(e) => avoidDefaultAddFavorites({e:e, image: data.image, title: data.title, address: data.address,description: data.description, id:test.data.length})}>Add to favorites</button>
                    
                  </div>
            </Card>
            )
          })
        }
    </li>
  );
}
