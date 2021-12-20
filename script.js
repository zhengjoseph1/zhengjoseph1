
function getAPIKey() {
  let apkinput = "Please enter APiKey.";
  APIkey = prompt(apkinput);
  return APIkey;
}


getAPIKey(); 

function supersector_code(codevalue) 
{ 
  console.log(codevalue)
  if (APIkey == 0) {
    return null
  }

  let finalurl = ("https://api.bls.gov/publicAPI/v2/timeseries/data/"+"CEU"+ codevalue + "00000001"+ "?registrationkey=" + APIkey)
  console.log(finalurl)
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open("GET", finalurl)
  xhr.send();


  var graphdata = [];
    function responseReceivedHandler() {
      if (this.status == 200) {
          var dataArray = this.response.Results.series[0].data;
          for (let i = 0; i < dataArray.length; i++) {
            graphdata.push(dataArray[i].value);
          }
      } else {
          console.log("A response could not be received.");
      }
  }
  return graphdata;
}

var Total_nonfarm = supersector_code("00");
var Total_private = supersector_code("05");
var Goods_producing = supersector_code("06"); 
var Service_providing = supersector_code("07"); 
var Private_service_providing = supersector_code("08"); 
var Mining_and_logging = supersector_code("10"); 
var Construction = supersector_code("20"); 
var Manufacturing = supersector_code("30"); 
var Durable_Goods = supersector_code("31"); 
var Nondurable_Goods = supersector_code("32"); 
var Trade_transportation_and_utilitiess = supersector_code("40"); 0
var Wholesale_trade = supersector_code("41"); 
var Retail_trade = supersector_code("42"); 
var Transportation_and_warehousing= supersector_code("43"); 
var Utilities = supersector_code("44"); 
var Information = supersector_code("50"); 
var Financial_activities = supersector_code("55"); 
var Professional_and_business_services = supersector_code("60"); 
var Education_and_health_services = supersector_code("65"); 
var Leisure_and_hospitality = supersector_code("70"); 
var Other_services = supersector_code("80");
var Government = supersector_code("90"); 




const labels =["01/2019","02/2019","03/2019","04/2019","05/2019",
"06/2019","07/2019","08/2019","09/2019","10/2019","11/2019",
"12/2019","01/2020","02/2020","03/2020","04/2020","05/2020",
"06/2020","07/2020","08/2020","09/2020","10/2020","11/2020",
"12/2020","01/2021","02/2021","03/2021","04/2021","05/2021",
"06/2021","07/2021","08/2021","09/2021","10/2021","11/2021"];
//    console.log("labels");
//    console.log(labels);

// These are colors from chart.js utils
    const CHART_COLORS = {
      red: 'rgb(255, 99, 132, 0.5)',
      orange: 'rgb(255, 159, 64, 0.5)',
      yellow: 'rgb(255, 205, 86, 0.5)',
      green: 'rgb(75, 192, 192, 0.5)',
      blue: 'rgb(54, 162, 235, 0.5)',
      purple: 'rgb(153, 102, 255, 0.5)',
      grey: 'rgb(201, 203, 207, 0.5)',
      Aqua: 'rgb(0,255,255)',
      Aquamarine: 'rgb(127,255,212)',
      Brown: 'rgb(165,42,42)',
      Chocolate: "rgb(210,105,30)",
      CornflowerBlue: 'rgb(100,149,237)',
      Crimson: 'rgb(220,20,60)',
      Cyan: 'rgb(0,255,255)',
      DarkGoldenRod: 'rgb(184,134,11)',
      DarkMagenta: 'rgb(139,0,139)',
      DarkOrange: 'rgb(255,140,0)',
      DarkOrchid : "rgb(153,50,204)",
      DarkRed: 'rgb(139,0,0)',
      HotPink: 'rgb(255,105,180)',
      Lime: "rgb(0,255,0)"

    };
//    console.dir(CHART_COLORS);

    const CHART_COLORS_50_Percent = {
      red: 'rgba(255, 99, 132, 0.5)',
      orange: 'rgba(255, 159, 64, 0.5)',
      yellow: 'rgba(255, 205, 86, 0.5)',
      green: 'rgba(75, 192, 192, 0.5)',
      blue: 'rgba(54, 162, 235, 0.5)',
      purple: 'rgba(153, 102, 255, 0.5)',
      grey: 'rgba(201, 203, 207, 0.5)',
      Aqua: 'rgb(0,255,255, 0.5)',
      Aquamarine: 'rgb(127,255,212, 0.5)',
      Brown: 'rgb(165,42,42, 0.5)',
      Chocolate: 'rgb(210,105,30, 0.5)',
      CornflowerBlue: 'rgb(100,149,237, 0.5)',
      Crimson: 'rgb(220,20,60, 0.5)',
      Cyan: 'rgb(0,255,255, 0.5)',
      DarkGoldenRod: 'rgb(184,134,11, 0.5)',
      DarkMagenta: 'rgb(139,0,139, 0.5)',
      DarkOrange: 'rgb(255,140,0, 0.5)',
      DarkOrchid : "rgb(153,50,204, 0.5)",
      DarkRed: 'rgb(139,0,0, 0.5)',
      HotPink: 'rgb(255,105,180, 0.5)',
      Lime: "rgb(0,255,0, 0.5)"

    };
//    console.log(CHART_COLORS_50_Percent);
//    end utils

  const data = {
      labels: labels,
      datasets: [
        {
          label: 'Total Nonfarm',
          data: Total_nonfarm,
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS_50_Percent.red,
          hidden: true
        },

        {
          label: 'Total Private',
          data: Total_private,
          borderColor: CHART_COLORS.orange,
          backgroundColor: CHART_COLORS_50_Percent.orange,
          hidden: true
        },

        {
          label: 'Goods Producing',
          data: Goods_producing,
          borderColor: CHART_COLORS.yellow,
          backgroundColor: CHART_COLORS_50_Percent.yellow,
          hidden: true
        },

        {
          label: 'Service Providing',
          data: Service_providing,
          borderColor: CHART_COLORS.green,
          backgroundColor: CHART_COLORS_50_Percent.green,
          hidden: true
        },

        {
          label: 'Private Service Providing',
          data: Private_service_providing,
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS_50_Percent.blue,
          hidden: true
        },

        {
          label: 'Mining and logging',
          data: Mining_and_logging,
          borderColor: CHART_COLORS.purple,
          backgroundColor: CHART_COLORS_50_Percent.purple,
          hidden: true
        }
        ,
        {
          label: "Construction",
          data: Construction,
          borderColor: CHART_COLORS.grey,
          backgroundColor: CHART_COLORS_50_Percent.grey,
          hidden: true
        },

        {
          label: "Manufacturing",
          data: Manufacturing,
          borderColor: CHART_COLORS.Aqua,
          backgroundColor: CHART_COLORS_50_Percent.Aqua,
          hidden: true
        },

        {
          label: "Durable Goods",
          data: Durable_Goods,
          borderColor: CHART_COLORS.Aquamarine,
          backgroundColor: CHART_COLORS_50_Percent.Aquamarine,
          hidden: true
        },

        {
          label: "Nondurable Goods",
          data: Nondurable_Goods,
          borderColor: CHART_COLORS.Brown,
          backgroundColor: CHART_COLORS_50_Percent.Brown,
          hidden: true
        },

        {
          label: "Trade Transportation and Utilitiess",
          data: Trade_transportation_and_utilitiess,
          borderColor: CHART_COLORS.Chocolate,
          backgroundColor: CHART_COLORS_50_Percent.Chocolate,
          hidden: true
        },

        {
          label: "Wholesale Trade",
          data: Wholesale_trade,
          borderColor: CHART_COLORS.CornflowerBlue,
          backgroundColor: CHART_COLORS_50_Percent.CornflowerBlue,
          hidden: true
        },
        
        {

          label: "Transportation and Warehousing",
          data: Transportation_and_warehousing,
          borderColor: CHART_COLORS.Crimson,
          backgroundColor: CHART_COLORS_50_Percent.Crimson,
          hidden: true
        },

        {
          label: "Utilities",
          data: Utilities,
          borderColor: CHART_COLORS.Cyan,
          backgroundColor: CHART_COLORS_50_Percent.Cyan,
          hidden: true
        },

        {
          label: "Information",
          data: Information,
          borderColor: CHART_COLORS.DarkGoldenRod,
          backgroundColor: CHART_COLORS_50_Percent.DarkGoldenRod,
          hidden: true
        },

        {
          label: "Financial Activities",
          data: Financial_activities,
          borderColor: CHART_COLORS.DarkMagenta,
          backgroundColor: CHART_COLORS_50_Percent.DarkMagenta,
          hidden: true
        },

        {
          label: "Professional and Business Services",
          data: Professional_and_business_services,
          borderColor: CHART_COLORS.DarkOrange,
          backgroundColor: CHART_COLORS_50_Percent.DarkOrange,
          hidden: true
        },

        {
          label: "Education and Health Services",
          data: Education_and_health_services,
          borderColor: CHART_COLORS.DarkOrchid,
          backgroundColor: CHART_COLORS_50_Percent.DarkOrchid,
          hidden: true
        },

        {
          label: "Leisure and Hospitality",
          data: Leisure_and_hospitality,
          borderColor: CHART_COLORS.DarkRed,
          backgroundColor: CHART_COLORS_50_Percent.DarkRed,
          hidden: true
        },

        {
          label: "Other Services",
          data: Other_services,
          borderColor: CHART_COLORS.HotPink,
          backgroundColor: CHART_COLORS_50_Percent.HotPink,
          hidden: true
        },

        {
          label: 'Government',
          data: Government,
          borderColor: CHART_COLORS.Lime,
          backgroundColor: CHART_COLORS_50_Percent.Lime,
          hidden: true
        }
      ]
    };
  //  console.dir(data);

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      }
    };
//    console.log(config);

    const myChart = new Chart(
      document.getElementById('myChart'),
        config);
//    console.dir(myChart);
//    console.log("Ending");
