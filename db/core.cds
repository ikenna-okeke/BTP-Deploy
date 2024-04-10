namespace ik.devtober;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity MaintenanceItem : cuid, managed {
    s4Id               : String(50);
    problemDescription : String(5000);
}
