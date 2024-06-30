<script>
	import { signIn } from '@auth/sveltekit/client';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Separator from '$lib/components/ui/separator/Separator.svelte';
	import Chrome from 'lucide-svelte/icons/chrome';
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Card.Root class="w-[300px] ">
		<Card.Header>
			<Card.Title>Create an Account</Card.Title>
			<Card.Description>Choose your provider</Card.Description>
		</Card.Header>

		<Card.Content>
			<Button
				class="w-full p-5"
				on:click={() => {
					signIn('google', { callbackUrl: `${$page.url.origin}/home` });
				}}
			>
				<Chrome class="mr-2 h-5 w-5" />
				Sign Up with Google
			</Button>

			<Separator />

			<div class="mt-5 flex flex-col gap-2 space-y-1.5">
				<div>
					<Label for="email">Email</Label>
					<Input class="h-8" id="email" placeholder="abc@example.com" />
				</div>
				<div>
					<Label for="password">Password</Label>
					<Input class="h-8" id="password" />
				</div>
				<Button>Create Account</Button>
			</div>
		</Card.Content>

		<Card.Footer>
			<div class="flex gap-2">
				<p>Already have an account?</p>
				<a class="text-sm text-blue-600 underline" href="/auth/login">Log in</a>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
