import { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call - in production, this would send to your backend
    try {
      // Store email in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter-subscribers', JSON.stringify(subscribers));
      }

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      setStatus('success');
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#1B3A6B', color: '#F8F6F1' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg opacity-90">
            Get notified about playbook updates, new templates, and government contracting insights delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail
                size={18}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') {
                    setStatus('idle');
                    setErrorMessage('');
                  }
                }}
                disabled={status === 'loading' || status === 'success'}
                className="w-full pl-12 pr-4 py-3 rounded border-none outline-none transition-all"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1B3A6B',
                  opacity: status === 'loading' || status === 'success' ? 0.6 : 1,
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-3 rounded font-serif font-bold transition-all whitespace-nowrap"
              style={{
                backgroundColor: '#D4A574',
                color: '#1B3A6B',
                opacity: status === 'loading' || status === 'success' ? 0.7 : 1,
                cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (status !== 'loading' && status !== 'success') {
                  e.currentTarget.style.backgroundColor = '#E8C9A0';
                }
              }}
              onMouseLeave={(e) => {
                if (status !== 'loading' && status !== 'success') {
                  e.currentTarget.style.backgroundColor = '#D4A574';
                }
              }}
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded" style={{ backgroundColor: '#FEE2E2' }}>
              <AlertCircle size={18} style={{ color: '#DC2626', flexShrink: 0 }} />
              <p style={{ color: '#991B1B', fontSize: '0.875rem' }}>
                {errorMessage}
              </p>
            </div>
          )}

          {/* Success Message */}
          {status === 'success' && (
            <div className="flex items-center gap-2 p-3 rounded" style={{ backgroundColor: '#DCFCE7' }}>
              <CheckCircle2 size={18} style={{ color: '#16A34A', flexShrink: 0 }} />
              <p style={{ color: '#15803D', fontSize: '0.875rem' }}>
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          )}
        </form>

        {/* Privacy Notice */}
        <p className="text-xs text-center mt-6 opacity-75">
          We respect your privacy. Unsubscribe at any time. No spam, ever.
        </p>
      </div>
    </section>
  );
}
