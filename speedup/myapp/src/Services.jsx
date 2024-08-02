// Services.jsx
import{useMatch} from 'react-router-dom';

const Services = () => {
 
var match=useMatch('/service')
  return (
    <>
      <h1 className="text-center my-4 fw-bold">Services Page Component</h1>
    
    {
      <pre>
        {
          match &&<code>{JSON.stringify(match,null,2)}</code>
        }
      </pre>
    }
    </>
  );
};

export default Services;
