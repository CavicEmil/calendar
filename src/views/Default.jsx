import { useEffect, useState } from 'react';
/* import './App.css' */
/* import Header from '../components/Header';
import Footer from '../components/Footer'; */
import Background from '../components/Background';
import EventList from '../components/EventList';
import useEventImport from '../components/useEventImport';
import Searchfield from '../components/Searchfield';
import Favourite from '../components/Favourite';


/* [
  {id: 0, title:"THis is title", date:"2026-02-12", description:"partying without causing antoher HR meeting after"},
  {id: 1, title:"THis is title1", date:"2026-02-13", description:"some description"},
  {id: 2, title:"THis is title2", date:"2026-02-15", description:"i dont know"},
  {id: 3, title:"THis is title3", date:"2026-03-12", description:"please leave me alone"},
  {id: 4, title:"THis is title4", date:"2026-07-22", description:"goodbye now"},
]; */

function Default() {
  const events = useEventImport();
  const sortedEvents = events.toSorted((a,b) => 
    b.date.localeCompare(a.date,"en",{sensitivity:"base"})
  );

  const [filterText, setFilterText] = useState("")

  const filteredEvents = sortedEvents.filter(event => 
    JSON.stringify(event)
    .toLowerCase().includes(filterText.toLowerCase())
  );

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  }

  const teams = Array.from(
    events
      .flatMap(e => [
        { id: e.id + "_home", teamName: e.title.split(" vs ")[0], teamBadge: e.homeTeamBadge },
        { id: e.id +"_away", teamName: e.title.split(" vs ")[1], teamBadge: e.awayTeamBadge }
      ]).reduce((acc, curr) => {
        if (!acc.some(t => t.teamName === curr.teamName)) {
          acc.push(curr);
        }
        console.log("TEAMS IS ", acc);
        return acc;
        
      }, [])
    );

  return (
    <>
      <Background />
      <Favourite teams = {teams} />
      <Searchfield handleInput = {handleInputChange} filter = {filterText}/>
      {/* <Header/> */}
      <EventList events = {filteredEvents}/>
      {/* <Footer /> */}
    </>
  )
}

export default Default
