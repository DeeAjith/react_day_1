import React, {Component} from 'react';
import './App.css';

import Alien from './Alien/Alien';

class App extends Component {

  state = {
    asteroidInfo: [
      {name:'2020 PF3 ',	time:'2020-Aug-26 15:07',	Dist:'24,68,367'},
      {name:'2020 QQ2 ',	time:'2020-Aug-27 03:15',	Dist:'32,85,240',},
      {name:'2020 QA6 ',	time:'2020-Aug-27 19:41',	Dist:'24,28,726',},
      {name:'2020 QV6 ',	time:'2020-Aug-28 13:54',	Dist:'38,14,632',},
      {name:'2020 QX6 ',	time:'2020-Aug-31 04:14',	Dist:'4,77,123',},
      {name:'2020 QG5 ',	time:'2020-Sep-01 05:30',	Dist:'29,90,137',},
      {name:'2020 PG6 ',	time:'2020-Sep-02 08:43',	Dist:'22,65,867',},
      {name:'2020 PT4 ',	time:'2020-Sep-08 15:54',	Dist:'18,94,145',},
      {name:'2020 CX1 ',	time:'2021-Feb-18 01:29',	Dist:'18,57,580',},
      {name:'2020 AD1 ',	time:'2021-Jul-04 06:45',	Dist:'10,85,083',},
      {name:'2020 AP1 ',	time:'2022-Jan-07 17:32',	Dist:'17,43,804',},
      {name:'2020 DC ',	time:'2022-Mar-06 09:18',	Dist:'14,87,369',},
      {name:'2020 OO1 ',	time:'2023-Feb-04 20:34',	Dist:'18,42,644',},
      {name:'2020 DG4 ',	time:'2023-Feb-17 19:06',	Dist:'6,36,044',},
      {name:'2020 GE ',	time:'2024-Sep-24 04:25',	Dist:'6,59,589',},
      {name:'2020 AW ',	time:'2028-Jan-19 04:48',	Dist:'16,23,281',},
    ],
    links : [
      'https://theskylive.com/2020pf3-info',
      'https://theskylive.com/2020qq2-info',
      'https://theskylive.com/2020qa6-info',
      'https://theskylive.com/2020qv6-info',
      'https://theskylive.com/2020qx6-info',
      'https://theskylive.com/2020qg5-info',
      'https://theskylive.com/2020pg6-info',
      'https://theskylive.com/2020pt4-info',
      'https://theskylive.com/2020cx1-info',
      'https://theskylive.com/2020ad1-info',
      'https://theskylive.com/2020ap1-info',
      'https://theskylive.com/2020dc-info',
      'https://theskylive.com/2020oo1-info',
      'https://theskylive.com/2020dg4-info',
      'https://theskylive.com/2020ge-info',
      'https://theskylive.com/2020aw-info',      
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Asteroids 2020 which tried and trying to reach Earth.</h1>
        {/* <a target="_blank" rel="noopener noreferrer" href={this.state.links[0]}>
          <Alien
            astroidName={this.state.asteroidInfo[0].name}
            approachDist={this.state.asteroidInfo[0].Dist}
            time={this.state.asteroidInfo[0].time}/>
        </a> */}
          {this.state.links.map((value, index) =>{
            return <a key={index} target="_blank" rel="noopener noreferrer" href={value}>
              <Alien
              astroidName={this.state.asteroidInfo[index].name}
              approachDist={this.state.asteroidInfo[index].Dist}
              time={this.state.asteroidInfo[index].time}/>
          </a>
          })}

      </div>
    );
  }
  // return
  // React.createElement('div',{className:'App'},React.createElement('h1',null,'Do
  // e s jsx work?'));
}

export default App;
