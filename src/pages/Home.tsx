import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonItem, IonText, IonThumbnail, IonLabel } from '@ionic/react';
import './Home.css';
import { gameResult } from '../App'; 


interface HomeProps {
  gameResults: gameResult[]
}


const Home: React.FC<HomeProps> = ({gameResults}) => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrabble</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg src="assets/scrabbleLogo.jpeg"></IonImg>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
        </IonHeader>
       <IonButton
        href="/Play">
         Play
       </IonButton>

       <IonButton
        href="/Score">
         Score
       </IonButton>

       <IonText>
         Total Games Played: {gameResults.length}
       </IonText>
       
      
       
      </IonContent>
    </IonPage> 
  );
  
};

export default Home;
