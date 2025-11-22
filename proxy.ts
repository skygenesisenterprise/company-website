import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { requiresAuthentication } from './app/lib/navigation-config';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pages publiques (layout avec fond animé, sans sidebar/header)
  const publicPaths = ['/login', '/register', '/forgot-password'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Vérifier l'authentification via localStorage (cookies ou headers)
  const token = request.cookies.get('authToken')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');

  // Redirection si non authentifié et page protégée
  if (!isPublicPath && requiresAuthentication(pathname) && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirection si authentifié et page publique
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};