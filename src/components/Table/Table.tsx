import React from 'react';

export type Column<T> = { key: keyof T; header: string };

export function Table<T extends Record<string, unknown>>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, background: 'transparent' }}>
      <thead style={{ background: 'rgba(22,163,74,0.10)' }}>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} scope="col" style={{ textAlign: 'left', padding: '12px 16px' }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            style={{ background: i % 2 ? 'rgba(22,163,74,0.06)' : 'rgba(22,163,74,0.02)', transition: 'background 180ms cubic-bezier(0.2,0.8,0.2,1)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'rgba(22,163,74,0.12)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = i % 2 ? 'rgba(22,163,74,0.06)' : 'rgba(22,163,74,0.02)'; }}
          >
            {columns.map((col) => (
              <td key={String(col.key)} style={{ padding: '12px 16px', borderTop: '1px solid #e5e7eb' }}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}


