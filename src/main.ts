import App from '@/presentation/App.vue';
import { SimpleDI } from 'typescript-simple-di';
import { createApp } from 'vue';
import LogInUC from './domain/useCases/auth/logInUC';
import { initDI } from './middleware/corn_injector';

async function main() {
    initDI();

    const app = createApp(App)

    // register router
    app.use(SimpleDI.get('CornRouter').router)

    // mount app
    app.mount('#app')

}

main();
