import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion(props) {
  const first = props.description.slice(0, 250);
  const sec = props.description.slice(250, 100000);

  return (
    <div title="accordion1" data-testid="accordion1">
      <Accordion
        data-testid="accordion"
        title="accordion"
        style={{ borderRadius: "5px" }}
      >
        <AccordionSummary
          title="AccordionSummery"
          expandIcon={
            <ExpandMoreIcon data-testid="expand" title="expandMoreIcon" />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography data-testid="typo" title="Typography">
            {first} ...
          </Typography>
        </AccordionSummary>

        <AccordionDetails title="AccordionDetails">
          <Typography data-testid="test" />
          {sec}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
