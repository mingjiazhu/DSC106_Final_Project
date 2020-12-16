function getDataGDP(name) {
    var result = [];
    for (i = 0; i < ranks.length; i++) {
        newList = [];
        newList.push(happiness_score[i]);
        newList.push(name[i])
        result.push(newList)
    }
    return result;
}

function getData2015(name) {
    var result = [];
    for (i = 0; i < ranks_2015.length; i++) {
        newList = [];
        newList.push(happiness_score_2015[i]);
        newList.push(name[i])
        result.push(newList)
    }
    return result;
}

function makeScatter1() {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: "scatter-1",
            width: 855,
            backgroundColor: 'rgb(255, 255, 255)'
        },
        title: {
            text: 'Happiness score and GDP per capita' 
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Happiness score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'GDP per capita'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: ' ',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: '2015',
            color: 'rgb(22, 55, 166, .5)',
            data: getData2015(gdp)
        },
        {
            name: '2019',
            color: 'rgba(223, 83, 83, .5)',
            data: getDataGDP(gdp)
        }]
    });
}

function makeScatter2() {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: "scatter-2",
            width: 855
        },
        title: {
            text: 'Happiness score and social support'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Happiness score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Social support'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: ' ',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: '2015',
            color: 'rgb(22, 55, 166, .5)',
            data: getData2015(social_support)
        },
        {
            name: '2019',
            color: 'rgba(223, 83, 83, .5)',
            data: getDataGDP(social_support)
        }
        ]
    });
}

function makeScatter3() {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: "scatter-3",
            width: 855
        },
        title: {
            text: 'Happiness score and life expectancy'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Happiness score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Life expectancy'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: ' ',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: '2015',
            color: 'rgb(22, 55, 166, .5)',
            data: getData2015(life_expectancy)
        },
        {
            name: '2019',
            color: 'rgba(223, 83, 83, .5)',
            data: getDataGDP(life_expectancy)
        }
        ]
    });
}

function makeScatter4() {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: "scatter-4",
            width: 855
        },
        title: {
            text: 'Happiness score and freedom to make life choices'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Happiness score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Freedom to make life choices'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: ' ',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: '2015',
            color: 'rgb(22, 55, 166, .5)',
            data: getData2015(freedom)
        },
        {
            name: '2019',
            color: 'rgba(223, 83, 83, .5)',
            data: getDataGDP(freedom)
        }
        ]
    });
}

function makeScatter5() {
    var chart = new Highcharts.Chart({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            renderTo: "scatter-5",
            width: 855
        },
        title: {
            text: 'Happiness score and trust in government'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Happiness score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Trust in government'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: ' ',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: '2015',
            color: 'rgb(22, 55, 166, .5)',
            data: getData2015(trust)
        },
        {
            name: '2019',
            color: 'rgba(223, 83, 83, .5)',
            data: getDataGDP(trust)
        }
        ]
    });
}

function getRankData() {
    var result = []
    for (i = 0; i < rankList.length; i++) {
        var newDict = [];
        var newList = [];
        newList.push(gdpList[i]);
        newList.push(socialList[i]);
        newList.push(lifeList[i]);
        newList.push(freedomList[i]);
        newList.push(trustList[i]);
        newDict.push({
            text: countryList[i],
            rank: rankList[i],
            ranks: newList
        });
        result.push(newDict);
    }
    return result;
}

function makeRank2019() {
    let myChart = 'rankschar';

    // CHART CONFIG
    // -----------------------------
    let chartConfig = {
      type: 'rankflow',
      theme: 'classic',
      backgroundColor: '#FFFFFF',
      title: {
        text: 'Rank of happiness scores and factors 2019',
        backgroundColor: '#333'
      },
      options: {
        colorType: 'palette',
        palette: ['#F05133', '#F0163A', '#000000', '#CE1138', '#146AA2', '#e65f20', '#FFCC33', '#0b60ad', '#50c878', '#002b5c', '#fdb827', '#7399C6', '#4A2583', '#753BBD', '#00275D'],
        style: {
          labelOverall: {
            text: 'Rank of happiness score'
          },
          itemOverall: {
            fontWeight: 'bold'
          }
        }
      },
      plotarea: {
        margin: '45px 20px 20px 30px'
      },
      scaleX: {
        values: ['GDP per capita', 'Social support', 'Life expectancy', 'Freedom to make life choices', 'Trust in government'],
        item: {
          fontColor: '#000'
        },
        labels: ['GDP per capita', 'Social support', 'Life expectancy', 'Freedom', 'Trust in government']
      },
      series: chartData
    };

    // RENDER CHARTS
    // -----------------------------
    zingchart.render({
      id: myChart,
      data: chartConfig
    })
}

function makeRank2015() {
    let myChart = 'rankschar';

    // CHART CONFIG
    // -----------------------------
    let chartConfig = {
      type: 'rankflow',
      theme: 'classic',
      backgroundColor: '#FFFFFF',
      title: {
        text: 'Rank of happiness scores and factors 2015',
        backgroundColor: '#333'
      },
      options: {
        colorType: 'palette',
        palette: ['#F05133', '#F0163A', '#000000', '#CE1138', '#146AA2', '#e65f20', '#FFCC33', '#0b60ad', '#50c878', '#002b5c', '#fdb827', '#7399C6', '#4A2583', '#753BBD', '#00275D'],
        style: {
          labelOverall: {
            text: 'Rank of happiness score'
          },
          itemOverall: {
            fontWeight: 'bold'
          }
        },
      },
      plotarea: {
        margin: '45px 20px 20px 30px'
      },
      scaleX: {
        values: ['GDP per capita', 'Social support', 'Life expectancy', 'Freedom to make life choices', 'Trust in government'],
        item: {
          fontColor: '#000'
        },
        labels: ['GDP per capita', 'Social support', 'Life expectancy', 'Freedom', 'Trust in government']
      },
      series: chartData_2015
    };

    // RENDER CHARTS
    // -----------------------------
    zingchart.render({
      id: myChart,
      data: chartConfig
    })
}