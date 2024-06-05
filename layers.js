var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lotes_1 = new ol.format.GeoJSON();
var features_Lotes_1 = format_Lotes_1.readFeatures(json_Lotes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_1.addFeatures(features_Lotes_1);
var lyr_Lotes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_1, 
                style: style_Lotes_1,
                popuplayertitle: "Lotes",
                interactive: true,
                    title: '<img src="styles/legend/Lotes_1.png" /> Lotes'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lotes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lotes_1];
lyr_Lotes_1.set('fieldAliases', {'id': 'id', 'Nro_lote': 'Nro_lote', 'Area': 'Area', 'Precio': 'Precio', 'Imagen': 'Imagen', });
lyr_Lotes_1.set('fieldImages', {'id': 'TextEdit', 'Nro_lote': 'TextEdit', 'Area': 'TextEdit', 'Precio': 'TextEdit', 'Imagen': 'TextEdit', });
lyr_Lotes_1.set('fieldLabels', {'id': 'no label', 'Nro_lote': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Precio': 'inline label - visible with data', 'Imagen': 'inline label - visible with data', });
lyr_Lotes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});