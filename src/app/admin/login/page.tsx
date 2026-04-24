'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BlurFade from '@/components/magicui/blur-fade';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/admin');
      } else {
        const data = await response.json();
        setError(data.error || 'Invalid credentials');
      }
    } catch (error) {
      setError('Connection error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col space-y-10 py-12 sm:py-24">
      <BlurFade delay={0.1}>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="size-3" />
            Restricted Area
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Admin Authentication
          </h1>
          <p className="text-muted-foreground md:text-xl font-medium">
            Enter your secure access code to manage the portfolio experience.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" name="password-label">Secure Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-12 text-lg tracking-widest"
                autoFocus
                required
              />
              {error && (
                <p className="text-destructive text-sm font-semibold animate-in slide-in-from-top-1 duration-300">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button type="submit" disabled={loading} className="w-full h-12 text-base font-bold group">
                {loading ? 'Authenticating...' : 'Unlock Dashboard'}
                {!loading && <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />}
              </Button>

              <Link href="/" className="inline-flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                Return to Portfolio
              </Link>
            </div>
          </form>
        </div>
      </BlurFade>
    </main>
  );
}