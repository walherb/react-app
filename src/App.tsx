import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
// import ListGroup from './components/ListGroup/ListGroup';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false); // Alert

  // const items = ['New York', 'Los Angeles', 'San Francisco'];

  return (
    <>
      {/* Alert */}
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        <Button color='dark' onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>

      <div>
        {/* <ListGroup heading='Miami' items={items} onSelectItem={()} */}
      </div>
    </>
  );
}

export default App;
