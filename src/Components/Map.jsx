import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { popup } from "leaflet";
//import { Icon } from "leaflet";

export default function MapComp(props) {

  const [activeEvent, setActiveEvent] = React.useState(null);
  const natEvents = props.natEvents
  let joinedArray = [];

  for (let i = 0; i < natEvents.length; i++) {
    for (let j = 0; j < natEvents[i].geometry.length; j++) {
      const { coordinates } = natEvents[i].geometry[j]
      const { title } = natEvents[i]
      const { categories } = natEvents[i]
      if (natEvents[i].geometry[j].type === 'Polygon') {
        joinedArray.push([...natEvents[i].geometry[j].coordinates[0][0], title, categories.title])
      } else { joinedArray.push([...coordinates, title, categories.title]) }
    }
  }

  return (
    <Map center={[45.4, -75.7]} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {joinedArray.map((loc, index) => (
        <Marker key={index} position={[loc[1], loc[0]]}
          onClick={() => {
            setActiveEvent(loc);
          }} />
      ))}

      {activeEvent && (
        <Popup position={[activeEvent[1], activeEvent[0]]}>
          <div>
            <p>{activeEvent[2]}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}