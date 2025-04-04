/// <reference types="@sveltejs/kit" />

declare module "*.svelte" {
  export { SvelteComponent as default } from "svelte";
}
