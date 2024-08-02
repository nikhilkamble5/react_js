function Hello(){
let number=456;

  let myName= 'prashant';
  let fullName=()=>{
    return 'prashant jain';
  }
  return <p>
   Mesg no: {number} .iam ur master {fullName()}
  </p>
}

export default Hello;