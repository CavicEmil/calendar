export default function EventItem({event}) {
    const today = new Date().toISOString().split('T')[0];

    return (
        <div key={event.id} className="eventitem">
                    <h2 className="announce">{event.date === today ? "TODAY"
                        : event.date > today ? "UPCOMING" : "PREVOUS" }</h2>
                    <h2><img src={event.homeTeamBadge} className="teambadge"/> {event.title} <img src={event.awayTeamBadge} className="teambadge"/> </h2>
                    <p>on {event.date} at {event.location}</p>
                    <p>Result: {event.result}</p>
        </div>
    )
}