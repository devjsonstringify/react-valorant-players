import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardMedia from '@mui/material/CardMedia';
import PlayerTabPanel from './playerTabPanel';
import PlayerTab from './playerTab';
import { Typography } from '@mui/material';

const PlayerAbility = ({ abilities }) => {
	const agentsAbilities = [...abilities].sort((a, b) => b.slot - a.slot);
	const [value, setValue] = useState(0);
	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	const a11y = (index) => {
		return {
			id: `agents-tab-${index}`,
			'aria-controls': `agents-tabPanel${index}`,
		};
	};

	const letter = (char) => (
		<Typography
			fontWeight={500}
			variant='body2'
			sx={{
				color: '#fff',
				borderBottom: '2px solid rgba( 255, 255, 255, 0.18 )',
				display: 'block',
				width: '100%',
			}}>
			{char}
		</Typography>
	);

	const KEYBOARD_SHORTCUT = {
		Ability1: letter('Q'),
		Ability2: letter('C'),
		Ultimate: letter('X'),
		Grenade: letter('E'),
	};

	return (
		<Box>
			<Tabs
				variant='fullWidth'
				value={value}
				onChange={handleChange}
				aria-label='agent-abilities'
				sx={{
					background: 'rgba( 255, 255, 255, 0.25 )',
					backdropFilter: 'blur(4px)',
					border: '1px solid rgba( 255, 255, 255, 0.5 )',
					borderRadius: '3px',
					'.MuiTabs-flexContainer': {
						justifyContent: 'center',
					},
					'.MuiTabs-indicator': {
						display: 'none',
						borderRadius: 3,
					},
				}}>
				{agentsAbilities.map((ability, idx) => {
					return (
						<Tab
							key={`${ability?.slot}-header-${idx}`}
							icon={
								<CardMedia
									component='img'
									src={ability.displayIcon || `/assets/displayicon-default.png`}
									alt='icon'
									sx={{
										width: '25px',
										height: '25px',
									}}
								/>
							}
							iconPosition='bottom'
							label={KEYBOARD_SHORTCUT[ability?.slot]}
							wrapped
							{...a11y(idx)}
							sx={{
								color: '#fff',
								padding: 0,
								borderRight: '2px solid rgba( 255, 255, 255, 0.5 )',
								'.MuiButtonBase-root.Mui-selected': {
									color: 'transparent',
								},
								minWidth: 'unset',
								':last-child': {
									borderRight: 'none',
								},
								':hover': {
									bgcolor: 'primary.main',
									border: '2px solid primary.main',
									'.MuiTypography-body2': {
										color: 'secondary.main',
									},
								},
							}}
						/>
					);
				})}
			</Tabs>
			{agentsAbilities.map((ability, idx) => {
				return (
					<PlayerTabPanel
						value={value}
						index={idx}
						key={`${ability?.slot}-description_{${idx}`}>
						<Typography
							variant='body1'
							sx={{
								color: '#fff',
								mb: '0.5rem',
							}}>
							{ability?.displayName}
						</Typography>
						<Typography variant='body2' sx={{ color: '#fff' }}>
							{ability?.description}
						</Typography>
					</PlayerTabPanel>
				);
			})}
		</Box>
	);
};

export default PlayerAbility;
