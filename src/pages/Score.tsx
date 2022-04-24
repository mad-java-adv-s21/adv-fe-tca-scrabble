import React, { useEffect, useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonInput, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
import './Home.css';
import { gameResult, currentGame } from '../App'; 
import { useHistory } from 'react-router-dom'; 


interface ScoreProps {
    pastPlayers: string[];
    setCurrentGame: (game: currentGame) => void; 
  }

 export const Score: React.FC<ScoreProps> = ({
   pastPlayers
   , setCurrentGame
  }) => {

    const playersWithCheckedBoolean = pastPlayers.map(x => ({
      name: x 
      , checked: false
    }))

    const [availablePlayers, setAvailablePlayers] = useState(playersWithCheckedBoolean); 

    const [newPlayerName, setNewPlayerName] = useState(""); 
  
    const history = useHistory(); 

    const togglePlayerChecked = (p: any) => {
        setAvailablePlayers(
          availablePlayers.map(x=> ({
            ...x
            , checked: x === p ? !x.checked : x.checked
          }))
        ); 
    };

    const addNewPlayer = () => {
      // add the new player to available players
      setAvailablePlayers([
        ...availablePlayers 
        , {
          name: newPlayerName
          , checked: true
        }
      ]); 

      // clear out the input control
      setNewPlayerName(""); 
    }; 

    const startGame  = () => {

      

      // set up players and start time 
      setCurrentGame({
        start: new Date().toISOString()
        , player: availablePlayers.filter(x => x.checked).map(x => x.name)
      });

      // nav to play screen 
      history.push("/play")

    };  


    

    
    


        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Update Scores</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
             
          
         
        
        
          
          <h3>
            Choose Players
          </h3>

          <div>


          <IonItem>
            <IonLabel position="floating">
              Enter Player Name
            </IonLabel>
            
            <IonInput 
              value={newPlayerName}
              onIonChange={(e) => setNewPlayerName((e.target as any).value)}
            ></IonInput>
          </IonItem>
          <IonButton
            onClick={addNewPlayer}>
            Add
          </IonButton>


          </div>
          
          {
            availablePlayers.map(x => ( 
            <IonItem>
              <IonLabel>
                  {x.name} 
              </IonLabel>
              <IonCheckbox  
                  checked={x.checked} 
                  onIonChange={e => togglePlayerChecked(x)} 
              />
            </IonItem>)
            )
          }
          

          <IonButton 
              href="/home">
              Back
          </IonButton>
          <IonButton 
              onClick={startGame}
              >
              
              Start
              
          </IonButton>
          
        </IonContent>
      </IonPage>
        );
      };
    

     

      
export default Score; 