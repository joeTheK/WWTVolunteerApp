import * as admin from 'firebase-admin';
import functions from 'firebase-functions';
import firebase from "firebase";
import fire from './config/firebaseConfig.config.js';

admin.initializeApp();

async function updateHours(email: string, increment: any): Promise<void> {
  const user = await admin.auth().getUserByEmail(email);
  if(user.customClaims && (user.customClaims as any).hours === true) {
    // fire.auth().currentUser().hours += increment;
    console.log("this is where the increment happens")
  }
  return admin.auth().setCustomUserClaims(user.uid, {
    hours: 10,
  });
}
export default updateHours