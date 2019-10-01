import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './map.css'

class MapContainer extends Component{
    render() {
        const mapStyles = {
            width: '85%',
            height: '50%',
          
          }
      
        return(
            <div>
              <div className='MapContainer'>
     <Map className='Map'
          google={this.props.google}
          zoom={5}
          style={mapStyles}

          
          center={{ lat: 42.4726, lng: -122.8028}}
         
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

