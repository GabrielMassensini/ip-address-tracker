const ipLocation = document.getElementById("idInput");
const searchLocationBtn = document.getElementById("searchId");

const ipHTML = document.getElementById("ipHTML");
const locationHTML = document.getElementById("locationHTML");
const timezoneHTML = document.getElementById("timezoneHTML");
const ispHTML = document.getElementById("ispHTML");

var map;
var marker;

const IpGeolocation = async (ip = "8.8.8.8") => {
  const api = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_Gm32QfjbHBkhFsRk7vgdcaJAwSw0X&ipAddress=${ip}`
  );
  const data = await api.json();
  let lat = 0;
  let lng = 0;

  ipHTML.innerHTML = data.ip;
  locationHTML.innerHTML = `${data.location.city}, ${data.location.region}`;
  timezoneHTML.innerHTML = `UTC ${data.location.timezone}`;
  ispHTML.innerHTML = data.isp;
  lat = data.location.lat;
  lng = data.location.lng;

  if (map === undefined) {
    map = L.map("map").setView([lat, lng], 1);
    marker = L.marker([lat, lng]).addTo(map);
  } else {
    map.remove();
    map = L.map("map").setView([lat, lng], 1);
    marker = L.marker([lat, lng]).addTo(map);
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
};

IpGeolocation();

searchLocationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const location = ipLocation.value;
  IpGeolocation(location);
});
