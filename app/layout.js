'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <html lang="en">
      <body>
        <header className="navbar navbar-expand-lg navbar-light bg-primary text-light">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand text-light">Space Mysteries</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link text-light">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/black-holes" className="nav-link text-light">Black Holes</Link>
                </li>
                <li className="nav-item">
                  <Link href="/dark-matter" className="nav-link text-light">Dark Matter</Link>
                </li>
                <li className="nav-item">
                  <Link href="/cosmic-phenomena" className="nav-link text-light">Cosmic Phenomena</Link>
                </li>
                <li className="nav-item">
                  <Link href="/unexplained-events" className="nav-link text-light">Unexplained Events</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
