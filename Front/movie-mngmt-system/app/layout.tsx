import React from 'react'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';
import { Header } from './components/header/header';

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
          <Header />
          {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}