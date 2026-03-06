var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

    var projection_Parcellescadastrales_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Parcellescadastrales_1 = projection_Parcellescadastrales_1.getExtent();
    var size_Parcellescadastrales_1 = ol.extent.getWidth(projectionExtent_Parcellescadastrales_1) / 256;
    var resolutions_Parcellescadastrales_1 = new Array(14);
    var matrixIds_Parcellescadastrales_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Parcellescadastrales_1[z] = size_Parcellescadastrales_1 / Math.pow(2, z);
        matrixIds_Parcellescadastrales_1[z] = z;
    }
    var lyr_Parcellescadastrales_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "CADASTRALPARCELS.PARCELS.L93",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Parcellescadastrales_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Parcellescadastrales_1),
                resolutions: resolutions_Parcellescadastrales_1,
                matrixIds: matrixIds_Parcellescadastrales_1
              }),
              style: 'bdparcellaire',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Parcelles cadastrales',
                            opacity: 0.6,
                            
                            
                          });
var lyr_Capturedcran2025100911450_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Capture d’écran 2025-10-09 11450<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Capturedcran2025100911450_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [66185.220622, 5388038.218635, 66528.607442, 5388342.868371]
        })
    });
var format_Points_3 = new ol.format.GeoJSON();
var features_Points_3 = format_Points_3.readFeatures(json_Points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_3.addFeatures(features_Points_3);
var lyr_Points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_3, 
                style: style_Points_3,
                popuplayertitle: 'Points',
                interactive: true,
                title: '<img src="styles/legend/Points_3.png" /> Points'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Parcellescadastrales_1.setVisible(true);lyr_Capturedcran2025100911450_2.setVisible(true);lyr_Points_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Parcellescadastrales_1,lyr_Capturedcran2025100911450_2,lyr_Points_3];
lyr_Points_3.set('fieldAliases', {'id': 'id', 'Adresse': 'Adresse', 'Nature': 'Nature', 'Surface': 'Surface', 'Prix': 'Prix', 'Contacts': 'Contacts', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Photo': 'Photo', 'Photo 2': 'Photo 2', 'Photo 3': 'Photo 3', 'Photo 4': 'Photo 4', 'Photo 5': 'Photo 5', });
lyr_Points_3.set('fieldImages', {'id': 'TextEdit', 'Adresse': 'TextEdit', 'Nature': 'TextEdit', 'Surface': 'TextEdit', 'Prix': 'TextEdit', 'Contacts': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Photo': 'ExternalResource', 'Photo 2': 'ExternalResource', 'Photo 3': 'ExternalResource', 'Photo 4': 'ExternalResource', 'Photo 5': 'ExternalResource', });
lyr_Points_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Adresse': 'inline label - always visible', 'Nature': 'inline label - visible with data', 'Surface': 'inline label - visible with data', 'Prix': 'inline label - visible with data', 'Contacts': 'inline label - visible with data', 'Coordonné': 'inline label - visible with data', 'Coordonn_1': 'no label', 'Photo': 'inline label - visible with data', 'Photo 2': 'inline label - visible with data', 'Photo 3': 'inline label - visible with data', 'Photo 4': 'inline label - visible with data', 'Photo 5': 'inline label - visible with data', });
lyr_Points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});