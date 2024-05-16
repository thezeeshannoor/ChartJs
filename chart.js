//Chart Pie
let myChart = document.getElementById('myChart');
//dynmic data passing
const data=[
    {
        label:2020,pop:227196741
    },
    {
        label:2021,pop:231402117
    },
    {
        label:2022,pop:235824862
    },
    {
        label:2023,pop:240485658
    },
    {
        label:2024,pop:245209815
    }
]
let chart=new Chart(myChart,{
  type:'pie',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
  data:{
      labels:data.map(lab=>lab.label),
      datasets:[{
      
          label:'Population of Pakistan',
          data:data.map(lab=>lab.pop),
          // backgroundColor:['red','green','blue','yellow','black']
      }]
  },
//   options: {
//       plugins: {
//           title: {
//               display: true,
//             //   text: 'Population Of Pakistan',
//             //   padding:{
//             //       top:10,
//             //       bottom:10,
//             //   },
//               font: {
//           size: 50,
//           style: 'italic',
//           family: 'Helvetica Neue'
//         }
//           }
//       }
//   }
});

// Chartline
//static data passing
let chartLine=document.getElementById("chartLine");
let chartLi=new Chart(chartLine,{
  type:'line',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
  data:{
      labels:["2020","2021","2022","2023","2024"],
      datasets:[{
          label:'Population of Pakistan',
          data:[227196741,231402117,235824862,240485658,245209815],
          // backgroundColor:['red','green','blue','yellow','black']
      }]
  },

});

//chartBar
let chartBar=document.getElementById("chartBar");
let chartB=new Chart(chartBar,{
  type:'bar',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
  data:{
      labels:["2020","2021","2022","2023","2024"],
      datasets:[{
          label:'Population of Pakistan',
          data:[227196741,231402117,235824862,240485658,245209815],
          // backgroundColor:['red','green','blue','yellow','black']
      }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: false,
       
      }
    }
  },
 
});

//chartDoughnut
let chartDoughnut=document.getElementById("chartDoughnut");
let chartD=new Chart(chartDoughnut,{
    type:'doughnut',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
    data:{
        labels:["2020","2021","2022","2023","2024"],
        datasets:[{
            label:'Population of Pakistan',
            data:[227196741,231402117,235824862,240485658,245209815],
            // backgroundColor:['red','green','blue','yellow','black']
        }]
    },
  });
  
//chartPolarArea
let chartPolarArea=document.getElementById("chartPolarArea");
let chartP=new Chart(chartPolarArea,{
    type:'polarArea',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
    data:{
        labels:["2020","2021","2022","2023","2024"],
        datasets:[{
            label:'Population of Pakistan',
            data:[227196741,231402117,235824862,240485658,245209815],
            // backgroundColor:['red','green','blue','yellow','black']
        }]
    },
  });

  //radarChart
  let chartRadar=document.getElementById("chartRadar");
    let chartR=new Chart(chartRadar,{
        type:'radar',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
        data:{
            labels:["2020","2021","2022","2023","2024"],
            datasets:[{
                label:'Population of Pakistan',
                data:[227196741,231402117,235824862,240485658,245209815],
                // backgroundColor:['red','green','blue','yellow','black']
            }]
        },
    });