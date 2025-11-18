import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-10 backdrop-blur">
      <div className="container mx-auto flex flex-col gap-4 px-6 text-sm text-slate-300/80 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white font-semibold">Kandarp Patel</p>
          <p>Cloud-native software engineer · Halifax, Canada</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="https://www.linkedin.com/in/kandarp-patel" className="hover:text-white transition" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://github.com/kandarp-patel" className="hover:text-white transition" target="_blank">
            GitHub
          </Link>
          <Link href="mailto:kandarp.canada@gmail.com" className="hover:text-white transition">
            Email
          </Link>
        </div>
        <p className="text-slate-400/80">© {new Date().getFullYear()} Kandarp Patel</p>
      </div>
    </footer>
  );
};

export default Footer;
