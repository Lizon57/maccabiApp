const fetchRequest = async (files: FileList, folderName: string) => {
    const formData = new FormData()
    formData.append('folder', folderName)
    formData.append('upload_preset', 'wktkal3s')
    formData.append('cloud_name', 'dyxf7nmbe')
    formData.append('api_key', '424317392422556')

    let promises = []
    try {
        for (let i = 0; i < files.length; i++) promises.push(null)
        promises = promises.map((nullMock, idx) => {
            return fetchSingleRequest(formData, files[idx])
        })
        promises = await Promise.all(promises)
        return promises
    } catch (err) {
        throw err
    }
}


const fetchSingleRequest = (formData: FormData, file: any) => {
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/dyxf7nmbe/image/upload`
    formData.append('file', file)

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
}



export const cloudinaryService = {
    fetchRequest,
    fetchSingleRequest
}