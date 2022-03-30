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
        href="/Stats">
         Stats
       </IonButton>
       <IonButton
        href="/Score">
         Score
       </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
