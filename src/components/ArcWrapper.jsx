import React, {useState, useEffect} from 'react';
import ArcComponent from './ArcComponent';
import { Box } from "@material-ui/core";
import * as d3 from "d3";


function ArcWrapper() {
    const [progressPercentage, setProgressPercentage] = useState(100);
    useEffect(() => {
      const url = "https://api.weather.gov/gridpoints/TOP/31,80"
    
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json.properties.relativeHumidity.values[5].value);
          var value = json.properties.relativeHumidity.values[5].value

          d3.selection()
          .transition("test")
          .duration(3000)
          .ease(d3.easeSinInOut)
          .tween("progressPercentage", () =>{
            const percentInterpolate = d3.interpolate(100,value);
            return t => setProgressPercentage(Math.round(percentInterpolate(t)))

          });

        } catch (error) {
          console.log("error", error);
        }
      };
    
      fetchData();
    }, []);



    const svgWidth = 150;
    const arcWidth = 12;
    const colorIndicator = "red"; //useColorIndication(progressPercentage);
    // function valuetext(value) {
    //   return `${value}°C`;
    // }
    // function setProgressValue(event, value) {
    //   setProgressPercentage(value);
    // }
  
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