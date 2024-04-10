sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ik.devtober.ui.adminapp',
            componentId: 'MaintenanceItemList',
            contextPath: '/MaintenanceItem'
        },
        CustomPageDefinitions
    );
});