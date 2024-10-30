<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './StyledButton.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/StyledButton',
		component: Button,
		tags: ['autodocs']
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->

<Story name="Small" args={{ label: 'My Styled Button' }} />
