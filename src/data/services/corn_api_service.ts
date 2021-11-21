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

export default class CornApiService {
  #axios: AxiosInstance;
  #tokenInjector: TokenInjector;
  #errorCatcher: ErrorCatcher;

  constructor(errorCatcher: ErrorCatcher, tokenInjector: TokenInjector) {
    this.#tokenInjector = tokenInjector;
    this.#axios = axiosService.create({
      baseURL: process.env.VUE_APP_API_BASE_URL,
    });

    this.#errorCatcher = errorCatcher;
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
    const response = (
      await this.post("/oauth/token", null, {
        grant_type: "password",
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        username: username,
        password: password,
      })
    ).data;
    return Auth.fromJsonToAuth(response);
  }
}
