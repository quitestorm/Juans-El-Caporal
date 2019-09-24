import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './map.css'

class MapContainer extends Component{
    render() {
        const mapStyles = {
            width: '91%',
            height: '50%',
          
          }
      
        return(
            <div>
              <div className='MapContainer'>
     <Map className='Map'
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialZoom={{ lat: 42.516780, lng: -122.811780}}
        >
          <Marker  position={{ lat: 42.516780, lng: -122.811780}} />
        </Map>
            </div>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyDDOlwmM7gtOa4N4JVjpWK4k6ZaySk7hH0 "
  })(MapContainer);

