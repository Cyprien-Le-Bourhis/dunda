// import { Item } from './../../domain/entities/Item';

import Auth from "@/domain/entities/Auth";
import TokenInjector from "@/middleware/token_injector";

import ErrorCatcher from "../../middleware/error_catcher";


import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


import { collection, getFirestore, getDocs } from "firebase/firestore";
import { Item } from "@/domain/entities/Item";



export default class DundaApiService {

  #tokenInjector: TokenInjector;
  #firebaseConfig: FireBaseConfig;
  #firebaseInstance: FirebaseApp;
  #errorCatcher: ErrorCatcher;



  constructor(errorCatcher: ErrorCatcher, tokenInjector: TokenInjector) {
    this.#tokenInjector = tokenInjector;
    this.#firebaseConfig = new FireBaseConfig(
      "AIzaSyC2_lGfQKUMgeOsVC35tUCJMh0pgBGJ1fI",
      "dunda-e70d7.firebaseapp.com",
      "dunda-e70d7",
      "dunda-e70d7.appspot.com",
      "443187106363",
      "1:443187106363:web:b918f405fbc6784981421e",
      "G-PLDD1L2L5K",
    );


    this.#firebaseInstance = this.#initializeFireBase(this.#firebaseConfig)

    this.#errorCatcher = errorCatcher;
  }

  #initializeFireBase(firebaseConfig: FireBaseConfig) {
    return initializeApp(firebaseConfig);
  }


  async getItems() {
    const querySnapshot = await (await (getDocs(collection(getFirestore(), "objects")))).docs;
    return querySnapshot.map((item: any): Item => Item.fromJsonToItem(item.data()));
  }


  //LOGIN
  async logIn(username: string, password: string): Promise<Auth> {
    console.log(username, password)

    const auth = getAuth();
    const response =
      await signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          return userCredential
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

        });


    return await Auth.fromJsonToAuth(response);

  }
  //TODO logout

}

class FireBaseConfig {
  apiKey;
  authDomain;
  projectId;
  storageBucket;
  messagingSenderId;
  appId;
  measurementId;
  constructor(apiKey: string, authDomain: string, projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string) {
    this.apiKey = apiKey
    this.authDomain = authDomain
    this.projectId = projectId
    this.storageBucket = storageBucket
    this.messagingSenderId = messagingSenderId
    this.appId = appId
    this.measurementId = measurementId
  }
}