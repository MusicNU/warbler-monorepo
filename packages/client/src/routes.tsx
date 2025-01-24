import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router';

function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b p-4">
        <div className="container mx-auto flex gap-4">
          <Link to="/" className="hover:text-primary" activeProps={{ className: 'text-primary' }}>
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary"
            activeProps={{ className: 'text-primary' }}
          >
            About
          </Link>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
function HomePage() {
  return (
    <div className="prose">
      <h1>Welcome Home</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
