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

/* config imports */
import { tabDataArray } from './configs/tabs'

/* page  imports */
import Bookings from "./pages/bookings";
import Patients from './pages/patients';
import Reports from './pages/reports';
import SingleBooking from './pages/singleBooking';


let tabs = tabDataArray.map((item, key) =>
    <IonTabButton key={key} tab={`tab${item.name}`} href={`/${item.route}`}>
        <IonIcon icon={item.icon} />
        <IonLabel>{item.name}</IonLabel>
    </IonTabButton>
)


const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/bookings" component={Bookings} exact={true} />
                    <Route path="/patients" component={Patients} exact={true} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/booking" component={SingleBooking} />
                    <Route path="/" render={() => <Redirect to="/bookings" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    {tabs}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
