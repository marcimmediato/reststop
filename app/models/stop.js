let line = []

const LTrain = [{name: "8 Av", latLong: [40.739777,-74.002578]},
  {name: "6 Av", latLong: [40.737335,-73.996786]},
  {name: "Union Sq - 14 St", latLong: [40.734789,-73.99073]},
  {name: "3 Av", latLong: [40.732849,-73.986122]},
  {name: "1 Av", latLong: [40.730953,-73.981628]},
  {name: "Bedford Av", latLong: [40.717304,-73.956872]},
  {name: "Lorimer St", latLong: [40.714063,-73.950275]},
  {name: "Graham Av", latLong: [40.714565,-73.944053]},
  {name: "Grand St", latLong: [40.711926,-73.94067]},
  {name: "Montrose Av", latLong: [40.707739,-73.93985]},
  {name: "Morgan Av", latLong: [40.706152,-73.933147]},
  {name: "Jefferson St", latLong: [40.706607,-73.922913]},
  {name: "DeKalb Av", latLong: [40.703811,-73.918425]},
  {name: "Myrtle - Wyckoff Avs", latLong: [40.699814,-73.911586]},
  {name: "Halsey St", latLong: [40.695602,-73.904084]},
  {name: "Wilson Av", latLong: [40.688764,-73.904046]},
  {name: "Bushwick Av - Aberdeen St", latLong: [40.682829,-73.905249]},
  {name: "Broadway Jct", latLong: [40.678856,-73.90324]},
  {name: "Atlantic Av", latLong: [40.675345,-73.903097]},
  {name: "Sutter Av", latLong: [40.669367,-73.901975]},
  {name: "Livonia Av", latLong: [40.664038,-73.900571]},
  {name: "New Lots Av", latLong: [40.658733,-73.899232]},
  {name: "E 105 St", latLong: [40.650573,-73.899485]},
  {name: "Canarsie - Rockaway Pkwy", latLong: [40.646654,-73.90185]}
];

const Stop = (function(){

  let id = 0

  return class Stop {
    constructor(object){
      this.name = object.name;
      this.latLong = object.latLong;
      this.id = ++id
      line.push(this)
    }
  }

}())
