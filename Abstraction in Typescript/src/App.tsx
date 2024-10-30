
import './App.css';

import Lion from './classes/Lion';
import Tiger from './classes/Tiger';
import Movie from './components/Movie';

function App() {



//let anim1 = new Animal();

let lion1 = new Lion();
lion1.runningSpeed();

let tiger1 = new Tiger();

  return (
    <div className="App">
    <Movie/>
    </div>
  );
}

export default App;
