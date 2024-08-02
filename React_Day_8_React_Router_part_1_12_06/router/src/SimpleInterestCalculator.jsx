// import React, { useState } from "react";

// const SimpleInterestCalculator = () => {
//   const [principal, setPrincipal] = useState("");
//   const [rate, setRate] = useState("");
//   const [time, setTime] = useState("");
//   const [simpleInterest, setSimpleInterest] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(null);

//   const calculateInterest = () => {
//     const interest = (principal * rate * time) / 100;
//     const total = parseFloat(principal) + interest;
//     setSimpleInterest(interest);
//     setTotalAmount(total);
//   };

//   return (
//     <div>
//       <h2>Simple Interest Calculator</h2>
//       <form>
//         <div className="form-group">
//           <label>Principal Amount:</label>
//           <input
//             type="number"
//             value={principal}
//             onChange={(e) => setPrincipal(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Interest Rate (%):</label>
//           <input
//             type="number"
//             value={rate}
//             onChange={(e) => setRate(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Time Period (years):</label>
//           <input
//             type="number"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button
//           type="button"
//           onClick={calculateInterest}
//           className="btn btn-primary"
//         >
//           Calculate
//         </button>
//       </form>
//       {simpleInterest !== null && (
//         <div>
//           <h3>Simple Interest: {simpleInterest}</h3>
//           <h3>Total Amount: {totalAmount}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SimpleInterestCalculator;
// SimpleInterestCalculator.jsx

import React, { useState } from "react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [simpleInterest, setSimpleInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    const total = parseFloat(principal) + interest;
    setSimpleInterest(interest);
    setTotalAmount(total);
  };

  return (
    <div>
      <h2>Simple Interest Calculator</h2>
      <form>
        <div className="form-group">
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="form
