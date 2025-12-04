import * as React from "react";

export function Drawer({ children }) {
  const [open, setOpen] = React.useState(false);
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (child.type.displayName === 'DrawerTrigger') {
      return React.cloneElement(child, { onClick: () => setOpen(true) });
    }
    if (child.type.displayName === 'DrawerContent') {
      return open ? React.cloneElement(child, { onClose: () => setOpen(false) }) : null;
    }
    return child;
  });
}

export function DrawerTrigger({ asChild, children, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { ...props });
  }
  return <button {...props}>{children}</button>;
}
DrawerTrigger.displayName = 'DrawerTrigger';

export function DrawerContent({ children, onClose }) {
  React.useEffect(() => {
    function onEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.4)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    }} onClick={onClose}>
      <div style={{
        background: 'var(--drawer-bg)',
        minWidth: 260,
        maxWidth: 340,
        width: '80vw',
        minHeight: '100vh',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        padding: 0,
        position: 'relative',
        animation: 'slideInRight 0.3s cubic-bezier(.4,0,.2,1)',
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{position:'absolute',top:12,right:12,fontSize:24,background:'none',border:'none',cursor:'pointer', color: 'var(--drawer-text)'}}>×</button>
        {children}
      </div>
    </div>
  );
}
DrawerContent.displayName = 'DrawerContent';
