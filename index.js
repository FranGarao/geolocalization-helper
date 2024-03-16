const btn = document.querySelector("button");
const div = document.querySelector("div");
btn.addEventListener("click", () => {
  geolocalization();
});

const geolocalization = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log("Latitud: " + position.coords.latitude);
      console.log("Longitud: " + position.coords.longitude);
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      // let url = https://www.google.com/maps/@${lat},${lon},15z;
      let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      let ubicationData = await response.json();
      //   console.log({ ubicationData });
      div.innerHTML = ubicationData.display_name;
      //   div.innerHTML = location;
      return ubicationData;
    });
  } else {
    console.log("La geolocalización no está disponible en tu navegador");
  }
};
