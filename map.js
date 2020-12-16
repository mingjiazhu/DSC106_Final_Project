function plotMap2019() {
    // var data = [
    //     ['fi', 7.769],
    //     ['dk', 7.6],
    //     ['no', 7.553999999999999],
    //     ['is', 7.494],
    //     ['nl', 7.4879999999999995],
    //     ['ch', 7.48],
    //     ['se', 7.343],
    //     ['nz', 7.307],
    //     ['ca', 7.278],
    //     ['at', 7.246],
    //     ['au', 7.228],
    //     ['cr', 7.167000000000001],
    //     ['il', 7.138999999999999],
    //     ['lu', 7.09],
    //     ['gb', 7.053999999999999],
    //     ['ie', 7.021],
    //     ['de', 6.985],
    //     ['be', 6.922999999999999],
    //     ['us', 6.892],
    //     ['cz', 6.852],
    //     ['ae', 6.825],
    //     ['mt', 6.726],
    //     ['mx', 6.595],
    //     ['fr', 6.5920000000000005],
    //     ['tw', 6.446000000000001],
    //     ['cl', 6.444],
    //     ['gt', 6.436],
    //     ['sa', 6.375],
    //     ['qa', 6.374],
    //     ['es', 6.354],
    //     ['pa', 6.321000000000001],
    //     ['br', 6.3],
    //     ['uy', 6.292999999999999],
    //     ['sg', 6.2620000000000005],
    //     ['sv', 6.252999999999999],
    //     ['it', 6.223],
    //     ['bh', 6.199],
    //     ['sk', 6.1979999999999995],
    //     ['tt', 6.192],
    //     ['pl', 6.182],
    //     ['uz', 6.1739999999999995],
    //     ['lt', 6.149],
    //     ['co', 6.125],
    //     ['si', 6.117999999999999],
    //     ['ni', 6.105],
    //     ['kv', 6.1],
    //     ['ar', 6.086],
    //     ['ro', 6.07],
    //     ['cy', 6.046],
    //     ['ec', 6.028],
    //     ['kw', 6.021],
    //     ['th', 6.007999999999999],
    //     ['lv', 5.94],
    //     ['kr', 5.895],
    //     ['ee', 5.893],
    //     ['jm', 5.89],
    //     ['mu', 5.888],
    //     ['jp', 5.886],
    //     ['hn', 5.86],
    //     ['kz', 5.809],
    //     ['bo', 5.779],
    //     ['hu', 5.757999999999999],
    //     ['py', 5.742999999999999],
    //     ['nc', 5.718],
    //     ['pe', 5.697],
    //     ['pt', 5.693],
    //     ['pk', 5.653],
    //     ['ru', 5.648],
    //     ['ph', 5.631],
    //     ['rs', 5.603],
    //     ['md', 5.529],
    //     ['ly', 5.525],
    //     ['me', 5.523],
    //     ['tj', 5.4670000000000005],
    //     ['hr', 5.432],
    //     ['hk', 5.43],
    //     ['do', 5.425],
    //     ['ba', 5.386],
    //     ['tr', 5.372999999999999],
    //     ['my', 5.3389999999999995],
    //     ['by', 5.3229999999999995],
    //     ['gr', 5.287000000000001],
    //     ['mn', 5.285],
    //     ['mk', 5.274],
    //     ['ng', 5.265],
    //     ['kg', 5.261],
    //     ['tm', 5.247000000000001],
    //     ['dz', 5.211],
    //     ['ma', 5.207999999999999],
    //     ['az', 5.207999999999999],
    //     ['lb', 5.197],
    //     ['id', 5.192],
    //     ['cn', 5.191],
    //     ['vn', 5.175],
    //     ['bt', 5.082],
    //     ['cm', 5.044],
    //     ['bg', 5.011],
    //     ['gh', 4.996],
    //     ['ci', 4.944],
    //     ['np', 4.913],
    //     ['jo', 4.906000000000001],
    //     ['bj', 4.883],
    //     ['cg', 4.812],
    //     ['ga', 4.7989999999999995],
    //     ['la', 4.796],
    //     ['za', 4.7219999999999995],
    //     ['al', 4.718999999999999],
    //     ['ve', 4.707],
    //     ['kh', 4.7],
    //     ['sn', 4.681],
    //     ['so', 4.668],
    //     ['na', 4.638999999999999],
    //     ['ne', 4.628],
    //     ['bf', 4.587],
    //     ['am', 4.559],
    //     ['ir', 4.548],
    //     ['gn', 4.534],
    //     ['ge', 4.519],
    //     ['gm', 4.516],
    //     ['ke', 4.5089999999999995],
    //     ['mr', 4.49],
    //     ['mz', 4.466],
    //     ['tn', 4.461],
    //     ['bd', 4.456],
    //     ['iq', 4.437],
    //     ['cd', 4.418],
    //     ['ml', 4.39],
    //     ['sl', 4.374],
    //     ['lk', 4.3660000000000005],
    //     ['mm', 4.36],
    //     ['td', 4.35],
    //     ['ua', 4.332],
    //     ['et', 4.2860000000000005],
    //     ['sz', 4.212],
    //     ['ug', 4.189],
    //     ['eg', 4.166],
    //     ['zm', 4.107],
    //     ['tg', 4.085],
    //     ['in', 4.015],
    //     ['lr', 3.975],
    //     ['km', 3.9730000000000003],
    //     ['mg', 3.9330000000000003],
    //     ['ls', 3.802],
    //     ['bi', 3.775],
    //     ['zw', 3.6630000000000003],
    //     ['ht', 3.597],
    //     ['bw', 3.488],
    //     ['sy', 3.4619999999999997],
    //     ['mw', 3.41],
    //     ['ye', 3.38],
    //     ['rw', 3.3339999999999996],
    //     ['tz', 3.2310000000000003],
    //     ['af', 3.2030000000000003],
    //     ['cf', 3.083],
    //     ['ss', 2.853]
    // ];

    var data = [
        ['fi', 2],
        ['dk', 2],
        ['no', 2],
        ['is', 2],
        ['nl', 2],
        ['ch', 2],
        ['se', 2],
        ['nz', 2],
        ['ca', 2],
        ['at', 2],
        ['au', 2],
        ['cr', 2],
        ['il', 2],
        ['lu', 1],
        ['gb', 2],
        ['ie', 2],
        ['de', 2],
        ['be', 2],
        ['us', 2],
        ['cz', 2],
        ['ae', 1],
        ['mt', 2],
        ['mx', 2],
        ['fr', 2],
        ['tw', 2],
        ['cl', 2],
        ['gt', 2],
        ['sa', 1],
        ['qa', 1],
        ['es', 2],
        ['pa', 2],
        ['br', 2],
        ['uy', 2],
        ['sg', 1],
        ['sv', 2],
        ['it', 2],
        ['bh', 2],
        ['sk', 2],
        ['tt', 2],
        ['pl', 2],
        ['uz', 2],
        ['lt', 2],
        ['co', 2],
        ['si', 2],
        ['ni', 2],
        ['kv', 2],
        ['ar', 2],
        ['ro', 2],
        ['cy', 1],
        ['ec', 2],
        ['kw', 1],
        ['th', 2],
        ['lv', 2],
        ['kr', 1],
        ['ee', 2],
        ['jm', 2],
        ['mu', 2],
        ['jp', 2],
        ['hn', 2],
        ['kz', 2],
        ['bo', 2],
        ['hu', 2],
        ['py', 2],
        ['nc', 1],
        ['pe', 2],
        ['pt', 2],
        ['pk', 2],
        ['ru', 2],
        ['ph', 2],
        ['rs', 2],
        ['md', 2],
        ['ly', 2],
        ['me', 2],
        ['tj', 2],
        ['hr', 2],
        ['hk', 1],
        ['do', 2],
        ['ba', 2],
        ['tr', 2],
        ['my', 1],
        ['by', 2],
        ['gr', 1],
        ['mn', 2],
        ['mk', 2],
        ['ng', 2],
        ['kg', 2],
        ['tm', 2],
        ['dz', 2],
        ['ma', 1],
        ['az', 2],
        ['lb', 2],
        ['id', 2],
        ['cn', 2],
        ['vn', 2],
        ['bt', 2],
        ['cm', 2],
        ['bg', 2],
        ['gh', 2],
        ['ci', 2],
        ['np', 2],
        ['jo', 2],
        ['bj', 2],
        ['cg', 2],
        ['ga', 2],
        ['la', 2],
        ['za', 2],
        ['al', 1],
        ['ve', 2],
        ['kh', 2],
        ['sn', 2],
        ['so', 2],
        ['na', 2],
        ['ne', 2],
        ['bf', 2],
        ['am', 2],
        ['ir', 1],
        ['gn', 2],
        ['ge', 1],
        ['gm', 2],
        ['ke', 2],
        ['mr', 2],
        ['mz', 2],
        ['tn', 2],
        ['bd', 2],
        ['iq', 1],
        ['cd', 2],
        ['ml', 2],
        ['sl', 2],
        ['lk', 2],
        ['mm', 2],
        ['td', 2],
        ['ua', 2],
        ['et', 2],
        ['sz', 2],
        ['ug', 2],
        ['eg', 2],
        ['zm', 2],
        ['tg', 2],
        ['in', 2],
        ['lr', 2],
        ['km', 2],
        ['mg', 2],
        ['ls', 2],
        ['bi', 2],
        ['zw', 2],
        ['ht', 2],
        ['bw', 2],
        ['sy', 1],
        ['mw', 2],
        ['ye', 2],
        ['rw', 2],
        ['tz', 2],
        ['af', 2],
        ['cf', 4],
        ['ss', 2]
    ];
    var maps = data.map(elem => {
        if (elem[1] == 1){
            elem.push('#9C8ADE');
        } else if (elem[1] == 2){
            elem.push('#E17E76');
        } else if (elem[1] == 3){
            elem.push('#E3BAA8');
        } else if (elem[1] == 4){
            elem.push('#AA7B6F');
        } else if (elem[1] == 5){
            elem.push('#FED797');
        }
      return elem;
    });
    var gdp = maps.filter(elem => {
        if (elem[1] == 1){
            return elem;
        }
        return;
    });
    var social = maps.filter(elem => {
        if (elem[1] == 2){
            return elem;
        }
        return;
    });
    var life = maps.filter(elem => {
        if (elem[1] == 3){
            return elem;
        }
        return;
    });
    var free = maps.filter(elem => {
        if (elem[1] == 4){
            return elem;
        }
        return;
    });
    var trust = maps.filter(elem => {
        if (elem[1] == 5){
            return elem;
        }
        return;
    });
    Highcharts.maps['custom/world-palestine-highres'].features.push({"type":"Feature","id":"HK","properties":{"hc-group":"admin0","hc-middle-x":0.41,"hc-middle-y":0.56,"hc-key":"hk","hc-a2":"HK","name":"Hong Kong","labelrank":"2","country-abbrev":"China","subregion":"Eastern Asia","region-wb":"East Asia & Pacific","iso-a3":"HK","iso-a2":"HK","woe-id":"	24865698","continent":"Asia"},"geometry":{"type":"Polygon","coordinates":[[[7579,7118],[7585,7122],[7590,7120],[7596,7119],[7605,7120],[7608,7113],[7599,7100],[7579,7118]]]}})
    Highcharts.mapChart('map-2019', {
        chart: {
            map: 'custom/world-palestine-highres',
            backgroundColor: 'rgb(233,122,222,0)',
            height: 470
        },
    
        title: {
            text: '2019',
            style: {
                color: 'white',
            }
        },

        credits: {
            enabled: false
        },
    
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        plotOptions:{
			series:{
				dataLabels: {
					enabled: false,
					distance: 100,
					format: '{point.name}'
				},
				states:{
					hover:{
						color:'#0C3'
                    }
                },
                events: {
                    legendItemClick: function(e) {
                        e.preventDefault();
                    }
                }
			}
        },
        
        legend: {
            itemStyle: {
                color: 'white'
            },
            align: 'right'
        },
    
        series: [{
            data: gdp,
            color: '#9C8ADE',
            keys: ['hc-key', 'value', 'color'],
            name: 'GDP per Capita'
        },{
            data: social,
            color: '#E17E76',
            keys: ['hc-key', 'value', 'color'],
            name: 'Social Support'
        },{
            data: life,
            color: '#E3BAA8',
            keys: ['hc-key', 'value', 'color'],
            name: 'Health Life Expectancy'
        },{
            data: free,
            color: '#AA7B6F',
            keys: ['hc-key', 'value', 'color'],
            name: 'Freedom of Choice'
        },{
            data: trust,
            color: '#FED797',
            keys: ['hc-key', 'value', 'color'],
            name: 'Trust in Government'
        },{
            data: maps,
            name: 'Map',
            showInLegend:false,
            keys: ['hc-key', 'value', 'color'],
        }]
    });
}

function plotMap2015() {
    // var data = [['ch', 7.587000000000001],
    // ['is', 7.561],
    // ['dk', 7.527],
    // ['no', 7.522],
    // ['ca', 7.4270000000000005],
    // ['fi', 7.406000000000001],
    // ['nl', 7.377999999999999],
    // ['se', 7.364],
    // ['nz', 7.2860000000000005],
    // ['au', 7.284],
    // ['il', 7.278],
    // ['cr', 7.226],
    // ['at', 7.2],
    // ['mx', 7.187],
    // ['us', 7.119],
    // ['br', 6.983],
    // ['lu', 6.946000000000001],
    // ['ie', 6.94],
    // ['be', 6.937],
    // ['ae', 6.901],
    // ['gb', 6.867000000000001],
    // ['om', 6.853],
    // ['ve', 6.81],
    // ['sg', 6.797999999999999],
    // ['pa', 6.7860000000000005],
    // ['de', 6.75],
    // ['cl', 6.67],
    // ['qa', 6.611000000000001],
    // ['fr', 6.575],
    // ['ar', 6.574],
    // ['cz', 6.505],
    // ['uy', 6.485],
    // ['co', 6.477],
    // ['th', 6.455],
    // ['sa', 6.4110000000000005],
    // ['es', 6.329],
    // ['mt', 6.3020000000000005],
    // ['tw', 6.297999999999999],
    // ['kw', 6.295],
    // ['sr', 6.269],
    // ['tt', 6.167999999999999],
    // ['sv', 6.13],
    // ['gt', 6.122999999999999],
    // ['uz', 6.002999999999999],
    // ['sk', 5.995],
    // ['jp', 5.987],
    // ['kr', 5.984],
    // ['ec', 5.975],
    // ['bh', 5.96],
    // ['it', 5.9479999999999995],
    // ['bo', 5.89],
    // ['md', 5.888999999999999],
    // ['py', 5.877999999999999],
    // ['kz', 5.855],
    // ['si', 5.848],
    // ['lt', 5.832999999999999],
    // ['ni', 5.827999999999999],
    // ['pe', 5.824],
    // ['by', 5.813],
    // ['pl', 5.791],
    // ['my', 5.77],
    // ['hr', 5.7589999999999995],
    // ['ly', 5.754],
    // ['ru', 5.716],
    // ['jm', 5.709],
    // ['nc', 5.695],
    // ['cy', 5.689],
    // ['dz', 5.605],
    // ['kv', 5.5889999999999995],
    // ['tm', 5.547999999999999],
    // ['mu', 5.477],
    // ['hk', 5.474],
    // ['ee', 5.428999999999999],
    // ['id', 5.399],
    // ['vn', 5.36],
    // ['tr', 5.332000000000001],
    // ['kg', 5.2860000000000005],
    // ['ng', 5.268],
    // ['bt', 5.252999999999999],
    // ['az', 5.212000000000001],
    // ['pk', 5.194],
    // ['jo', 5.192],
    // ['me', 5.192],
    // ['cn', 5.14],
    // ['zm', 5.129],
    // ['ro', 5.124],
    // ['rs', 5.122999999999999],
    // ['pt', 5.102],
    // ['lv', 5.098],
    // ['ph', 5.073],
    // ['sx', 5.0569999999999995],
    // ['ma', 5.013],
    // ['mk', 5.007],
    // ['mz', 4.971],
    // ['al', 4.959],
    // ['ba', 4.949],
    // ['ls', 4.898],
    // ['do', 4.885],
    // ['la', 4.876],
    // ['mn', 4.874],
    // ['sz', 4.867],
    // ['gr', 4.857],
    // ['lb', 4.8389999999999995],
    // ['hu', 4.8],
    // ['hn', 4.788],
    // ['tj', 4.7860000000000005],
    // ['tn', 4.739],
    // ['bd', 4.694],
    // ['ir', 4.686],
    // ['ua', 4.681],
    // ['iq', 4.677],
    // ['za', 4.6419999999999995],
    // ['gh', 4.633],
    // ['zw', 4.61],
    // ['lr', 4.571000000000001],
    // ['in', 4.565],
    // ['sd', 4.55],
    // ['ht', 4.518],
    // ['cd', 4.5169999999999995],
    // ['np', 4.513999999999999],
    // ['et', 4.512],
    // ['sl', 4.507],
    // ['mr', 4.436],
    // ['ke', 4.419],
    // ['dj', 4.369],
    // ['am', 4.35],
    // ['bw', 4.332],
    // ['mm', 4.3069999999999995],
    // ['ge', 4.297],
    // ['mw', 4.292],
    // ['lk', 4.271],
    // ['cm', 4.252],
    // ['bg', 4.218],
    // ['eg', 4.194],
    // ['ye', 4.077],
    // ['ao', 4.033],
    // ['ml', 3.995],
    // ['cg', 3.989],
    // ['km', 3.9560000000000004],
    // ['ug', 3.931],
    // ['sn', 3.904],
    // ['ga', 3.8960000000000004],
    // ['ne', 3.845],
    // ['kh', 3.819],
    // ['tz', 3.781],
    // ['mg', 3.681],
    // ['cf', 3.678],
    // ['td', 3.667],
    // ['gn', 3.656],
    // ['ci', 3.655],
    // ['bf', 3.5869999999999997],
    // ['af', 3.575],
    // ['rw', 3.465],
    // ['bj', 3.34],
    // ['sy', 3.0060000000000002],
    // ['bi', 2.905],
    // ['tg', 2.839]];

    var data = [['ch', 1],
    ['is', 2],
    ['dk', 2],
    ['no', 1],
    ['ca', 1],
    ['fi', 2],
    ['nl', 1],
    ['se', 1],
    ['nz', 2],
    ['au', 1],
    ['il', 1],
    ['cr', 2],
    ['at', 1],
    ['mx', 1],
    ['us', 1],
    ['br', 2],
    ['lu', 1],
    ['ie', 2],
    ['be', 1],
    ['ae', 1],
    ['gb', 2],
    ['om', 1],
    ['ve', 2],
    ['sg', 1],
    ['pa', 2],
    ['de', 1],
    ['cl', 2],
    ['qa', 1],
    ['fr', 1],
    ['ar', 2],
    ['cz', 2],
    ['uy', 2],
    ['co', 2],
    ['th', 2],
    ['sa', 1],
    ['es', 2],
    ['mt', 2],
    ['tw', 1],
    ['kw', 1],
    ['sr', 1],
    ['tt', 1],
    ['sv', 2],
    ['gt', 2],
    ['uz', 2],
    ['sk', 2],
    ['jp', 1],
    ['kr', 1],
    ['ec', 2],
    ['bh', 1],
    ['it', 1],
    ['bo', 2],
    ['md', 2],
    ['py', 2],
    ['kz', 1],
    ['si', 2],
    ['lt', 2],
    ['ni', 2],
    ['pe', 2],
    ['by', 2],
    ['pl', 2],
    ['my', 1],
    ['hr', 1],
    ['ly', 1],
    ['ru', 2],
    ['jm', 2],
    ['nc', 1],
    ['cy', 1],
    ['dz', 2],
    ['kv', 2],
    ['tm', 2],
    ['mu', 1],
    ['hk', 1],
    ['ee', 2],
    ['id', 2],
    ['vn', 2],
    ['tr', 1],
    ['kg', 2],
    ['ng', 2],
    ['bt', 2],
    ['az', 1],
    ['pk', 1],
    ['jo', 2],
    ['me', 1],
    ['cn', 2],
    ['zm', 2],
    ['ro', 1],
    ['rs', 2],
    ['pt', 1],
    ['lv', 1],
    ['ph', 2],
    ['sx', 2],
    ['ma', 1],
    ['mk', 2],
    ['mz', 2],
    ['al', 1],
    ['ba', 2],
    ['ls', 2],
    ['do', 2],
    ['la', 2],
    ['mn', 2],
    ['sz', 2],
    ['gr', 1],
    ['lb', 1],
    ['hu', 2],
    ['hn', 2],
    ['tj', 2],
    ['tn', 1],
    ['bd', 3],
    ['ir', 1],
    ['ua', 2],
    ['iq', 1],
    ['za', 2],
    ['gh', 2],
    ['zw', 2],
    ['lr', 2],
    ['in', 1],
    ['sd', 2],
    ['ht', 2],
    ['cd', 2],
    ['np', 2],
    ['et', 2],
    ['sl', 2],
    ['mr', 2],
    ['ke', 2],
    ['dj', 2],
    ['am', 2],
    ['bw', 2],
    ['mm', 2],
    ['ge', 1],
    ['mw', 4],
    ['lk', 2],
    ['cm', 2],
    ['bg', 2],
    ['eg', 1],
    ['ye', 2],
    ['ao', 2],
    ['ml', 2],
    ['cg', 1],
    ['km', 2],
    ['ug', 2],
    ['sn', 2],
    ['ga', 1],
    ['ne', 2],
    ['kh', 4],
    ['tz', 2],
    ['mg', 2],
    ['cf', 4],
    ['td', 2],
    ['gn', 2],
    ['ci', 2],
    ['bf', 2],
    ['af', 1],
    ['rw', 2],
    ['bj', 4],
    ['sy', 3],
    ['bi', 2],
    ['tg', 4]];
    var maps = data.map(elem => {
        if (elem[1] == 1){
            elem.push('#9C8ADE');
        } else if (elem[1] == 2){
            elem.push('#E17E76');
        } else if (elem[1] == 3){
            elem.push('#E3BAA8');
        } else if (elem[1] == 4){
            elem.push('#AA7B6F');
        } else if (elem[1] == 5){
            elem.push('#FED797');
        }
      return elem;
    });
    var gdp = maps.filter(elem => {
        if (elem[1] == 1){
            return elem;
        }
        return;
    });
    var social = maps.filter(elem => {
        if (elem[1] == 2){
            return elem;
        }
        return;
    });
    var life = maps.filter(elem => {
        if (elem[1] == 3){
            return elem;
        }
        return;
    });
    var free = maps.filter(elem => {
        if (elem[1] == 4){
            return elem;
        }
        return;
    });
    var trust = maps.filter(elem => {
        if (elem[1] == 5){
            return elem;
        }
        return;
    });

    Highcharts.maps['custom/world-palestine-highres'].features.push({"type":"Feature","id":"HK","properties":{"hc-group":"admin0","hc-middle-x":0.41,"hc-middle-y":0.56,"hc-key":"hk","hc-a2":"HK","name":"Hong Kong","labelrank":"2","country-abbrev":"China","subregion":"Eastern Asia","region-wb":"East Asia & Pacific","iso-a3":"HK","iso-a2":"HK","woe-id":"	24865698","continent":"Asia"},"geometry":{"type":"Polygon","coordinates":[[[7579,7118],[7585,7122],[7590,7120],[7596,7119],[7605,7120],[7608,7113],[7599,7100],[7579,7118]]]}})
    Highcharts.mapChart('map-2015', {
        chart: {
            map: 'custom/world-palestine-highres',
            backgroundColor: 'rgb(233,122,222,0)',
        },
    
        title: {
            text: '2015',
            style: {
                color: 'white',
            }
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: false,
            itemStyle: {
                color: 'white'
            }
        },
    
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        plotOptions:{
			series:{
				dataLabels: {
					enabled: false,
					distance: 100,
					format: '{point.name}'
				},
				states:{
					hover:{
						color:'#0C3'
                    }
                },
                events: {
                    legendItemClick: function(e) {
                        e.preventDefault();
                    }
                }
			}
		},
    
        series: [{
            data: gdp,
            color: '#9C8ADE',
            keys: ['hc-key', 'value', 'color'],
            name: 'GDP per Capita'
        },{
            data: social,
            color: '#E17E76',
            keys: ['hc-key', 'value', 'color'],
            name: 'Social Support'
        },{
            data: life,
            color: '#E3BAA8',
            keys: ['hc-key', 'value', 'color'],
            name: 'Health Life Expectancy'
        },{
            data: free,
            color: '#AA7B6F',
            keys: ['hc-key', 'value', 'color'],
            name: 'Freedom of Choice'
        },{
            data: trust,
            color: '#FED797',
            keys: ['hc-key', 'value', 'color'],
            name: 'Trust in Government'
        },{
            data: maps,
            name: 'Map',
            showInLegend:false,
            keys: ['hc-key', 'value', 'color'],
        }]
    });
}