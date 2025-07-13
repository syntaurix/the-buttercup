import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Buttercup Brand Colors - Updated from specifications
				'buttercup': {
					'primary-green': 'hsl(var(--primary-green))',
					'warm-orange': 'hsl(var(--warm-orange))',
					'soft-cream': 'hsl(var(--soft-cream))',
					'sage-green': 'hsl(var(--sage-green))',
					'warm-gray': 'hsl(var(--warm-gray))',
					'pure-white': 'hsl(var(--pure-white))',
					'charcoal-dark': 'hsl(var(--charcoal-dark))'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'sans': ['Inter', 'sans-serif']
			},
			fontSize: {
				'xs': '0.75rem',
				'sm': '0.875rem',
				'base': '1.1rem',  // Increased base font size
				'lg': '1.25rem',
				'xl': '1.5rem',
				'2xl': '1.875rem',
				'3xl': '2.25rem',
				'4xl': '2.5rem',   // H2 size
				'5xl': '3rem',     // H1 size
				'6xl': '3.75rem',
				'7xl': '4.5rem'
			},
			spacing: {
				'luxury': '16px',
				'luxury-2': '32px',
				'luxury-3': '48px',
				'luxury-4': '64px',
				'luxury-6': '96px',
				'luxury-8': '128px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'parallax-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'parallax-float': 'parallax-float 6s ease-in-out infinite'
			},
			transitionDuration: {
				'800': '800ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
