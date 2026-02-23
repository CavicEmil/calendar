import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Default from './views/Default';
import Create from './views/Create';
import Update from './views/Update';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Default />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/update',
        element: <Update />,
      }
    ],
  },
],
  {
    basename:"/calendar",
  } 
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}


/* import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import EventList from './components/EventList';
import useEventImport from './components/useEventImport';
import Searchfield from './components/Searchfield';
import Favourite from './components/Favourite';


function App() {
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
      <Header/>
      <EventList events = {filteredEvents}/>
      <Footer />
    </>
  )
}

export default App
 */