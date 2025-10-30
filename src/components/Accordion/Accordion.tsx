import React from 'react';

export type AccordionItem = { id: string; header: React.ReactNode; content: React.ReactNode };

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));
  return (
    <div style={{ border: '1px solid rgba(0,0,0,0.06)', borderRadius: 12, background: 'rgba(255,255,255,0.7)', boxShadow: '0 8px 24px rgba(2,8,23,0.06)' }}>
      {items.map((it) => {
        const open = openId === it.id;
        const btnId = `acc-btn-${it.id}`;
        const panelId = `acc-panel-${it.id}`;
        return (
          <div key={it.id}>
            <button
              id={btnId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(it.id)}
              style={{ width: '100%', textAlign: 'left', padding: '14px 18px', background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <span style={{ flex: 1 }}>{it.header}</span>
              <span aria-hidden="true" style={{ transition: 'transform 200ms cubic-bezier(0.2,0.8,0.2,1)', transform: open ? 'rotate(90deg)' : 'rotate(0)' }}>›</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!open}
              style={{
                padding: open ? '12px 18px' : '0 18px',
                borderTop: '1px solid rgba(0,0,0,0.06)',
                background: 'rgba(250, 250, 252, 0.6)',
                transition: 'padding 220ms cubic-bezier(0.2,0.8,0.2,1), max-height 260ms cubic-bezier(0.2,0.8,0.2,1), opacity 220ms ease',
                overflow: 'hidden',
                maxHeight: open ? 400 : 0,
                opacity: open ? 1 : 0
              }}
            >
              {open ? it.content : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};


