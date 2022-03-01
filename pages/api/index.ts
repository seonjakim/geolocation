import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

type GeoType = { lat: string; lng: string }
export const getPlacesData = async (sw: GeoType, ne: GeoType) => {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPID_API_KEY as string,
      },
    })
    return data
  } catch (error) {
    console.log(`Fetch data Error: ${error}`)
  }
}
