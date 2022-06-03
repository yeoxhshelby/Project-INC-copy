import ChartComponent from "./ChartComponent";
import Box from '@mui/material/Box';
import "./styles/styles.css";

export default function App() {
  const data = [
    { value: 25 },
    { value: 35 }, 
    { value: 45 },
    { value: 15 }
  ];

  return (
    <div className="App">
      <div className="Row1">
      <ChartComponent data={data} />
      {/* Start of boxes */}
      <div className="Boxes">
      <div className="BoxRow1"> 
          <Box
          sx={{
            width: 120,
            height: 50,
            backgroundColor: '#0CA85D',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            padding: 1.2,
            fontSize: 12,
            borderRadius: 1,
            marginTop: 15,
            marginLeft: 40
            }}>
          <div className="BoxHeader">Weighing (1st Step)</div>
          <div className="BoxSubHeader">25 minutes</div>
          </Box>
          <Box
          sx={{
            width: 120,
            height: 50,
            backgroundColor: '#9F43CC',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            padding: 1.2,
            fontSize: 12,
            borderRadius: 1,
            marginLeft: 3,
            marginTop: 15
            }}>
          <div className="BoxHeader">Mixing (2nd Step)</div>
          <div className="BoxSubHeader">35 minutes</div>
          </Box>
      </div>

      <div className="BoxRow2">
      <Box
          sx={{
            width: 120,
            height: 50,
            backgroundColor: '#EBA10F',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            padding: 1.2,
            fontSize: 12,
            borderRadius: 1,
            marginTop: 3,
            marginLeft: 40
            }}>
          <div className="BoxHeader">Baking (3rd Step)</div>
          <div className="BoxSubHeader">15 minutes</div>
          </Box>
          <Box
          sx={{
            width: 120,
            height: 50,
            backgroundColor: '#2B87E3',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            padding: 1.2,
            fontSize: 12,
            borderRadius: 1,
            marginLeft: 3,
            marginTop: 3
            }}>
          <div className="BoxHeader">Packing (4th Step)</div>
          <div className="BoxSubHeader">45 minutes</div>
          </Box>
      </div>
      {/* End of boxes */}
      </div>
      </div>
    </div>

  );
}