import React, { useEffect, useState } from "react";
import FetchData from "../components/pod/fetchdata";
import Box from "@mui/material/Box";
import "../styles/styles.css";
import ChartComponent from "../components/pod/ChartComponent";

const ProductionOverview = () => {
  const [prodOverviewData, setProdOverviewData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/data/data2")
      .then((res) => res.json())
      .then((data) => {
        // Below should be just setProdOverviewData(data), where data is your full backend data.
        setProdOverviewData({
          data: data.data,
          value: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 15 }],
        });
      });
  }, []);

  return (
    <div className="App">
      <div className="Row1">
        {/* <FetchData data={data} /> */}
        <ChartComponent data={prodOverviewData} />
        {/* Start of boxes */}
        <div className="Boxes">
          <div className="BoxRow1">
            <Box
              sx={{
                width: 135,
                height: 70,
                backgroundColor: "#0CA85D",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                padding: 1.2,
                fontSize: 12,
                borderRadius: 1,
                marginTop: 15,
                marginLeft: 40,
              }}
            >
              <div className="BoxHeader">Weighing (1st Step)</div>
              <div className="BoxSubHeader">25 minutes</div>
            </Box>
            <Box
              sx={{
                width: 135,
                height: 70,
                backgroundColor: "#9F43CC",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                padding: 1.2,
                fontSize: 12,
                borderRadius: 1,
                marginLeft: 3,
                marginTop: 15,
              }}
            >
              <div className="BoxHeader">Mixing (2nd Step)</div>
              <div className="BoxSubHeader">35 minutes</div>
            </Box>
          </div>

          <div className="BoxRow2">
            <Box
              sx={{
                width: 135,
                height: 70,
                backgroundColor: "#EBA10F",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                padding: 1.2,
                fontSize: 12,
                borderRadius: 1,
                marginTop: 3,
                marginLeft: 40,
              }}
            >
              <div className="BoxHeader">Baking (3rd Step)</div>
              <div className="BoxSubHeader">15 minutes</div>
            </Box>
            <Box
              sx={{
                width: 135,
                height: 70,
                backgroundColor: "#2B87E3",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
                padding: 1.2,
                fontSize: 12,
                borderRadius: 1,
                marginLeft: 3,
                marginTop: 3,
              }}
            >
              <div className="BoxHeader">Packing (4th Step)</div>
              <div className="BoxSubHeader">45 minutes</div>
            </Box>
          </div>
        </div>
        {/* End of boxes */}
      </div>
    </div>
  );
};

export default ProductionOverview;
