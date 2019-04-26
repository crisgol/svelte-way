<script>
    import {Link} from "../../src";
</script>

<style>
    ul {
        width: 100%;
        float: left;
        list-style: none;
    }

	li :global(a) {
        padding: 15px;
        background-color: #DDDDDD;
        margin: 0 5px;
        float: left;
        cursor: pointer;
        color: black;
        text-decoration: none;
        border-radius: 2px;
        user-select: none;
        border-bottom: 1px solid transparent;
    }

    li :global(a:hover) {
        background-color: #CCC;
    }
    
    li :global(a:active) {
        background-color: #b0adad;
    }

    li :global(a.active) {
        border-bottom-color: red;
    }
</style>

<ul>
	<li>
        <Link path="/">Index</Link>
    </li>
	<li>
        <Link path="/home">Home</Link>
    </li>
	<li>
        <Link path="/about">About</Link>
    </li>
	<li>
        <Link path="/user/12">User 12</Link>
    </li>
	<li>
        <Link path="/user/12/info">User 12 -> info</Link>
    </li>
</ul>
