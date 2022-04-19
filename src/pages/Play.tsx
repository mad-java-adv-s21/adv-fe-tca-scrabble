import React, { useEffect, useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonInput, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
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
            <input type="text" id="playerName"/>
            <IonButton>Add New Player</IonButton>
          </IonItem>
          
         <IonList>
          <h2>Choose Players</h2>
          <IonItem>
            <IonLabel>Lizzi </IonLabel>
            <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>Kirsten </IonLabel>
            <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>Chris </IonLabel>
            <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
          </IonItem>
          
  
          </IonList>

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