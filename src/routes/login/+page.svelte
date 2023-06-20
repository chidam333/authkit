<!-- routes/login/+page.svelte -->
<script lang="ts">
	const oauth = async()=>{
		const response = await fetch('/api/oauth')
	}
</script>

<div>
	<h1>Sign in</h1>
	<form method="POST" action="?/login">
		<label for="username">Username</label><br />
		<input id="username" name="username" /><br />
		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" /><br />
		<input type="submit" value="Continue" />
	</form>
	<button on:click={oauth}>sign in with github</button>
</div>