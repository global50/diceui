import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to DiceUI
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A React + Vite application with a beautiful UI component library.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/members"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            View Members
          </Link>
        </div>
      </div>
    </div>
  );
}
