<script>
  import { Route, Router } from "svelte-routing";
  import Footer from "./lib/Footer.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<div class="flex flex-col h-screen justify-between">
  <Router {url}>
    <NavBar />
    <main class="h-full mb-auto">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </main>
    <Footer />
  </Router>
</div>
