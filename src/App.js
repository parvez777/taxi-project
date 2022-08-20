import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Componets/Content/Content';
import Header from './Componets/Header/Header';
import Hero from './Componets/Hero/Hero';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Content/>
    </div>
  );
}

export default App;
