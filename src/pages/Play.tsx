import React, { useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
import './Home.css';




export const Play: React.FC = () => {
 


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