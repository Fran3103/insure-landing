
import './App.css';
import Footter from './screen/footer';
import Header from './screen/header';
import Weredifferent from './screen/weredifferent';
import Wework from './screen/wework';
import Navegacion from './screen/Navegacion';
function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Header/>
      <Weredifferent/>
      <Wework/>
      <Footter/>
    </div>
  );
}

export default App;
