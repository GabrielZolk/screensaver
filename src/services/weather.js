import axios from "axios";

async function getWeather(userInput) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=f68e024893bb2ceed7fdaa1892f3f303`
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao obter informações meteorológicas:", error);
    return null;
  }
}

export default getWeather;
