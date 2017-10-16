import React from "react"
import ReactDOM from "react-dom"
import FusionCharts from "fusioncharts"
// Load the charts module
import charts from "fusioncharts/fusioncharts.charts"
import ReactFC from "react-fusioncharts"

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

let myDataSource = {
  chart: {
    caption: "My Health",
    subcaption: "Last year",
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
      seriesname: "Exercise",
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
          value: "28"
        },
        {
          value: "13"
        }
      ]
    },
    {
      seriesname: "Smoking",
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
          value: "4"
        },
        {
          value: "2"
        }
      ]
    },
    {
      seriesname: "Sex",
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
          value: "9"
        },
        {
          value: "5"
        }
      ]
    }
  ]
}

let chartConfigs = {
  id: "revenue-profits-chart",
  renderAt: "revenue-profits-chart-container",
  type: "mscombi2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: myDataSource
}

export default class Graph extends React.Component {
  render() {
    return (
      <div id="chart-container">
        <ReactFC {...chartConfigs} />
        {/* <ReactFC {...revenueChartConfigs} /> */}
      </div>
    )
  }
}
