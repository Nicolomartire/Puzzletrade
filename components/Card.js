
const Card = (props) => {
    const {firstname, lastname, email,city} = props

    return (
        <div className="card">
            <p>{firstname} {lastname} {email}</p>
            <span> {city}</span>
        </div>
    )
}

export default Card;