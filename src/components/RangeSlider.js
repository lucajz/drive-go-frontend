import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange, step }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const input = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const handleLeft = (event) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    onChange({ min: minVal, max: maxVal });
  };
  const handleRight = (event) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
    onChange({ min: minVal, max: maxVal });
  };

  return (
    <div className="container">
      <div className="slider-container">
        <input
          type="number"
          value={minVal}
          onChange={(e) => setMinVal(e.target.value)}
          className="slider__left-value"
        />
        <div className="slider">
          <input
            ref={input}
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={(event) => handleLeft(event)}
            className="thumb thumb--left"
            style={{ zIndex: minVal > max - 100 && "5" }}
          />
          <input
            ref={input}
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={(event) => handleRight(event)}
            className="thumb thumb--right"
          />
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
        <input
          type="number"
          value={maxVal}
          onChange={(e) => setMaxVal(e.target.value)}
          className="slider__left-value"
        />
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
