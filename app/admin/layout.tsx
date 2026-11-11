/**
 * Keep Studio full-viewport above the site chrome from the root layout.
 * A dedicated (studio) route group would be cleaner long-term; this unblocks /admin.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity-studio-root"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        height: '100dvh',
        width: '100vw',
        overflow: 'auto',
        background: '#fff',
      }}
    >
      {children}
    </div>
  );
}
