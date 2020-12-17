import React, { Component } from "react";
import "./FeatureName.css";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";

class FeatureName extends Component {
  static defaultProps = {
    idx: 0,
    featureName: "",
    feature: [],
    updateFeature: () => {},
    selectedFeatureName: "",
  };

  render() {
    console.log(this.props);
    const featureHash = this.props.featureName + "-" + this.props.idx;
    const options = this.props.feature.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem
          key={itemHash}
          itemHash={itemHash}
          feature={this.props.featureName}
          item={item}
          selectedFeatureName={this.props.selectedFeatureName}
          updateFeature={this.props.updateFeature}
        />
      );
    });
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

// class FeatureName extends Component {
//     render() {
//         console.log(this.props.fs2)
//         const features = Object.keys(this.props.fs2).map((feature, idx) => {
//             const featureHash = feature + '-' + idx;
//             const options = this.props.fs2[feature].map(item => {
//                 const itemHash = slugify(JSON.stringify(item));
//                 return (
//                     <div key={itemHash} className="feature__item">
//                         <input
//                             type="radio"
//                             className="feature__option"
//                             name={slugify(feature)}
//                             //cost={[feature].cost}
//                             //checked={item.name === this.state.selected[feature].name}
//                             onChange={e => this.updateFeature(feature, item)}
//                         />
//                         <label htmlFor={itemHash} className="feature__label">
//                             {item.name} ({USCurrencyFormat.format(item.cost)})
//                         </label>
//                     </div>
//                 )
//             })
//             console.log(options)
//             // console.log(name)
//         })
//         console.log(features)
//         return (
//             <div>
//                 <p>Return this.</p>
//                 {/* <fieldset className="feature" key={featureHash}>
//                     <legend className="feature__name">
//                         <h3>{feature}</h3>
//                     </legend>
//                     {/* {options} */}
//                 {/* <FeatureItem /> */}
//                 {/* </fieldset> */}

//             </div>

//         )
//         console.log(features)
//     }
// }

export default FeatureName;
