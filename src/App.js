import React, { useState } from 'react';
import './converter.css';

const MeasurementConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedConversion, setSelectedConversion] = useState('cmToInches');
  const [result, setResult] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConversionChange = (e) => {
    setSelectedConversion(e.target.value);
  };

  const handleReverseToggle = () => {
    setIsReversed(!isReversed);
  };

  const handleConvert = () => {
    let convertedValue;
    let convertedType;
    let inputType;
    let outputType;

    switch (selectedConversion) {
      case 'cmToInches':
        inputType = isReversed ? 'inches' : 'cm';
        outputType = isReversed ? 'cm' : 'inches';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.393701).toFixed(2) : parseFloat((inputValue) * 0.393701).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'cmToFeet':
        inputType = isReversed ? 'feet' : 'cm';
        outputType = isReversed ? 'cm' : 'feet';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.0328084).toFixed(2) : parseFloat((inputValue) * 0.0328084).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'inchesToFeet':
        inputType = isReversed ? 'feet' : 'inches';
        outputType = isReversed ? 'inches' : 'feet';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.0833333).toFixed(2) : parseFloat((inputValue) * 0.0833333).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'cmToYards':
        inputType = isReversed ? 'yards' : 'cm';
        outputType = isReversed ? 'cm' : 'yards';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.0109361).toFixed(2) : parseFloat((inputValue) * 0.0109361).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'inchesToYards':
        inputType = isReversed ? 'yards' : 'inches';
        outputType = isReversed ? 'inches' : 'yards';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.0277778).toFixed(2) : parseFloat((inputValue) * 0.0277778).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'feetToYards':
        inputType = isReversed ? 'yards' : 'feet';
        outputType = isReversed ? 'feet' : 'yards';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.333333).toFixed(2) : parseFloat((inputValue) * 0.333333).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'lbsToKgs':
        inputType = isReversed ? 'kgs' : 'lbs';
        outputType = isReversed ? 'lbs' : 'kgs';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.453592).toFixed(2) : parseFloat((inputValue) * 0.453592).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'gramToLbs':
        inputType = isReversed ? 'lbs' : 'grams';
        outputType = isReversed ? 'grams' : 'lbs';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.00220462).toFixed(2) : parseFloat((inputValue) * 0.00220462).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'kgToTonnes':
        inputType = isReversed ? 'tonnes' : 'kgs';
        outputType = isReversed ? 'kgs' : 'tonnes';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.001).toFixed(2) : parseFloat((inputValue) * 0.001).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'lbsToTonnes':
        inputType = isReversed ? 'tonnes' : 'lbs';
        outputType = isReversed ? 'lbs' : 'tonnes';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.000453592).toFixed(2) : parseFloat((inputValue) * 0.000453592).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      case 'kmToMiles':
        inputType = isReversed ? 'miles' : 'km';
        outputType = isReversed ? 'km' : 'miles';
        convertedValue = isReversed ? parseFloat((inputValue) / 0.621371).toFixed(2) : parseFloat((inputValue) * 0.621371).toFixed(2);
        convertedType = `${inputType} to ${outputType}`;
        setResult(`${convertedValue} ${outputType}`);
        break;
      default:
        setResult('');
    }
  };

  return (
    <div className="measurement-converter">
      <h2>Measurement Converter</h2>
      <div className="input-container">
        <label htmlFor="inputValue">Value:</label>
        <input
          type="number"
          id="inputValue"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="select-container">
        <label htmlFor="conversionType">Conversion Type:</label>
        <select
          id="conversionType"
          value={selectedConversion}
          onChange={handleConversionChange}
        >
          <option value="cmToInches">cm to inches</option>
          <option value="cmToFeet">cm to feet</option>
          <option value="inchesToFeet">inches to feet</option>
          <option value="cmToYards">cm to yards</option>
          <option value="inchesToYards">inches to yards</option>
          <option value="feetToYards">feet to yards</option>
          <option value="lbsToKgs">lbs to kgs</option>
          <option value="gramToLbs">gram to lbs</option>
          <option value="kgToTonnes">kg to tonnes</option>
          <option value="lbsToTonnes">lbs to tonnes</option>
          <option value="kmToMiles">km to miles</option>
        </select>
      </div>
      <div className="checkbox-container">
        <label htmlFor="reverseToggle">Reverse Conversion:</label>
        <input
          type="checkbox"
          id="reverseToggle"
          checked={isReversed}
          onChange={handleReverseToggle}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div className="result-container">
        <label htmlFor="resultValue">Result:</label>
        <input
          type="text"
          id="resultValue"
          value={result}
          readOnly
          disabled
          className="bold-text"
        />
      </div>
    </div>
  );
};

export default MeasurementConverter;
