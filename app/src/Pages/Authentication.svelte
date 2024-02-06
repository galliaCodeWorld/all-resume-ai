<script>
  import { onMount } from "svelte";
  import { auth } from "../Firebase/config";
  import { createUser, deductCredits } from "../Firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  //
  import { renameKeys, flattenProp, isNotNull } from "ramda-adjunct";
  import { user, isLoading, startLoading, stopLoading } from "../Store";

  import {
    pipe,
    pick,
    when,
    head,
    prop,
    isNil,
    pathOr,
    dissoc,
    evolve,
    always,
    ifElse,
    andThen,
  } from "ramda";
  //
  import Spinner from "../Components/Spinner.svelte";
  import LoadingCircle from "../Components/Spinner.svelte";
  import PageTitle from "../Components/Common/PageTitle.svelte";
  import ContinueWithGoogle from "../Components/Auth/ContinueWithGoogle.svelte";

  const authRedirectPath = "/";

  const handleAuthNavigation = () => isLoading.set(false);
  user.subscribe(when(isNotNull, (stopLoading, handleAuthNavigation)));

  onAuthStateChanged(
    auth,
    ifElse(
      isNil,
      pipe(user.set, stopLoading),
      pipe(
        pick([
          "uid",
          "email",
          "photoURL",
          "metadata",
          "displayName",
          "phoneNumber",
          "providerData",
          "emailVerified",
        ]),
        flattenProp("metadata"),
        dissoc("metadata"),
        evolve({
          providerData: pipe(head, prop("providerId")),
        }),
        renameKeys({ providerData: "providerId" }),
        createUser,
        andThen(user.set)
      )
    )
  );
</script>

<PageTitle value="Continue to the app" />
{#if $isLoading}
  <Spinner isFullScreenLoader="{true}" />
{/if}

{#if !$isLoading}
  {#if $user}
    <slot />
  {:else}
    <main class="h-screen p-4 overflow-auto">
      <div class="fixed top-0 left-0 w-full h-full -z-[0]">
        <img
          src="login-bg.svg"
          alt="login background"
          class="w-full h-full fixed top-0 left-0 object-cover opacity-25" />
      </div>
      <div class="flex flex-col w-full h-full z-10 relative">
        <ContinueWithGoogle />
        <nav
          class="flex gap-4 items-start justify-center py-4 bg-white bg-opacity-40 backdrop-blur-sm">
          <a class="text-gray-700" href="#support">Support</a>
          <a class="text-gray-700" href="#contact-us">Contact Us</a>
          <a class="text-gray-700" href="#terms-of-service"
            >Terms & Conditions</a>
        </nav>
      </div>
    </main>
  {/if}
{/if}
