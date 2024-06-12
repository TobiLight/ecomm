import { readable } from 'svelte/store';

export const navigating = readable(false, (set) => {
    // Make sure that window exists
    if (typeof window === 'undefined') return;

    const navigatingStarted = () => {
        // Notify subscribers that we are now navigating
        set(true);

        // If page hasn't 'unload' event hasn't fired in 500ms, it's probably cancelled
        let unloaded = false;
        const confirmUnloaded = () => (unloaded = true);
        window.addEventListener('unload', confirmUnloaded);
        window.setTimeout(() => {
            if (!unloaded) {
                set(false);
                window.removeEventListener('unload', confirmUnloaded);
            }
        }, 500);
    };

    window.addEventListener('beforeunload', navigatingStarted);
    return () => window.removeEventListener('beforeunload', navigatingStarted);
});