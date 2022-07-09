<script>
	import { page } from "$app/stores";
	import Footer from "../../lib/Footer.svelte";
	import GeneratorItem from "../../lib/GeneratorItem.svelte";

	const site_URL = `${$page.url.origin}/u?`;
	let site_link = undefined;
	let site_label = undefined;

	let items = [];
	function addToList(link, label) {
		if (!link) return;
		if (!label) {
			items.push({ link: link, label: link });
		} else {
			items.push({ link: link, label: label });
		}
		items = items;

		site_link = undefined;
		site_label = undefined;
	}

	function handleEnter(event) {
		if (event.key !== "Enter") return;
		addToList(site_link, site_label);
	}

	function removeItem(link) {
		const index = items.findIndex((value) => {
			return value.link === link;
		});

		if (index > -1) {
			items.splice(index, 1);
		}

		link_to_copy = site_URL;
		items = items;
	}

	let link_to_copy = site_URL;
	function copyLink() {
		for (let i = 0; i < items.length; i++) {
			let modified_link = `${link_to_copy}link=${items[i].link}&label=${items[i].label}&`;
			link_to_copy = encodeURI(modified_link);
		}

		if (items.length === 0) return;

		navigator.clipboard.writeText(link_to_copy);
	}
</script>

<div class="flex flex-col h-full">
	<h1 class="top-text">Generator</h1>

	<div class="grow">
		<div class="max-w-2xl w-full my-8">
			<div>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Site Link</span>
				</label>
				<input
					type="text"
					placeholder="Enter your link"
					bind:value={site_link}
					on:keypress={handleEnter}
					class="input input-bordered w-full max-w-xs"
				/>
			</div>

			<div>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Site Label</span>
				</label>
				<input
					type="text"
					placeholder="Enter your label"
					bind:value={site_label}
					on:keypress={handleEnter}
					class="input input-bordered w-full max-w-xs"
				/>
			</div>

			<div class="mt-4">
				<button
					class="btn btn-sm btn-primary"
					on:click={addToList(site_link, site_label)}
				>
					Add to list
				</button>
				<button class="btn btn-sm btn-primary ml-1" on:click={copyLink}>
					Copy link
				</button>
			</div>
		</div>

		<h2>Links and labels</h2>

		{#each items as item}
			<GeneratorItem
				on:removeFunction={removeItem(item.link)}
				link={item.link}
				label={item.label}
			/>
		{/each}
	</div>

	<Footer />
</div>
