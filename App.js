import { Fragment, Component } from "react";
import axios from "axios";

import SearchComponent from "./Component/SearchComponent";
import DisplayComponent from "./Component/DisplayComponent";

class App extends Component {
  state = {
    term: "",
    reposedata: "",
    laoding: false,
  };
  onTermSubmit = async term => {
    let clientid = "Iv1.8edceeb056ea1c39";
    let clientsecret = "7e3244c4f8a94e64a2f162d107a73af09905280d";
    let response = await axios.get(
      `https:api.github.com/users/${term}?client_id${clientid}&client_screte${clientsecret}`
    );
    let repo = await axios.get(
      `https:api.github.com/users/${term}/repos?client_id${clientid}&client_screte${clientsecret}`
    );

    this.setstate({ term: response.data, reposedata: repo, laoding: true });
  };

  render() {
    return (
      <Fragment>
        <section className="container my-2">
          <hr className="hr" />
          <SearchComponent onTermSubmit={this.onTermSubmit} />
          <DisplayComponent
            data={this.state.term}
            repo={this.state.reposedata}
          />
        </section>
      </Fragment>
    );
  }
}

export default App;
