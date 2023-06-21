<!-- routes/login/+page.svelte -->
<script lang="ts">
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
	<a href="/api/oauth">sign in with github</a>
</div>