import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrabble</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
       <h1>STATS</h1>
       <h2>Lizzi - 130</h2>
       <h1>Kirsten - 97</h1>
       <h2>Chris - 73</h2>
      </IonContent>
    </IonPage>
  );
};

export default Home;
