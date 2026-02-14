import Wizard from '@/app/components/Onboarding/Wizard';
import Link from 'next/link';

export default function StartPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-2xl mb-8 flex justify-between items-center relative z-10">
                <Link href="/" className="text-2xl font-bold tracking-tighter outfit">
                    Lewis<span className="text-muted">Labs</span>
                </Link>
                <Link href="/" className="text-sm text-muted hover:text-white transition-colors">
                    Exit
                </Link>
            </div>

            <div className="w-full relative z-10">
                <Wizard />
            </div>
        </main>
    );
}
