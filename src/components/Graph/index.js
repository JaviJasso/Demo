import React from "react"
import ReactDOM from "react-dom"
import FusionCharts from "fusioncharts"
// Load the charts module
import charts from "fusioncharts/fusioncharts.charts"
import ReactFC from "react-fusioncharts"
import './index.css'

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

let myDataSource = {
  chart: {
    caption: "My Health",
    subcaption: "2017",
    xaxisname: "Month",
    theme: "ocean"
  },
  categories: [
    {
      category: [
        {
          label: "Jan"
        },
        {
          label: "Feb"
        },
        {
          label: "Mar"
        },
        {
          label: "Apr"
        },
        {
          label: "May"
        },
        {
          label: "Jun"
        },
        {
          label: "Jul"
        },
        {
          label: "Aug"
        },
        {
          label: "Sep"
        },
        {
          label: "Oct"
        },
        {
          label: "Nov"
        },
        {
          label: "Dec"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Mood",
      renderas: "line",
      showvalues: "0",
      data: [
        {
          value: "4"
        },
        {
          value: "8"
        },
        {
          value: "5"
        },
        {
          value: "3"
        },
        {
          value: "9"
        },
        {
          value: "12"
        },
        {
          value: "11"
        },
        {
          value: "16"
        },
        {
          value: "20"
        },
        {
          value: "22"
        },
        {
          value: ""
        },
        {
          value: ""
        }
      ]
    },
    {
      seriesname: "Breakfast",
      renderas: "line",
      showvalues: "0",
      data: [
        {
          value: "20"
        },
        {
          value: "24"
        },
        {
          value: "8"
        },
        {
          value: "12"
        },
        {
          value: "16"
        },
        {
          value: "5"
        },
        {
          value: "16"
        },
        {
          value: "7"
        },
        {
          value: "12"
        },
        {
          value: "7"
        },
        {
          value: ""
        },
        {
          value: ""
        }
      ]
    },  {
        seriesname: "Lunch",
        renderas: "line",
        showvalues: "0",
        data: [
          {
            value: "3"
          },
          {
            value: "9"
          },
          {
            value: "12"
          },
          {
            value: "4"
          },
          {
            value: "2"
          },
          {
            value: "4"
          },
          {
            value: "12"
          },
          {
            value: "8"
          },
          {
            value: "7"
          },
          {
            value: "12"
          },
          {
            value: ""
          },
          {
            value: ""
          }
        ]
      },  {
          seriesname: "Dinner",
          renderas: "line",
          showvalues: "0",
          data: [
            {
              value: "8"
            },
            {
              value: "19"
            },
            {
              value: "14"
            },
            {
              value: "14"
            },
            {
              value: "12"
            },
            {
              value: "14"
            },
            {
              value: "12"
            },
            {
              value: "30"
            },
            {
              value: "27"
            },
            {
              value: "22"
            },
            {
              value: ""
            },
            {
              value: ""
            }
          ]
        },  {
            seriesname: "Exercise",
            renderas: "line",
            showvalues: "0",
            data: [
              {
                value: "31"
              },
              {
                value: "19"
              },
              {
                value: "22"
              },
              {
                value: "15"
              },
              {
                value: "21"
              },
              {
                value: "14"
              },
              {
                value: "11"
              },
              {
                value: "18"
              },
              {
                value: "17"
              },
              {
                value: "12"
              },
              {
                value: ""
              },
              {
                value: ""
              }
            ]
          },  {
              seriesname: "Smoke",
              renderas: "line",
              showvalues: "0",
              data: [
                {
                  value: "1"
                },
                {
                  value: "9"
                },
                {
                  value: "2"
                },
                {
                  value: "4"
                },
                {
                  value: "4"
                },
                {
                  value: "4"
                },
                {
                  value: "1"
                },
                {
                  value: "8"
                },
                {
                  value: "12"
                },
                {
                  value: "12"
                },
                {
                  value: ""
                },
                {
                  value: ""
                }
              ]
            },
     {
        seriesname: "Alcohol",
        renderas: "line",
        showvalues: "0",
        data: [
          {
            value: "0"
          },
          {
            value: "0"
          },
          {
            value: "1"
          },
          {
            value: "4"
          },
          {
            value: "2"
          },
          {
            value: "4"
          },
          {
            value: "1"
          },
          {
            value: "0"
          },
          {
            value: "1"
          },
          {
            value: "1"
          },
          {
            value: ""
          },
          {
            value: ""
          }
        ]
      },
    {
      seriesname: "Sex",
      renderas: "line",
      showvalues: "0",
      data: [
        {
          value: "15"
        },
        {
          value: "9"
        },
        {
          value: "12"
        },
        {
          value: "14"
        },
        {
          value: "12"
        },
        {
          value: "14"
        },
        {
          value: "12"
        },
        {
          value: "18"
        },
        {
          value: "7"
        },
        {
          value: "10"
        },
        {
          value: ""
        },
        {
          value: ""
        }
      ]
    }
  ]
}

let chartConfigs = {
  id: "revenue-profits-chart",
  renderAt: "revenue-profits-chart-container",
  type: "mscombi2d",
  width: "100%",
  height: "60%",
  dataFormat: "json",
  dataSource: myDataSource,
  marginLeft: "10px",
}

export default class Graph extends React.Component {
  render() {
    return (
      <div id="chart-container">
        <ReactFC className="graph" {...chartConfigs} />
      </div>
    )
  }
}
