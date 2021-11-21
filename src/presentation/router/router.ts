import AuthRepo from '@/data/repositories/auth_repo';
import ConnectionList from '@/presentation/pages/connections/connection_list.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from '../pages/auth/AuthPage.vue';
import Home from '../pages/Home.vue';
import UserDetailsPage from '../pages/users/UserDetailsPage.vue';
import UsersPage from '../pages/users/UsersPage.vue';
import ThemePage from '@/presentation/pages/ThemePage.vue'
import LabPage from '../pages/lab/LabPage.vue';

export default class CornRouter {
    router;
    #authRepo: AuthRepo;
    routes: Array<RouteRecordRaw> = [
        {
            path: "/",
            name: "home",
            meta: {
                requiresAuth: true,
            },
            component: Home,
        },
        {
            path: "/users",
            name: "users",
            meta: {
                requiresAuth: true,
            },
            component: UsersPage,
        },
        {
            path: "/users/:id",
            name: "user-details",
            meta: {

                requiresAuth: true,
            },
            component: UserDetailsPage,

        },
        {
            path: "/connections",
            name: "connections",
            meta: {
                requiresAuth: true,
            },
            component: ConnectionList,

        },
        {
            path: "/lab",
            name: "Lab",
            meta: {
                requiresAuth: true,
            },
            component: LabPage,

        },
        {
            path: "/login",
            name: "login",
            meta: {
                layout: 'offline',
                requiresAuth: false,
            },
            component: AuthPage,

        },
        {
            path: "/theme",
            name: "theme",
            meta: {
                requiresAuth: false,
            },
            component: ThemePage,

        }
    ]

    constructor(authRepo: AuthRepo) {
        const routes = this.routes;
        this.#authRepo = authRepo;
        this.router = createRouter({
            history: createWebHistory(),
            routes,
            scrollBehavior() {
                return { top: 0 }
            }
        });

        this.#initRouterBeforeHook();
    }

    #initRouterBeforeHook(): void {
        this.router.beforeEach((to, from, next) => {

            // theme identifier
            document.body.setAttribute('data-layout', to.meta.layout || 'default')

            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (!this.#authRepo.isAuth) {
                    next({
                        path: 'login',
                    })
                } else {
                    next()
                }
            } else {
                next()
            }
        })
    }

}





