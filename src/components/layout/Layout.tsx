import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className={`container mx-auto px-4 py-8 ${className}`}>
        {children}
      </main>
      
      {/* Footer simples */}
      <footer className="border-t bg-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 BookShelf. Desenvolvido para gerenciar sua biblioteca pessoal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}