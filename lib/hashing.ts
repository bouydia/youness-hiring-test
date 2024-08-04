import CryptoJS from 'crypto-js'

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY!

const encryptData = (data: string) => {  
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString()
}

const decryptData = (data: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, secretKey)
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
    const decryptedData = JSON.parse(decryptedString)
    return decryptedData
  } catch (error) {
    console.error('Decryption error:', error)
    return null
  }
}


export { encryptData, decryptData }