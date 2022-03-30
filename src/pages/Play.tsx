import React, { useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonLabel, IonCheckbox  } from '@ionic/react';
import './Home.css';



export const Play: React.FC = () => {
    const [text, setText] = useState<string>();
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Play</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
              <h2>Player Name</h2>
          <IonItem>
            <IonTextarea placeholder="Enter a player..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
          <h2>Choose Players</h2>
          <IonButton 
              href="/home">
              Back
          </IonButton>
          <IonButton 
              href="/score">
              Play
          </IonButton>
          </IonContent>
        </IonPage>
        );
      };
export default Play; 