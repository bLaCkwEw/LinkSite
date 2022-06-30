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
	{label}
</a>
