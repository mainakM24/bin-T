<script>
	import Clock from '$lib/components/ui/clock/Clock.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import Background  from '$lib/components/ui/background/+page.svelte'
	console.log($page.data.session?.user?.name);
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Background/>
	<h1 class=" text-4xl font-extrabold">Next Round in</h1>
	<Clock />
	<div class="mt-5 flex gap-10">
		<div>
			<Popover.Root>
				<Popover.Trigger>
					<Button class="w-[100px] font-extrabold">0</Button>
				</Popover.Trigger>
				<Popover.Content id="h" class="mt-3">
					<div>
						<Label for="amount">Amount</Label>
						<Input class="h-8" id="amount" placeholder="$100" />
					</div>
					<Popover.Close>
						<Button class="mt-5 h-8">Bet</Button>
					</Popover.Close>
				</Popover.Content>
			</Popover.Root>
		</div>
		<div>
			<Popover.Root>
				<Popover.Trigger>
					<Button class="w-[100px] font-extrabold">1</Button>
				</Popover.Trigger>
				<Popover.Content class="mt-3">
					<div>
						<Label for="bet">Amount</Label>
						<Input class="h-8" id="amount" placeholder="$100" />
					</div>
					<Popover.Close>
						<Button class="mt-5 h-8">Bet</Button>
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
