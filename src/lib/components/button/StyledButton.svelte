<script lang="ts">
	type Props = {
		label: string;
	};
	const { label }: Props = $props();
</script>

<button type="submit">{label}</button>
