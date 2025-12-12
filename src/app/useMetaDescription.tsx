// React hook to set the meta description dynamically
import { useEffect } from 'react';

export function useMetaDescription(description: string) {
  useEffect(() => {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    // Optional: cleanup to restore previous description
    return () => {
      if (meta) meta.setAttribute('content', 'Green Eats: scopri e lasciati ispirare da deliziose ricette vegetariane!');
    };
  }, [description]);
}
