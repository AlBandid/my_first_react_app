const person = {
    name: 'JSX Ghost',
    age: 27,
}

function Farewell() {
    return <h3>Okay, bye {person.name}... btw happy {person.age}th birthday</h3>
}

export {Farewell};