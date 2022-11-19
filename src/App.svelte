<script>
  import { Route, Router } from "svelte-routing";
  import Footer from "./lib/Footer.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Verify from "./pages/Verify.svelte";
  import Write from "./pages/Write.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<div class="min-h-screen h-full flex flex-col justify-between">
  <Router {url}>
    <NavBar />
    <main class="h-full md:m-0 mt-3 mx-3">
      <Route path="/">
        <Home />
      </Route>
      <Route path="login">
        <Login />
      </Route>
      <Route path="signup">
        <Signup />
      </Route>
      <Route path="write">
        <Write />
      </Route>
      <Route path="verify">
        <Verify />
      </Route>
    </main>
    <Footer />
  </Router>
</div>
