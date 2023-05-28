import axios from 'axios';

export const productData = async () => {
  try {
    const res = await axios.get('http://localhost:3001/wear')
    const productData = res.data

    console.log(productData)
  } catch (error) {
    console.error(error)
  }
}