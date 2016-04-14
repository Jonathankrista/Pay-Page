function FillMap()

{

	var locations = new Array();

	var State="";

	var City="";

	var StartPos=0;

	if (this.document.SForm1.SearchState.selectedIndex > 0)

	{

		State="" +document.SForm1.SearchState.options[document.SForm1.SearchState.selectedIndex].value;

		City="" +document.SForm1.SearchCity.options[document.SForm1.SearchCity.selectedIndex].value;

	}

	for (var i=0; i < X_Num; i++)

	{

		if (((X_State[i]==State)||(State==""))  &&  ((X_City[i]==City)||(City=="")))

			break;

		StartPos++;

	}



	var Top_Lat= 0;

	var Bottom_Lat=0;

	var Left_Lng= 0;

	var Right_Lng= 0;

	for (var j=StartPos; j < X_Num; j++)

	{

		if (((X_State[j]!=State)&&(State!=""))  ||  ((X_City[j]!=City)&&(City!="")))

			break;

		locations[j-StartPos]=new Array();

		locations[j-StartPos][0]=FormatResult_Map(j);//"SoftMoc<br> <b>"+X_Name[j]+"</b>";

		locations[j-StartPos][1]=X_Lat[j];

		locations[j-StartPos][2]=X_Lng[j];

		locations[j-StartPos][3]=X_ID[j];

		if ((X_Lat[j]!="0")&&(X_Lng[j]!="0"))

		{

			if ((Top_Lat==0)||(parseFloat(X_Lat[j]) < Top_Lat))

				Top_Lat = parseFloat(X_Lat[j]);

			if ((Bottom_Lat==0)||(parseFloat(X_Lat[j]) > Bottom_Lat))

				Bottom_Lat = parseFloat(X_Lat[j]);

			if ((Left_Lng==0)||(parseFloat(X_Lng[j]) < Left_Lng))

				Left_Lng = parseFloat(X_Lng[j]);

			if ((Right_Lng==0)||(parseFloat(X_Lng[j]) > Right_Lng))

				Right_Lng = parseFloat(X_Lng[j]);

		}

	}



	var Center_Lat=(Bottom_Lat+Top_Lat)/2;

	var Center_Lng=(Right_Lng+Left_Lng)/2;



    var map = new google.maps.Map(document.getElementById('map'), {

      zoom: 4,

      center: new google.maps.LatLng(Center_Lat,Center_Lng),

      mapTypeId: google.maps.MapTypeId.ROADMAP

    });



	if ((State=="")&&(City==""))

		map.setZoom(4);

	else if ((State!="")&&(City==""))

		map.setZoom(5);

	else

		map.setZoom(12);



   var infowindow = new google.maps.InfoWindow();



    var marker, i;



    for (i = 0; i < locations.length; i++) {  

      marker = new google.maps.Marker({

        position: new google.maps.LatLng(locations[i][1], locations[i][2]),

		icon: 'http://www.softmoc.com/img/s-logo.png',

        map: map

      });



      google.maps.event.addListener(marker, 'click', (function(marker, i) {

        return function() {

          infowindow.setContent(locations[i][0]);

          infowindow.open(map, marker);

        }

      })(marker, i));

	}

}



var X_ID=new Array();

var X_Name=new Array();

var X_Addr=new Array();

var X_City=new Array();

var X_State=new Array();

var X_Zip=new Array();

var X_Phone=new Array();

var X_Email=new Array();

var X_Lat=new Array();

var X_Lng=new Array();



	X_ID[0]="67";

	X_Name[0]="SoftMoc Chinook Centre";

	X_Addr[0]="6455 Macleod Trail SW, Unit 158B";

	X_City[0]="Calgary";

	X_State[0]="AB";

	X_Zip[0]="T2H 0K8";

	X_Phone[0]="(403) 255-6729";

	X_Email[0]="softmoc67@softmoc.com";

	X_Lat[0]="50.996067";

	X_Lng[0]="-114.073148";

	

	X_ID[1]="89";

	X_Name[1]="SoftMoc Market Mall";

	X_Addr[1]="3625 Shaganappi Trail NW, Unit# R049";

	X_City[1]="Calgary";

	X_State[1]="AB";

	X_Zip[1]="T3A 0E2";

	X_Phone[1]="(403) 288-2498";

	X_Email[1]="softmoc89@softmoc.com";

	X_Lat[1]="51.085172";

	X_Lng[1]="-114.155504";

	

	X_ID[2]="303";

	X_Name[2]="SoftMoc Shoe Rack Deerfoot Meadows";

	X_Addr[2]="33 Heritage Meadows Way S.E., Unit 610";

	X_City[2]="Calgary";

	X_State[2]="AB";

	X_Zip[2]="T2H 3B8";

	X_Phone[2]="(403) 255-4668";

	X_Email[2]="softmoc303@softmoc.com";

	X_Lat[2]="50.982925";

	X_Lng[2]="-114.042852";

	

	X_ID[3]="81";

	X_Name[3]="SoftMoc Southcentre Mall";

	X_Addr[3]="100 Anderson Road SE - Unit 152";

	X_City[3]="Calgary";

	X_State[3]="AB";

	X_Zip[3]="T2J 3V1";

	X_Phone[3]="(403) 225-1014";

	X_Email[3]="softmoc81@softmoc.com";

	X_Lat[3]="50.952499";

	X_Lng[3]="-114.066506";

	

	X_ID[4]="30";

	X_Name[4]="SoftMoc Sunridge Mall";

	X_Addr[4]="2525-36th Street N.E., Unit 121";

	X_City[4]="Calgary";

	X_State[4]="AB";

	X_Zip[4]="T1Y 5T4";

	X_Phone[4]="(403) 293-8366";

	X_Email[4]="softmoc30@softmoc.com";

	X_Lat[4]="51.074322";

	X_Lng[4]="-113.986383";

	

	X_ID[5]="70";

	X_Name[5]="SoftMoc The Core";

	X_Addr[5]="317 7th Avenue S.W., Unit T372";

	X_City[5]="Calgary";

	X_State[5]="AB";

	X_Zip[5]="T2P 2Y9";

	X_Phone[5]="(403) 261-7919";

	X_Email[5]="softmoc70@softmoc.com";

	X_Lat[5]="51.046514";

	X_Lng[5]="-114.068137";

	

	X_ID[6]="86";

	X_Name[6]="SoftMoc Edmonton City Centre";

	X_Addr[6]="10025-102A Ave. NW, Unit 146";

	X_City[6]="Edmonton";

	X_State[6]="AB";

	X_Zip[6]="T5J 2Z2";

	X_Phone[6]="(780) 429-9690";

	X_Email[6]="softmoc86@softmoc.com";

	X_Lat[6]="53.543388";

	X_Lng[6]="-113.493104";

	

	X_ID[7]="31";

	X_Name[7]="SoftMoc Kingsway Mall";

	X_Addr[7]="109th St. & Princess Elizabeth Ave.";

	X_City[7]="Edmonton";

	X_State[7]="AB";

	X_Zip[7]="T5G 3A6";

	X_Phone[7]="(780) 477-6930";

	X_Email[7]="softmoc31@softmoc.com";

	X_Lat[7]="53.56266";

	X_Lng[7]="-113.506182";

	

	X_ID[8]="78";

	X_Name[8]="SoftMoc Southgate Centre";

	X_Addr[8]="5015-111 Street, Unit 446";

	X_City[8]="Edmonton";

	X_State[8]="AB";

	X_Zip[8]="T6H 4M6";

	X_Phone[8]="(780) 433-6350";

	X_Email[8]="softmoc78@softmoc.com";

	X_Lat[8]="53.486212";

	X_Lng[8]="-113.514654";

	

	X_ID[9]="27";

	X_Name[9]="SoftMoc West Edmonton Mall";

	X_Addr[9]="8882-170 Street NW, Suite R112";

	X_City[9]="Edmonton";

	X_State[9]="AB";

	X_Zip[9]="T5T 4M2";

	X_Phone[9]="(780) 489-5616";

	X_Email[9]="softmoc27@softmoc.com";

	X_Lat[9]="53.521537";

	X_Lng[9]="-113.615795";

	

	X_ID[10]="311";

	X_Name[10]="SoftMoc West Edmonton Mall Rack";

	X_Addr[10]="8882-170th Street, Unit B-110";

	X_City[10]="Edmonton";

	X_State[10]="AB";

	X_Zip[10]="T5T 4M2";

	X_Phone[10]="(780) 484-3367";

	X_Email[10]="softmoc311@softmoc.com";

	X_Lat[10]="53.523617";

	X_Lng[10]="-113.615346";

	

	X_ID[11]="48";

	X_Name[11]="SoftMoc Prairie Mall Shopping Centre";

	X_Addr[11]="11801-100 Street, Unit 114";

	X_City[11]="Grande Prairie";

	X_State[11]="AB";

	X_Zip[11]="T8V 3Y2";

	X_Phone[11]="(780) 882-6876";

	X_Email[11]="softmoc48@softmoc.com";

	X_Lat[11]="55.188162";

	X_Lng[11]="-118.794596";

	

	X_ID[12]="51";

	X_Name[12]="SoftMoc Park Place Mall";

	X_Addr[12]="501 First Avenue South, Unit D25";

	X_City[12]="Lethbridge";

	X_State[12]="AB";

	X_Zip[12]="T1J 4L9";

	X_Phone[12]="(403) 327-9164";

	X_Email[12]="softmoc51@softmoc.com";

	X_Lat[12]="49.698091";

	X_Lng[12]="-112.838956";

	

	X_ID[13]="101";

	X_Name[13]="SoftMoc Medicine Hat";

	X_Addr[13]="3292 Dunmore Rd. SE, Unit 106B";

	X_City[13]="Medicine Hat";

	X_State[13]="AB";

	X_Zip[13]="T1B 2R4";

	X_Phone[13]="(403) 580-8019";

	X_Email[13]="softmoc101@softmoc.com";

	X_Lat[13]="50.003431";

	X_Lng[13]="-110.646868";

	

	X_ID[14]="49";

	X_Name[14]="SoftMoc Bower Place";

	X_Addr[14]="4900 Molly Banister Dr, Unit 143";

	X_City[14]="Red Deer";

	X_State[14]="AB";

	X_Zip[14]="T4R 1N9";

	X_Phone[14]="(403) 347-9735";

	X_Email[14]="softmoc49@softmoc.com";

	X_Lat[14]="52.243139";

	X_Lng[14]="-113.809821";

	

	X_ID[15]="308";

	X_Name[15]="SoftMoc Cross Iron Mills";

	X_Addr[15]="261055 CrossIron Blvd., Unit 341";

	X_City[15]="Rocky View";

	X_State[15]="AB";

	X_Zip[15]="T4A 0G3";

	X_Phone[15]="(403) 274-2079";

	X_Email[15]="softmoc308@softmoc.com";

	X_Lat[15]="51.203414";

	X_Lng[15]="-113.994276";

	

	X_ID[16]="61";

	X_Name[16]="SoftMoc Brentwood Town Centre";

	X_Addr[16]="4567 Lougheed Hwy, Unit 213";

	X_City[16]="Burnaby";

	X_State[16]="BC";

	X_Zip[16]="V5C 3Z6";

	X_Phone[16]="(604) 320-7230";

	X_Email[16]="softmoc61@softmoc.com";

	X_Lat[16]="49.267283";

	X_Lng[16]="-123.000738";

	

	X_ID[17]="59";

	X_Name[17]="SoftMoc Lougheed Town Centre";

	X_Addr[17]="9855 Austin Rd., Unit 210";

	X_City[17]="Burnaby";

	X_State[17]="BC";

	X_Zip[17]="V3J 1N4";

	X_Phone[17]="(604) 415-9453";

	X_Email[17]="softmoc59@softmoc.com";

	X_Lat[17]="49.250781";

	X_Lng[17]="-122.89684";

	

	X_ID[18]="85";

	X_Name[18]="SoftMoc Metropolis";

	X_Addr[18]="4700 Kingsway, Unit 1218A";

	X_City[18]="Burnaby";

	X_State[18]="BC";

	X_Zip[18]="V5H 4N2";

	X_Phone[18]="(604) 451-9499";

	X_Email[18]="softmoc85@softmoc.com";

	X_Lat[18]="49.226832";

	X_Lng[18]="-123.000944";

	

	X_ID[19]="36";

	X_Name[19]="SoftMoc Coquitlam Centre";

	X_Addr[19]="Unit 2318, 2929 Barnet Highway";

	X_City[19]="Coquitlam";

	X_State[19]="BC";

	X_Zip[19]="V3B 5R5";

	X_Phone[19]="(604) 464-7200";

	X_Email[19]="softmoc36@softmoc.com";

	X_Lat[19]="49.279277";

	X_Lng[19]="-122.799028";

	

	X_ID[20]="58";

	X_Name[20]="SoftMoc Aberdeen Mall";

	X_Addr[20]="1320 West Trans Canada Hwy, Unit# 232";

	X_City[20]="Kamloops";

	X_State[20]="BC";

	X_Zip[20]="V1S 1J2";

	X_Phone[20]="(250) 314-7420";

	X_Email[20]="softmoc58@softmoc.com";

	X_Lat[20]="50.65546";

	X_Lng[20]="-120.371768";

	

	X_ID[21]="45";

	X_Name[21]="SoftMoc Orchard Park";

	X_Addr[21]="2271 Harvey Ave., Unit 1345";

	X_City[21]="Kelowna";

	X_State[21]="BC";

	X_Zip[21]="V1Y 6H2";

	X_Phone[21]="(250) 712-9869";

	X_Email[21]="softmoc45@softmoc.com";

	X_Lat[21]="49.880695";

	X_Lng[21]="-119.439576";

	

	X_ID[22]="37";

	X_Name[22]="SoftMoc Willowbrook Mall";

	X_Addr[22]="Unit 452, 19705 Fraser Highway";

	X_City[22]="Langley";

	X_State[22]="BC";

	X_Zip[22]="V3A 7E9";

	X_Phone[22]="(604) 533-8038";

	X_Email[22]="softmoc37@softmoc.com";

	X_Lat[22]="49.114585";

	X_Lng[22]="-122.675271";

	

	X_ID[23]="68";

	X_Name[23]="SoftMoc Woodgrove Centre";

	X_Addr[23]="6631 Island Highway North, Unit 22";

	X_City[23]="Nanaimo";

	X_State[23]="BC";

	X_Zip[23]="V9T 4T7";

	X_Phone[23]="(250) 390-6612";

	X_Email[23]="softmoc68@softmoc.com";

	X_Lat[23]="49.236346";

	X_Lng[23]="-124.049935";

	

	X_ID[24]="304";

	X_Name[24]="SoftMoc Queensborough Landing";

	X_Addr[24]="805 Boyd Street, Unit H130";

	X_City[24]="New Westminster";

	X_State[24]="BC";

	X_Zip[24]="V3M 5X2";

	X_Phone[24]="(604) 520-1440";

	X_Email[24]="softmoc304@softmoc.com";

	X_Lat[24]="49.190866";

	X_Lng[24]="-122.946673";

	

	X_ID[25]="307";

	X_Name[25]="SoftMoc Shoe Rack Pine Centre Mall";

	X_Addr[25]="156-3055 Massey Drive, Unit 35";

	X_City[25]="Prince George";

	X_State[25]="BC";

	X_Zip[25]="V2N 2S9";

	X_Phone[25]="(250) 614-2110";

	X_Email[25]="softmoc307@softmoc.com";

	X_Lat[25]="53.897498";

	X_Lng[25]="-122.777227";

	

	X_ID[26]="44";

	X_Name[26]="SoftMoc Richmond Centre";

	X_Addr[26]="6060 Minoru Blvd., Unit 1934A";

	X_City[26]="Richmond";

	X_State[26]="BC";

	X_Zip[26]="V6Y 2V7";

	X_Phone[26]="(604) 232-1159";

	X_Email[26]="softmoc44@softmoc.com";

	X_Lat[26]="49.163128";

	X_Lng[26]="-123.139955";

	

	X_ID[27]="84";

	X_Name[27]="SoftMoc Guildford Town Centre";

	X_Addr[27]="10355 152 Street, Unit# 2383";

	X_City[27]="Surrey";

	X_State[27]="BC";

	X_Zip[27]="V3R 7C1";

	X_Phone[27]="(604) 584-0446";

	X_Email[27]="softmoc84@softmoc.com";

	X_Lat[27]="49.188648";

	X_Lng[27]="-122.803931";

	

	X_ID[28]="313";

	X_Name[28]="SoftMoc Shoe Rack Grandview Corners";

	X_Addr[28]="2433 161A St., Unit 40";

	X_City[28]="Surrey";

	X_State[28]="BC";

	X_Zip[28]="V3Z 0M6";

	X_Phone[28]="(604) 536-9728";

	X_Email[28]="softmoc313@softmoc.com";

	X_Lat[28]="49.046471";

	X_Lng[28]="-122.781782";

	

	X_ID[29]="56";

	X_Name[29]="SoftMoc Bay Centre";

	X_Addr[29]="1150 Douglas Street, Unit 132";

	X_City[29]="Victoria";

	X_State[29]="BC";

	X_Zip[29]="V8W 3M9";

	X_Phone[29]="(250) 380-1339";

	X_Email[29]="softmoc56@softmoc.com";

	X_Lat[29]="48.425135";

	X_Lng[29]="-123.365424";

	

	X_ID[30]="76";

	X_Name[30]="SoftMoc Hillside Centre";

	X_Addr[30]="1644 Hillside Avenue, Unit 54";

	X_City[30]="Victoria";

	X_State[30]="BC";

	X_Zip[30]="V8T 2C5";

	X_Phone[30]="(250) 370-7567";

	X_Email[30]="softmoc76@softmoc.com";

	X_Lat[30]="48.445026";

	X_Lng[30]="-123.335156";

	

	X_ID[31]="39";

	X_Name[31]="SoftMoc Mayfair Mall";

	X_Addr[31]="3147 Douglas St, Unit 226";

	X_City[31]="Victoria";

	X_State[31]="BC";

	X_Zip[31]="V8Z 6E3";

	X_Phone[31]="(250) 380-7931";

	X_Email[31]="softmoc39@softmoc.com";

	X_Lat[31]="48.446344";

	X_Lng[31]="-123.3713";

	

	X_ID[32]="40";

	X_Name[32]="SoftMoc Park Royal Mall";

	X_Addr[32]="2002 Park Royal South, Unit 941";

	X_City[32]="West Vancouver";

	X_State[32]="BC";

	X_Zip[32]="V7T 2W4";

	X_Phone[32]="(604) 913-9193";

	X_Email[32]="softmoc40@softmoc.com";

	X_Lat[32]="49.326278";

	X_Lng[32]="-123.139641";

	

	X_ID[33]="77";

	X_Name[33]="SoftMoc Shoppers Mall";

	X_Addr[33]="1570 - 18th Street, Unit 90";

	X_City[33]="Brandon";

	X_State[33]="MB";

	X_Zip[33]="R7A 5C5";

	X_Phone[33]="(204) 727-4653";

	X_Email[33]="softmoc77@softmoc.com";

	X_Lat[33]="49.82621";

	X_Lng[33]="-99.962528";

	

	X_ID[34]="71";

	X_Name[34]="SoftMoc Kildonan Place";

	X_Addr[34]="1555 Regent Avenue West, Unit T48";

	X_City[34]="Winnipeg";

	X_State[34]="MB";

	X_Zip[34]="R2C 4J2";

	X_Phone[34]="(204) 669-7583";

	X_Email[34]="softmoc71@softmoc.com";

	X_Lat[34]="49.898294";

	X_Lng[34]="-97.059992";

	

	X_ID[35]="66";

	X_Name[35]="SoftMoc Polo Park Mall";

	X_Addr[35]="1485 Portage Avenue, Unit L106";

	X_City[35]="Winnipeg";

	X_State[35]="MB";

	X_Zip[35]="R3G 0W4";

	X_Phone[35]="(204) 788-1072";

	X_Email[35]="softmoc66@softmoc.com";

	X_Lat[35]="49.881293";

	X_Lng[35]="-97.199564";

	

	X_ID[36]="53";

	X_Name[36]="SoftMoc St. Vital Centre";

	X_Addr[36]="1225 St. Mary's Rd., Unit 62A";

	X_City[36]="Winnipeg";

	X_State[36]="MB";

	X_Zip[36]="R2M 5E5";

	X_Phone[36]="(204) 256-0786";

	X_Email[36]="softmoc53@softmoc.com";

	X_Lat[36]="49.828469";

	X_Lng[36]="-97.112103";

	

	X_ID[37]="43";

	X_Name[37]="SoftMoc Champlain Place";

	X_Addr[37]="477 Paul St. , Unit R002A";

	X_City[37]="Dieppe";

	X_State[37]="NB";

	X_Zip[37]="E1A 4X5";

	X_Phone[37]="(506) 857-9164";

	X_Email[37]="softmoc43@softmoc.com";

	X_Lat[37]="46.09827";

	X_Lng[37]="-64.758332";

	

	X_ID[38]="41";

	X_Name[38]="SoftMoc Regent Mall";

	X_Addr[38]="1381 Regent Street, Unit I011B";

	X_City[38]="Fredericton";

	X_State[38]="NB";

	X_Zip[38]="E3C 1A2";

	X_Phone[38]="(506) 444-7072";

	X_Email[38]="softmoc41@softmoc.com";

	X_Lat[38]="45.935035";

	X_Lng[38]="-66.663966";

	

	X_ID[39]="42";

	X_Name[39]="SoftMoc McAllister Place";

	X_Addr[39]="519 Westmorland Rd., Unit G-033";

	X_City[39]="Saint John";

	X_State[39]="NB";

	X_Zip[39]="E2J 3W9";

	X_Phone[39]="(506) 658-9164";

	X_Email[39]="softmoc42@softmoc.com";

	X_Lat[39]="45.30861";

	X_Lng[39]="-66.016631";

	

	X_ID[40]="52";

	X_Name[40]="SoftMoc Avalon Mall";

	X_Addr[40]="48 Kenmount Road, Unit 135";

	X_City[40]="St. John's";

	X_State[40]="NL";

	X_Zip[40]="A1B 1W3";

	X_Phone[40]="(709) 753-7638";

	X_Email[40]="softmoc52@softmoc.com";

	X_Lat[40]="47.561136";

	X_Lng[40]="-52.751594";

	

	X_ID[41]="50";

	X_Name[41]="SoftMoc Sunnyside Mall";

	X_Addr[41]="1595 Bedford Highway, Unit 135";

	X_City[41]="Bedford";

	X_State[41]="NS";

	X_Zip[41]="B4A 3Y4";

	X_Phone[41]="(902) 832-0815";

	X_Email[41]="softmoc50@softmoc.com";

	X_Lat[41]="44.732988";

	X_Lng[41]="-63.655947";

	

	X_ID[42]="34";

	X_Name[42]="SoftMoc Mic Mac Mall";

	X_Addr[42]="Unit 227 - 21 Mic Mac Blvd.";

	X_City[42]="Dartmouth";

	X_State[42]="NS";

	X_Zip[42]="B3A 4K7";

	X_Phone[42]="(902) 461-2938";

	X_Email[42]="softmoc34@softmoc.com";

	X_Lat[42]="44.686058";

	X_Lng[42]="-63.561602";

	

	X_ID[43]="35";

	X_Name[43]="SoftMoc Halifax Shopping Centre";

	X_Addr[43]="7001 Mumford Rd., Unit 245";

	X_City[43]="Halifax";

	X_State[43]="NS";

	X_Zip[43]="B3L 4N3";

	X_Phone[43]="(902) 453-3947";

	X_Email[43]="softmoc35@softmoc.com";

	X_Lat[43]="44.649109";

	X_Lng[43]="-63.618802";

	

	X_ID[44]="54";

	X_Name[44]="SoftMoc Mayflower Mall";

	X_Addr[44]="800 Grand Lake Road, Unit 30";

	X_City[44]="Sydney";

	X_State[44]="NS";

	X_Zip[44]="B1P 6S9";

	X_Phone[44]="(902) 539-2185";

	X_Email[44]="softmoc54@softmoc.com";

	X_Lat[44]="46.148019";

	X_Lng[44]="-60.136885";

	

	X_ID[45]="309";

	X_Name[45]="SoftMoc Shoe Rack Durham Centre";

	X_Addr[45]="40 Kingston Rd. East, Unit 102B";

	X_City[45]="Ajax";

	X_State[45]="ON";

	X_Zip[45]="L1Z 1E9";

	X_Phone[45]="(905) 427-4176";

	X_Email[45]="softmoc309@softmoc.com";

	X_Lat[45]="43.862068";

	X_Lng[45]="-79.023321";

	

	X_ID[46]="19";

	X_Name[46]="SoftMoc Georgian Mall";

	X_Addr[46]="509 Bayfield Street, Unit B010C";

	X_City[46]="Barrie";

	X_State[46]="ON";

	X_Zip[46]="L4M 4Z8";

	X_Phone[46]="(705) 728-3642";

	X_Email[46]="softmoc19@softmoc.com";

	X_Lat[46]="44.412968";

	X_Lng[46]="-79.707494";

	

	X_ID[47]="5";

	X_Name[47]="SoftMoc Quinte Mall";

	X_Addr[47]="390 North Front Street, Unit F2A";

	X_City[47]="Belleville";

	X_State[47]="ON";

	X_Zip[47]="K8P 3E1";

	X_Phone[47]="(613) 968-7401";

	X_Email[47]="softmoc5@softmoc.com";

	X_Lat[47]="44.188812";

	X_Lng[47]="-77.400816";

	

	X_ID[48]="16";

	X_Name[48]="SoftMoc Bramalea City Centre";

	X_Addr[48]="25 Peel Centre Drive, Unit 251";

	X_City[48]="Brampton";

	X_State[48]="ON";

	X_Zip[48]="L6T 3R5";

	X_Phone[48]="(905) 799-3621";

	X_Email[48]="softmoc16@softmoc.com";

	X_Lat[48]="43.715674";

	X_Lng[48]="-79.72215";

	

	X_ID[49]="310";

	X_Name[49]="SoftMoc Shoe Rack Lynden Park";

	X_Addr[49]="84 Lynden Road Unit #E8B";

	X_City[49]="Brantford";

	X_State[49]="ON";

	X_Zip[49]="N3R 6B8";

	X_Phone[49]="(519) 759-4040";

	X_Email[49]="softmoc310@softmoc.com";

	X_Lat[49]="43.170952";

	X_Lng[49]="-80.240246";

	

	X_ID[50]="57";

	X_Name[50]="SoftMoc Burlington Mall";

	X_Addr[50]="777 Guelph Line Road, Unit C4C";

	X_City[50]="Burlington";

	X_State[50]="ON";

	X_Zip[50]="L7R 3N2";

	X_Phone[50]="(905) 634-5524";

	X_Email[50]="softmoc57@softmoc.com";

	X_Lat[50]="43.348389";

	X_Lng[50]="-79.794269";

	

	X_ID[51]="33";

	X_Name[51]="SoftMoc Mapleview Centre";

	X_Addr[51]="900 Maple Ave. Unit B15";

	X_City[51]="Burlington";

	X_State[51]="ON";

	X_Zip[51]="L7S 2J8";

	X_Phone[51]="(905) 633-1225";

	X_Email[51]="softmoc33@softmoc.com";

	X_Lat[51]="43.32604";

	X_Lng[51]="-79.818744";

	

	X_ID[52]="79";

	X_Name[52]="SoftMoc Cambridge Centre";

	X_Addr[52]="355 Hespeler Rd., Unit 240";

	X_City[52]="Cambridge";

	X_State[52]="ON";

	X_Zip[52]="N1R 6B3";

	X_Phone[52]="(519) 620-8172";

	X_Email[52]="softmoc79@softmoc.com";

	X_Lat[52]="43.393698";

	X_Lng[52]="-80.321019";

	

	X_ID[53]="315";

	X_Name[53]="SoftMoc Shoe Rack Cookstown Outlets";

	X_Addr[53]="3311 Simcoe Road 89, Unit D30";

	X_City[53]="Cookstown";

	X_State[53]="ON";

	X_Zip[53]="L0L 1L0";

	X_Phone[53]="(705) 458-0065";

	X_Email[53]="softmoc315@softmoc.com";

	X_Lat[53]="44.199032";

	X_Lng[53]="-79.651094";

	

	X_ID[54]="22";

	X_Name[54]="SoftMoc Sherway Gardens";

	X_Addr[54]="25 The West Mall, Unit# 1714";

	X_City[54]="Etobicoke";

	X_State[54]="ON";

	X_Zip[54]="M9C 1B8";

	X_Phone[54]="(416) 622-4448";

	X_Email[54]="softmoc22@softmoc.com";

	X_Lat[54]="43.61266";

	X_Lng[54]="-79.555928";

	

	X_ID[55]="9";

	X_Name[55]="SoftMoc Stone Road Mall";

	X_Addr[55]="435 Stone Road West, Unit D3A";

	X_City[55]="Guelph";

	X_State[55]="ON";

	X_Zip[55]="N1G 2X6";

	X_Phone[55]="(519) 822-9062";

	X_Email[55]="softmoc9@softmoc.com";

	X_Lat[55]="43.518705";

	X_Lng[55]="-80.237438";

	

	X_ID[56]="38";

	X_Name[56]="SoftMoc Lime Ridge Mall";

	X_Addr[56]="999 Upper Wentworth Street, Unit 449";

	X_City[56]="Hamilton";

	X_State[56]="ON";

	X_Zip[56]="L9A 4X5";

	X_Phone[56]="(905) 388-8905";

	X_Email[56]="softmoc38@softmoc.com";

	X_Lat[56]="43.217444";

	X_Lng[56]="-79.86185";

	

	X_ID[57]="24";

	X_Name[57]="SoftMoc Cataraqui Town Centre";

	X_Addr[57]="945 Gardiners Road, Unit 12";

	X_City[57]="Kingston";

	X_State[57]="ON";

	X_Zip[57]="K7M 7H4";

	X_Phone[57]="(613) 634-9610";

	X_Email[57]="softmoc24@softmoc.com";

	X_Lat[57]="44.256687";

	X_Lng[57]="-76.571456";

	

	X_ID[58]="29";

	X_Name[58]="SoftMoc Fairview Park Mall";

	X_Addr[58]="2960 Kingsway Dr., Unit C005";

	X_City[58]="Kitchener";

	X_State[58]="ON";

	X_Zip[58]="N2C 1X1";

	X_Phone[58]="(519) 893-5722";

	X_Email[58]="softmoc29@softmoc.com";

	X_Lat[58]="43.424645";

	X_Lng[58]="-80.43891";

	

	X_ID[59]="18";

	X_Name[59]="SoftMoc Masonville Place";

	X_Addr[59]="1680 Richmond Street North, Unit L114";

	X_City[59]="London";

	X_State[59]="ON";

	X_Zip[59]="N6G 3Y9";

	X_Phone[59]="(519) 679-8859";

	X_Email[59]="softmoc18@softmoc.com";

	X_Lat[59]="43.02549";

	X_Lng[59]="-81.278786";

	

	X_ID[60]="8";

	X_Name[60]="SoftMoc White Oaks Mall";

	X_Addr[60]="1105 Wellington Road South, Unit 73";

	X_City[60]="London";

	X_State[60]="ON";

	X_Zip[60]="N6E 1V4";

	X_Phone[60]="(519) 681-8486";

	X_Email[60]="softmoc8@softmoc.com";

	X_Lat[60]="42.931113";

	X_Lng[60]="-81.225603";

	

	X_ID[61]="14";

	X_Name[61]="SoftMoc Markville Mall";

	X_Addr[61]="5000 Hwy 7 East, Unit 2165";

	X_City[61]="Markham";

	X_State[61]="ON";

	X_Zip[61]="L3R 4M9";

	X_Phone[61]="(905) 946-0476";

	X_Email[61]="softmoc14@softmoc.com";

	X_Lat[61]="43.868162";

	X_Lng[61]="-79.288099";

	

	X_ID[62]="100";

	X_Name[62]="SoftMoc Dundas Warehouse Sale";

	X_Addr[62]="1310 Dundas Street East, Units 7 & 8";

	X_City[62]="Mississauga";

	X_State[62]="ON";

	X_Zip[62]="L4Y 2C1";

	X_Phone[62]="(905) 279-6847";

	X_Email[62]="softmoc100@softmoc.com";

	X_Lat[62]="43.60725";

	X_Lng[62]="-79.585225";

	

	X_ID[63]="32";

	X_Name[63]="SoftMoc Erin Mills Town Centre";

	X_Addr[63]="5100 Erins Mills Parkway, Unit B213B";

	X_City[63]="Mississauga";

	X_State[63]="ON";

	X_Zip[63]="L5M 4Z5";

	X_Phone[63]="(905) 820-8771";

	X_Email[63]="softmoc32@softmoc.com";

	X_Lat[63]="43.557831";

	X_Lng[63]="-79.712256";

	

	X_ID[64]="306";

	X_Name[64]="SoftMoc Shoe Rack Heartland";

	X_Addr[64]="5885 Rodeo Drive, Unit 1";

	X_City[64]="Mississauga";

	X_State[64]="ON";

	X_Zip[64]="L5R 4C1";

	X_Phone[64]="(905) 507-6363";

	X_Email[64]="softmoc306@softmoc.com";

	X_Lat[64]="43.611083";

	X_Lng[64]="-79.68932";

	

	X_ID[65]="3";

	X_Name[65]="SoftMoc Square One Shopping Centre";

	X_Addr[65]="100 City Centre Drive";

	X_City[65]="Mississauga";

	X_State[65]="ON";

	X_Zip[65]="L5B 2C9";

	X_Phone[65]="(905) 272-4645";

	X_Email[65]="softmoc3@softmoc.com";

	X_Lat[65]="43.593041";

	X_Lng[65]="-79.642797";

	

	X_ID[66]="12";

	X_Name[66]="SoftMoc Bayshore Mall";

	X_Addr[66]="100 Bayshore Drive, Unit C10";

	X_City[66]="Nepean";

	X_State[66]="ON";

	X_Zip[66]="K2B 8C1";

	X_Phone[66]="(613) 829-3628";

	X_Email[66]="softmoc12@softmoc.com";

	X_Lat[66]="45.347266";

	X_Lng[66]="-75.806854";

	

	X_ID[67]="4";

	X_Name[67]="SoftMoc Upper Canada Mall";

	X_Addr[67]="17600 Yonge Street, Unit EE13";

	X_City[67]="Newmarket";

	X_State[67]="ON";

	X_Zip[67]="L3Y 4Z1";

	X_Phone[67]="(905) 895-0582";

	X_Email[67]="softmoc4@softmoc.com";

	X_Lat[67]="44.056551";

	X_Lng[67]="-79.485354";

	

	X_ID[68]="312";

	X_Name[68]="SoftMoc Shoe Rack Niagara Collection";

	X_Addr[68]="300 Taylor Road, Unit #437";

	X_City[68]="Niagara On The Lake";

	X_State[68]="ON";

	X_Zip[68]="L0S 1J0";

	X_Phone[68]="(905) 988-9082";

	X_Email[68]="softmoc312@softmoc.com";

	X_Lat[68]="43.157017";

	X_Lng[68]="-79.167047";

	

	X_ID[69]="62";

	X_Name[69]="SoftMoc Northgate Shopping Centre";

	X_Addr[69]="1500 Fisher St., Unit 141B";

	X_City[69]="North Bay";

	X_State[69]="ON";

	X_Zip[69]="P1B 2H3";

	X_Phone[69]="(705) 476-2022";

	X_Email[69]="softmoc62@softmoc.com";

	X_Lat[69]="46.314535";

	X_Lng[69]="-79.442333";

	

	X_ID[70]="75";

	X_Name[70]="SoftMoc Oakville Place";

	X_Addr[70]="240 Leighland Ave., Unit 243";

	X_City[70]="Oakville";

	X_State[70]="ON";

	X_Zip[70]="L6H 3H6";

	X_Phone[70]="(905) 337-0241";

	X_Email[70]="softmoc75@softmoc.com";

	X_Lat[70]="43.461505";

	X_Lng[70]="-79.687394";

	

	X_ID[71]="47";

	X_Name[71]="SoftMoc Place D'Orleans";

	X_Addr[71]="110 Place D'Orleans Dr., Unit 1060";

	X_City[71]="Orleans";

	X_State[71]="ON";

	X_Zip[71]="K1C 2L9";

	X_Phone[71]="(613) 590-1899";

	X_Email[71]="softmoc47@softmoc.com";

	X_Lat[71]="45.478248";

	X_Lng[71]="-75.516715";

	

	X_ID[72]="6";

	X_Name[72]="SoftMoc Oshawa Centre";

	X_Addr[72]="419 King St. West & Stevenson, Unit#  2160";

	X_City[72]="Oshawa";

	X_State[72]="ON";

	X_Zip[72]="L1J 2K5";

	X_Phone[72]="(905) 436-0707";

	X_Email[72]="softmoc6@softmoc.com";

	X_Lat[72]="43.89088";

	X_Lng[72]="-78.879142";

	

	X_ID[73]="10";

	X_Name[73]="SoftMoc Billings Bridge Mall";

	X_Addr[73]="2269 Riverside Dr., Unit 171";

	X_City[73]="Ottawa";

	X_State[73]="ON";

	X_Zip[73]="K1H 8K2";

	X_Phone[73]="(613) 249-8509";

	X_Email[73]="softmoc10@softmoc.com";

	X_Lat[73]="45.38619";

	X_Lng[73]="-75.678194";

	

	X_ID[74]="11";

	X_Name[74]="SoftMoc Carlingwood Mall";

	X_Addr[74]="2121 Carling Avenue";

	X_City[74]="Ottawa";

	X_State[74]="ON";

	X_Zip[74]="K2A 1H2";

	X_Phone[74]="(613) 722-8447";

	X_Email[74]="softmoc11@softmoc.com";

	X_Lat[74]="45.372521";

	X_Lng[74]="-75.768628";

	

	X_ID[75]="314";

	X_Name[75]="SoftMoc Shoe Rack Kanata Outlets";

	X_Addr[75]="8555  Campeau Drive, Unit 968";

	X_City[75]="Ottawa";

	X_State[75]="ON";

	X_Zip[75]="K2T 0K5";

	X_Phone[75]="(613) 435-2162";

	X_Email[75]="softmoc314@softmoc.com";

	X_Lat[75]="45.298196";

	X_Lng[75]="-75.937757";

	

	X_ID[76]="17";

	X_Name[76]="SoftMoc St. Laurent Shopping Centre";

	X_Addr[76]="1200 Blvd. St. Laurent, Unit# 252";

	X_City[76]="Ottawa";

	X_State[76]="ON";

	X_Zip[76]="K1K 3B8";

	X_Phone[76]="(613) 742-6209";

	X_Email[76]="softmoc17@softmoc.com";

	X_Lat[76]="45.421889";

	X_Lng[76]="-75.639281";

	

	X_ID[77]="60";

	X_Name[77]="SoftMoc Lansdowne Place";

	X_Addr[77]="645 Lansdowne St. West, Unit 143";

	X_City[77]="Peterborough";

	X_State[77]="ON";

	X_Zip[77]="K9J 7Y5";

	X_Phone[77]="(705) 743-9494";

	X_Email[77]="softmoc60@softmoc.com";

	X_Lat[77]="44.283564";

	X_Lng[77]="-78.330873";

	

	X_ID[78]="2";

	X_Name[78]="SoftMoc Pickering Town Centre";

	X_Addr[78]="1355 Kingston Road, Unit 202";

	X_City[78]="Pickering";

	X_State[78]="ON";

	X_Zip[78]="L1V 1B8";

	X_Phone[78]="(905) 831-7281";

	X_Email[78]="softmoc2@softmoc.com";

	X_Lat[78]="43.835788";

	X_Lng[78]="-79.086134";

	

	X_ID[79]="80";

	X_Name[79]="SoftMoc Hillcrest Mall";

	X_Addr[79]="9350 Yonge St., Unit E008";

	X_City[79]="Richmond Hill";

	X_State[79]="ON";

	X_Zip[79]="L4C 5G2";

	X_Phone[79]="(905) 737-2256";

	X_Email[79]="softmoc80@softmoc.com";

	X_Lat[79]="43.854983";

	X_Lng[79]="-79.436731";

	

	X_ID[80]="21";

	X_Name[80]="SoftMoc Scarborough Town Centre";

	X_Addr[80]="300 Borough Drive, Unit 69";

	X_City[80]="Scarborough";

	X_State[80]="ON";

	X_Zip[80]="M1P 4P5";

	X_Phone[80]="(416) 296-9187";

	X_Email[80]="softmoc21@softmoc.com";

	X_Lat[80]="43.776137";

	X_Lng[80]="-79.258815";

	

	X_ID[81]="7";

	X_Name[81]="SoftMoc Pen Centre";

	X_Addr[81]="221 Glendale Ave., Unit 115";

	X_City[81]="St. Catharines";

	X_State[81]="ON";

	X_Zip[81]="L2T 2K9";

	X_Phone[81]="(905) 988-9511";

	X_Email[81]="softmoc7@softmoc.com";

	X_Lat[81]="43.137234";

	X_Lng[81]="-79.224257";

	

	X_ID[82]="302";

	X_Name[82]="SoftMoc Shoe Rack St. Catharines";

	X_Addr[82]="First Pro Garden City, 420 Vansickle Road, Unit 6A";

	X_City[82]="St. Catharines";

	X_State[82]="ON";

	X_Zip[82]="L2R 6P9";

	X_Phone[82]="(905) 988-1671";

	X_Email[82]="softmoc302@softmoc.com";

	X_Lat[82]="43.150925";

	X_Lng[82]="-79.270477";

	

	X_ID[83]="55";

	X_Name[83]="SoftMoc Eastgate Mall";

	X_Addr[83]="75 Centennial Parkway North, Unit C1";

	X_City[83]="Stoney Creek";

	X_State[83]="ON";

	X_Zip[83]="L8E 2P2";

	X_Phone[83]="(905) 560-7483";

	X_Email[83]="softmoc55@softmoc.com";

	X_Lat[83]="43.230766";

	X_Lng[83]="-79.766138";

	

	X_ID[84]="28";

	X_Name[84]="SoftMoc New Sudbury Centre";

	X_Addr[84]="1349 LaSalle Blvd., Unit 51B";

	X_City[84]="Sudbury";

	X_State[84]="ON";

	X_Zip[84]="P3A 1Z2";

	X_Phone[84]="(705) 525-0271";

	X_Email[84]="softmoc28@softmoc.com";

	X_Lat[84]="46.520741";

	X_Lng[84]="-80.947174";

	

	X_ID[85]="26";

	X_Name[85]="SoftMoc Promenade Mall";

	X_Addr[85]="1 Promenade Circle, Unit B233";

	X_City[85]="Thornhill";

	X_State[85]="ON";

	X_Zip[85]="L4J 4P8";

	X_Phone[85]="(905) 886-3787";

	X_Email[85]="softmoc26@softmoc.com";

	X_Lat[85]="43.806349";

	X_Lng[85]="-79.452395";

	

	X_ID[86]="20";

	X_Name[86]="SoftMoc Intercity Shopping Centre";

	X_Addr[86]="1000  Fort Williams Road, Suite 26A";

	X_City[86]="Thunder Bay";

	X_State[86]="ON";

	X_Zip[86]="P7B 6B8";

	X_Phone[86]="(807) 622-2543";

	X_Email[86]="softmoc20@softmoc.com";

	X_Lat[86]="48.403198";

	X_Lng[86]="-89.243002";

	

	X_ID[87]="46";

	X_Name[87]="SoftMoc Bloor St West";

	X_Addr[87]="2266 Bloor St. West";

	X_City[87]="Toronto";

	X_State[87]="ON";

	X_Zip[87]="M6S 1N9";

	X_Phone[87]="(416) 769-7231";

	X_Email[87]="softmoc46@softmoc.com";

	X_Lat[87]="43.650848";

	X_Lng[87]="-79.478153";

	

	X_ID[88]="69";

	X_Name[88]="SoftMoc Dufferin Mall";

	X_Addr[88]="900 Dufferin St., Unit 145";

	X_City[88]="Toronto";

	X_State[88]="ON";

	X_Zip[88]="M6H 4A9";

	X_Phone[88]="(416) 536-3850";

	X_Email[88]="softmoc69@softmoc.com";

	X_Lat[88]="43.656124";

	X_Lng[88]="-79.435342";

	

	X_ID[89]="1";

	X_Name[89]="SoftMoc Toronto Eaton Centre";

	X_Addr[89]="220 Yonge Street, Level 1";

	X_City[89]="Toronto";

	X_State[89]="ON";

	X_Zip[89]="M5B 2H1";

	X_Phone[89]="(416) 595-0112";

	X_Email[89]="softmoc1@softmoc.com";

	X_Lat[89]="43.670751";

	X_Lng[89]="-79.385116";

	

	X_ID[90]="15";

	X_Name[90]="SoftMoc Yonge & Eglinton";

	X_Addr[90]="2299 Yonge St";

	X_City[90]="Toronto";

	X_State[90]="ON";

	X_Zip[90]="M4P 2C6";

	X_Phone[90]="(416) 482-9028";

	X_Email[90]="softmoc15@softmoc.com";

	X_Lat[90]="43.707802";

	X_Lng[90]="-79.398354";

	

	X_ID[91]="63";

	X_Name[91]="SoftMoc Yorkdale Shopping Centre";

	X_Addr[91]="3401 Dufferin Street, Unit 98";

	X_City[91]="Toronto";

	X_State[91]="ON";

	X_Zip[91]="M6A 2T9";

	X_Phone[91]="(416) 787-5212";

	X_Email[91]="softmoc63@softmoc.com";

	X_Lat[91]="43.724505";

	X_Lng[91]="-79.455454";

	

	X_ID[92]="301";

	X_Name[92]="SoftMoc Shoe Rack Vaughan Mills";

	X_Addr[92]="1 Bass Pro Mills Drive, Unit 265";

	X_City[92]="Vaughan";

	X_State[92]="ON";

	X_Zip[92]="L4K 5W4";

	X_Phone[92]="(905) 738-9095";

	X_Email[92]="softmoc301@softmoc.com";

	X_Lat[92]="43.824836";

	X_Lng[92]="-79.534664";

	

	X_ID[93]="64";

	X_Name[93]="SoftMoc Conestoga Mall";

	X_Addr[93]="550 King Street North, Unit B1A";

	X_City[93]="Waterloo";

	X_State[93]="ON";

	X_Zip[93]="N2L 5W6";

	X_Phone[93]="(519) 883-0220";

	X_Email[93]="softmoc64@softmoc.com";

	X_Lat[93]="43.497717";

	X_Lng[93]="-80.526603";

	

	X_ID[94]="99";

	X_Name[94]="SoftMoc Inc.";

	X_Addr[94]="1400 Hopkins Street, Units 3 & 4";

	X_City[94]="Whitby";

	X_State[94]="ON";

	X_Zip[94]="L1N 2C3";

	X_Phone[94]="(905) 665-8119";

	X_Email[94]="softmoc99@softmoc.com";

	X_Lat[94]="43.871562";

	X_Lng[94]="-78.917477";

	

	X_ID[95]="25";

	X_Name[95]="SoftMoc Fairview Mall";

	X_Addr[95]="1800 Sheppard Avenue E., Unit 1018";

	X_City[95]="Willowdale";

	X_State[95]="ON";

	X_Zip[95]="M2J 5A7";

	X_Phone[95]="(416) 497-1717";

	X_Email[95]="softmoc25@softmoc.com";

	X_Lat[95]="43.777201";

	X_Lng[95]="-79.345147";

	

	X_ID[96]="23";

	X_Name[96]="SoftMoc Devonshire Mall";

	X_Addr[96]="3100 Howard Avenue";

	X_City[96]="Windsor";

	X_State[96]="ON";

	X_Zip[96]="N8X 3Y8";

	X_Phone[96]="(519) 250-1298";

	X_Email[96]="softmoc23@softmoc.com";

	X_Lat[96]="42.275141";

	X_Lng[96]="-83.002588";

	

	X_ID[97]="305";

	X_Name[97]="SoftMoc Shoe Rack Charlottetown";

	X_Addr[97]="670 University Avenue, Unit 101";

	X_City[97]="Charlottetown";

	X_State[97]="PE";

	X_Zip[97]="C1E 1H6";

	X_Phone[97]="(902) 892-2038";

	X_Email[97]="softmoc305@softmoc.com";

	X_Lat[97]="46.2647";

	X_Lng[97]="-63.147099";

	

	X_ID[98]="82";

	X_Name[98]="SoftMoc Carrefour Laval";

	X_Addr[98]="3035 Boul. Le Carrefour, Unit H010A";

	X_City[98]="Laval";

	X_State[98]="QC";

	X_Zip[98]="H7T 1C8";

	X_Phone[98]="(450) 934-7463";

	X_Email[98]="softmoc82@softmoc.com";

	X_Lat[98]="45.570358";

	X_Lng[98]="-73.751714";

	

	X_ID[99]="88";

	X_Name[99]="SoftMoc Centre Rockland";

	X_Addr[99]="2305 Chemin Rockland, Unit 1750";

	X_City[99]="Mont-Royal";

	X_State[99]="QC";

	X_Zip[99]="H3P 3E9";

	X_Phone[99]="(514) 419-6697";

	X_Email[99]="";

	X_Lat[99]="45.528684";

	X_Lng[99]="-73.647833";

	

	X_ID[100]="83";

	X_Name[100]="SoftMoc Les Galeries d'Anjou";

	X_Addr[100]="7999 Boul. Les-Galeries-d'Anjou, Unit E011";

	X_City[100]="Montreal";

	X_State[100]="QC";

	X_Zip[100]="H1M 1W9";

	X_Phone[100]="(438) 383-7638";

	X_Email[100]="softmoc83@softmoc.com";

	X_Lat[100]="45.600647";

	X_Lng[100]="-73.56499";

	

	X_ID[101]="87";

	X_Name[101]="SoftMoc St. Bruno";

	X_Addr[101]="1 Boul Des Promenades, Unit L10";

	X_City[101]="St. Bruno";

	X_State[101]="QC";

	X_Zip[101]="J3V 5J5";

	X_Phone[101]="(450) 482-6222";

	X_Email[101]="softmoc87@softmoc.com";

	X_Lat[101]="45.504757";

	X_Lng[101]="-73.378286";

	

	X_ID[102]="74";

	X_Name[102]="SoftMoc Cornwall Centre";

	X_Addr[102]="2102 11th Ave, Unit T035B";

	X_City[102]="Regina";

	X_State[102]="SK";

	X_Zip[102]="S4P 3Y6";

	X_Phone[102]="(306) 757-1035";

	X_Email[102]="softmoc74@softmoc.com";

	X_Lat[102]="50.450472";

	X_Lng[102]="-104.611131";

	

	X_ID[103]="73";

	X_Name[103]="SoftMoc Midtown Plaza";

	X_Addr[103]="201-1st Avenue South, Unit T231A";

	X_City[103]="Saskatoon";

	X_State[103]="SK";

	X_Zip[103]="S7K 1J5";

	X_Phone[103]="(306) 652-0999";

	X_Email[103]="softmoc73@softmoc.com";

	X_Lat[103]="52.12755";

	X_Lng[103]="-106.66715";

	

var X_Num=104;



var CityArray=new Array();



		CityArray[0]="";

		

		CityArray[0]+="\tCalgary";

	

		CityArray[0]+="\tEdmonton";

	

		CityArray[0]+="\tGrande Prairie";

	

		CityArray[0]+="\tLethbridge";

	

		CityArray[0]+="\tMedicine Hat";

	

		CityArray[0]+="\tRed Deer";

	

		CityArray[0]+="\tRocky View";

	

		CityArray[1]="";

		

		CityArray[1]+="\tBurnaby";

	

		CityArray[1]+="\tCoquitlam";

	

		CityArray[1]+="\tKamloops";

	

		CityArray[1]+="\tKelowna";

	

		CityArray[1]+="\tLangley";

	

		CityArray[1]+="\tNanaimo";

	

		CityArray[1]+="\tNew Westminster";

	

		CityArray[1]+="\tPrince George";

	

		CityArray[1]+="\tRichmond";

	

		CityArray[1]+="\tSurrey";

	

		CityArray[1]+="\tVictoria";

	

		CityArray[1]+="\tWest Vancouver";

	

		CityArray[2]="";

		

		CityArray[2]+="\tBrandon";

	

		CityArray[2]+="\tWinnipeg";

	

		CityArray[3]="";

		

		CityArray[3]+="\tDieppe";

	

		CityArray[3]+="\tFredericton";

	

		CityArray[3]+="\tSaint John";

	

		CityArray[4]="";

		

		CityArray[4]+="\tSt. John's";

	

		CityArray[5]="";

		

		CityArray[5]+="\tBedford";

	

		CityArray[5]+="\tDartmouth";

	

		CityArray[5]+="\tHalifax";

	

		CityArray[5]+="\tSydney";

	

		CityArray[6]="";

		

		CityArray[6]+="\tAjax";

	

		CityArray[6]+="\tBarrie";

	

		CityArray[6]+="\tBelleville";

	

		CityArray[6]+="\tBrampton";

	

		CityArray[6]+="\tBrantford";

	

		CityArray[6]+="\tBurlington";

	

		CityArray[6]+="\tCambridge";

	

		CityArray[6]+="\tCookstown";

	

		CityArray[6]+="\tEtobicoke";

	

		CityArray[6]+="\tGuelph";

	

		CityArray[6]+="\tHamilton";

	

		CityArray[6]+="\tKingston";

	

		CityArray[6]+="\tKitchener";

	

		CityArray[6]+="\tLondon";

	

		CityArray[6]+="\tMarkham";

	

		CityArray[6]+="\tMississauga";

	

		CityArray[6]+="\tNepean";

	

		CityArray[6]+="\tNewmarket";

	

		CityArray[6]+="\tNiagara On The Lake";

	

		CityArray[6]+="\tNorth Bay";

	

		CityArray[6]+="\tOakville";

	

		CityArray[6]+="\tOrleans";

	

		CityArray[6]+="\tOshawa";

	

		CityArray[6]+="\tOttawa";

	

		CityArray[6]+="\tPeterborough";

	

		CityArray[6]+="\tPickering";

	

		CityArray[6]+="\tRichmond Hill";

	

		CityArray[6]+="\tScarborough";

	

		CityArray[6]+="\tSt. Catharines";

	

		CityArray[6]+="\tStoney Creek";

	

		CityArray[6]+="\tSudbury";

	

		CityArray[6]+="\tThornhill";

	

		CityArray[6]+="\tThunder Bay";

	

		CityArray[6]+="\tToronto";

	

		CityArray[6]+="\tVaughan";

	

		CityArray[6]+="\tWaterloo";

	

		CityArray[6]+="\tWhitby";

	

		CityArray[6]+="\tWillowdale";

	

		CityArray[6]+="\tWindsor";

	

		CityArray[7]="";

		

		CityArray[7]+="\tCharlottetown";

	

		CityArray[8]="";

		

		CityArray[8]+="\tLaval";

	

		CityArray[8]+="\tMont-Royal";

	

		CityArray[8]+="\tMontreal";

	

		CityArray[8]+="\tSt. Bruno";

	

		CityArray[9]="";

		

		CityArray[9]+="\tRegina";

	

		CityArray[9]+="\tSaskatoon";

	

var NumOfState=10;

function ChangeState()

{

	var Default_City="" +document.SForm1.SearchCity.options[document.SForm1.SearchCity.selectedIndex].value;

	Default_City=Default_City.toLowerCase();

	var Default_City_Pos= -1;

	this.document.SForm1.SearchCity.length=0;

	this.document.SForm1.SearchCity[this.document.SForm1.SearchCity.length]= new Option("SELECT BY CITY", "");

	this.document.SForm1.SearchCity.selectedIndex=0;

	var X=this.document.SForm1.SearchState.selectedIndex;

	if (X > 0)

	{

		var Tmp="";

		for (var i=0; i < CityArray[X-1].length; i++)

		{

			if (CityArray[X-1].substring(i,i+1)=="\t")

			{

				if (Tmp!="")

				{

					this.document.SForm1.SearchCity[this.document.SForm1.SearchCity.length]= new Option(Tmp,Tmp);

					if (Tmp.toLowerCase()==Default_City)

						Default_City_Pos=this.document.SForm1.SearchCity.length-1;

				}

				Tmp="";

			}

			else

				Tmp+=CityArray[X-1].substring(i,i+1);

		}

		if (Tmp!="")

		{

			this.document.SForm1.SearchCity[this.document.SForm1.SearchCity.length]= new Option(Tmp,Tmp);

			if (Tmp.toLowerCase()==Default_City)

				Default_City_Pos=this.document.SForm1.SearchCity.length-1;

		}

	}

	if (Default_City_Pos >= 0)

		this.document.SForm1.SearchCity.selectedIndex=Default_City_Pos;

	GoLocSearch();

}

function GoLocSearch()

{

	FillMap();

	var LocationResultArea=document.getElementById? document.getElementById("LocationResultArea"): document.all.LocationResultArea;

	if (LocationResultArea == null)

		return;

	if (this.document.SForm1.SearchState.selectedIndex <0)

	{

		LocationResultArea.innerHTML = '<br><br><br><br><br>';

		return;

	}

	var State="" +document.SForm1.SearchState.options[document.SForm1.SearchState.selectedIndex].value;

	var City="" +document.SForm1.SearchCity.options[document.SForm1.SearchCity.selectedIndex].value;

	if (document.SForm1.SearchState.selectedIndex<=0)

		State="";

	if (document.SForm1.SearchCity.selectedIndex<=0)

		City="";

	var StartPos=0;

	for (var i=0; i < X_Num; i++)

	{

		if (((X_State[i]==State)||(State==""))  &&  ((X_City[i]==City)||(City=="")))

			break;

		StartPos++;

	}

	var Tmp='<table border="0" cellspacing="10" cellpadding="10" class="text deviceWidth">';

	i= -1;

	for (var j=StartPos; j < X_Num; j++)

	{

		if (((X_State[j]!=State)&&(State!=""))  ||  ((X_City[j]!=City)&&(City!="")))

			break;

		i++;

		if ((i+1) % 5==1)

		{

			if (i!=0)

			{

				Tmp+='</tr>';

			}

			Tmp+='<tr>';

		}

		Tmp+='<table border="0" cellspacing="0" cellpadding="0" class="deviceWidth" align="left"><tr><td class="textResult">'+FormatResult(j)+'</td></tr></table>';

	}

	if (i!=0)

		Tmp+='</tr>';



	Tmp+='</table>';



	if (Tmp!= LocationResultArea.innerHTML)

		LocationResultArea.innerHTML = Tmp;

}

function ChangeTab(Type)

{

	if (Type=="M")

	{

		MapTab.style.display="block";

		FillMap();

		LocationResultAreaTab.style.display="none";

	}

	else

	{

		MapTab.style.display="none";

		LocationResultAreaTab.style.display="block";

	}

}

function FormatResult_Map(i)

{

	var Tmp='<table border="0" cellspacing="3"><tr><td colspan="2"><a href="storehomepage.asp?s=' + X_ID[i] + '" style="line-height:14px;text-decoration:none"><b>';

	Tmp+='<font face="Arial" size="2" color="#740000" >' + X_Name[i]+'</font></b></td></tr>';

	Tmp+='<tr><td><a href="storehomepage.asp?s=' + X_ID[i] + '" style="line-height:14px;text-decoration:none"><font face="Arial" size="1" color="#242424" >';

	Tmp+=X_Addr[i]+'<br>';

	Tmp+=X_City[i]+', '+X_State[i]+'<br>';

	Tmp+=X_Zip[i]+', Canada<br>';

	Tmp+=X_Phone[i]+'<br>';

	if (X_Email[i]!="")

	{

		Tmp+='<a href="mailto:'+X_Email[i]+'"><u>'+X_Email[i]+'</u></a><br>';

	}

	Tmp+='</font>';

	Tmp+='</a></td>';

	Tmp+='<td align="center" ><a href="storehomepage.asp?s=' + X_ID[i] + '" style="line-height:16px;text-decoration:none"><img border="0" src="/img/showstoredetail.gif"></a></td></tr>';

	return Tmp;

}

function FormatResult(i)

{

	var Tmp='<a href="storehomepage.asp?s=' + X_ID[i] + '" style="line-height:16px;text-decoration:none">';

	Tmp+='<font face="Arial" size="2" color="#740000" >' + X_Name[i]+'</font></b><br><font face="Arial" size="1" color="#242424" >';

	Tmp+=X_Addr[i]+'<br>';

	Tmp+=X_City[i]+', '+X_State[i]+'<br>';

	Tmp+=X_Zip[i]+', Canada<br>';

	Tmp+=X_Phone[i]+'<br>';

	if (X_Email[i]!="")

	{

		Tmp+='<a href="mailto:'+X_Email[i]+'"><u>'+X_Email[i]+'</u></a><br>';

	}

	Tmp+='</font>';

	Tmp+='</a>';

	return Tmp;

}