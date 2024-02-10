<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    // Function to close the popup
    function closePopup() {
        dispatch('close');
    }

    // Detect clicks outside the popup
    function handleClickOutside(event) {
        if (!event.target.closest('.popup-content')) {
            closePopup();
        }
    }
</script>

<style>
    .popup {
        position: fixed;
        top: 0;
        right: 0;
        width: 30%;
        height: 100vh;
        background-color: white;
        overflow-y: auto;
        z-index: 100; /* Ensure it's above other content */
    }

    .popup-content {
        padding: 20px;
    }

    .close-button {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px;
    }

    .image-container img {
        width: 100%;
        object-fit: cover;
        transition: border 0.3s ease;
    }

    .image-container img:hover {
        border: 2px solid blue;
    }
    .template-img {
        cursor: pointer;
    }
</style>

<div class="popup" on:click={handleClickOutside}>
    <div class="popup-content">
        <span class="close-button" on:click={closePopup}>X</span>
        <!-- Images inside the popup -->
        <div class="image-container" on:click={closePopup}>
            {#each Array(5) as _, index}
                <img class="template-img" src="../templates/template-{index+1}.png" alt={`Template ${index + 1}`}>
            {/each}
        </div>
    </div>
</div>
