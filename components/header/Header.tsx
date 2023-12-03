import Navigation from "@/components/navigation/Navigation";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'BlogClient', href: '/blog-client' },
  { label: 'BlogClientZustandSWR', href: '/blog-client-zustand-swr' },
  { label: 'About', href: '/about' }
]

const Header = () => {
  return (
    <header>
      <Navigation navLinks={ navItems }/>
    </header>
  );
};

export default Header;