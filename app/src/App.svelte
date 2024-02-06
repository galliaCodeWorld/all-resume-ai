<script>
  import { Route } from "tinro";
  import { user } from "./Store";

  // Components
  import Toast from "./Components/Toast";
  import Lazy from "./Components/Common/Lazy.svelte";
  // Pages
  import Button from "./Components/Form/Button.svelte";
  import Layout from "./Components/Common/Layout.svelte";
  import Authentication from "./Pages/Authentication.svelte";

  const Resume = import("./Pages/ResumeBuilder.svelte");
  const Billing = import("./Pages/Billing.svelte");
  const Support = import("./Pages/Support.svelte");
  const Dashboard = import("./Pages/Dashboard.svelte");
</script>

<Authentication>
  <Route path="/" exact>
    <Lazy component="{Dashboard}" />
  </Route>
  <Route path="/billing">
    <Lazy component="{Billing}" />
  </Route>

  <Route path="/support">
    <Lazy component="{Support}" />
  </Route>

  <Route path="/support">
    <Lazy component="{Support}" />
  </Route>

  <Route path="/resume/new">
    <Lazy component="{Resume}" />
  </Route>
</Authentication>

<Toast />
