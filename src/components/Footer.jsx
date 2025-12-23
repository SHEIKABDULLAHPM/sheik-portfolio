const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/95">
    <div className="content-shell layout-shell flex flex-col gap-2 py-6 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p>© {new Date().getFullYear()} Peer Sheik Abdullah · Crafted with care.</p>
      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Thanks for visiting</p>
    </div>
  </footer>
);

export default Footer;
