import { time as tabIcon1 } from 'ionicons/icons';
import { people as tabIcon2 } from 'ionicons/icons';
import { pieChart as tabIcon3 } from 'ionicons/icons';

interface TabData {
    tabName: string;
    tabIcon: string;
    route: string;
};

export const tabDataArray : Array<TabData> = [
    {
      tabName   : "Bookings",
      tabIcon   : tabIcon1,
      route : "/bookings"
    },
    {
      tabName   : "Patients",
      tabIcon   : tabIcon2,
      route : "/patients"

    },
    {
      tabName   : "Reports",
      tabIcon   : tabIcon3,
      route : "/reports"

    }
  ]

