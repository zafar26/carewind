import React, { useState } from 'react';
import { IonModal, IonToolbar, IonList, IonItem, IonSearchbar, IonLabel, IonCheckbox, IonContent } from '@ionic/react';

interface SymptomsModalProps {
    showSymptomsModal: boolean;
    symptomsArray: string[];
    debounce: number;
};

const SymptomsModal: React.FC<SymptomsModalProps> = (props) => {

    const { showSymptomsModal, symptomsArray, debounce } = props;

    const [showModal, setShowModal] = useState(showSymptomsModal);
    const [searchText, setSearchText] = useState("");

    let symptoms = symptomsArray.map((value, key) => {
        let display = 'none'
        if (value.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) { display = 'block' }
        return (
            <IonItem key={key} style={{ "display": `${display}` }} lines="none">
                <IonCheckbox slot="start" value={`${value}`} name={`${value}`} onIonChange={e => e.detail.checked!} />
                <IonLabel>{`${value}`}</IonLabel>
            </IonItem>
        )
    });

    return (
        <IonModal isOpen={showModal} backdropDismiss={false}>
            <IonToolbar>
                <IonSearchbar
                    debounce={debounce}
                    onIonChange={e => setSearchText(e.detail.value!)}
                    showCancelButton="always"
                    onIonCancel={() => setShowModal(false)}
                    value={searchText}
                />
            </IonToolbar>
            <IonContent>
                <IonList>
                    {symptoms}
                </IonList>
            </IonContent>

        </IonModal>
    );
};

export default SymptomsModal;