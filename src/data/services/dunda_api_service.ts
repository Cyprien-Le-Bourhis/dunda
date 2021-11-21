
import Auth from "@/domain/entities/Auth";
import Connection from "@/domain/entities/Connection";
import TokenInjector from "@/middleware/token_injector";
import axiosService, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import Meta from "../../domain/entities/Meta";
import ErrorCatcher from "../../middleware/error_catcher";


import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

export default class DundaApiService {
  #axios: AxiosInstance;
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

    this.#axios = axiosService.create({
      baseURL: this.#firebaseConfig.authDomain,
    });
    this.#firebaseInstance = this.#initializeFireBase(this.#firebaseConfig)

    this.#errorCatcher = errorCatcher;
  }

  #initializeFireBase(firebaseConfig: FireBaseConfig) {
    console.log("init firbase")
    return initializeApp(firebaseConfig);
  }

  #getAxiosConfig(body?: Record<string, any>): AxiosRequestConfig {

    return {
      data: { ...body },
      headers: {
        Authorization: `Bearer ${this.#tokenInjector.injectToken()}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };
  }

  //GLOBAL GET METHOD
  async get(
    url: string,
    params?: Record<string, unknown>,
  ): Promise<AxiosResponse> {

    try {
      const resp = await this.#axios.get(url, {
        ...this.#getAxiosConfig(),
        params: params,
      });

      return resp;
    } catch (e) {
      throw this.#errorCatcher.processError(e as Error);
    }
  }
  //GLOBAL POST METHOD
  async post(
    url: string,
    params: Record<string, unknown> | null,
    body: Record<string, unknown> | null
  ): Promise<AxiosResponse> {
    try {
      const resp = await this.#axios.post(url, body, {
        ...this.#getAxiosConfig(),
        params: params,
      });
      return resp;
    } catch (e) {
      throw this.#errorCatcher.processError(e as Error);
    }
  }
  //GLOBAL POST METHOD
  async put(
    url: string,
    params: Record<string, unknown> | null,
    body: Record<string, unknown> | null
  ): Promise<AxiosResponse> {
    try {
      const resp = await this.#axios.put(url, body, {
        ...this.#getAxiosConfig(),
        params: params,
      });
      return resp;
    } catch (e) {
      throw this.#errorCatcher.processError(e as Error);
    }
  }

  //CONNECTIONS
  async getConnections(
    params?: Record<string, unknown>
  ): Promise<Connection[]> {
    const response = (await this.get("/connections", params)).data.datas;
    return response.map(
      (connectionRes: any): Connection =>
        Connection.fromJsonToConnection(connectionRes)
    );
  }

  //METAS
  async getMetas(): Promise<Meta[]> {
    const response = (await this.get("/metas")).data;
    return response.map((meta: any): Meta => Meta.fromJsonToMeta(meta));
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
    // const response = (

    // ).data;


  }
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