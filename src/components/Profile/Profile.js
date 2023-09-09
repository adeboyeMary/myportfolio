import {React} from 'react';

import styles from './Profile.module.css';
import me from './img.jpg';


const Profile = () => {

    const currentDate = new Date();

    const dayOfTheWeek = currentDate.toLocaleString('en-US', { weekday: 'long'});
    const currentTime = currentDate.getTime();
    console.log(new Date().getDay());
    console.log(new Date().getTime());

    return (
        <div className={styles.profContainer}>
            <header>
                <img src={me} alt="me" data-testid="slackDisplayImage" />
            </header>
            <main>
                <h2 data-testid="slackUserName">Mary Adeboye</h2>
                <p data-testid="currentDayOfTheWeek">{dayOfTheWeek}</p>
                <p data-testid="currentUTCTime">{currentTime}</p>
                <p data-testid="myTrack">Frontend Development</p>
            </main>
            <footer><a href=''>Go to github repo.</a></footer>
        </div>
    )
}

export default Profile;