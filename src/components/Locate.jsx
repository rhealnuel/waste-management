import React, { useState, useEffect, useRef } from "react";
import moneyimg from "../assets/moneybag.png";
import cartimg from "../assets/Cartvector.png";
import truckimg from "../assets/Truck.png";
import locateimg from "../assets/locatemap.png";
import garbimg from "../assets/garbage01.png";
import { GrLocation } from "react-icons/gr";
import OpenLayersMap from "./Map";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat, toLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import LineString from "ol/geom/LineString";
import Point from "ol/geom/Point";
import { Style, Icon, Stroke } from "ol/style";
import axios from "axios";
import { Link } from "react-router-dom";

const Locate = () => {

  const locateArray = [
    {
      id: 1,
      text: "MTN Office, Batelba, off Orok-Orok Roundabout",
      coordinates: [8.3380, 4.9513],
    },
    {
      id: 2,
      text: "Lucy Beauty Salon, Uwanse, Calabar",
      coordinates: [8.33478, 4.94743],
    },
    {
      id: 3,
      text: "Xyneex Technologies",
      coordinates: [8.33802, 4.94861],
    },
    {
      id: 4,
      text: "UNICAL Staff Quarters Road, University of Calabar",
      coordinates: [ 8.34084, 4.95249],
    },
    {
      id: 5,
      text: "Opposite Peace Mass Transit, Etta Agbor Calabar",
      coordinates: [ 8.34116, 4.95602],
    },
    {
      id: 6,
      text: "Holy Child Secondary School, Calabar",
      coordinates: [8.33314, 4.95623],
    },
    {
      id: 7,
      text: "Jumpa Pickup Station, Calabar",
      coordinates: [ 8.33252, 4.95751],
    },
    {
      id: 8,
      text: "Doris O Hotel, Edim Otop Road, Calabar, Nigeria",
      coordinates: [ 8.34923, 4.96213],
    },
    {
      id: 9,
      text: "Spar Market Calabar Mall, Etim Edem Park Watt",
      coordinates: [ 8.32858, 4.96122],
    },
  ];




  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

//   const locations = [
//     { name: "Lagos", coordinates: [3.3792, 6.5244] },
//     { name: "Abuja", coordinates: [7.4951, 9.0579] },
//     { name: "Kano", coordinates: [8.5227, 12.0022] },
//     { name: "Port Harcourt", coordinates: [7.0134, 4.8242] },
//     { name: "Calabar", coordinates: [4.97646, 8.34394] },
//   ];

  const MAPBOX_API_KEY = "pk.eyJ1Ijoib2JvaHRoYW5rZ29kIiwiYSI6ImNtNmM2NGx2eTBjbmgycXFxeWl0NWV6dHcifQ.QjyJ11WgamT5zPfx1lL3Yg";

  useEffect(() => {
    const initialMap = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: fromLonLat([8.3220, 4.9589 ]), // Center on Nigeria
        zoom: 10,
      }),
    });

    setMap(initialMap);

    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userCoords = fromLonLat([longitude, latitude]);
        setUserLocation(userCoords);

        // Add user location marker
        const userMarker = new Feature({
          geometry: new Point(userCoords),
        });
        userMarker.setStyle(
          new Style({
            image: new Icon({
              src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              scale: 0.05,
            }),
          })
        );

        const userVectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [userMarker],
          }),
        });

        initialMap.addLayer(userVectorLayer);
      },
      (error) => console.error("Error fetching location:", error)
    );

    return () => initialMap.setTarget(null); // Cleanup on unmount
  }, []);

// useEffect(() => {
//     const initialMap = new Map({
//       target: mapContainerRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(), // OpenStreetMap tiles
//         }),
//       ],
//       view: new View({
//         center: fromLonLat([8.3220, 4.9589]), // Center on Calabar, Cross River State
//         zoom: 12, // Adjust zoom level for better view
//       }),
//     });
  
//     setMap(initialMap);
  
//     // Marker and Layer for User Location
//     const userMarker = new Feature({
//       geometry: new Point([0, 0]), // Initial placeholder position
//     });
//     userMarker.setStyle(
//       new Style({
//         image: new Icon({
//           src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Marker icon
//           scale: 0.05,
//         }),
//       })
//     );
  
//     const userVectorLayer = new VectorLayer({
//       source: new VectorSource({
//         features: [userMarker],
//       }),
//     });
  
//     initialMap.addLayer(userVectorLayer);
  
//     // Function to handle position updates
//     const updateUserLocation = (position) => {
//       const { latitude, longitude } = position.coords;
//       const userCoords = fromLonLat([longitude, latitude]);
  
//       // Update marker position
//       userMarker.getGeometry().setCoordinates(userCoords);
  
//       // Optionally, center the map on user location
//       initialMap.getView().setCenter(userCoords);
  
//       setUserLocation(userCoords); // Update state if needed elsewhere
//     };
  
//     // Watch user location
//     const watchId = navigator.geolocation.watchPosition(
//       updateUserLocation,
//       (error) => {
//         console.error("Error watching location:", error);
  
//         // Handle specific error cases
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             alert("Permission to access location was denied.");
//             break;
//           case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.");
//             break;
//           case error.TIMEOUT:
//             alert("Location request timed out. Try again.");
//             break;
//           default:
//             alert("An unknown error occurred while fetching location.");
//             break;
//         }
//       },
//       {
//         enableHighAccuracy: true, // Use GPS for better accuracy
//         maximumAge: 0, // Avoid using cached data
//         timeout: 2000, // Wait up to 10 seconds for location
//       }
//     );
  
//     // Cleanup on unmount
//     return () => {
//       initialMap.setTarget(null);
//       navigator.geolocation.clearWatch(watchId); // Stop watching user location
//     };
//   }, []);
  
  

  const handleLocationClick = async (location) => {
    if (!userLocation) {
      alert("User location not found!");
      return;
    }
    console.log(location);
    

    const userCoords = toLonLat(userLocation); // Get user coordinates in Lon/Lat
    const destinationCoords = location; // Destination coords

    console.log("User Coordinates:", userCoords);
    console.log("Destination Coordinates:", destinationCoords);

    try {
      // Fetch route from Mapbox Directions API
      const response = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${userCoords[0]},${userCoords[1]};${destinationCoords[0]},${destinationCoords[1]}`,
        {
          params: {
            access_token: MAPBOX_API_KEY,
            geometries: "geojson",
            overview: "full",
          },
        }
      );

      console.log("Mapbox API Response:", response.data); // Log response

      const route = response.data.routes[0].geometry.coordinates;
      const distanceInMeters = response.data.routes[0].distance;
      console.log("Route:", route);
      console.log("Distance in meters:", distanceInMeters);

      // Convert route coordinates to OL format
      const routeCoords = route.map((coord) => fromLonLat(coord));

      // Set distance in kilometers
      setDistance((distanceInMeters / 1000).toFixed(2));

      // Draw the route on the map
      const routeFeature = new Feature({
        geometry: new LineString(routeCoords),
      });

      routeFeature.setStyle(
        new Style({
          stroke: new Stroke({
            color: "blue",
            width: 4,
          }),
        })
      );

      // Add route to a vector layer
      const routeLayer = new VectorLayer({
        source: new VectorSource({
          features: [routeFeature],
        }),
      });

      map.addLayer(routeLayer);

      // Center the map on the destination
      map.getView().setCenter(fromLonLat(destinationCoords));
      map.getView().setZoom(8);
    } catch (error) {
      console.error("Error fetching route:", error);
      alert("Failed to fetch route. Please try again.");
    }
  };


  return (
    <div>
      <div>
        <div>
          <h1 className="flex items-center justify-center text-[30px] font-[700] text-white p-5">
            Locate Garbage Spot
          </h1>
          <div className="flex items-center justify-center mb-14 ">
            <hr className="w-[220px] "></hr>
          </div>
          <div className="flex items-center justify-center p-14 gap-14">
            <div className="bg-white rounded-full h-[150px] flex items-center p-2">
              <img src={moneyimg} alt="" />
            </div>
            <div className="bg-white rounded-full h-[150px] flex items-center p-10">
              <img src={cartimg} className="w-[75px] h-[128px]" alt="" />
            </div>
            <div className="bg-white rounded-full h-[150px] flex items-center p-2">
              {" "}
              <img src={truckimg} alt="" />
            </div>
          </div>
        </div>

        <div className="flex p-6 ml-16 mb-36 bg-white rounded-2xl w-[90%] h-[50%] shadow-xl shadow-black">
          <div>
            {locateArray.map((item) => (
              <div key={item.id} onClick={() => handleLocationClick(item.coordinates)} className="flex gap-4 mb-3 items-center cursor-pointer">
                <GrLocation size={35} />
                <div className="text-[16px]">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="w-[800px] h-[400px]">
          {distance && (
                <div >
                <h3>Distance:</h3>
                <p>
                    The distance to the selected location is <strong>{distance} km</strong>.
                </p>
                </div>
            )}
            <OpenLayersMap mapContainerRef={mapContainerRef} distance={distance}/>
          </div>
          {/* <img src={locateimg} className='w-[600px] h-[400px] ml-5' alt="" /> */}
        </div>

        <div className="p-16">
          <h1 className=" flex items-center justify-center mb-4 text-[29px] font-[700] text-white">
            CHOOSE HOW TO THROW YOUR TRASH
          </h1>
          <div className="flex items-center justify-center mb-14 ">
            <hr className="w-[220px] "></hr>
          </div>

          <div className="flex items-center justify-center gap-72 mb-16">
            <Link to={'/Register'}>
            <button className="bg-white px-5 py-3 w-fit rounded-2xl text-[28px]">
              Door Step Pickups?
            </button>
            </Link>
            <button className="bg-white p-3 w-[350px] rounded-2xl text-[28px]">
              Locate where to drop?
            </button>
          </div>
        </div>

        <div className="bg-[#E3F2E1] mx-auto  w-[700px] rounded-2xl p-6 mb-20 ">
          <div>
            <h1 className=" flex items-center justify-center mb-4 text-[29px] font-[700] text-[#71BC68]">
              YOUR WASTE DETAILS
            </h1>
            <div className="flex items-center justify-center mb-14 ">
              <hr className="w-[220px]"></hr>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-3 mb-8 leading-loose rounded-2xl">
                <h1>Name : Uzoigwe Nnamdi</h1>
                <h1>Customer ID : 23456789</h1>
                <h1>Name : 080.........</h1>
              </div>
              <div className="p-3 mb-5 ">
                <img
                  src={garbimg}
                  alt=""
                  className="w-[310px] h-[170px] rounded-xl"
                />
              </div>
              <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                <h1>Pick Up Id- 5237</h1>
                <h1>Pick Up Date: 26-09-2023</h1>
                <h1>Pick Up Location : UNIVERSITY OF CALABAR</h1>
                <h1>Preferd Time:</h1>
              </div>
              <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                <h1>Name : Oboh Thankgod</h1>
                <h1>Customer ID : 23456789</h1>
                <h1>Name : 080.........</h1>
              </div>

              <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                {/* <h1>EARNINGS </h1> */}
                <h1>Name : Arikpo Stanley</h1>
                <h1>Customer ID : 23456789</h1>
                <h1>Name : 080.........</h1>
              </div>
              <div className="bg-white p-3 mb-5 leading-loose rounded-2xl">
                <h1>Name : Kawekwune Nuel</h1>
                <h1>Customer ID : 23456789</h1>
                <h1>Name : 080.........</h1>
              </div>
            </div>
          </div>
          <h1 className="absolute mt-[-178px] ml-3 text-[22px] font-[700]">
            EARNINGS{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Locate;
