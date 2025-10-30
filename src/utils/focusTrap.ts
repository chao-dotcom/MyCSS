export type FocusTrapHandle = { deactivate: () => void };

function getFocusableElements(root: HTMLElement): HTMLElement[] {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
  return Array.from(root.querySelectorAll<HTMLElement>(selectors.join(','))).filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
  );
}

export function createFocusTrap(container: HTMLElement, initial?: HTMLElement): FocusTrapHandle {
  const previouslyFocused = (document.activeElement as HTMLElement) || null;
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const focusables = getFocusableElements(container);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onFocus = (e: FocusEvent) => {
    if (!container.contains(e.target as Node)) {
      const focusables = getFocusableElements(container);
      focusables[0]?.focus();
    }
  };

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('focusin', onFocus);

  const focusables = getFocusableElements(container);
  (initial ?? focusables[0] ?? container).focus();

  return {
    deactivate: () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocus);
      previouslyFocused?.focus?.();
    },
  };
}


