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
import { createHead } from '@vueuse/head'
import apolloClient from './util/gql'
import { DefaultApolloClient } from '@vue/apollo-composable'

const app = createApp(App);
const head = createHead();

app.provide(DefaultApolloClient, apolloClient)

// Vue Plugins //
app.use(head);
app.use(VuePlyr, {
	plyr: {},
});
app.use(router);
app.use(store);
app.use(VueQueryPlugin);

// Strapi Query Export //
export * from './util/api';

app.mount("#app");
