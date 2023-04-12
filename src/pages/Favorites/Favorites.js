//components
import MeetupItem from "components/meetups/MeetupItem/MeetupItem";
//redux
import { useSelector } from 'react-redux';

export default function FavoritesPage() {
  // Getting the datafrom the store
  const data = useSelector((state) => state.userFavorites.data)
  return (
    <section>
      <h1>Favorites Page</h1>
      {data ? data.map((data, index) => {
        return(
          <div key={index} >
          <MeetupItem data-testid="meetup-item" image={data.image} title={data.title} address={data.address} description={data.description} id={data.id} />
          </div>

        )
      }) : <div data-testid="nothing-container">Nothing</div>}
    </section>
  );
}
