var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Desamiantatssenserefernciacadastral_1 = new ol.format.GeoJSON();
var features_Desamiantatssenserefernciacadastral_1 = format_Desamiantatssenserefernciacadastral_1.readFeatures(json_Desamiantatssenserefernciacadastral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desamiantatssenserefernciacadastral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desamiantatssenserefernciacadastral_1.addFeatures(features_Desamiantatssenserefernciacadastral_1);
var lyr_Desamiantatssenserefernciacadastral_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desamiantatssenserefernciacadastral_1, 
                style: style_Desamiantatssenserefernciacadastral_1,
                interactive: true,
                title: '<img src="styles/legend/Desamiantatssenserefernciacadastral_1.png" /> Desamiantats sense referència cadastral'
            });
var format_Desamiantatsambrefernciacadastral_2 = new ol.format.GeoJSON();
var features_Desamiantatsambrefernciacadastral_2 = format_Desamiantatsambrefernciacadastral_2.readFeatures(json_Desamiantatsambrefernciacadastral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desamiantatsambrefernciacadastral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desamiantatsambrefernciacadastral_2.addFeatures(features_Desamiantatsambrefernciacadastral_2);
var lyr_Desamiantatsambrefernciacadastral_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desamiantatsambrefernciacadastral_2, 
                style: style_Desamiantatsambrefernciacadastral_2,
                interactive: true,
                title: '<img src="styles/legend/Desamiantatsambrefernciacadastral_2.png" /> Desamiantats amb referència cadastral'
            });
var format_Positiussenserefernciacadastral_3 = new ol.format.GeoJSON();
var features_Positiussenserefernciacadastral_3 = format_Positiussenserefernciacadastral_3.readFeatures(json_Positiussenserefernciacadastral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positiussenserefernciacadastral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positiussenserefernciacadastral_3.addFeatures(features_Positiussenserefernciacadastral_3);
var lyr_Positiussenserefernciacadastral_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Positiussenserefernciacadastral_3, 
                style: style_Positiussenserefernciacadastral_3,
                interactive: true,
                title: '<img src="styles/legend/Positiussenserefernciacadastral_3.png" /> Positius sense referència cadastral'
            });
var format_Positiusambrefernciacadastral_4 = new ol.format.GeoJSON();
var features_Positiusambrefernciacadastral_4 = format_Positiusambrefernciacadastral_4.readFeatures(json_Positiusambrefernciacadastral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positiusambrefernciacadastral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positiusambrefernciacadastral_4.addFeatures(features_Positiusambrefernciacadastral_4);
var lyr_Positiusambrefernciacadastral_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Positiusambrefernciacadastral_4, 
                style: style_Positiusambrefernciacadastral_4,
                interactive: true,
                title: '<img src="styles/legend/Positiusambrefernciacadastral_4.png" /> Positius amb referència cadastral'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,],
                                title: "Mapas de fondo"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Desamiantatssenserefernciacadastral_1.setVisible(true);lyr_Desamiantatsambrefernciacadastral_2.setVisible(true);lyr_Positiussenserefernciacadastral_3.setVisible(true);lyr_Positiusambrefernciacadastral_4.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_Desamiantatssenserefernciacadastral_1,lyr_Desamiantatsambrefernciacadastral_2,lyr_Positiussenserefernciacadastral_3,lyr_Positiusambrefernciacadastral_4];
lyr_Desamiantatssenserefernciacadastral_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Desamiantatsambrefernciacadastral_2.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_Positiussenserefernciacadastral_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Positiusambrefernciacadastral_4.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_Desamiantatssenserefernciacadastral_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Desamiantatsambrefernciacadastral_2.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'beginning': 'TextEdit', 'end': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_Positiussenserefernciacadastral_3.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Positiusambrefernciacadastral_4.set('fieldImages', {'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'fid': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Desamiantatssenserefernciacadastral_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Desamiantatsambrefernciacadastral_2.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_Positiussenserefernciacadastral_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Positiusambrefernciacadastral_4.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Positiusambrefernciacadastral_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});