import React from 'react';

export type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ page, pageCount, onPageChange }) => {
  const canPrev = page > 1;
  const canNext = page < pageCount;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination">
      <ul style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0 }}>
        <li>
          <button
            disabled={!canPrev}
            onClick={() => canPrev && onPageChange(page - 1)}
            aria-label="Previous Page"
            style={{ minWidth: 40, minHeight: 40, borderRadius: 12, background: canPrev ? '#ffffff' : 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 6px 16px rgba(2,8,23,0.06)', transition: 'transform 180ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms cubic-bezier(0.2,0.8,0.2,1)' }}
          >
            «
          </button>
        </li>
        {pages.map((p) => (
          <li key={p}>
            <button
              aria-current={p === page ? 'page' : undefined}
              onClick={() => onPageChange(p)}
              style={{ fontWeight: p === page ? 700 : 500, minWidth: 40, minHeight: 40, borderRadius: 12, background: p === page ? 'rgba(22,163,74,0.12)' : '#ffffff', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 6px 16px rgba(2,8,23,0.06)', color: p === page ? '#166534' : 'inherit', transition: 'transform 180ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms cubic-bezier(0.2,0.8,0.2,1)' }}
            >
              {p}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={!canNext}
            onClick={() => canNext && onPageChange(page + 1)}
            aria-label="Next Page"
            style={{ minWidth: 40, minHeight: 40, borderRadius: 12, background: canNext ? '#ffffff' : 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 6px 16px rgba(2,8,23,0.06)', transition: 'transform 180ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms cubic-bezier(0.2,0.8,0.2,1)' }}
          >
            »
          </button>
        </li>
      </ul>
    </nav>
  );
};


