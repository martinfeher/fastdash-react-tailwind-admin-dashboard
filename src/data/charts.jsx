  export const optionsUniqueVisitors = {
    redrawOnParentResize: true,
    xaxis: {
      categories: ['Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15', 'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15'],
    },
  };

  export const optionsUniqueVisitorsDark = {
    chart: {
      background: "#00000000",
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    xaxis: {
      categories: [
        "Jan 15",
        "Feb 15",
        "Mar 15",
        "Apr 15",
        "May 15",
        "Jun 15",
        "Jul 15",
        "Aug 15",
        "Sep 15",
        "Oct 15",
      ],
    },
  };

  export const seriesUniqueVisitors = [
    {
      name: "Unique visitors",
      data: [18954, 18756, 19351, 19875, 21347, 20987, 22469, 22398, 23589, 24343]
    }
  ];



  
  export const optionsTrafficSource  = {
    labels: ['Google', 'Referal', 'Email', 'Social media'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    fill: {
      colors: ['#77F', '#7fffd4', '#daa520', '#b22222']
    },
    plotOptions: {
      pie: {
        donut: {
          size: '78%'
        }
      }
    }
  };

  export const optionsTrafficSourceDark = {
    labels: ['Google', 'Referal', 'Email', 'Social media'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    fill: {
      colors: ['#77F', '#7fffd4', '#daa520', '#b22222']
    },
    plotOptions: {
      pie: {
        donut: {
          size: '78%'
        }
      }
    },
    chart: {
      background: '#00000000'
    },
    theme: {
      mode: 'dark', 
    },
  };

  export const seriesTrafficSource = [8256, 5478, 4871, 3926]



  
  export const data30dCardWebsiteTraffic = [
  {
    name: 'range A',
    value: 3780,
  },
  {
    name: 'range B',
    value: 3000,
  },
  {
    name: 'range C',
    value: 3000,
  },
  {
    name: 'range D',
    value: 3780,
  },
  {
    name: 'range E',
    value: 3890,
  },
  {
    name: 'range F',
    value: 3390,
  }
];

export const data30dCardConversion = [
  {
    name: 'range A',
    value: 1564,
  },
  {
    name: 'range B',
    value: 1498,
  },
  {
    name: 'range C',
    value: 1689,
  },
  {
    name: 'range D',
    value: 1723,
  },
  {
    name: 'range E',
    value: 1659,
  },
  {
    name: 'range F',
    value: 1864,
  }
];


export const data30dCardSessiondurationMinutes = [
  {
    name: 'range A',
    value: 15,
  },
  {
    name: 'range B',
    value: 17,
  },
  {
    name: 'range C',
    value: 16,
  },
  {
    name: 'range D',
    value: 17,
  },
  {
    name: 'range E',
    value: 18,
  },
  {
    name: 'range F',
    value: 20,
  }
];


export const data30dCardBounce = [
  {
    name: 'range A',
    value: 1284,
  },
  {
    name: 'range B',
    value: 1168,
  },
  {
    name: 'range C',
    value: 1479,
  },
  {
    name: 'range D',
    value: 1583,
  },
  {
    name: 'range E',
    value: 1499,
  },
  {
    name: 'range F',
    value: 1684,
  }
];

export const dataNewReturning = [ 
  {
    'label': "New",
    'value': 14931,
    'percentage': 61,
    'color': '#6495ed',
  },
  {
    'label': "Returning",
    'value': 9442,
    'percentage': 39,
    'color': '#60cd60',
  }
]

export const dataGender = [ 
  {
    'label': "Men",
    'value': 12032,
    'percentage': 47,
    'color': '#0d9488',
  },
  {
    'label': "Women",
    'value': 12401,
    'percentage': 53,
    'color': '#2dd4bf',
  }
]

export const dataLanguage = [ 
  {
    'label': "English",
    'value': 9018,
    'percentage': 37,
    'color': '#155e75',
  },
  {
    'label': "Other",
    'value': 15355,
    'percentage': 63,
    'color': '#22d3ee',
  }
]

export const dataAge = [ 
  {
    'label': "Under...",
    'value': 9993,
    'percentage': 41,
    'color': '#f59e0b',
  },
  {
    'label': "Over...",
    'value': 14380,
    'percentage': 59,
    'color': '#c2410c',
  }
]

// End Analytics page

// Crm page

export const optionsEmailSent  = {
  labels: ['Opened', 'Not opened'],
  legend: {
    show: false
  },
  fill: {
    colors: ['#77F', '#BBF']
  },
  plotOptions: {
    pie: {
      donut: {
        size: '78%'
      }
    }
  },
  tooltip: {
    y: {
      formatter: function(value, opts) {
          return value.toString() + '%'
      },
    },
}
};

export const seriesEmailSent = [71, 29]

// Charts
export const optionsLine = {
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  colors: ["#77B6EA", "#54c454"],
  theme: {
    mode: 'light', 
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    row: {
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    min: 5,
    max: 40,
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
  },
};

export const optionsLineDark = {
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
    background: '#00000000'
  },
  theme: {
    mode: 'dark', 
  },
  colors: ["#77B6EA", "#54c454"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    row: {
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    min: 5,
    max: 40,
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
  },
};

export const seriesLine = [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
]

export const seriesBarStacked = [
  {
    'name': 'Q1 Budget',
    'group': 'budget',
    'data': [44000, 55000, 41000, 67000, 22000, 43000]
  },
  {
    'name': 'Q1 Actual',
    'group': 'actual',
    'data': [48000, 50000, 40000, 65000, 25000, 40000]
  },
  {
    'name': 'Q2 Budget',
    'group': 'budget',
    'data': [13000, 36000, 20000, 8000, 13000, 27000]
  },
  {
    'name': 'Q2 Actual',
    'group': 'actual',
    'data': [20000, 40000, 25000, 10000, 12000, 28000]
  }
]

export const optionsBarStacked = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: [
        'Online advertising',
        'Sales Training',
        'Print advertising',
        'Catalogs',
        'Meetings',
        'Public relations'
      ]
    },
    fill: {
      opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
      labels: {
        formatter: (val) => {
          return val / 1000 + 'K'
        }
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    }
  }


  
export const optionsBarStackedDark = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    background: '#00000000'
  },
  theme: {
    mode: 'dark', 
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: [
      'Online advertising',
      'Sales Training',
      'Print advertising',
      'Catalogs',
      'Meetings',
      'Public relations'
    ]
  },
  fill: {
    opacity: 1
  },
  colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
  yaxis: {
    labels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center'
  }
}

export const seriesAreaSpline = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

export const optionsAreaSpline = {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

export const optionsAreaSplineDark = {
  chart: {
    height: 350,
    type: 'area',
    background: '#00000000',
  },
  theme: {
    mode: 'dark', 
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

export const seriesRadar = [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}]

export const optionsRadar = {
  chart: {
    height: 350,
    type: "radar",
  },
  theme: {
    mode: 'light', 
    palette: 'palette1', 
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
};

export const optionsRadarDark = {
  chart: {
    height: 350,
    type: "radar",
    background: '#00000000',
  },
  theme: {
    mode: 'dark', 
    palette: 'palette1', 
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.4,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
};