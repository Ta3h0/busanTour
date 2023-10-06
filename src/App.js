import logo from './logo.svg';
import './App.css';
import TourList from './tour/tourList';

function App() {
  return (
    <div className="App">
      <p>아름다움과 시원함이 공존하는 부산을</p>
      <p>소개 시켜드리는 사이트입니다</p>

      <strong>Scroll</strong>
      <span className='ani'><span></span></span>
      <TourList />
      
      

    </div>
  );
}

export default App;