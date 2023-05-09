var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Lesvoisins_1 = new ol.format.GeoJSON();
var features_Lesvoisins_1 = format_Lesvoisins_1.readFeatures(json_Lesvoisins_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lesvoisins_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lesvoisins_1.addFeatures(features_Lesvoisins_1);
var lyr_Lesvoisins_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lesvoisins_1, 
                style: style_Lesvoisins_1,
                interactive: true,
                title: '<img src="styles/legend/Lesvoisins_1.png" /> Les voisins'
            });
var format_CanonPecresse_2 = new ol.format.GeoJSON();
var features_CanonPecresse_2 = format_CanonPecresse_2.readFeatures(json_CanonPecresse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanonPecresse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanonPecresse_2.addFeatures(features_CanonPecresse_2);
var lyr_CanonPecresse_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CanonPecresse_2, 
                style: style_CanonPecresse_2,
                interactive: true,
                title: '<img src="styles/legend/CanonPecresse_2.png" /> Canon Pecresse'
            });
var format_VCBjardinpiscine_3 = new ol.format.GeoJSON();
var features_VCBjardinpiscine_3 = format_VCBjardinpiscine_3.readFeatures(json_VCBjardinpiscine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VCBjardinpiscine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VCBjardinpiscine_3.addFeatures(features_VCBjardinpiscine_3);
var lyr_VCBjardinpiscine_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VCBjardinpiscine_3, 
                style: style_VCBjardinpiscine_3,
                interactive: true,
                title: '<img src="styles/legend/VCBjardinpiscine_3.png" /> VCB jardinpiscine'
            });
var format_VCBParking_4 = new ol.format.GeoJSON();
var features_VCBParking_4 = format_VCBParking_4.readFeatures(json_VCBParking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VCBParking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VCBParking_4.addFeatures(features_VCBParking_4);
var lyr_VCBParking_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VCBParking_4, 
                style: style_VCBParking_4,
                interactive: true,
                title: '<img src="styles/legend/VCBParking_4.png" /> VCB Parking'
            });
var format_Banc_5 = new ol.format.GeoJSON();
var features_Banc_5 = format_Banc_5.readFeatures(json_Banc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banc_5.addFeatures(features_Banc_5);
var lyr_Banc_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Banc_5, 
                style: style_Banc_5,
                interactive: true,
                title: '<img src="styles/legend/Banc_5.png" /> Banc'
            });
var format_Aldescypres_6 = new ol.format.GeoJSON();
var features_Aldescypres_6 = format_Aldescypres_6.readFeatures(json_Aldescypres_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldescypres_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldescypres_6.addFeatures(features_Aldescypres_6);
var lyr_Aldescypres_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aldescypres_6, 
                style: style_Aldescypres_6,
                interactive: true,
                title: '<img src="styles/legend/Aldescypres_6.png" /> Al des cypres'
            });
var format_Hautballet_7 = new ol.format.GeoJSON();
var features_Hautballet_7 = format_Hautballet_7.readFeatures(json_Hautballet_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hautballet_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hautballet_7.addFeatures(features_Hautballet_7);
var lyr_Hautballet_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hautballet_7, 
                style: style_Hautballet_7,
                interactive: true,
                title: '<img src="styles/legend/Hautballet_7.png" /> Haut ballet'
            });
var format_AldesPins_8 = new ol.format.GeoJSON();
var features_AldesPins_8 = format_AldesPins_8.readFeatures(json_AldesPins_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AldesPins_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AldesPins_8.addFeatures(features_AldesPins_8);
var lyr_AldesPins_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AldesPins_8, 
                style: style_AldesPins_8,
                interactive: true,
                title: '<img src="styles/legend/AldesPins_8.png" /> Al des Pins'
            });
var format_tunnel_9 = new ol.format.GeoJSON();
var features_tunnel_9 = format_tunnel_9.readFeatures(json_tunnel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tunnel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tunnel_9.addFeatures(features_tunnel_9);
var lyr_tunnel_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tunnel_9, 
                style: style_tunnel_9,
                interactive: true,
                title: '<img src="styles/legend/tunnel_9.png" /> tunnel'
            });
var format_Potager_10 = new ol.format.GeoJSON();
var features_Potager_10 = format_Potager_10.readFeatures(json_Potager_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potager_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potager_10.addFeatures(features_Potager_10);
var lyr_Potager_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potager_10, 
                style: style_Potager_10,
                interactive: true,
                title: '<img src="styles/legend/Potager_10.png" /> Potager'
            });
var format_DvtChateau_11 = new ol.format.GeoJSON();
var features_DvtChateau_11 = format_DvtChateau_11.readFeatures(json_DvtChateau_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DvtChateau_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DvtChateau_11.addFeatures(features_DvtChateau_11);
var lyr_DvtChateau_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DvtChateau_11, 
                style: style_DvtChateau_11,
                interactive: true,
                title: '<img src="styles/legend/DvtChateau_11.png" /> Dvt Chateau'
            });
var format_Etang_12 = new ol.format.GeoJSON();
var features_Etang_12 = format_Etang_12.readFeatures(json_Etang_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etang_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etang_12.addFeatures(features_Etang_12);
var lyr_Etang_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etang_12, 
                style: style_Etang_12,
                interactive: true,
                title: '<img src="styles/legend/Etang_12.png" /> Etang'
            });
var format_Sousbois_13 = new ol.format.GeoJSON();
var features_Sousbois_13 = format_Sousbois_13.readFeatures(json_Sousbois_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sousbois_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sousbois_13.addFeatures(features_Sousbois_13);
var lyr_Sousbois_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sousbois_13, 
                style: style_Sousbois_13,
                interactive: true,
                title: '<img src="styles/legend/Sousbois_13.png" /> Sousbois'
            });
var format_Parc_14 = new ol.format.GeoJSON();
var features_Parc_14 = format_Parc_14.readFeatures(json_Parc_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parc_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parc_14.addFeatures(features_Parc_14);
var lyr_Parc_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parc_14, 
                style: style_Parc_14,
                interactive: true,
                title: '<img src="styles/legend/Parc_14.png" /> Parc'
            });
var format_Accueil_15 = new ol.format.GeoJSON();
var features_Accueil_15 = format_Accueil_15.readFeatures(json_Accueil_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accueil_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accueil_15.addFeatures(features_Accueil_15);
var lyr_Accueil_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Accueil_15, 
                style: style_Accueil_15,
                interactive: true,
                title: '<img src="styles/legend/Accueil_15.png" /> Accueil'
            });
var format_DatetonteDatetonte_16 = new ol.format.GeoJSON();
var features_DatetonteDatetonte_16 = format_DatetonteDatetonte_16.readFeatures(json_DatetonteDatetonte_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatetonteDatetonte_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatetonteDatetonte_16.addFeatures(features_DatetonteDatetonte_16);
var lyr_DatetonteDatetonte_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DatetonteDatetonte_16, 
                style: style_DatetonteDatetonte_16,
                interactive: true,
                title: '<img src="styles/legend/DatetonteDatetonte_16.png" /> Date tonte - Date tonte'
            });

lyr_BDOrthoIGN_0.setVisible(true);lyr_Lesvoisins_1.setVisible(true);lyr_CanonPecresse_2.setVisible(true);lyr_VCBjardinpiscine_3.setVisible(true);lyr_VCBParking_4.setVisible(true);lyr_Banc_5.setVisible(true);lyr_Aldescypres_6.setVisible(true);lyr_Hautballet_7.setVisible(true);lyr_AldesPins_8.setVisible(true);lyr_tunnel_9.setVisible(true);lyr_Potager_10.setVisible(true);lyr_DvtChateau_11.setVisible(true);lyr_Etang_12.setVisible(true);lyr_Sousbois_13.setVisible(true);lyr_Parc_14.setVisible(true);lyr_Accueil_15.setVisible(true);lyr_DatetonteDatetonte_16.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,lyr_Lesvoisins_1,lyr_CanonPecresse_2,lyr_VCBjardinpiscine_3,lyr_VCBParking_4,lyr_Banc_5,lyr_Aldescypres_6,lyr_Hautballet_7,lyr_AldesPins_8,lyr_tunnel_9,lyr_Potager_10,lyr_DvtChateau_11,lyr_Etang_12,lyr_Sousbois_13,lyr_Parc_14,lyr_Accueil_15,lyr_DatetonteDatetonte_16];
lyr_Lesvoisins_1.set('fieldAliases', {'ID': 'Lieu', });
lyr_CanonPecresse_2.set('fieldAliases', {'ID': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_VCBjardinpiscine_3.set('fieldAliases', {'ID': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_VCBParking_4.set('fieldAliases', {'ID': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Banc_5.set('fieldAliases', {'ID': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Aldescypres_6.set('fieldAliases', {'ID': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Hautballet_7.set('fieldAliases', {'ID': 'ID', 'Surface M²': 'Surface M²', });
lyr_AldesPins_8.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_tunnel_9.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Potager_10.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_DvtChateau_11.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Etang_12.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Sousbois_13.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Parc_14.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_Accueil_15.set('fieldAliases', {'id': 'Lieu', 'Surface M²': 'Surface M²', });
lyr_DatetonteDatetonte_16.set('fieldAliases', {'field_1': 'field_1', 'ID': 'ID', 'Date': 'Date', 'field_4': 'field_4', 'field_5': 'field_5', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_Lesvoisins_1.set('fieldImages', {'ID': 'TextEdit', });
lyr_CanonPecresse_2.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_VCBjardinpiscine_3.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_VCBParking_4.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_Banc_5.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_Aldescypres_6.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_Hautballet_7.set('fieldImages', {'ID': 'TextEdit', 'Surface M²': '', });
lyr_AldesPins_8.set('fieldImages', {'id': 'TextEdit', 'Surface M²': 'Range', });
lyr_tunnel_9.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_Potager_10.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_DvtChateau_11.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_Etang_12.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_Sousbois_13.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_Parc_14.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_Accueil_15.set('fieldImages', {'id': 'TextEdit', 'Surface M²': '', });
lyr_DatetonteDatetonte_16.set('fieldImages', {'field_1': 'Hidden', 'ID': 'TextEdit', 'Date': 'TextEdit', 'field_4': 'Hidden', 'field_5': 'Hidden', 'xcoord': 'Hidden', 'ycoord': 'Hidden', });
lyr_Lesvoisins_1.set('fieldLabels', {'ID': 'header label', });
lyr_CanonPecresse_2.set('fieldLabels', {'ID': 'header label', 'Surface M²': 'no label', });
lyr_VCBjardinpiscine_3.set('fieldLabels', {'ID': 'header label', 'Surface M²': 'no label', });
lyr_VCBParking_4.set('fieldLabels', {'ID': 'header label', 'Surface M²': 'no label', });
lyr_Banc_5.set('fieldLabels', {'ID': 'header label', 'Surface M²': 'no label', });
lyr_Aldescypres_6.set('fieldLabels', {'ID': 'header label', 'Surface M²': 'no label', });
lyr_Hautballet_7.set('fieldLabels', {'ID': 'no label', 'Surface M²': 'no label', });
lyr_AldesPins_8.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_tunnel_9.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_Potager_10.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_DvtChateau_11.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_Etang_12.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_Sousbois_13.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_Parc_14.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_Accueil_15.set('fieldLabels', {'id': 'header label', 'Surface M²': 'header label', });
lyr_DatetonteDatetonte_16.set('fieldLabels', {'ID': 'header label', 'Date': 'header label', });
lyr_DatetonteDatetonte_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});