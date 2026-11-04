import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--sheet)] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--display)' }}>
              Ganit<span style={{ color: 'var(--ap)' }}>o</span>
              <span style={{ color: 'var(--gp)' }}>pia</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Har concept, ek prayog.
              <br />
              Class 9 Math &amp; Science.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3 text-[var(--ink)]">Learn</h4>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <Link href="/math" className="hover:text-[var(--ap)]">Mathematics</Link>
              <Link href="/science" className="hover:text-[var(--sci)]">Science</Link>
              <Link href="/bible" className="hover:text-[var(--ap)] font-semibold text-[var(--ap)]">Class 9 Bible 📖</Link>
              <Link href="/pricing" className="hover:text-[var(--ink)]">Pricing</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3 text-[var(--ink)]">Account</h4>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <Link href="/login" className="hover:text-[var(--ink)]">Login</Link>
              <Link href="/register" className="hover:text-[var(--ink)]">Register</Link>
              <Link href="/dashboard" className="hover:text-[var(--ink)]">Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3 text-[var(--ink)]">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--rule)] text-xs text-[var(--muted)] text-center">
          &copy; {new Date().getFullYear()} Ganitopia &middot; Class 9 CBSE &middot; Hosted on Cloudflare
        </div>
      </div>
    </footer>
  );
}
