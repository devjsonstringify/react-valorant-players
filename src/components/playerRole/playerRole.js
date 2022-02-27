import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const playerRole = ({ displayName, role }) => (
    <Box>
        <Typography
            variant="button"
            fontWeight={500}
            sx={{
                mb: '1rem',
                display: 'block',
                color: '#fff',
                width: '100%',
            }}
        >
            {role}
        </Typography>
        <Typography
            variant="h2"
            fontWeight={800}
            color="secondary.main"
            sx={{ fontFamily: 'Valorant' }}
        >
            {displayName.toUpperCase()}
        </Typography>
    </Box>
)

export default playerRole
