import React from 'react';
import { addFeatures} from '../actions/carActions';
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {() => props.addFeatures(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = () => {
  return {
   
  };
};



export default connect(mapStateToProps, {addFeatures})(AdditionalFeature);
