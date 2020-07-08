import { time as tabIcon1 } from 'ionicons/icons';
import { people as tabIcon2 } from 'ionicons/icons';
import { pieChart as tabIcon3 } from 'ionicons/icons';

interface TabData {
    name: string;
    icon: string;
    route: string;
};

export const tabDataArray : Array<TabData> = [
    {
      name   : "Bookings",
      icon   : tabIcon1,
      route  : "bookings"
    },
    {
      name   : "Patients",
      icon   : tabIcon2,
      route  : "patients"

    },
    {
      name   : "Reports",
      icon   : tabIcon3,
      route  : "reports"

    }
  ]

