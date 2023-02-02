import axios from "axios"

const AXIOS = axios.create()
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/dyxf7nmbe/image/upload`


const fetchRequest = async (file: File, path: string) => {
    const fileData = new FormData()
    fileData.append('file', file)
    fileData.append('folder', path)
    fileData.append('upload_preset', 'wktkal3s')
    fileData.append('cloud_name', 'dyxf7nmbe')
    fileData.append('api_key', '424317392422556')

    try {
        const { data } = await AXIOS.post(UPLOAD_URL, fileData)
        return data
    } catch (err) {
        console.log(err)
    }
}


export const cloudinaryService = {
    fetchRequest
}