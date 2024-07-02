<script lang="ts">
	import { onMount } from 'svelte';
	import Clock from '$lib/components/ui/clock/Clock.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import Background from '$lib/components/ui/background/+page.svelte';

	let result: number;
	let time = new Date();
	async function fetchData() {
		const response = await fetch('/api/calculate');
		const data = await response.json();
		time = new Date();
		result = data.result;
	}

	onMount(() => {
		fetchData();
		const interval = setInterval(fetchData, 1000);
		return () => clearInterval(interval);
	});

	let betMultiplier = 0;
	let amount = '';
	$: amount = (100 * betMultiplier).toString();

	let choice: any = null;
	function setChoice(btnChoice: number) {
		choice = btnChoice;
	}
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Background />

	<!-- <h1 class=" text-center text-4xl font-extrabold">Guess on Binaries</h1> -->

	<Clock />

	{#if result == null}
		<h1 class="mb-2 mt-2 font-mono text-xl">Loading...</h1>
	{:else}
		<h1 class="mb-2 mt-2 font-mono text-xl">
			Last round's Binary was {result}
			[{time.getHours()}:{String(time.getMinutes()).padStart(2, '0')}]
		</h1>
	{/if}

	{#if choice === 1}
		<h1 class="mb-2 mt-2 font-mono text-xl">You chose 1</h1>
	{:else if choice === 0}
		<h1 class="mb-2 mt-2 font-mono text-xl">you chose 0</h1>
	{:else}
		<h1 class="mb-2 mt-2 font-mono text-xl">you haven't chose any side</h1>
	{/if}
	
	<div class="mt-5 flex gap-8">
		<div>
			<Popover.Root>
				<Popover.Trigger>
					<Button class="w-[100px] font-extrabold">0</Button>
				</Popover.Trigger>
				<Popover.Content id="h" class="mt-3">
					<div>
						<Label for="amount">Multiplier</Label>
						<Input
							class="h-8"
							id="btnBet0"
							placeholder="$100"
							type="number"
							min="0"
							bind:value={betMultiplier}
						/>
					</div>
					<Popover.Close class="w-full">
						<Button class="mt-5 h-8" on:click={() => setChoice(0)}>Bet</Button>
					</Popover.Close>
				</Popover.Content>
			</Popover.Root>
		</div>
		<div>
			<h1>${amount}</h1>
		</div>
		<div>
			<Popover.Root>
				<Popover.Trigger>
					<Button class="w-[100px] font-extrabold">1</Button>
				</Popover.Trigger>
				<Popover.Content class="mt-3">
					<div>
						<Label for="bet">Multiplier</Label>
						<Input
							class="h-8"
							id="btnBet1"
							placeholder="$100"
							type="number"
							min="0"
							bind:value={betMultiplier}
						/>
					</div>
					<Popover.Close class="w-full">
						<Button class="mt-5 h-8" on:click={() => setChoice(1)}>Bet</Button>
					</Popover.Close>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>

	<Button
		class=" absolute right-5 top-5"
		on:click={() => {
			signOut();
			console.log('signOut');
		}}>Log out</Button
	>
</div>
