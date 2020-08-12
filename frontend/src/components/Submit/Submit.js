const Submit = (props)  => {
    const { steps } = props
    handleSubmit(steps);
    return null;
}

// eslint-disable-next-line
var backend_data = [];

const handleSubmit = (steps) => {

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(steps)
  };
  fetch('http://127.0.0.1:7000/healthapp/post_data/', requestOptions)
      .then(response => response.json())
      .then(
        data => 
        {
          console.log(JSON.stringify(data));
          backend_data = JSON.stringify(data);
        }
        );
  };

export default Submit;