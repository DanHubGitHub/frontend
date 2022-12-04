import { createApp, reactive, UnwrapNestedRefs } from 'vue';
import App from "./App.vue";
import "./assets/font.css";
import "./index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from "./router";
import { store } from "./store";
import {
	VueQueryPlugin,
	useMutation, useQuery, UseQueryOptions, UseQueryReturnType
} from 'vue-query';
import "./three-dots.css";
import { createHead } from '@vueuse/head'
import unoverlay from 'unoverlay-vue'

// Strapi Query Client //
import { ErrorResponse as TError } from './models/custom';
import Strapi, { StrapiAuthenticationData, StrapiRequestParams, StrapiUser } from 'strapi-sdk-js'
import { QueryKey } from 'react-query/types/core';


declare global {
	interface Window {
		dev: boolean;
	}
}

if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
	window.dev = true;
	console.clear()
	console.info('%c</> %cYou are in developement mode.', 'color: blue; font-weight: bold;', 'color: lime;');
} else {
	window.dev = false;
	console.clear();
	console.info("%cWarning! If someone told you to copy and paste something here, it is a scam and will give them access to your account.\n%cKnow what you're doing? You might be interested in joining the Team! Check out our Discord!", "color: red; font-weight: bold", "color: lime; font-style: italic;");
}

const app = createApp(App);
const head = createHead();

// Vue Plugins //
app.use(head);
app.use(VuePlyr, {
	plyr: {},
});
app.use(router);
app.use(store);
app.use(unoverlay)
app.use(VueQueryPlugin);


export const strapi = new Strapi({
	store: {
		key: "strapi_jwt",
		useLocalStorage: false,
		cookieOptions: { path: "/" },
	},
	url: "https://api.bergflix.de/",
	prefix: "/api",
});

function useStrapiQuery<T>({ queryKey }: any) {
	return strapi
		.find<T>(queryKey[0], queryKey[1] ? queryKey[1] : {})
		.then((res) => {
			return res.data as T;
		});
}

function useStrapiQueryOne<T>({ queryKey }: any) {
	return strapi
		.findOne<T>(queryKey[0], queryKey[1], queryKey[2] ? queryKey[2] : {})
		.then((res) => {
			return res.data;
		});
}

export const strapiLogout = () => {
	strapi.logout();
};

export const strapiLogin = () => {
	return useMutation((authData: StrapiAuthenticationData) =>
		strapi.login(authData)
	);
};

export function useStrapi<T>(
	queryKey: [string, StrapiRequestParams?],
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
): UnwrapNestedRefs<UseQueryReturnType<T, TError>> {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQuery, options));
}

export function useStrapiOne<T>(
	queryKey: [string, any, StrapiRequestParams?],
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
): UnwrapNestedRefs<UseQueryReturnType<T, TError>> {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQueryOne, options));
}

export function getUser(): UnwrapNestedRefs<UseQueryReturnType<StrapiUser, TError>> {
	return reactive(
		useQuery<StrapiUser, TError>(
			"user",
			async () => {
				const user: StrapiUser = await strapi.fetchUser();
				if (!user) {
					throw new Error("User not logged in");
				}
				return user;
			},
			{
				retry: false,
			}
		)
	);
}


app.mount("#app");

console.info("%cBergflix%c.", "color: white; font-size: 50px; background-color: #111; padding: 10px 0px 10px 10px;", "color: #ff0230; background-color: #111; padding: 10px 10px 10px 0px; font-size: 50px;")
console.info("%c💬 Discord: https://discord.bergflix.de\n%c🧑‍💻 Github: https://github.com/bergflix-remake/", "color: #7289da;", "color: #46954a;");