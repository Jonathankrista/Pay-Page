var locations = [
      ['SoftMoc<br> <b>Sunridge Mall<b>', 51.0733852, -113.9876926, 1],
      ['SoftMoc<br> Chinook Centre', 50.996067, -114.073148, 2],
      ['SoftMoc<br> The Core', 51.0466253, -114.06872090000002, 3],
      ['SoftMoc<br> Southcentre Mall', 50.9526627502813, -114.06652342596436, 4],
      ['Shoe Rack Deerfoot', 50.982563, -114.03887050000003, 5],
	  ['SoftMoc<br> Kingsway Mall', 53.56402199999999, -113.508534, 6],
	  ['SoftMoc<br> West Edmonton Mall', 53.52325754268953, -113.62186330268554, 7],
	  ['SoftMoc<br> Southgate Centre', 53.48445104821985, -113.51353392590329, 8],
	  ['Shoe Rack<br> West Edmonton Mall', 53.52376779999999, -113.6165418, 9],
	  ['SoftMoc<br> Prairie Mall Shopping Centre', 55.188056750445334, -118.79433910793455, 10],
	  
	  ['SoftMoc<br> Park Place Mall', 49.698081435390485, -112.83928074603273, 1],
	  
	  ['SoftMoc<br> Brower Place', 52.2437142, -113.8068341, 1],
	  
	  ['Shoe Rack<br> CrossIron MIlls', 51.2003475, -113.99602920000001, 1],
	  
	  ['SoftMoc<br> Shoppers Mall', 49.8264608, -99.96202419999997, 1],
	  
	  ['SoftMoc<br> St. Vital Centre', 49.82792689999999, -97.10908849999998, 1],
	  ['SoftMoc<br> Polo Park Mall', 49.8812934, -97.19956400000001, 2],
	  ['SoftMoc<br> Kildonan Place', 49.8995835, -97.05992370000001, 3],
	  
	  ['SoftMoc<br> Champlain Place', 46.0952765, -64.74866380000003, 1],
	  
	  ['SoftMoc<br> Regent Mall', 45.93623270000001, -66.66499399999998, 1],
	  
	  ['SoftMoc<br> McAllister Place', 45.306207, -66.01469559999998, 1],
	  
	  ['SoftMoc<br> Avalon Mall', 47.558796, -52.75348500000001, 1],
	  
	  ['SoftMoc<br> Sunnyside Mall', 44.7320955, -63.65440810000001, 1],
	  ['SoftMoc<br> Mic Mac Mall', 44.6842948, -63.56050859999999, 2],
	  ['SoftMoc<br> Halifax Shopping Centre', 44.6482373, -63.62051700000001, 3],
	  ['SoftMoc<br> Mayflower Mall', 46.1480185962205, -60.13688507128961, 4],
	  
	  ['Shoe Rack<br> Charlottetown', 46.2647983, -63.147123299999976, 1],
	  
	  ['SoftMoc<br> Cornwall Centre', 50.4505735, -104.61116620000001, 1],
	  ['SoftMoc<br> Midtown Plaza', 52.12675549999999, -106.66816549999999, 2],
	  
	  ['SoftMoc<br> Lougheed Town Centre', 49.251182, -122.89546999999999, 1],
	  ['SoftMoc<br> Brentwood Town Centre', 49.26758753822505, -123.00055590978695, 2],
	  ['SoftMoc<br> Coquitlam Centre', 49.2775696, -122.8030928, 3],
	  ['SoftMoc<br> Aberdeen Mall', 50.65, -120.36000100000001, 4],
	  ['SoftMoc<br> Orchard Park', 49.88050240923103, -119.4390504858444, 5],
	  ['SoftMoc<br> Willowbrook Mall', 49.1129922, -122.67760350000003, 6],
	  ['SoftMoc<br> Woodgrove Centre', 49.235646281536006, -124.0484065165329, 7],
	  ['Shoe Rack<br> Queensborogh', 49.1908665, -122.94667379999999, 8],
	  ['Shoe Rack<br> Pine Centre', 53.8974975961531, -122.7772280975359, 9],
	  ['SoftMoc<br> Richmond Centre', 49.1664187, -123.13940689999998, 10],
	  ['SoftMoc<br> Bay Centre', 48.4250195, -123.36566319999997, 11],
	  ['SoftMoc<br> Mayfair Mall', 48.4457733122182, -123.37123704662702, 12],
	  ['SoftMoc<br> Hillside Centre', 48.4449912, -123.33503430000002, 13],
	  ['SoftMoc<br> Park Royal Mall', 49.326870075634304, -123.14563900859832, 14],
	  
	  ['Shoe Rack<br> Durham', 43.861967956162204, -79.02302181163941, 1],
	  ['SoftMoc<br> Georgian Mall', 44.4132143, -79.7094874, 2],
	  ['SoftMoc<br> Quinte Mall', 44.1890941, -77.39818766085205, 3],
	  ['SoftMoc<br> Bramalea City Centre', 43.715672170204016, -79.72214025863514, 4],
	  ['Shoe Rack<br> Lynden Park', 43.1707104, -80.23979889999998, 5],
	  ['SoftMoc<br> Mapleview Centre', 43.32572, -79.82058339999998, 6],
	  ['SoftMoc<br> Burlington Mall', 43.34838789888692, -79.79426106569349, 7],
	  ['SoftMoc<br> Cambridge Centre', 43.39369869999999, -80.32101929999999, 8],
	  ['SoftMoc<br> Sherway Gardens', 43.6095917, -79.55996069999998, 9],
	  ['SoftMoc<br> Stone Road Mall', 43.51866123742071, -80.23704535637933, 10],
	  ['SoftMoc<br> Lime Ridge Mall', 43.217845, -79.86413519999996, 11],
	  ['SoftMoc<br> Cataraqui Town Centre', 44.2573091, -76.56851879999999, 12],
	  ['SoftMoc<br> Fairview Park Mall', 43.42944000000002, -80.439265682209, 13],
	  ['SoftMoc<br> Masonville Place', 43.0251478, -81.28173099999998, 14],
	  ['SoftMoc<br> White Oaks Mall', 42.9307053, -81.2265372, 15],
	  ['SoftMoc<br> Markville Mall', 43.8672231, -79.28459659999999, 16],
	  ['SoftMoc<br> Square One Shopping Centre', 43.593379112309954, -79.64208353240201, 17],
	  ['SoftMoc<br> Erin Mills Town Centre', 43.559678984332116, -79.71138620866776, 18],
	  ['SoftMoc<br> Warehouse 2', 43.60719049343761, -79.585410272422, 19],
	  ['Shoe Rack<br> Heartland', 43.61106746381831, -79.68926367361064, 20],
	  ['SoftMoc<br> Bayshore Mall', 45.34908451464346, -75.80494909570086, 21],
	  ['SoftMoc<br> Upper Canada Mall', 44.05604176470114, -79.485871732016, 22],
	  ['SoftMoc<br> Northgate Shopping Centre', 46.31338329032036, -79.44192226871718, 23],
	  ['SoftMoc<br> Oakville Place', 43.4617715, -79.68714039999998, 24],
	  ["SoftMoc<br> Place D'Orleans", 45.47819594005946, -75.51681692394254, 25],
	  ['SoftMoc<br> Oshawa Centre', 43.89233767082926, -78.880210390213, 26],
	  ['SoftMoc<br> Billings Bridge Mall', 45.38618740681135, -75.67818392429388, 27],
	  ['SoftMoc<br> Carlingwood Mall', 45.372519787042414, -75.76861796118601, 28],
	  ['SoftMoc<br> St. Laurent Shopping Centre', 45.421888181649244, -75.6392719670904, 29],
	  ['SoftMoc<br> Landsdowne Place', 44.285134701237745, -78.33207353372956, 30],
	  ['SoftMoc<br> Pickering Town Centre', 43.83707172479382, -79.08854915396728, 31],
	  ['SoftMoc<br> Hillcrest Mall', 43.85487637546485, -79.43603882023774, 32],
	  ['SoftMoc<br> Scarborough Town Centre', 43.77518758598817, -79.2538425490738, 33],
	  ['SoftMoc<br> The Pen Centre', 43.1336381, -79.22431019999999, 34],
	  ['Shoe Rack<br> St. Catharines', 43.1509001, -79.27047700000003, 35],
	  ['SoftMoc<br> Eastgate Mall', 43.22920472866321, -79.7650194588955, 36],
	  ['SoftMoc<br> New Sudbury Centre', 46.52196955202876, -80.94655762761266, 37],
	  ['SoftMoc<br> Promenade Mall', 43.806898309027346, -79.44960374540369, 38],
	  ['SoftMoc<br> Intercity Shopping Centre', 48.403198072296085, -89.24297938332825, 39],
	  ['SoftMoc<br> Yonge & Eglinton', 43.706689618921125, -79.39817124536899, 40],
	  ['SoftMoc<br> Toronto Eaton Centre', 43.65350175848928, -79.38015807116392, 41],
	  ['SoftMoc<br> Bloor St. West', 43.650844218523915, -79.47817753988113, 42],
	  ['SoftMoc<br> Yorkdale Shopping Centre', 43.7247127037603, -79.45478931216428, 43],
	  ['SoftMoc<br> Queen Street', 43.7247127037603, -79.45478931216428, 44],
	  ['SoftMoc<br> Dufferin Mall', 43.65612948485499, -79.43535392144372, 45],
	  ['Shoe Rack<br> Vaughan', 43.8249643169164, -79.53472320859834, 46],
	  ['SoftMoc<br> Conestoga Mall', 43.49746179316296, -80.52692240379582, 47],
	  ['SoftMoc<br> Warehouse', 43.87156629968744, -78.91746346324669, 48],
	  ['SoftMoc<br> Fairview Mall', 43.776144866997676, -79.34360768325882, 49],
	  ['SoftMoc<br> Devonshire Mall', 42.2736696319668, -83.0045110664093, 50]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(51, -90),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		icon: 'img/s-logo.png',
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
}