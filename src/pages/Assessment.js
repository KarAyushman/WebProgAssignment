import React, { useState } from 'react';
import './Assessment.css';

function Assessment() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });
  const [errors, setErrors] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation logic for answers
    const correctAnswers = {
      q1: 'engine',
      q2: 'head',
      q3: 'cylinder',
      q4: 'absorbers',
      q5: 'shafts',
    };
    const newErrors = {};
    let hasError = false;
    Object.keys(correctAnswers).forEach((question) => {
      if (answers[question].toLowerCase() !== correctAnswers[question]) {
        newErrors[question] = 'Incorrect answer';
        hasError = true;
      }
    });
    setErrors(newErrors);
    if (!hasError) {
      // Handle successful submission
      alert('All answers are correct!');
    }
  };

  return (
    <div className="ass-container">
      <h1>Assessments</h1>
      <form onSubmit={handleSubmit} className="assessment-form">
        <div className="question">
          <label>What component of a car converts heat from burning gas into the force that turns the road wheels?</label>
          <div>
            <label>
              <input type="radio" name="q1" value="engine" onChange={handleChange} />
              Engine
            </label>
            <label>
              <input type="radio" name="q1" value="suspension" onChange={handleChange} />
              Suspension
            </label>
            <label>
              <input type="radio" name="q1" value="brake" onChange={handleChange} />
              Brake
            </label>
            <label>
              <input type="radio" name="q1" value="transmission" onChange={handleChange} />
              Transmission
            </label>
          </div>
          {errors.q1 && <p className="error">{errors.q1}</p>}
        </div>
        <div className="question">
          <label>Which part of the engine contains valve-controlled passages for air and fuel mixture intake and exhaust gases expulsion?</label>
          <div>
          <label>
              <input type="radio" name="q2" value="block" onChange={handleChange} />
              Cylinder block
            </label>
            <label>
              <input type="radio" name="q2" value="Crankshaft" onChange={handleChange} />
              Crankshaft
            </label>
            <label>
              <input type="radio" name="q2" value="Camshaft" onChange={handleChange} />
              Camshaft
            </label>
            <label>
              <input type="radio" name="q2" value="head" onChange={handleChange} />
              Cylinder head
            </label>
          </div>
          {errors.q2 && <p className="error">{errors.q2}</p>}
        </div>
        <div className="question">
          <label>In a hydraulic brake system, what allows force multiplication or division?</label>
          <div>
          <label>
              <input type="radio" name="q3" value="fluid" onChange={handleChange} />
              Brake fluid
            </label>
            <label>
              <input type="radio" name="q3" value="piston" onChange={handleChange} />
              Caliper piston
            </label>
            <label>
              <input type="radio" name="q3" value="cylinder" onChange={handleChange} />
              Master cylinder
            </label>
            <label>
              <input type="radio" name="q3" value="hoses" onChange={handleChange} />
              Brake hoses
            </label>
          </div>
          {errors.q3 && <p className="error">{errors.q3}</p>}
        </div>
        <div className="question">
          <label>What component of the suspension system converts the force from road imperfections into heat?</label>
          <div>
          <label>
              <input type="radio" name="q4" value="absorbers" onChange={handleChange} />
              Shock absorbers
            </label>
            <label>
              <input type="radio" name="q4" value="Struts" onChange={handleChange} />
              Struts
            </label>
            <label>
              <input type="radio" name="q4" value="Springs" onChange={handleChange} />
              Springs
            </label>
            <label>
              <input type="radio" name="q4" value="pads" onChange={handleChange} />
              Brake pads
            </label>
          </div>
          {errors.q4 && <p className="error">{errors.q4}</p>}
          </div>
          <div className="question">
          <label>In a front-wheel-drive car with a transverse engine layout, how is power transmitted to the front wheels?</label>
          <div>
          <label>
              <input type="radio" name="q5" value="propeller" onChange={handleChange} />
              Through a propeller shaft
            </label>
            <label>
              <input type="radio" name="q5" value="differential" onChange={handleChange} />
              Via a differential
            </label>
            <label>
              <input type="radio" name="q5" value="shafts" onChange={handleChange} />
              By universally jointed shafts
            </label>
            <label>
              <input type="radio" name="q5" value="engine" onChange={handleChange} />
              Directly from the engine
            </label>
          </div>
          {errors.q5 && <p className="error">{errors.q5}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Assessment;
