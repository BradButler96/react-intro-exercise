const Person = ({name, age, hobbies}) => {
    let vote;
    let displayName;

    let hobbyList = hobbies.map( h => (
        <li>{ h }</li>
    ))

    age >= 18 ? vote = 'Please go vote!' : vote = 'You must be 18'
    name.length > 8 ? displayName = name.slice(0,6) : displayName = name

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{ vote }</h3>
            <p><b>Name: </b>{ displayName }</p>
            <p><b>Age: </b>{ age }</p>
            <b>Hobbies: </b>
            <ul>
                { hobbyList }
            </ul>
        </div>
    );
}