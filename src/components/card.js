
import "../style.css"
export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt='img' className="card--image"></img>
            <div className="card--main">
                <div className="card--locationContainer">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="card--location">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className='card--maps'>  View on Google Maps</a>
                </div>
                <h3 className="card--title">{props.item.title}</h3>
                <h5 className="card--date">{`${props.item.startDate} - ${props.item.endDate}`}</h5>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}
