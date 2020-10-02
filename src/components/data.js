import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    console.log(process.env.api_key);
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/imthegrouch?api_key=' + process.env.REACT_APP_API_KEY;
    fetch(apiUrl)
        .then((response) => response = response.text())
        .then(
            (data) => console.log('This is your data', data),
            (error) => console.log('error:', error)
        );
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default MyComponent;