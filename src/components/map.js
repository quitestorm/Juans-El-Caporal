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
          zoom={15}
          style={mapStyles}
          icon={{url:'/JUANS.png'}} 
          
          initialCenter={{ lat: 42.516780, lng: -122.811780}}
         
        >
          <Marker  position={{ lat: 42.516780, lng: -122.811780}} />
        </Map>
            </div> 

            
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBRDcwPV7OjrzvQKCKbop2SZsdUc0DMWXQ"
  })(MapContainer);

