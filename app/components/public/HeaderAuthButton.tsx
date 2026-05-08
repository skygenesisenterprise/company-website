/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Component: HeaderAuthButton
 * Layer: Public UI
 * Purpose: Provides authentication buttons in the header.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */
"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderAuthButtonProps {
  loginText: string;
  accountText: string;
  signUpText: string;
  signUpHref: string;
}

export function HeaderAuthButton({ loginText, accountText, signUpText, signUpHref }: HeaderAuthButtonProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-9 w-20 bg-muted animate-pulse rounded" />
        <div className="h-9 w-24 bg-muted animate-pulse rounded" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isAuthenticated ? (
        <Link href="https://account.skygenesisenterprise.com">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-4 font-medium text-muted-foreground hover:text-foreground"
          >
            {accountText}
          </Button>
        </Link>
      ) : (
        <Link href="https://sso.skygenesisenterprise.com/login">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-4 font-medium text-muted-foreground hover:text-foreground"
          >
            {loginText}
          </Button>
        </Link>
      )}
      <Link href={signUpHref}>
        <Button size="sm" className="h-9 px-4 font-medium">
          {signUpText}
        </Button>
      </Link>
    </div>
  );
}