<script>
	export let link = "Link";
	export let label = "Label";
</script>

<div class="flex items-center gap-2 mt-2 max-w-sm overflow-x-scroll">
	<button class="btn btn-square btn-error">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>

	<div>{link}</div>
	<div>|</div>
	<div>{label}</div>
</div>
