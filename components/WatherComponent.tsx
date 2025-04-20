import React, { useEffect, useState } from "react";
import { weather, WeatherData } from "@/constants/typeWeather/weather";
import { View, Text } from "react-native";
import styles from "@/constants/style/style";

const API_KEY = "124786c5645739a06e72582449c13f9f";

const WeatherComponent = () => {
  const [location, setLocation] = useState<weather>({
    latitude: 0,
    longitude: 0,
  });
  const [windSpeed, setWindSpeed] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });

          try {
            const response = await fetch(
              `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
            );

            const jsonData = await response.json();

            const wind = jsonData;

            if (wind !== undefined) {
              setWindSpeed(wind);
            } else {
              setError("Não foi possível obter a velocidade do vento.");
            }
          } catch (err) {
            setError("Erro ao buscar dados do clima: ");
          }
        },
        (geoError) => {
          setError("Erro ao obter localização: " + geoError.message);
        }
      );
    } else {
      setError("Geolocalização não é suportada por este navegador.");
    }
  }, []);

  return (
    <View style={styles.weather}>
      <Text style={styles.text}>Clima Atual</Text>
      {error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : windSpeed !== null ? (
        <View style={styles.background}>
          <Text style={styles.text}>
            Velocidade do vento: {windSpeed.wind.speed} m/s
          </Text>
          <Text style={styles.text}>
            Clima: {windSpeed.weather[0].description}
          </Text>
          <Text style={styles.text}>Temperatura: {windSpeed.main.temp} °C</Text>
        </View>
      ) : (
        <Text style={styles.text}>Carregando dados do clima...</Text>
      )}
    </View>
  );
};

export default WeatherComponent;
