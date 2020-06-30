import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import { popup } from "leaflet";
import { Icon } from "leaflet";

export default function MapComp(props) {

  const fire = new Icon({
    iconUrl: '/icons/icons8-fire-48.png',
    iconSize: [25, 25],
  })

  const volcano = new Icon({
    iconUrl: '/icons/icons8-volcano-48.png',
    iconSize: [25, 25],
  })

  const iceberg = new Icon({
    iconUrl: '/icons/icons8-iceberg-48.png',
    iconSize: [25, 25],
  })

  const hurricane = new Icon({
    iconUrl: '/icons/icons8-hurricane-48.png',
    iconSize: [25, 25],
  })

  const [activeEvent, setActiveEvent] = React.useState(null);
  const natEvents = props.natEvents
  let joinedArray = [];

  for (let i = 0; i < natEvents.length; i++) {
    for (let j = 0; j < natEvents[i].geometry.length; j++) {
      let { coordinates } = natEvents[i].geometry[j]
      let { title } = natEvents[i]
      let type = natEvents[i].categories[0].title
      let dateTime = new Date(natEvents[i].geometry[j].date).toString()
      if (natEvents[i].geometry[j].type === 'Polygon') {
        joinedArray.push([...natEvents[i].geometry[j].coordinates[0][0], title, type, dateTime])
      } else { joinedArray.push([...coordinates, title, type, dateTime]) }
    }
  }

  const icebergArr = joinedArray.filter(item => item[3] === 'Sea and Lake Ice')
  const volcanoArr = joinedArray.filter(item => item[3] === 'Volcanoes')
  const stormArr = joinedArray.filter(item => item[3] === 'Severe Storms')
  const wildfireArr = joinedArray.filter(item => item[3] === 'Wildfires')

  const sortArrByDate = joinedArray.sort((a, b) => Date.parse(b[4]) - Date.parse(a[4]))
  const startPosition = [sortArrByDate[0][1], sortArrByDate[0][0]]

  return (
    <Map center={startPosition} zoom={6} className='mapContainer'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {icebergArr.map((loc, index) => (
        <Marker key={index} position={[loc[1], loc[0]]}
          onClick={() => {
            setActiveEvent(loc);
          }}
          icon={iceberg}
        />
      ))}

      {stormArr.map((loc, index) => (
        <Marker key={index} position={[loc[1], loc[0]]}
          onClick={() => {
            setActiveEvent(loc);
          }}
          icon={hurricane}
        />
      ))}


      {wildfireArr.map((loc, index) => (
        <Marker key={index} position={[loc[1], loc[0]]}
          onClick={() => {
            setActiveEvent(loc);
          }}
          icon={fire}
        />
      ))}

      {volcanoArr.map((loc, index) => (
        <Marker key={index} position={[loc[1], loc[0]]}
          onClick={() => {
            setActiveEvent(loc);
          }}
          icon={volcano}
        />
      ))}

      {activeEvent && (
        <Popup position={[activeEvent[1], activeEvent[0]]}
          onClose={() => setActiveEvent(null)}
        >
          <div>
            <p>{activeEvent[2]}</p>
            <p>{activeEvent[4]}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}