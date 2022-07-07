<!-- 
  * 
  * http://localhost:3000/u?link=cocotier.ro&link=example.com&link=github.com&link=proton.me&label=cocotier&label=example&label=github&label=proton
  * 
 -->
<script>
	import { page } from "$app/stores";
	import Item from "../../lib/Item.svelte";
	import Footer from "../../lib/Footer.svelte";

	const params = $page.url.searchParams;
	const links = params.getAll("link");
	const labels = params.getAll("label");
	const page_title = params.get("title");

	let items = [];
	for (let i = 0; i < links.length; i++) {
		if (labels[i]) {
			items.push({
				link: links[i],
				label: labels[i],
			});
		}
	}
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
		{#if items[0] === undefined}
			<p class="text-center">This URL has no parameters.</p>
			<p class="text-center">
				Perhaps you would like to try our <a class="link" href="./generator"
					>generator</a
				>.
			</p>
		{/if}

		{#each items as item}
			<Item link={item.link} label={item.label} />
		{/each}
	</div>

	<Footer />
</div>
