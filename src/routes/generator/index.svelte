<script>
	import Footer from "../../lib/Footer.svelte";
	import GeneratorItem from "../../lib/GeneratorItem.svelte";

	let site_link = undefined;
	let site_label = undefined;
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
					bind:value={site_label}
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
					bind:value={site_link}
					class="input input-bordered w-full max-w-xs"
				/>
			</div>

			<div class="mt-4">
				<button class="btn btn-sm btn-primary">Add to list</button>
				<button class="btn btn-sm btn-primary ml-1">Copy link</button>
			</div>
		</div>

		<h2>Links and labels</h2>

		<GeneratorItem />
	</div>

	<Footer />
</div>
