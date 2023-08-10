import axios from "axios";

async function getMusic(extractedVideoId) {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${extractedVideoId}&key=AIzaSyDvppLlEGzdzBhfV5h6nfivJwhV9lu7nCQ&part=snippet`);

    return response.data;
} catch (error) {
    console.error('Erro ao buscar informações do vídeo:', error);
}
}

export default getMusic;
