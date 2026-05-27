import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

const SIGNIN =
  'https://www.princesspromotions.com/signin?locale=en-US&currency=USD'

type LoginCtaBandProps = {
  variant?: 'default' | 'dark'
}

export function LoginCtaBand({ variant = 'default' }: LoginCtaBandProps) {
  const isDark = variant === 'dark'
  return (
    <ScrollReveal
      className={
        isDark
          ? 'login-cta-wrap login-cta-wrap--in-verdict'
          : 'login-cta-wrap'
      }
    >
      <div className={`login-cta${isDark ? ' login-cta--dark' : ''}`}>
        <h3>{isDark ? 'Ready to Get Started?' : 'Ready to Redeem Your Credits?'}</h3>
        <p>
          {isDark
            ? 'Log in to your Princess Promotions account to check your balance, view certificates, or book your next cruise.'
            : 'Log in to your Princess Promotions account to check your FCC balance, view your certificates, or start booking.'}
        </p>
        <Link
          href={SIGNIN}
          className="cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In to Your Account →
        </Link>
        <div className="cta-sub">
          Need help with cruise fare or FCCs? See How to Use Benefits on this page. For package and
          hotel support, see How to use benefits.
        </div>
      </div>
    </ScrollReveal>
  )
}
