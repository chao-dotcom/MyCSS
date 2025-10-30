import React from 'react';

export type Crumb = { href?: string; label: string };

export const Breadcrumbs: React.FC<{ items: Crumb[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx}>
              {isLast ? (
                <span aria-current="page">{it.label}</span>
              ) : it.href ? (
                <a href={it.href} style={{ color: '#16A34A', textDecoration: 'none' }} onMouseEnter={(e)=>e.currentTarget.style.textDecoration='underline'} onMouseLeave={(e)=>e.currentTarget.style.textDecoration='none'}>{it.label}</a>
              ) : (
                <span>{it.label}</span>
              )}
              {!isLast ? <span aria-hidden="true" style={{ margin: '0 6px', color: '#94a3b8' }}>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
