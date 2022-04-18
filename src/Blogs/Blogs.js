import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='q1-container'>
                <h4> Difference between authorization and authentication</h4>
                <div className='question1'>
                    <div>
                        <h5>Authorization</h5>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization works through settings that are implemented and maintained
                            by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                        <li>Authorization isnt visible to or changeable by the user.</li>

                    </div>
                    <div>
                        <h5>Authentication</h5>
                        <li>Authentication verifies who the user is.</li>
                        <li>Authentication works through passwords, one-time pins, biometric information,
                            and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <li>Authentication is visible to and partially changeable by the user.</li>
                    </div>
                </div>
            </div>
            <div className='q1-container question2'>
                <h4>Why are you using firebase?</h4>
                <p>ANSWER: Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So,
                    the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.,
                    you can use Firebase.
                </p>
                <h4>What other options do you have to implement authentication?</h4>
                <p> ANSWER: Usually, authentication by a server entails the use of a user name and password. There many way to do this authentication
                    Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='question3'>
                <h4>What other services does firebase provide other than authentication?</h4>
                <p>There are many services which Firebase provides, Most useful of them are:</p>
                <li>Cloud Firestore.</li>
                <li>Cloud Functions.</li>
                <li>Authentication.</li>
                <li>Hosting.</li>
                <li>Cloud Storage.</li>
                <li>Google Analytics.</li>
                <li>Predictions.</li>
                <li>Cloud Messaging.</li>
            </div>
        </div>
    );
};

export default Blogs;