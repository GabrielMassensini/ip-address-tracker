let ipLocation = "8.8.8.8"

const map = () => {
  var map = L.map("map").setView([32.69922, -117.11281], 13);
  var marker = L.marker([32.69922, -117.11281]).addTo(map);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const IpGeolocation = async () => {
    const api = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Gm32QfjbHBkhFsRk7vgdcaJAwSw0X&ipAddress=${ipLocation}`
    );
    const data = await api.json();
    console.log(data);
  };

  IpGeolocation();
};

map();
