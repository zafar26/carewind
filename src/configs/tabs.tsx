import { time as tabIcon1 } from 'ionicons/icons';
import { people as tabIcon2 } from 'ionicons/icons';
import { pieChart as tabIcon3 } from 'ionicons/icons';

interface TabData {
    tabName: string;
    tabIcon: string;
    tabNumber: number;
};

export const tabDataArray : Array<TabData> = [
    {
      tabName   : "Bookings",
      tabIcon   : tabIcon1,
      tabNumber : 1
    },
    {
      tabName   : "Patients",
      tabIcon   : tabIcon2,
      tabNumber : 2
    },
    {
      tabName   : "Reports",
      tabIcon   : tabIcon3,
      tabNumber : 3
    }
  ]

