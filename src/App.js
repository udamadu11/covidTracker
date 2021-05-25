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
  };
  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({
      data: fetchdata,
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
