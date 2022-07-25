<script>
	export let link;
	export let label;
</script>

<a
	class="item"
	href={`https://${link}`}
	rel="noopener noreferrer"
	target="_blank"
>
	{#if label === "undefined" || label == undefined}
		{link}
	{:else}
		{label}
	{/if}
</a>
