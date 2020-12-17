import React, { Component } from "react";
import "./SummaryOption.css";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class SummaryOption extends Component {
  static defaultProps = {
    feature: [],
    selectedOption: {},
  };

  render() {
    const selectedOption = this.props.selectedOption;
    return (
      <div className="summary__option">
        <div className="summary__option__label">{this.props.feature}</div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default SummaryOption;
