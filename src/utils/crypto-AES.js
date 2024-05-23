const base64Encode = (arrayBuffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
}

const base64Decode = (base64) => {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0))
}

const predefinedKeyString = '1234567890123456' // 16 characters for AES-128
const fixedIvString = '123456789012' // 12 characters for GCM mode

const predefinedKey = new TextEncoder().encode(predefinedKeyString)
const fixedIv = new TextEncoder().encode(fixedIvString)


const importKey = async (keyData) => {
    return crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'AES-GCM' },
        true,
        ['encrypt', 'decrypt'],
    )
}

export const encrypt = async (data) => {
    const encodedData = new TextEncoder().encode(data)
    const key = await importKey(predefinedKey)

    const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: fixedIv },
        key,
        encodedData,
    )

    return base64Encode(encryptedData)
}

export const decrypt = async (encryptedData) => {
    const decodedData = base64Decode(encryptedData)
    const key = await importKey(predefinedKey)

    const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: fixedIv },
        key,
        decodedData,
    )

    return new TextDecoder().decode(decryptedData)
}

