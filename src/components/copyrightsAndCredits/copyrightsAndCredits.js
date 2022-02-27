import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const CopyrightsAndCredits = () => (
    <Box
        sx={{
            minHeight: '5em',
            bgcolor: '#000000',
            display: 'flex',
            opacity: 1,
            backgroundImage: 'radial-gradient(#FF4655 1.05px, #000000 1.05px)',
            backgroundSize: '21px 21px',
        }}
    >
        <Container maxWidth="md" sx={{ margin: 'auto' }}>
            <Typography
                sx={{
                    color: '#fff',
                    a: {
                        color: 'primary.main',
                    },
                }}
            >
                Riot Games, Valorant, and all associated properties are
                trademarks or registered trademarks of{' '}
                <Link
                    href="https://www.riotgames.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Riot Games, Inc.
                </Link>
            </Typography>
        </Container>
    </Box>
)

export default CopyrightsAndCredits
