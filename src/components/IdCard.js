const IdCard = (props) =>{

    const date = props.birth.toDateString()
    return (
        <div id ="card">
            <img alt = "profile" src = {props.picture}/>
            <div>
                <p> <span className="card-span">First Name:</span> {props.firstName}</p>
                <p> <span className="card-span">Last Name:</span> {props.lastName}</p>
                <p> <span className="card-span"> Gender:</span> {props.gender}</p>
                <p> <span className="card-span">Height:</span> {parseFloat(props.height / 100).toFixed(2)}m</p>
                <p> <span className="card-span">Birth</span> {date}</p>
            </div>
        </div>
    )
}

export default IdCard