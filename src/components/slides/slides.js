import React, { useRef, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import useMediaQuery from '@mui/material/useMediaQuery'
import { SplideSlide } from '@splidejs/react-splide'
import isNull from 'lodash/isNull'
import PlayerAbility from '@/components/playerAbility'
import PlayerRole from '@/components/playerRole'

const Slides = ({ agents, layout = 'thumbnail' }) => {
    const isMobileDevices = useMediaQuery('(max-width:786px)')
    return agents.data.map(
        ({
            uuid,
            abilities,
            fullPortrait,
            displayName,
            displayIconSmall,
            role,
            voiceLine,
        }) => {
            const addNewAgent = [
                {
                    slot: 'mode',
                    ...role,
                },
            ]
            const mergeAgentsAbilities = [...addNewAgent, ...abilities]

            return (
                !isNull(fullPortrait) && (
                    <SplideSlide key={uuid}>
                        <Box sx={{ position: 'relative' }}>
                            {layout === 'thumbnail' ? (
                                <Avatar
                                    src={displayIconSmall}
                                    variant="rounded"
                                    sx={{
                                        height: 'auto',
                                        width: 'auto',
                                    }}
                                />
                            ) : (
                                <Box position="relative">
                                    <CardMedia
                                        component="img"
                                        src={fullPortrait}
                                        alt={displayName}
                                    />

                                    {voiceLine.mediaList.map(({ wave, id }) => (
                                        <Box
                                            key={id}
                                            sx={{
                                                display: isMobileDevices
                                                    ? 'none'
                                                    : 'block',
                                                position: 'absolute',
                                                top: '50%',
                                                left: 0,
                                                width: 'calc(100vw / 5)',
                                            }}
                                        >
                                            <CardMedia
                                                component="audio"
                                                src={wave}
                                                key={id}
                                                controls
                                                preload="auto"
                                                autobuffer="true"
                                            />
                                        </Box>
                                    ))}

                                    <Box
                                        sx={{
                                            position: isMobileDevices
                                                ? 'relative'
                                                : 'absolute',
                                            maxWidth: isMobileDevices
                                                ? '100%'
                                                : '21.875rem',
                                            top: isMobileDevices
                                                ? 'unset'
                                                : '5rem',
                                            right: isMobileDevices
                                                ? 'unset'
                                                : '0',
                                            zIndex: 1000,
                                        }}
                                    >
                                        <PlayerRole
                                            role={role.displayName}
                                            displayName={displayName}
                                        />
                                        <Box
                                            sx={{
                                                boxSizing: 'border-box',
                                                padding: '0.5rem',
                                                mt: '2rem',
                                            }}
                                        >
                                            <PlayerAbility
                                                abilities={mergeAgentsAbilities}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </SplideSlide>
                )
            )
        }
    )
}

export default Slides
