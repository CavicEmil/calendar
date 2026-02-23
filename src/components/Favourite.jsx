import { useEffect, useState } from 'react';

export default function Favourite({teams}) {

    const [favourite, setFavourite] = useState(() =>  {
        const stored = localStorage.getItem("favouriteteam");
        return stored ? JSON.parse(stored) : null;
    });

    const handleFavourite = (e) => {
        const selectedTeam = teams.find(
            team => team.id.toString() === e.target.value
        );

        setFavourite(selectedTeam);
        localStorage.setItem("favouriteteam", JSON.stringify(selectedTeam));
    };

    return (
        <section className="favourite">
            <span className="favouritedisplay">
                You are rooting for
                { favourite ?
                    <img className="fbadge" src={favourite.teamBadge} />
                    : "-"
                }
            </span>
            <span className="fselect">
                <label for="fteam">Your Valentine:</label>
                <select id="fteam" value={favourite?.id || ''} onChange={handleFavourite}>             
                    {teams.map(team => (
                        <option key={team.id} value={team.id}>
                            {team.teamName}
                        </option>
                    ))} 
                </select>
            </span>
        </section>
    )
}