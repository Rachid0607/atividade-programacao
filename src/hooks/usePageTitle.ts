import { useEffect } from 'react';

/** Atualiza o título da aba do navegador em cada página. */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} | SGEA`;
  }, [title]);
}
