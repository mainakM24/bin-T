<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Card.Root class="w-[300px] border-gray-400">
		<Card.Header class="items-center p-10">
			<Card.Title class="font-extrabold">Welcome to BinT</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<Button href="/auth/login">Log in</Button>
				<Button href="/auth/signup">Sign Up</Button>
			</div>
		</Card.Content>
		<Card.Footer></Card.Footer>
	</Card.Root>
</div>
