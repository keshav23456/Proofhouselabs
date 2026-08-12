export default function Logo({ withWordmark = true, size = 30 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M32 6 L56 19.5 V46.5 L32 60 L8 46.5 V19.5 Z"
          fill="none"
          stroke="#5B8C7B"
          strokeWidth="2.5"
        />
        <path
          d="M32 14 L48 23 V41 L32 50 L16 41 V23 Z"
          fill="none"
          stroke="#2A2F38"
          strokeWidth="1"
        />
        <path
          d="M20 32.5 L28.5 41 L46 21"
          fill="none"
          stroke="#F2EFE9"
          strokeWidth="4.2"
          strokeLinecap="square"
        />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 560,
            fontSize: size * 0.62,
            letterSpacing: '-0.01em',
            color: 'var(--paper)',
          }}
        >
          Proofhouse<span style={{ color: 'var(--lab-green-bright)' }}>.</span>
        </span>
      )}
    </div>
  )
}
