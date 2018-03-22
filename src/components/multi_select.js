import React, {Component} from 'react';
import Select from 'react-select';

const MultiSelect = (products) => {
  
  let prods = products.products;
  let data = [];
  prods.forEach(function (value) {

  data.push({value: value.id, label: value.name});
  })
  
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  
  
  return (
    <Select
      name="form-field-name"
      value="one"
      options={data}
      onChange={logChange}
      multi={true}
    />
  )
}

export default MultiSelect;
