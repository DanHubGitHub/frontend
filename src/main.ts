import { createApp } from 'vue';
import App from "./App.vue";
import "./assets/font.css";
import "./index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from "./router";
import { store } from "./store";
import {
	VueQueryPlugin,
} from 'vue-query';
import "./three-dots.css";

const app = createApp(App);

// Vue Plugins //
app.use(VuePlyr, {
	plyr: {},
});
app.use(router);
app.use(store);
app.use(VueQueryPlugin);

// Strapi Query Export //
export * from './util/api';

app.mount("#app");
