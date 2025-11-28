import Footer from "@/components/landing/Footer";
import Link from "next/link";
import LandingWrapper from "@/components/landing/LandingWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 border-b bg-[#f0ffff]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/nutrigenie.png" alt="NutriGenie Logo" width={64} height={64} className="w-12 h-12 rounded-lg" />
            <span className="text-l font-semibold text-green-700">
              Nutrigenie — Because Your Body Deserves Its Own AI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        <LandingWrapper />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}