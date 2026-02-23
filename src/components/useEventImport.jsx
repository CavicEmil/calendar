import { useEffect, useState } from 'react';


export default function useEventImport () {
    const [events, setEvents] =useState([]);

    useEffect(() => {

        fetch("https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4714&s=2026")
            .then(res => res.json())
            .then(data => {
                if (!data.events) {
                    console.warn("NO DATA RECEIVED FROM API");
                    setEvents([]);
                    return;
                }
                const mapped = data.events.map( item => ({
                    id: item.idEvent,
                    title: item.strEvent,
                    homeTeamBadge: item.strHomeTeamBadge,
                    awayTeamBadge: item.strAwayTeamBadge,
                    date: item.dateEvent,
                    time: item.strTime,
                    location: item.strCity + ", " + item.strCountry,
                    result: item.intHomeScore ? `${item.intHomeScore} - ${item.intAwayScore}` : "-",
            }));
            console.log('MAPRESULT IS ', mapped)
            setEvents(mapped);
            })
            .catch(console.error);

/*         fetch("/fixtures.json")
            .then((res) => res.json())
            .then((data) => {
                const eventmap = data.map((item) => ({
                    id: item.MatchNumber,
                    title: `${item.HomeTeam} vs ${item.AwayTeam}`,
                    date: item.DateUtc,
                    location: item.Location,
                    result: item.HomeTeamScore ? `${item.HomeTeamScore} - ${item.AwayTeamScore}` : '-',
                }));
                setEvents(eventmap);
            })
            .catch(console.error); */

    }, []);
    return events;
}