var config = {
  style: "mapbox://styles/majk/ckq5n66mc0wpa17oiq2fl2i48",
  accessToken:
    "pk.eyJ1IjoibWFqayIsImEiOiJjazkyeWJnM2kwYmZsM25tczV3bjdqbnN2In0.IJ1PxolSiosSbsSioBZ7oQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "dark",
  use3dTerrain: false,
  title: "From Stones to GIS: Mapping Through the Ages",
  subtitle: "",
  byline:
    "Syed Miftah Zeya, Majk Shkurti, Enock Seth Nyamador, Alexandros Theofanidis (Technical University of Vienna, 2021)",
  footer: `Text Source: <a href="https://www.mometrix.com/academy/cartography-and-technology" target="_blank">Technological Advancements in Cartography</a> , <a target="_blank" href="https://www.dailymail.co.uk/home/moslive/article-1272921/Ten-greatest-maps-changed-world.html#ixzz0nZOHfXJV">Ten of the greatest: Maps that changed the world</a> 
           <br>
            Image Sources:
            <a href="https://images.practicaladultinsights.com/map-with-compass.jpg" target="_blank">Introduction</a>, 
            <a href="https://www.oldest.org/wp-content/uploads/2018/08/Babylonian-Map-of-the-World-221x300.jpg" target="_blank">Babylonian</a>,
            <a href="https://img.index.hu/imgfrm/9/2/2/0/MED_0015629220.jpg" target="_blank">Ptolemy</a>,
            <a href="https://upload.wikimedia.org/wikipedia/commons/b/b2/Mercator_1569.png" target="_blank">Mercator 1569 </a>,
            <a href="https://miro.medium.com/max/5350/1*JRh5HjQpQKBjrcmAl9YISg.jpeg" target="_blank">London Tube</a>,

            <a href="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/
                amp_metadata_content_image_min_696px_wide/public/buriganga
                _river_0.jpg?itok=qSKMc7x0" target="_blank">Google Map</a>,

            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJU3T-0Rgm23lFlvB9UXtEgeLPQrmmowV0FIVJJqZwNLKg5r1ZahgfcviCouDJe1kCyZo&usqp=CAU" target="_blank">Modern Cartography</a>,

  
            
  
  `,
  chapters: [
    {
      id: "intro-id",
      alignment: "left",
      hidden: false,
      title: "Introduction",
      style: "mapbox://styles/majk/ckq5n66mc0wpa17oiq2fl2i48",
      image: "./images/01_introduction.jpg",
      description: `
      <audio controls id="intro-id-audio">
         <source src="./audio/1.Introduction.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio> `,
      location: {
        bearing: 0,
        center: [16.373819, 48.208176],
        zoom: 1.5,
        pitch: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "babylonian-map-id",
      alignment: "right",
      hidden: false,
      title: "Babylonian Map of the World (500 BC-700 BC)",
      style: "mapbox://styles/majk/ckq5wbhoa66t117p8x0kgvrwt",
      image: "./images/babylon_map.jpg",
      description: `
      <audio controls id="babylonian-map-id-audio">
         <source src="./audio/2.Babylonian_map.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
        <br>`,
      location: {
        duration: 6000,
        center: [44.361488, 33.312805],
        bearing: 90,
        zoom: 10,
        speed: 0.6,
        pitch: 0,
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
      style: "mapbox://styles/majk/ckq57ttxl5j0817p8jxe7ioqt",
      title: "Ptolemy's World Map (15th Century)",
      image: "./images/PtolemyWorldMap.jpeg",
      description: `
      <audio controls id="ptolemy-map-id-audio">
         <source src="./audio/3.Ptolemy_map.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
    <br>    
    `,
      location: {
        bearing: 60,
        center: [29.89254, 31.19773],
        zoom: 10,
        speed: 0.6,
        pitch: 40,
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
      style: "mapbox://styles/majk/ckq5u9mh6875i18rlqsb07rpu",
      image: "./images/Mercator_1569 map.png",
      description: `
      <audio controls id="mercator-1569-map-id-audio">
         <source src="./audio/4.Mercator_map.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
    <br>    
       `,
      location: {
        bearing: 90,
        center: [4.29012, 51.127369],
        zoom: 10,
        pitch: 10,
        speed: 0.6,
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
      style: "mapbox://styles/majk/ckq5ungdz6psf17n6aaj9mkoe",
      description: `
      <audio controls id="london-tube-map-id-audio">
         <source src="./audio/5.London_tube_map.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
    <br>   
       `,
      location: {
        bearing: 45,
        center: [-0.118092, 51.509865],
        zoom: 10,
        pitch: 10,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "google-map-id",
      alignment: "right",
      hidden: false,
      title: "Google Maps (2005)",
      style: "mapbox://styles/mapbox/streets-v11",
      image: "./images/google_earth.jpeg",
      description: `
      <audio controls id="google-map-id-audio">
         <source src="./audio/6.Google_maps.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
    <br> 
      `,
      location: {
        bearing: 40,
        center: [-122.083855, 37.386051],
        zoom: 10,
        pitch: 10,
        speed: 0.6,
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
      style: "mapbox://styles/parallel/cjznv5kw822ae1cljb3t8dnoa",
      description: `
      <audio controls id="modern-cartography-id-audio">
         <source src="./audio/7.Modern_cartography.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
    <br>
    `,
      location: {
        bearing: 90,
        center: [-91.15363, 39.54825],
        zoom: 10,
        pitch: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
