
const Card = (props) => {
    const {firstname, lastname, email} = props

    return (
        <div className="card">
            <p>{email}</p>
            <span>{firstname} {lastname}</span>
        </div>
    )
}

export default Card;