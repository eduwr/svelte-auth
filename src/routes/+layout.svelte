<script lang="ts">
	import '../app.css';
	let { children, data } = $props();

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const { data } = data.supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== data.session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

{@render children()}
