import React from 'react';
import { ThemeProvider, useThemeMode, Button, Input, Switch, Badge, Checkbox, Tabs, Spinner, Select, SegmentedControl } from '../../src';

const Toggle: React.FC = () => {
  const { mode, toggle } = useThemeMode();
  return (
    <button onClick={toggle} style={{ marginBottom: 16 }}>
      Toggle theme (current: {mode})
    </button>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
        <section
          style={{
            padding: '64px 24px',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.10) 60%, rgba(255,255,255,0.0) 100%)',
            borderBottom: '1px solid rgba(0,0,0,0.06)'
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 16 }}>
            <h1 style={{ fontSize: 36, margin: 0 }}>Design System Demo</h1>
            <p style={{ fontSize: 16, opacity: 0.9 }}>Premium, calm, and confident UI kit.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button colorScheme="green">Get Started</Button>
              <Button variant="outline" colorScheme="green">Docs</Button>
            </div>
          </div>
        </section>
        <main style={{ padding: 24 }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 24 }}>
            <Toggle />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <section style={{ padding: 20, borderRadius: 16, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 30px rgba(2,8,23,0.08)', backdropFilter: 'blur(10px)', transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 240ms cubic-bezier(0.2,0.8,0.2,1)' }} onMouseEnter={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 18px 44px rgba(2,8,23,0.12)';}} onMouseLeave={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 12px 30px rgba(2,8,23,0.08)';}}>
                <h3>Buttons</h3>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Button colorScheme="green">Solid</Button>
                  <Button variant="outline" colorScheme="green">Outline</Button>
                  <Button variant="ghost" colorScheme="green">Ghost</Button>
                  <Button variant="link" colorScheme="green">Link</Button>
                </div>
              </section>
              <section style={{ padding: 20, borderRadius: 16, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 30px rgba(2,8,23,0.08)', backdropFilter: 'blur(10px)', transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 240ms cubic-bezier(0.2,0.8,0.2,1)' }} onMouseEnter={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 18px 44px rgba(2,8,23,0.12)';}} onMouseLeave={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 12px 30px rgba(2,8,23,0.08)';}}>
                <h3>Forms</h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  <Input label="Email" placeholder="you@example.com" />
                  <Input label="Password" type="password" required />
                  <Select label="Plan" options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]} />
                </div>
              </section>
              <section style={{ padding: 20, borderRadius: 16, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 30px rgba(2,8,23,0.08)', backdropFilter: 'blur(10px)', transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 240ms cubic-bezier(0.2,0.8,0.2,1)' }} onMouseEnter={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 18px 44px rgba(2,8,23,0.12)';}} onMouseLeave={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 12px 30px rgba(2,8,23,0.08)';}}>
                <h3>States</h3>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span>Notifications</span>
                    <Switch aria-label="Notifications" />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
                  <Badge colorScheme="green">Success</Badge>
                  <Badge variant="solid" colorScheme="green">Solid</Badge>
                  <Badge variant="outline" colorScheme="green">Outline</Badge>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
                  <Checkbox label="Subscribe" defaultChecked />
                  <Checkbox label="Terms" />
                </div>
                <div style={{ marginTop: 12 }}>
                  <SegmentedControl
                    segments={[
                      { id: 'free', label: 'Free' },
                      { id: 'pro', label: 'Pro' },
                      { id: 'team', label: 'Team' },
                    ]}
                  />
                </div>
              </section>
              <section style={{ padding: 20, borderRadius: 16, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 30px rgba(2,8,23,0.08)', backdropFilter: 'blur(10px)', transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 240ms cubic-bezier(0.2,0.8,0.2,1)' }} onMouseEnter={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 18px 44px rgba(2,8,23,0.12)';}} onMouseLeave={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 12px 30px rgba(2,8,23,0.08)';}}>
                <h3>Navigation</h3>
                <Tabs
                  items={[
                    { id: 'one', label: 'One', content: <div>Tab One</div> },
                    { id: 'two', label: 'Two', content: <div>Tab Two</div> },
                    { id: 'three', label: 'Three', content: <div>Tab Three</div> },
                  ]}
                />
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <Spinner />
                  <span>Loading data…</span>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};


