import React from 'react';

export default function Footer() {
    return (
        <footer className="py-4 mt-5 text-center text-light" style={{ background: 'black' }}>
            <div className="container">
                <small>© {new Date().getFullYear()} Abdushekur Mohammed — job potifolio.</small>
            </div>
        </footer>
    );
}
