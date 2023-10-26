'use client';
const { NextUIProvider } = require('@nextui-org/react');

function Providers({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

module.exports = Providers;