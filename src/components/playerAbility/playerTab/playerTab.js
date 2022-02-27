import React from 'react'
import Tab from '@mui/material/Tab'
import CardMedia from '@mui/material/CardMedia'

const PlayerTab = ({ a11yProps }) => {
    const a11y = (index) => ({
        id: `agents-tab-${index}`,
        'aria-controls': `agents-tabPanel${index}`,
    })

    return (
        <Tab
            icon={
                <CardMedia
                    component="img"
                    src="/assets/displayicon-default.png"
                    alt="icon"
                    sx={{ width: '25px', height: '25px' }}
                />
            }
            {...a11y(a11yProps)}
        />
    )
}

export default PlayerTab
