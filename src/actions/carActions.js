
export const ADD_FEATURES = 'ADD_FEATURES';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeatures = (feature) => {
    return { type: ADD_FEATURES, payload: feature}
}

export const removeFeature = feature => {
    // dispatch an action here to remove an item
    return { type: REMOVE_FEATURE, payload: feature}
  };
  

