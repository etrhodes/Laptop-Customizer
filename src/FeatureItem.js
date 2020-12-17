import React, { Component } from "react";
import "./FeatureItem.css";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureItem extends Component {
  static defaultProps = {
    itemHash: "",
    feature: "",
    item: {
      name: "",
      cost: 0,
    },
    selectedFeatureName: "",
    updateFeature: () => {
      return;
    },
  };

  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selectedFeatureName}
          onChange={() =>
            this.props.updateFeature(this.props.feature, this.props.item)
          }
        ></input>
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

// // This object will allow us to
// // easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// class FeatureItem extends Component {
//     render() {
//         console.log(this.props.features)
//         const features = Object.keys(this.props.features).map((feature, idx) => {
//             const featureHash = feature + "-" + idx;
//             const options = this.props.features[feature].map(item => {
//                 const itemHash = slugify(JSON.stringify(item));
//                 return (
//                     <div key={itemHash} className="feature__item">
//                         <input
//                             type="radio"
//                             id={itemHash}
//                             className="feature__option"
//                             name={slugify(feature)}
//                             checked={item.name === this.state.selected[feature].name}
//                             onChange={e => this.updateFeature(feature, item)}
//                         />
//                         <label htmlFor={itemHash} className="feature__label">
//                             {item.name} ({USCurrencyFormat.format(item.cost)})
//                         </label>
//                     </div>
//                 )
//             })
//         })
//         return(
//             <p>Something to return???</p>
//         )
//     }
// }

export default FeatureItem;
