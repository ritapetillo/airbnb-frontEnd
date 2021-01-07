import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React,{useContext} from 'react'
import AppContext from '../context/app-context'
import ListIcon from '@material-ui/icons/List';
import '../style/ListingsMap.css'



function ListingsMap({history}) {
    const {listings,lastSearch} = useContext(AppContext)
    console.log([listings[0].address[0]])

    return (
        <div>
            {listings ?
            <MapContainer center={[listings[0].address[0].latitude,listings[0].address[0].longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {listings.map(listing=> <Marker position={[listing.address[0].latitude,listing.address[0].longitude]}>
    <Popup>
     {listing.name} <br /> <img src={listing.images[0]} style={{height:'50px'}}/>
    </Popup>
  </Marker>) }
  
</MapContainer> : ""}
<span className="ListingsMap__list-btn" onClick={()=>history.push('/search')}><ListIcon/> List</span>

        </div>
    )
}

export default ListingsMap
