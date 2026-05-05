import * as React from "react";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass rounded-[2rem] border border-[var(--border-primary)] overflow-hidden transition-all duration-700 hover:border-luxury-accent/30 group ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 pb-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-10 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 pt-0 flex items-center ${className}`}>{children}</div>
);
