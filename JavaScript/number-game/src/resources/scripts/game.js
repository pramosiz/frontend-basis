import React from "react"

function Game(props) {

    let [numberUser, setNumberUser] = React.useState(0)
    let [numberHost, setNumberHost] = React.useState(Math.floor(Math.random() * props.limit) + 1)

    function checkNumberUser(event) {
        setNumberUser(+event.target.value)
    }

    function checkNumberHost() {
        if (numberUser == numberHost) {
            alert("You guessed the number!")
        } else {
            alert("Try again, the number was " + numberHost)
        }
        setNumberHost(Math.floor(Math.random() * props.limit) + 1)
    }

    return (
        <div>
            <p>Choose a number between 1 to 10</p>
            <input type="number" placeholder="Enter your number" min={1} max={10} onChange={checkNumberUser} />
            <br />
            <button onClick={checkNumberHost}>Guess</button>
        </div>
    )
}

export default Game