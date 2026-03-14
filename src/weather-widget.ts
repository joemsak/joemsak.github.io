const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const DENVER = { lat: 39.7392, lng: -104.9903, name: "Denver" };

const WEATHER_CODES: Record<number, { description: string; icon: string }> = {
  0: { description: "Clear sky", icon: "\u2600\uFE0F" },
  1: { description: "Mainly clear", icon: "\uD83C\uDF24\uFE0F" },
  2: { description: "Partly cloudy", icon: "\u26C5" },
  3: { description: "Overcast", icon: "\u2601\uFE0F" },
  45: { description: "Fog", icon: "\uD83C\uDF2B\uFE0F" },
  48: { description: "Rime fog", icon: "\uD83C\uDF2B\uFE0F" },
  51: { description: "Light drizzle", icon: "\uD83C\uDF26\uFE0F" },
  53: { description: "Moderate drizzle", icon: "\uD83C\uDF26\uFE0F" },
  55: { description: "Dense drizzle", icon: "\uD83C\uDF26\uFE0F" },
  61: { description: "Light rain", icon: "\uD83C\uDF27\uFE0F" },
  63: { description: "Moderate rain", icon: "\uD83C\uDF27\uFE0F" },
  65: { description: "Heavy rain", icon: "\uD83C\uDF27\uFE0F" },
  66: { description: "Light freezing rain", icon: "\uD83C\uDF27\uFE0F" },
  67: { description: "Heavy freezing rain", icon: "\uD83C\uDF27\uFE0F" },
  71: { description: "Light snow", icon: "\uD83C\uDF28\uFE0F" },
  73: { description: "Moderate snow", icon: "\uD83C\uDF28\uFE0F" },
  75: { description: "Heavy snow", icon: "\uD83C\uDF28\uFE0F" },
  77: { description: "Snow grains", icon: "\uD83C\uDF28\uFE0F" },
  80: { description: "Light showers", icon: "\uD83C\uDF26\uFE0F" },
  81: { description: "Moderate showers", icon: "\uD83C\uDF26\uFE0F" },
  82: { description: "Violent showers", icon: "\uD83C\uDF26\uFE0F" },
  85: { description: "Light snow showers", icon: "\uD83C\uDF28\uFE0F" },
  86: { description: "Heavy snow showers", icon: "\uD83C\uDF28\uFE0F" },
  95: { description: "Thunderstorm", icon: "\u26C8\uFE0F" },
  96: { description: "Thunderstorm with hail", icon: "\u26C8\uFE0F" },
  99: { description: "Thunderstorm with heavy hail", icon: "\u26C8\uFE0F" },
};

interface CurrentWeather {
  temp: number;
  feelsLike: number;
  weatherCode: number;
  name: string;
}

function weatherIcon(code: number): string {
  return WEATHER_CODES[code]?.icon ?? "\u2753";
}

function weatherDescription(code: number): string {
  return WEATHER_CODES[code]?.description ?? "Unknown";
}

async function fetchCurrentWeather(
  lat: number,
  lng: number,
  name: string,
): Promise<CurrentWeather> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    current: "temperature_2m,apparent_temperature,weather_code",
    temperature_unit: "fahrenheit",
    timezone: "auto",
  });
  const res = await fetch(`${FORECAST_URL}?${params}`);
  if (!res.ok) throw new Error("Weather API error");
  const data = await res.json();
  return {
    temp: Math.round(data.current.temperature_2m),
    feelsLike: Math.round(data.current.apparent_temperature),
    weatherCode: data.current.weather_code,
    name,
  };
}

function formatDateTime(): string {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${day}, ${date} · ${time}`;
}

function renderWeatherCard(w: CurrentWeather, showDate: boolean): string {
  const dateHtml = showDate
    ? `<span class="text-xs text-gray-400 dark:text-gray-600">${formatDateTime()}</span>`
    : "";
  return `
    <a href="/weather?q=${encodeURIComponent(w.name)}" class="
      flex items-center gap-3 px-4 py-3
      bg-gray-100 dark:bg-gray-900
      rounded-xl
      hover:bg-gray-200 dark:hover:bg-gray-800
      transition-colors
      no-underline
    ">
      <span class="text-2xl">${weatherIcon(w.weatherCode)}</span>
      <span class="flex flex-col">
        <span class="text-sm text-gray-500 dark:text-gray-500">${w.name}</span>
        <span class="text-lg font-semibold dark:text-gray-300">${w.temp}\u00B0F</span>
      </span>
      <span class="flex flex-col items-end ml-auto">
        ${dateHtml}
        <span class="text-xs text-gray-400 dark:text-gray-600">${weatherDescription(w.weatherCode)}</span>
      </span>
    </a>`;
}

async function reverseGeocode(lat: number, lng: number): Promise<string> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10`,
    { headers: { "User-Agent": "JoeSakSite/1.0" } },
  );
  if (!res.ok) return "Your Location";
  const data = await res.json();
  return (
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    data.address?.county ||
    "Your Location"
  );
}

function isDenver(name: string): boolean {
  return name.toLowerCase().includes("denver");
}

export async function initWeatherWidget() {
  const container = document.getElementById("weather-widget");
  if (!container) return;

  const denverWeather = fetchCurrentWeather(
    DENVER.lat,
    DENVER.lng,
    DENVER.name,
  );

  let userWeather: Promise<CurrentWeather | null> = Promise.resolve(null);

  if ("geolocation" in navigator) {
    userWeather = new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          const name = await reverseGeocode(latitude, longitude);
          if (isDenver(name)) {
            resolve(null);
            return;
          }
          const weather = await fetchCurrentWeather(latitude, longitude, name);
          resolve(weather);
        },
        () => resolve(null),
        { enableHighAccuracy: false, timeout: 5000 },
      );
    });
  }

  try {
    const [denver, user] = await Promise.all([denverWeather, userWeather]);
    let html = renderWeatherCard(denver, true);
    if (user) {
      html += renderWeatherCard(user, false);
    }
    container.innerHTML = html;
    container.style.opacity = "1";
  } catch {
    container.remove();
  }
}
