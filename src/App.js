import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Practice Algos</li>
        <li>Take the kids to soccer</li>
        <li>Work on linkedIn profile</li>
      </ul>

      <Person />
    </div>
  );
}

export default App;
