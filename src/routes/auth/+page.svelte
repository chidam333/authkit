<script lang="ts">
    import {enhance} from "$app/forms"
</script>
<main>
    <form action="?/reg" method="POST" use:enhance>
        <label for="username">username</label>
        <input type="text" id="username" name="username">
        <br/>
        <label for="password">password</label>
        <input type="text" id="password" name="password">
        <button>signup</button>
    </form>
</main>
<style>
</style>