let ClockTime = () => {
  let time = new Date();
  return (
    <p>
      This is the curretn Time :{time.toLocaleDateString()} -{""}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default ClockTime;
