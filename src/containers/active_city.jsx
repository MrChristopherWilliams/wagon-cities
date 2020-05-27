import React, { Component } from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;

  return (
    <div className="active-city">
      <h3>{this.props.actoveCity.name}</h3>
      <p>{this.props.activeCity.address}</p>
      <img src={src} width="100%"/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default ActiveCity;
