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
				// The Buttercup Custom Colors
				'sage': {
					50: '85 22% 97%',   // #F8FAF4
					100: '85 25% 94%',  // #F1F5E9
					200: '85 28% 85%',  // #E3EBD3
					300: '85 31% 76%',  // #D5E1BD
					400: '86 55% 65%',  // #A8D26D
					500: '88 52% 55%',  // #8BC34A (primary-sage)
					600: '88 49% 50%',  // #7CB342 (deep-sage)
					700: '88 46% 43%',  // #689F38
					800: '88 43% 36%',  // #558B2F
					900: '88 40% 26%'   // #33691E
				},
				'cream': {
					50: '0 0% 99%',     // #FEFEFE (soft-white)
					100: '40 33% 96%',  // #F8F6F0 (warm-cream)
					200: '0 0% 96%',    // #F5F5F5 (subtle-gray)
					300: '40 13% 90%',  // #E8E6E0
					400: '40 10% 85%'   // #DBD9D3
				},
				'charcoal': {
					500: '0 0% 24%',    // #3E3E3E
					600: '0 0% 18%',    // #2E2E2E
					700: '0 0% 12%'     // #1E1E1E
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'cormorant': ['Cormorant Garamond', 'serif'],
				'source': ['Source Sans Pro', 'sans-serif']
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
