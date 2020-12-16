function polarChart2015(){
    Highcharts.chart('polar-2015', {
        
        chart: {
            polar: true,
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginBottom: 50
        },
    
        title: {
            text: 'Attributes of Happiness 2015',
            style: {
                color: 'white',
            }
        },
    
        pane: {
            size: '100%'
        },
        xAxis: {
            categories: ['GDP', 'Social Support', 'Life Expectancy', 'Freedom of Choice', 'Trust in Government'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            itemStyle: {
                color: 'white'
            }
        },

        credits: {
            enabled: false
        },
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '10%'
                    }
                }
            }]
        },
        series: (function() {
            var series_2015 = []
    
            for (var i = 0; i < 10; i++) {
                series_2015.push({
                    name: countries_2015[i],
                    data: spider_2015[i]
                });
            }
    
            return series_2015;
        }())
    });
}
function polarChart2019(){
    Highcharts.chart('polar-2019', {

        chart: {
            polar: true,
            type: 'column',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginBottom: 50
        },
    
        title: {
            text: 'Attributes of Happiness 2019',
            style: {
                color: 'white',
            }
        },
    
        pane: {
            size: '100%'
        },
        xAxis: {
            categories: ['GDP', 'Social Support', 'Life Expectancy', 'Freedom of Choice', 'Trust in Government'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            itemStyle: {
                color: 'white'
            }
        },

        credits: {
            enabled: false
        },
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '10%'
                    }
                }
            }]
        },
        series: (function() {
            var series = []
    
            for (var i = 0; i < 10; i++) {
                series.push({
                    name: countries[i],
                    data: spider[i]
                });
            }
    
            return series;
        }())
    });
}

