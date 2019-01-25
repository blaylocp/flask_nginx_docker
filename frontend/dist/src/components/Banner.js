import React, { Component } from 'react';
import 'App.scss';
import banner from 'images/LOTR-Banner.jpg';


class Banner extends Component {
  render() {
    return (
        <div className="banner">
          <img src={banner} alt="Banner" width="800" />
        </div>


    );
  }
}

export default Banner;
