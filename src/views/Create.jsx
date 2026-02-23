import Background from "../components/Background"

export default function Create() {
    return (
        <>
            <Background />
            <div className="createform">
                <form>
                    <div className="formrow">
                        <label for="ctitle">Event title:</label>
                        <input type="text" id="ctitle"></input>
                    </div>
                    <div className="formrow">
                        <label for="cdate">Date:</label>
                        <input type="date" id="cdate"></input>
                    </div>
                    <div className="formrow">
                        <label for="ctime">Time:</label>
                        <input type="time" id="ctime"></input>
                    </div>
                    <div className="formrow">
                        <label for="cloc">Location:</label>
                        <input type="text" id="cloc"></input>
                    </div>
                    <div className="formrow column">
                        <label for="cdescr">Tell us more:</label>
                        <textarea id="cdescr" rows="5" cols="40"></textarea>
                    </div>
                    <button /* onClick={onCreate} */>Create!</button>
                </form>
            </div>
        </>
    )
}