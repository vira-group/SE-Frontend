import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { one_hotel_connection, one_hotel_image } from '../../Utils/connection';
import '../../css/Hotelpage.css';

class SimpleAccordion extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.data);
	}

	state = {
		description: '',
		phone_numbers: 0
	};

	async componentDidMount() {
		var splitted = window.location.toString().split('/');
		await this.setState({ id: decodeURIComponent(splitted.pop()) });
		decodeURIComponent(this.state.id);

		one_hotel_connection(this.state.id).then((res) => {
			this.setState({ description: res.description });
			this.setState({ phone_numbers: res.phone_numbers });
		});
	}

	render() {
		const first = this.state.description.slice(0, 250);
		const sec = this.state.description.slice(250, 100000);

		return (
			<div>
				<Accordion style={{ borderRadius: '20px' }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>{first} ...</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography />
						{sec}
						<a href=""> {this.state.phone_numbers}</a>
					</AccordionDetails>
				</Accordion>
			</div>
		);
	}
}

export default SimpleAccordion;
