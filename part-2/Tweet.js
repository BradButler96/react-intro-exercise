const Tweet = (props) => ( 
    <div>
        <h1>{ props.username }</h1>
        <p>{ props.name }</p>
        <small>{ props.date }</small>
        <p>{ props.text }</p>
    </div>
)