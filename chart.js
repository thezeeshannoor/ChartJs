let myChart = document.getElementById('myChart');
let chart=new Chart(myChart,{
  type:'pie',//bar,horizontalBar,pie,line,doughnut,raddar,pollarArea
  data:{
      labels:["2020","2021","2022","2023","2024"],
      datasets:[{
          label:'Population of Pakistan',
          data:[227196741,231402117,235824862,240485658,245209815],
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

// line
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
 
})