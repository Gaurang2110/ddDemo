import { imageList } from "../assets/imageList";

export const gymData = {
    "gyms": [
      {
        "id": 1,
        "title": "Gym Rebel",
        "rating": 5.5,
        "price": 250,
        "favorite": false,
        image:imageList.gymRebel,
        "date": "02 Aug - 25 Aug, 2020",
        "popular_classes": [
          { 
             "title": "Fitness Class", 
             "price": 350,
             "favorite": false, 
             "location": "London, Spring st. 8",
             "time": "1h 25min",
             image:imageList.fitnessClass
          }, {  
             "title": "Fitness with some friends", 
             "price": 250,
             "favorite": false, 
             "location": "London, Spring st. 8",
             "time": "45min",
             image:imageList.fitnessSome
          }, {  
             "title": "Yoga Class", 
             "price": 150,
             "favorite": false, 
             "location": "London, Wellness st. 23",
             "time": "25min",
             image:imageList.yogaClass
          }, {  
             "title": "Crossfit Class", 
             "price": 200,
             "favorite": false, 
             "location": "London,Villers st. 1",
             "time": "1h 30min",
             image:imageList.crossfitClass
          }
        ] 
      }, {
        "id": 2,
        "title": "Gym NonStop",
        "rating": 3.5,
        "price": 500,
        image:imageList.gymNonStop,
        "favorite": false,
        "date": "01 Aug - 30 Aug, 2020",
        "popular_classes": [
          { 
             "title": "Fitness Class", 
             "price": 350,
             "favorite": false, 
             "location": "London, Spring st. 8",
             "time": "1h 25min"
          }, {  
             "title": "Fitness with some friends", 
             "price": 250,
             "favorite": false, 
             "location": "London, Spring st. 8",
             "time": "45min"
          }, {  
             "title": "Yoga Class", 
             "price": 150,
             "favorite": false, 
             "location": "London, Wellness st. 23",
             "time": "25min"
          }
        ] 
      }, {
        "id": 3,
        "title": "Gym Gym",
        image:imageList.gymRebel,
        "rating": 1.5,
        "price": 150,
        "favorite": false,
        "date": "05 Aug - 16 Aug, 2020",
        "popular_classes": [ ] 
      }
    ]
  };

  export const headerData =[{
    id:1,
    iconName:'Aerobics',
    include:false
  },{
    id:2,
    iconName:'Box',
    include:false
  },{
    id:3,
    iconName:'Children',
    include:false
  },{
    id:4,
    iconName:'Run',
    include:false
  },{
    id:5,
    iconName:'Dances',
    include:false
  },{
    id:6,
    iconName:'Wrestling',
    include:false
  }]
  