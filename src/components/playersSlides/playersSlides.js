import React, { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Splide } from '@splidejs/react-splide'
import Slides from '@/components/slides'
import SlidesSkeleton from '@/components/skeletonLoader/SliderMain'
import Loading from '../loading'

const PlayersSlides = () => {
    const [agents, setAgents] = useState([])
    const isMobileDevices = useMediaQuery('(max-width:786px)')
    const mainRef = useRef()
    const thumbsRef = useRef()

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_VALORANT_API_AGENTS_ENDPOINT)
            .then((response) => response.json())
            .then((result) => setAgents(result))
    }, [])

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide)
        }
    })

    const mainOptions = {
        autoplay: false,
        type: 'fade',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        fixedHeight: '100vh',
        rewind: true,
        pauseOnHover: true,
        speed: 1000,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        waitForTransition: false,
    }

    const thumbsOptions = {
        autoplay: true,
        type: 'slide',
        rewind: true,
        gap: '0.2rem',
        pagination: false,
        fixedWidth: '3.125rem',
        fixedHeight: '3.125rem',
        focus: 'center',
        isNavigation: true,
    }

    return (
        <>
            {agents.data && agents.data.length > 0 ? (
                <Box position="relative">
                    <Container
                        maxWidth="md"
                        sx={{
                            position: 'relative',
                            width: '100%',
                        }}
                    >
                        <Splide
                            id="splide_thumbnails"
                            ref={thumbsRef}
                            options={thumbsOptions}
                            onArrowsMounted={(_, prev, next) => {
                                prev.remove()
                                next.remove()
                            }}
                        >
                            {agents.data && (
                                <Slides agents={agents} layout="thumbnail" />
                            )}
                        </Splide>
                    </Container>
                    <Container maxWidth="lg">
                        {agents.data ? (
                            <Splide
                                ref={mainRef}
                                options={mainOptions}
                                onArrowsMounted={(_, prev, next) => {
                                    prev.remove()
                                    next.remove()
                                }}
                            >
                                {agents.data && (
                                    <Slides agents={agents} layout="slide" />
                                )}
                            </Splide>
                        ) : (
                            <SlidesSkeleton thumbnailGridCounts={16} />
                        )}
                    </Container>
                </Box>
            ) : (
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Loading />
                </Box>
            )}
        </>
    )
}

export default PlayersSlides
