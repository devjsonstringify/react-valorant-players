import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";

const PlayerTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`agents-panel-abilities-${index}`}
      aria-labelledby={`agents-panel-ability-${index}`}
      {...other}
    >
      {value === index && (
        <Box p="1rem 0" boxSizing="border-box">
          {children}
        </Box>
      )}
    </Box>
  );
};

PlayerTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default PlayerTabPanel;
