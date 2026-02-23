export default function Searchfield({ filter, handleInput }) {
    return (
        <input type="search" className="searchbar" placeholder="Time to search" value={filter} onChange={handleInput} />
    )
}