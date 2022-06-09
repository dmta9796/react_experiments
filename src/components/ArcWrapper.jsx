import React, {useState} from 'react';
import ArcComponent from './ArcComponent';
import { Box } from "@material-ui/core";


function ArcWrapper() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(50);
    const colorIndicator = "red"; //useColorIndication(progressPercentage);
    function valuetext(value) {
      return `${value}°C`;
    }
    function setProgressValue(event, value) {
      setProgressPercentage(value);
    }
  
    return (
      <Box padding="3rem" justifyContent="center">
        <ArcComponent
          svgWidth={svgWidth}
          arcWidth={arcWidth}
          progressPercentage={progressPercentage}
          colorIndicator={colorIndicator}
        />
      </Box>
    );
  }

  export default ArcWrapper;