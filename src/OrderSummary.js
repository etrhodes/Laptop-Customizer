import React, { Component } from "react";
import "./OrderSummary.css";
import SummaryTotal from "./SummaryTotal";
import SummaryOption from "./SummaryOption";

class OrderSummary extends Component {
  static defaultProps = {
    selected: [],
  };
  render() {
    console.log(this.props);
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <SummaryOption
          key={featureHash}
          feature={feature}
          idx={idx}
          selectedOption={this.props.selected[feature]}
        />
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default OrderSummary;
