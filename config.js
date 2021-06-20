var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoibWFqayIsImEiOiJjazkyeWJnM2kwYmZsM25tczV3bjdqbnN2In0.IJ1PxolSiosSbsSioBZ7oQ",
  showMarkers: true,
  markerColor: "#3FB1CE",
  theme: "dark",
  use3dTerrain: false,
  title: "From Stones to GIS: Mapping Through the Ages",
  subtitle:
    "This story map gives an insight into how cartography has evolved over time.",
  byline:
    "Syed Miftah Zeya, Majk Shkurti, Enock Seth Nyamodar, Alexandros Theofanidis (Technical University of Vienna, 2021)",
  footer: `Text Source: <a href="https://www.mometrix.com/academy/cartography-and-technology" target="_blank">Technological Advancements in Cartography</a> , <a target="_blank" href="https://www.dailymail.co.uk/home/moslive/article-1272921/Ten-greatest-maps-changed-world.html#ixzz0nZOHfXJV">Ten of the greatest: Maps that changed the world</a>`,
  chapters: [
    {
      id: "intro-id",
      alignment: "left",
      hidden: false,
      title: "Introduction",
      image: "./images/Claudius Ptolemy.jpeg",
      description: `
    <audio controls>
    <source src="./audio/1.Introduction.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>    
    Cartography is the science of mapmaking. As technology has improved, so has the science of mapmaking. Originally, all maps were hand-made, which meant that each map would differ from other maps even of the same area because a different person was making the map. There would be similarities, of course, but not exact correspondence. The invention of the compass improved mapmaking, but it wasn’t until the invention of the printing press that maps were able to become uniform. The same map could be copied over and over again because of the printing press. The combination of the telescope and astronomy allowed mapmakers to determine their latitude which helped improve mapmaking. Finally, with the advent of satellite, GPS combined with computer software made highly detailed and accurate maps possible. This story map gives an insight into how cartography has evolved over time.`,
      location: {
        center: [-122.418398, 37.759483],
        zoom: 8.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
    },
    {
      id: "babylonian-map-id",
      alignment: "right",
      hidden: false,
      title: "Babylonian Map of the World (500 BC-700 BC)",
      image: "./images/babylon_map.jpg",
      description: `
            <audio controls>
    <source src="./audio/2.Babylonian_map.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>    
        More commonly known as the Babylonian Map of the World, the Imago Mundi is considered the oldest surviving world map. It is currently on display at the British Museum in London.  `,
      location: {
        center: [-77.020636, 38.8869],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ptolemy-map-id",
      alignment: "left",
      hidden: false,
      title: "Ptolemy's World Map (15th Century)",
      image: "./images/Claudius Ptolemy.jpeg",
      description: `
    <audio controls>
    <source src="./audio/3.Ptolemy_map.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>    
    The Ptolemy world map is a map of the world known to Greco-Roman society in the 2nd century. It is based on the description contained in Ptolemy's book Geography, written c. 150. Based on an inscription in several of the earliest surviving manuscripts, it is traditionally credited to Agathodaemon of Alexandria. `,
      location: {
        center: [-122.418398, 37.759483],
        zoom: 8.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "mercator-1569-map-id",
      alignment: "right",
      hidden: false,
      title: "Mercator 1569 World Map (16th Century)",
      image: "./images/Mercator_1569 map.png",
      description: `
            <audio controls>
    <source src="./audio/4.Mercator_map.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>    
        The title shows that Gerardus Mercator aimed to present contemporary knowledge of the geography of the world and at the same time 'correct' the chart to be more useful to sailors. The map is inscribed with a great deal of text. `,
      location: {
        center: [-77.020636, 38.8869],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "london-tube-map-id",
      alignment: "left",
      hidden: false,
      title: "London Tube Map (1933)",
      image: "./images/london tube map.jpeg",
      description: `
    <audio controls>
    <source src="./audio/5.London_tube_map.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>   
        Dismissed as too 'revolutionary' when it was first submitted in 1931, Harry Beck's Underground map solved the problem of how to represent clearly and elegantly a dense, complex interweaving of train lines.`,
      location: {
        center: [-122.418398, 37.759483],
        zoom: 8.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
    },
    {
      id: "google-map-id",
      alignment: "right",
      hidden: false,
      title: "Google Maps (2005)",
      image: "./images/google_earth.jpeg",
      description: `
            <audio controls>
    <source src="./audio/6.Google_maps.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br> 
        Google Maps presents a world in which the area of most concern to you can be at the centre, and which - with mapped content overlaid - can contain whatever you think is important. Almost for the first time, the ability to create an accurate map has been placed in the hands of everyone, and it has transformed the way we view the world.`,
      location: {
        center: [-77.020636, 38.8869],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "modern-cartography-id",
      alignment: "left",
      hidden: false,
      title: "Modern Cartography",
      image: "./images/modern_carto.jpg",
      description: `
    <audio controls>
    <source src="./audio/7.Modern_cartography.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio> <br>
    Today’s cartography tools have taken mapmaking to new heights, mostly in terms of detail and accuracy, but sometimes quite literally. Mapmaking can employ a huge variety of methods and tools. Here we'll cover a few of the most common tools: aerial photography, sensors, GPS, satellites, and GIS.
    `,
      location: {
        center: [-122.418398, 37.759483],
        zoom: 8.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
    },
  ],
};
