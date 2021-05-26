import React, { Component } from "react";

//cards
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./api/index";

//css
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({
      data: fetchdata,
    });
  }
  handleChangeCountry = async (country) => {
    const fetchdata = await fetchData(country);
    this.setState({
      data: fetchdata,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
