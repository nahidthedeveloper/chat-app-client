import React from 'react'
import Box from '@mui/material/Box'
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HS256 from '@/components/algorithms/HS256'


const page = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography component="h1" sx={{ textAlign: 'center', my: 4, fontSize: '30px' }}>About Us</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{ fontSize: '20px' }}>HS256 for Authentication</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <HS256 />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography sx={{ fontSize: '20px' }}>HS256 for Authentication</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default page
