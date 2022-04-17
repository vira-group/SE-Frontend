import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
	return (
		<div >
			<Accordion style={{borderRadius:"20px"}}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography>
						{' '}
						West town center. Private bright room 4x4 m, central heating, fully equipped kitchen, private
						shower+toilet. Third floor, stairs. WiFi, tv set, DVD, hairdryer. Towels, bed linen provided.
					</Typography>
				</AccordionSummary>

				<AccordionDetails>
					<Typography>
						Lively lovely neighborhood, quiet and safe at night. Street with characteristic Amsterdam houses
						and big trees. Museums, park, market, shops, bars, restaurants in radius of 1,5 km. Public
						transport from Airport nearby. All places of interest walk able, buses trams in proximity as are
						bicycle and car rentals.
					</Typography>
				</AccordionDetails>
			</Accordion>

			{/* <Accordion> */}

			{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
					<Typography>Show more</Typography>
				</AccordionSummary>
				
        
        
        <AccordionDetails>
					<Typography>
						West town center. Private bright room 4x4 m, central heating, fully equipped kitchen, private
						shower+toilet. Third floor, stairs. WiFi, tv set, DVD, hairdryer. Towels, bed linen provided.
						Lively lovely neighborhood, quiet and safe at night. Street with characteristic Amsterdam houses
						and big trees. Museums, park, market, shops, bars, restaurants in radius of 1,5 km. Public
						transport from Airport nearby. All places of interest walk able, buses trams in proximity as are
						bicycle and car rentals.{' '}
					</Typography>
				</AccordionDetails> */}
			{/* </Accordion> */}
		</div>
	);
}
