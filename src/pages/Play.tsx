import React, { useEffect, useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonInput, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
import './Home.css';
import { gameResult } from '../App'; 
import { useHistory } from 'react-router-dom'; 



interface PlayProps {
    pastPlayers: string[]
    , addGameResult: (r: gameResult) => void; 

  }



 export const Play: React.FC<PlayProps> = ({pastPlayers, addGameResult}) => {



    const playersWithCheckedBoolean = pastPlayers.map(x => ({
      name: x
      , checked: false
    }))

    const history = useHistory(); 

    const endGame = () => {

      // add new game result 
      addGameResult({
        start: ""
        , end: ""
        , players: []
        , winner: ""
      }); 
      // navigate to home 

      history.push("/"); 
    };
    
    


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
          
         
          <h2>Choose Players</h2>
          {
            playersWithCheckedBoolean.map(x => <p key={x.name}>{x.name} </p>)
          }
        
          
  
          

          <IonButton 
              href="/home">
              Back
          </IonButton>
          <IonButton 
              href="/score">
              
              Play
              
          </IonButton>
          <IonButton
              onClick={endGame}
          >
              Done
          </IonButton>
        </IonContent>
      </IonPage>
        );
      };
    

     

      
export default Play; 