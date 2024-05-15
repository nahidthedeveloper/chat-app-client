import React from 'react'
import Box from '@mui/material/Box'
import { List, ListItem, ListItemText, Typography } from '@mui/material'

const Hs256 = () => {
    return (
        <Box>
            <Box sx={{ pl: 2 }}>
                <Typography>
                    HS256, which stands for HMAC-SHA256, is a cryptographic algorithm used for generating HMACs
                    (Hash-based
                    Message Authentication Codes) with the SHA-256 hash function. It's commonly used in various security
                    protocols like JSON Web Tokens (JWTs) for ensuring the integrity and authenticity of transmitted
                    data.
                </Typography>
                <br />
                <Typography>
                    Here's a step-by-step explanation of how HS256 works :
                </Typography>
            </Box>
            <List sx={{ listStyle: 'decimal', pl: 4 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText>
                        Input: The algorithm takes two inputs :
                    </ListItemText>

                    <List sx={{ listStyle: 'disc', pl: 4, lineHeight: 1 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            Message: The original message or data that needs to be authenticated.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            Secret Key: A secret key known only to the sender and receiver, used for generating
                            the HMAC.
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    Key Expansion: If the secret key is shorter than the block size of the hash function (in the
                    case of SHA-256, 64 bytes), it's typically hashed to produce a key of the correct length.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    Padding: If necessary, the message is padded to a multiple of the block size of the hash
                    function. Padding is crucial to ensure that the message fits into blocks of the correct size for
                    processing.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <ListItemText>
                        HMAC Calculation:
                    </ListItemText>

                    <List sx={{ listStyle: 'disc', pl: 4, lineHeight: 1 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            Inner Padding: XOR the secret key with a specific constant (0x36 repeated to the block
                            size) and append it to the message.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            First Hashing: Hash the result using the chosen hash function (SHA-256 in this case).
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            Outer Padding: XOR the secret key with a different constant (0x5C repeated to the block
                            size) and append it to the result of the first hashing.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            Second Hashing: Hash this combined result using the chosen hash function again.
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    Output: The output of the second hashing step is the HMAC, a fixed-size string of bytes,
                    typically represented in hexadecimal or base64 encoding.
                </ListItem>
            </List>
        </Box>
    )
}

export default Hs256