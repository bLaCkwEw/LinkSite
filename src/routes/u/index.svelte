<!-- 
  * 
  * http://localhost:3000/u?link=cocotier.ro&link=example.com&link=github.com&link=proton.me&label=cocotier&label=example&label=github&label=proton
  * 
 -->
<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Item from "../../lib/Item.svelte";
	import Footer from "../../lib/Footer.svelte";

	function getParams(param_name) {
		return $page.url.searchParams.getAll(param_name);
	}

	function getParam(param_name) {
		return $page.url.searchParams.get(param_name);
	}

	const page_title = getParam("title");
	const theme = getParam("theme");

	function generateLinkData() {
		const links = getParams("link");
		const labels = getParams("label");

		const result = links.map((link, linkIndex) => {
			const label = labels.find((e, labelIndex) => {
				return labelIndex === linkIndex;
			});

			return [link, label];
		});

		return result;
	}

	onMount(() => {
		if (theme) {
			document.documentElement.setAttribute("data-theme", theme);
		}
	});
</script>

<div class="u-container">
	<h1 class="top-text">
		{#if page_title}
			{page_title}
		{:else}
			<a href="/"> LinkSite </a>
		{/if}
	</h1>

	<div class="container-links">
		<!-- Display if there are no params -->
		{#if generateLinkData()[0] == undefined}
			<p class="text-center">This URL has no parameters.</p>
			<p class="text-center">
				Perhaps you would like to try our <a class="link" href="./generator"
					>generator</a
				>.
			</p>
		{/if}

		{#each generateLinkData() as data}
			<Item link={data[0]} label={data[1]} />
		{/each}
	</div>

	<Footer />
</div>
