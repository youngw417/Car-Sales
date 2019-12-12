import React from 'react';
import { connect } from "react-redux";
const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  };
};
export default connect(mapStateToProps, {})(Total);
