function plotPie2019(){
    var cate_total = 3.345445
    var score = 5.411684
    var gdp_percent = 0.906748 / score
    var social_percent = 1.208568 / score
    var life_percent = 0.725587 / score
    var freedom_percent = 0.393652 / score
    var trust_percent = 0.110890 / score
    var others_percent = 1 - (gdp_percent+social_percent+life_percent+freedom_percent+trust_percent)

    Highcharts.chart('pie2019', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        title: {
            text: '2019',
            align: 'center',
            style: {
                color: 'white',
            },
            x: -95
        },
        legend: {
            align: 'right',
            verticalAlign: 'bottom',
            layout: 'vertical',
            x: -10,
            y:-20,
            itemStyle: {
                color: 'white'
            },
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f} %',
                },
                showInLegend: true
            },
        },
        series: [{
            name: 'Total Sale Percentage',
            data: [{
                name: 'GDP',
                y: 100 * gdp_percent,
                color: '#9C8ADE',
            }, {
                name: 'Social Support',
                y: 100 * social_percent,
                color: '#E17E76',
            }, {
                name: 'Life Expectancy',
                y: 100 * life_percent,
                color: '#E3BAA8',
            }, {
                name: 'Freedom of Choice',
                y: 100 * freedom_percent,
                color: '#AA7B6F', 
            }, {
                name: 'Trust in Government',
                y: 100 * trust_percent,
                color: '#FED797',
            },{
                name: 'Others',
                y: 100 * others_percent,
                color: '#8AC0DE',
            }]
        }]
    });
}



function plotPie2015(){
    var cate_total = 3.0425429999999993
    var score = 5.379943
    var gdp_percent = 0.847713 / score
    var social_percent = 0.991463 / score
    var life_percent = 0.630069 / score
    var freedom_percent = 0.429785 / score
    var trust_percent = 0.143513 / score
    var others_percent = 1 - (gdp_percent+social_percent+life_percent+freedom_percent+trust_percent)

    Highcharts.chart('pie2015', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        title: {
            text: '2015',
            align: 'center',
            style: {
                color: 'white',
            },
            x: 88
        },
        legend: {
            align: 'left',
            verticalAlign: 'bottom',
            layout: 'vertical',
            x: -10,
            y:-20,
            itemStyle: {
                color: 'white'
            },
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f} %',
                },
                showInLegend: true
            },
        },
        series: [{
            name: 'Total Sale Percentage',
            data: [{
                name: 'GDP',
                y: 100 * gdp_percent,
                color: '#9C8ADE',
            }, {
                name: 'Social Support',
                y: 100 * social_percent,
                color: '#E17E76',
            }, {
                name: 'Life Expectancy',
                y: 100 * life_percent,
                color: '#E3BAA8',
            }, {
                name: 'Freedom of Choice',
                y: 100 * freedom_percent,
                color: '#AA7B6F',
            }, {
                name: 'Trust in Government',
                y: 100 * trust_percent,
                color: '#FED797',
            },{
                name: 'Others',
                y: 100 * others_percent,
                color: '#8AC0DE',
            }]
            
        }],
    });
}


function plotPie() {
    var cate_total_2015 = 3.0425429999999993
    var score_2015 = 5.379943
    var gdp_percent_2015 = 0.847713 / score_2015
    var social_percent_2015 = 0.991463 / score_2015
    var life_percent_2015 = 0.630069 / score_2015
    var freedom_percent_2015 = 0.429785 / score_2015
    var trust_percent_2015 = 0.143513 / score_2015
    var others_percent_2015 = 1 - (gdp_percent_2015+social_percent_2015+life_percent_2015+freedom_percent_2015+trust_percent_2015)

    var cate_total = 3.345445
    var score = 5.411684
    var gdp_percent = 0.906748 / score
    var social_percent = 1.208568 / score
    var life_percent = 0.725587 / score
    var freedom_percent = 0.393652 / score
    var trust_percent = 0.110890 / score
    var others_percent = 1 - (gdp_percent+social_percent+life_percent+freedom_percent+trust_percent)

    Highcharts.chart('pies', {
        plotOptions: {
            pie: {
            point: {
                events: {
                legendItemClick: function() {
                    name = this.name;
                    series = this.series.chart.series;
                    Highcharts.each(series, function(ob, j) {
                    Highcharts.each(ob.data, function(p, i) {
                        if (p.name === name) {
                        if (p.visible === true) {
                            p.setVisible(false);
                        } else {
                            p.setVisible(true);
                        }
                        }
                    });
                    });
                    return false;
                }
                }
            }
            }
        },
        series: [{
            showInLegend: true,
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'GDP',
                y: 100 * gdp_percent_2015,
                color: 'rgba(223, 83, 83)',
            }, {
                name: 'Social Support',
                y: 100 * social_percent_2015,
                color: 'rgb(154, 171, 65)',
            }, {
                name: 'Life Expectancy',
                y: 100 * life_percent_2015,
                color: 'rgb(22, 55, 166)',
            }, {
                name: 'Freedom of Choice',
                y: 100 * freedom_percent_2015,
                color: 'rgb(128, 24, 164)',
            }, {
                name: 'Trust in Government',
                y: 100 * trust_percent_2015,
                color: 'rgb(227, 134, 6)',
            }, {
                name: 'Others',
                y: 100 * others_percent_2015,
                color: 'rgb(114, 210, 100)',
            }],
            center: [120, 80],
            size: 200,
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'GDP',
                y: 100 * gdp_percent,
                color: 'rgba(223, 83, 83)',
            }, {
                name: 'Social Support',
                y: 100 * social_percent,
                color: 'rgb(154, 171, 65)',
            }, {
                name: 'Life Expectancy',
                y: 100 * life_percent,
                color: 'rgb(22, 55, 166)',
            }, {
                name: 'Freedom of Choice',
                y: 100 * freedom_percent,
                color: 'rgb(128, 24, 164)',
            }, {
                name: 'Trust in Government',
                y: 100 * trust_percent,
                color: 'rgb(227, 134, 6)',
            }, {
                name: 'Others',
                y: 100 * others_percent,
                color: 'rgb(114, 210, 100)',
            }],
            center: [420, 80],
            size: 200,
        }]
    });
};

  