import './App.css';
import Banner from './combonents/banner/Banner';
import Navbar from './combonents/navbar/Navbar';
import {orginals,actions,comedy,Romantic,Fantacy,Sci_fi,War,Horror} from './urls'
import RowPost from './combonents/RowPost/RowPost';

function App() {
  return (
  <div >
    <Navbar/>
    <Banner/>
    <RowPost url={orginals} title='Netflix Orginals'/>
    <RowPost url={actions} title='Action'isSmall/>
    <RowPost url={War} title='War'isSmall/>

     <RowPost url={Romantic} title='Romantic'isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={Horror} title='Horror' isSmall/>

     <RowPost url={Sci_fi} title='ScienceFiction' isSmall/>
     <RowPost url={Fantacy} title='Fantacy' isSmall/>

  </div>
  );
}

export default App;
