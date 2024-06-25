export const categories = [
    { name: 'All', id: 'all' },
    { name: 'Cardio Equipments', id: 'cardio' },
    { name: 'Strength Equipments', id: 'training' },
    { name: 'others', id: 'specialty' },
  ];
  
  export const equipmentImages = {
    cardio: [
       { 
        id: 1,
         src: 'https://gymgear.com/wp-content/uploads/2022/12/T97-commercial.jpg',
         alt: 'treadmill',
         name: 'motorized 15 autolevel Treadmill',
         price: 36999,
        },
       { 
        id: 2,
         src: 'https://gymgear.com/wp-content/uploads/2022/12/C97-NEW-scaled.jpg',
         alt: 'Treadmill',
         name: ' C97 Upright Bike',
         price:8199,
        },
       { 
        id: 3,
         src: 'https://gymgear.com/wp-content/uploads/2022/12/StairMaster-8Gx-LCD.jpg',
         alt: 'Treadmill',
         name: 'StairMaster Gauntlet 8Gx',
         price: 13999,
        },
       { 
        id: 4,
         src: 'https://gymgear.com/wp-content/uploads/2023/08/Row-Max-2.0-3-Web-768x768.jpg',
         alt: 'Treadmill',
         name: 'Row Max 2.0',
         price:7799, 
        },
       { 
        id: 5,
         src: 'https://gymgear.com/wp-content/uploads/2022/11/sport-Web-Size-min.jpg',
         alt: 'Treadmill',
         name: 'Sport Indoor Studio Bike',
         price:10660 
        },
      
     
    ],
    training: [
        { 
         id: 6,
          src: 'https://gymgear.com/wp-content/uploads/2022/11/Sterling-Series-Olympic-Flat-Bench-600x600-2.png',
          alt: 'training machines',
          name: 'Sterling Series, Olympic Flat Bench',
          price:89990,
         },
        { 
         id: 7,
          src: 'https://gymgear.com/wp-content/uploads/2023/01/Rhino-768x768.jpg',
          alt: 'training machines',
          name: ' Rhino Pro Strength Machine',
          price:80199,
         },
        { 
         id: 8,
          src: 'https://gymgear.com/wp-content/uploads/2023/01/Chest-Press-_-Row-BLACK.jpg',
          alt: 'training machines',
          name: 'Re-Life, Chest Press / Row',
          price:19999,
         },
        { 
         id:9,
          src: 'https://gymgear.com/wp-content/uploads/2023/01/Stretch-Trainer-BLACK-768x768.jpg',
          alt: 'training machines',
          name: 'Re-Life Series, Stretch Trainer',
          price:12799, 
         },
        { 
         id:10,
          src: 'https://gymgear.com/wp-content/uploads/2023/11/Elite-DAP-Half-Rack-Combo_1-768x768.jpg',
          alt: 'training machines',
          name: 'Elite Series, DAP Half Rack Combo',
          price:198100, 
         },
        { 
         id:11,
          src: 'https://gymgear.com/wp-content/uploads/2022/11/Pro-Series-Bicep-Curl-scaled.jpg',
          alt: 'training machines',
          name: 'Pro Series, Bicep Curl',
          price:165630,
         },
        ],
    specialty: [
        { 
         id: 12,
          src: 'https://gymgear.com/wp-content/uploads/2022/11/BattleRopes.jpg',
          alt: 'special equipments',
          name: 'Battle Rope',
          price:6500, 
         },
        { 
         id: 13,
          src: 'https://gymgear.com/wp-content/uploads/2024/01/Abdominal-Wheel-Pro-High-Res_1-2048x2048.jpg',
          alt: 'special equipments',
          name: ' Ab Wheel Pro',
          price:2199,
         },
        { 
         id: 14,
          src: 'https://gymgear.com/wp-content/uploads/2024/01/Power-Bag-High-Res_1-768x768.jpg',
          alt: 'special equipments',
          name: 'power bags',
          price:3999,
         },
        { 
         id: 15,
          src: 'https://gymgear.com/wp-content/uploads/2022/11/No-Weight.jpg',
          alt: 'special equipments',
          name: 'Slam Balls',
          price:1599, 
         },
        { 
         id: 16,
          src: 'https://gymgear.com/wp-content/uploads/2023/01/Kettlebell-Web.jpg',
          alt: 'special equipments',
          name: 'Rubber Kettlebells',
          price:1499, 
         },
        { 
         id: 17,
          src: 'https://gymgear.com/wp-content/uploads/2022/11/Set-Web.jpg',
          alt: 'special equipments',
          name: 'Black Bumper Plates',
          price:4500, 
         },
        ],


  };
  
  export const allImages = [
    ...equipmentImages.cardio,
    ...equipmentImages.training,
    ...equipmentImages.specialty,
  ];
  