import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { BsInstagram, BsMailbox, BsMapFill, BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaMapPin } from "react-icons/fa";
// import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">
                  T
                </span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Tiles Gallery
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Discover the perfect tiles for your space. Premium quality,
              timeless designs, and exceptional craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/all-tiles"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                All Tiles
              </Link>
              <Link
                href="/my-profile"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                My Profile
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <FaMapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>123 Design Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <BiPhone className="h-4 w-4 shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CgMail className="h-4 w-4 shrink-0 text-primary" />
                <span>hello@tilesgallery.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <BsInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <BsTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay connected for the latest collections and design inspiration.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
