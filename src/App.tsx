import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { time as tabIcon1, people as tabIcon2, pieChart as tabIcon3} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

interface TabData {
  tabName : string;
  tabIcon : string;
  tabNumber : number;
}

const tabDataArray : Array<TabData> = [
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

let tabs = tabDataArray.map((item, key) => (
    <IonTabButton key={key} tab={`tab${item.tabNumber}`} href={`/tab${item.tabNumber}`}>
      <IonIcon icon={item.tabIcon} />
      <IonLabel>{item.tabName}</IonLabel>
    </IonTabButton>
))

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {tabs}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
