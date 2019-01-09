import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Filter from "./Components/Filter";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Data from "./Data/Dataset";
import LocationsGrid from "./Components/LocationsGrid";
// import { createMuiTheme } from '@material-ui/core/styles';

import "./styles.css";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#ff8e8c",
//       main: "#484848",
//       dark: "#c62035",
//       contrastText: "#fff"
//     },
//     secondary: {
//       light: "#4da9b7",
//       main: "#ff5a5f",
//       dark: "#004e5a",
//       contrastText: "#000"
//     }
//   },
//   typography: {
//     fontFamily: "'Poppins', sans-serif",
//     fontSize:14,
//     textTransform: "none",
//     color: "#484848",
//   }
// });
 
class App extends React.Component {
  state = { locations: Data };
  render() {
    return(
      <MuiThemeProvider>
      <div>
        <Header/>
        <Filter/>
        <LocationsGrid locations={this.state.locations}/>
      </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
