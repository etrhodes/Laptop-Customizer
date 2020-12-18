import React, { Component } from "react";
import "./OrderForm.css";
import FeatureName from "./FeatureName";
import FEATURES from "./STORE";

class OrderForm extends Component {
  static defaultProps = {
    features: { FEATURES },
    selected: {},
    updateFeature: () => {},
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <FeatureName
          key={featureHash}
          idx={idx}
          featureName={feature}
          feature={this.props.features[feature]}
          updateFeature={this.props.updateFeature}
          selectedFeatureName={this.props.selected[feature].name}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

// function OrderForm(props) {
//     console.log(props)

//     return (
//         <form className="main__form">
//             <h2>Customize your laptop</h2>
//             <FeatureName fs2={props.fs} />
//         </form>
//     )
// }

export default OrderForm;
