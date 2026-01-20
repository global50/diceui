import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Members from './pages/Members';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-8">
                <Link to="/" className="text-xl font-bold text-foreground">
                  DiceUI
                </Link>
                <div className="flex gap-4">
                  <Link
                    to="/"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/members"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Members
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
