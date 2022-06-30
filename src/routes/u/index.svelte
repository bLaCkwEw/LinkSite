<!-- 
  * 
  * http://localhost:3000/u?link=cocotier.ro&link=example.com&link=github.com&link=proton.me&label=cocotier&label=example&label=github&label=proton
  * 
 -->
<script>
	import Item from "../../lib/Item.svelte";
	import { page } from "$app/stores";
	import Footer from "../../lib/Footer.svelte";

	const params = $page.url.searchParams;
	const links = params.getAll("link");
	const labels = params.getAll("label");
	const page_title = params.get("title");

	let items = [];
	console.log(items[0]);
	for (let i = 0; i < links.length; i++) {
		// If label use label
		if (labels[i]) {
			items.push({
				link: links[i],
				label: labels[i],
			});
		}

		// If no label use link as label
		if (labels[i] === undefined) {
			items.push({
				link: links[i],
				label: links[i],
			});
		}
	}
	// Gaseste un mod prin care sa faci sa functioneze #each block-ul
</script>

<div class="u-container">
	<h1 class="text-2xl text-center pt-8">
		{#if page_title}
			{page_title}
		{:else}
			<a href="/"> LinkSite </a>
		{/if}
	</h1>

	<div class="container-links">
		<!-- Display if there are no params -->
		{#if items[0] === undefined}
			<p>This URL has no parameters.</p>
			<p>
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
