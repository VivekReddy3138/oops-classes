import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';

function App() {

  let vivek = new SSCStudent("Vivek","Reddy",71,78,79,90,81,77);
    vivek.calculateResult();

    let rohit = new SSCStudent("Rohit","Sharma",77,99,88,77,66,56);
    rohit.calculateResult();
  return (
    <div className="App">
      <TenthStudent FirstName ="Virat"
      LastName = "kohli"
      TelMarks = "91"
      hindiMarks = "92"
      engMarks = "94"
      mathsMarks = "96"
      sciMarks = "98"
      socMarks = "99"
      />
    </div>
  );
}

export default App;
