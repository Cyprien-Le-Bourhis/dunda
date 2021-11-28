import AuthRepo from "@/data/repositories/auth_repo";
import CookieService from "@/data/services/cookie_service";
import UsersApiService from "@/data/services/users_api_service";
import CheckTokenCookieUC from "@/domain/useCases/auth/checkTokenCookieUC";
import LogInUC from "@/domain/useCases/auth/logInUC";
import LogOutUC from "@/domain/useCases/auth/logOutUC";
import GetAllConnections from "@/domain/useCases/connections/getAllConnectionsUC";
import CreateItemsUC from "@/domain/useCases/items/createItemUc";
import GetItemsUC from "@/domain/useCases/items/getItemsUC";
import GetMetas from "@/domain/useCases/meta_datas/getMetasUC";
import GetMetaType from "@/domain/useCases/meta_datas/getMetaType";
import GetUsersUC from "@/domain/useCases/users/getUsersUC";
import CornRouter from "@/presentation/router/router";
import { SimpleDI } from "typescript-simple-di";
import CornApiService from "../data/services/corn_api_service";
import DundaApiService from "../data/services/dunda_api_service";
import ErrorCatcher from "./error_catcher";
import TokenInjector from "./token_injector";

export function initDI(): void {
  SimpleDI.registerByName("ErrorCatcher", new ErrorCatcher());
  SimpleDI.registerByName("TokenInjector", new TokenInjector());

  SimpleDI.registerByName(
    "DundaApiService",
    new DundaApiService(
      SimpleDI.get("ErrorCatcher"),
      SimpleDI.get("TokenInjector")
    )
  );

  SimpleDI.registerByName("CookieService", new CookieService())
  SimpleDI.registerByName(
    "AuthRepo",
    new AuthRepo(SimpleDI.get("DundaApiService"), SimpleDI.get("TokenInjector"), SimpleDI.get("CookieService"))
  );
  SimpleDI.registerByName(
    "CornRouter",
    new CornRouter(SimpleDI.get("AuthRepo"))
  );
  SimpleDI.registerByName("LogInUC", new LogInUC(SimpleDI.get("AuthRepo")));
  SimpleDI.registerByName("LogOutUC", new LogOutUC(SimpleDI.get("AuthRepo")));
  SimpleDI.registerByName("CheckTokenCookieUC", new CheckTokenCookieUC(SimpleDI.get("AuthRepo")));


  SimpleDI.registerByName(
    "GetAllConnections",
    new GetAllConnections(SimpleDI.get("DundaApiService"))
  );

  //USERS      
  SimpleDI.registerByName("UsersApiService", new UsersApiService(SimpleDI.get("DundaApiService")))
  SimpleDI.registerByName(
    "GetUsersUC",
    new GetUsersUC(SimpleDI.get("UsersApiService"))
  );


  //ITEM 
  SimpleDI.registerByName(
    "GetItems",
    new GetItemsUC(SimpleDI.get("DundaApiService"))
  );
  SimpleDI.registerByName(
    "CreateItemsUC",
    new CreateItemsUC(SimpleDI.get("DundaApiService"))
  );


  SimpleDI.registerByName(
    "GetMetas",
    new GetMetas(SimpleDI.get("DundaApiService"))
  );
  SimpleDI.registerByName(
    "GetMetaType",
    new GetMetaType(SimpleDI.get("GetMetas"))
  );

}
