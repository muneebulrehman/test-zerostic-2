import React from 'react';

const RecentInputs = ({ inputs, setCity }) => {
  return (
    <div>
      <select onChange={handleChange}>
        {inputs.slice(0, 5).map((input, index) => (
          <option key={index} value={input}>
            {input}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecentInputs;
