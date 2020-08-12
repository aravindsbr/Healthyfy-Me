import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Summary = (props)  => {
  const [final, setState] = useState({age:'',sex:'',height:'',weight:'',WBC:'',HBR:'',HBA1C:'',sugar:'',cholesterol:'',BP:''});

  useEffect(() => {
    
    // POST request using fetch inside useEffect React hook

    const { steps } = props;
    const { age,sex,height,weight,WBC,HBR,HBA1C,sugar,cholesterol,BP } = steps;
    setState({age,sex,height,weight,WBC,HBR,HBA1C,sugar,cholesterol,BP });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [props]);

    const { age,sex,height,weight,WBC,HBR,HBA1C,sugar,cholesterol,BP } = final;
    console.log(final)
    return (
      <div className="summary">
        <h3>Age - {age.value} years</h3>
        <h3>Gender - {sex.value}</h3>
        <h3>Height - {height.value} cms</h3>
        <h3>Weight - {weight.value} kgs</h3>
        <h3>WBC - {WBC.value} count</h3>
        <h3>HBR - {HBR.value} BPM</h3>
        <h3>Standard Sugar - {HBA1C.value} mmol/mol</h3>
        <h3>Fasting Sugar - {sugar.value} mg/dl</h3>
        <h3>Cholesterol - {cholesterol.value} mg/dl</h3>
        <h3>BP - {BP.value} mmHg</h3>
      </div>
    )
  }

  Summary.propTypes = {
    steps: PropTypes.object,
  };
  
  Summary.defaultProps = {
    steps: undefined,
  };
  
  export default Summary;