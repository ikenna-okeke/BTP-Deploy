using AdminService as service from '../../srv/admin';

annotate service.MaintenanceItem with @(odata..draft.enabled:true)
