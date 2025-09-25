const Pizza = (props) => {
    return (
        <div className="pizza">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
    )
    
}

export default Pizza;