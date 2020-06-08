import React from 'react';

import './App.css';

function App(props) {

      var age = 50;


  return (
    
    <div>
      
    <h1 className="h1"> <span> Hello Pakistan </span> <br></br> from <br></br>
    <strong className="name">{ props.name} </strong>
    <br></br>and 
    <br></br>i am {age-11} years old</h1>
      
       
    <div className="main">
       
        <div className="ld">
       
        <h3 className="h3" >"Provence/Citys"</h3>
       
<ul>
  <li>Sindh</li>
  <ul>
    <li>Karachi</li>
    <li>Hayderabad</li>
    <li>Sukkur</li>
  </ul>
  <li>Panjab</li>
  <ul>
    <li>Lahore</li>
    <li>Gujranwala</li>
    <li>Multan</li>
  </ul>
  <li>KPK</li>
  <ul>
    <li>Peshawer</li>
    <li>Mardan</li>
  </ul>
</ul>

       
        
        </div>



      <div className="pp" >

      <h5 className="h5" >"About Pakistan"</h5>
      <p  className="p"> Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. By area, it is the 33rd-largest country,Pakistan,[b] officially the Islamic Republic of Pakistan,is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. By area, it is the 33rd-largest country,</p>       
      </div>
        
        </div>

        <div className="footer" >Pakista Zindabad</div>

      </div>
    
    );
  }
  
  export default App;
  