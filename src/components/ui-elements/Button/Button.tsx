const styles = {
  primary: 'tw-text-white tw-border-primary-dark tw-bg-primary tw-shadow-[0px_4px_1px_var(--primary-dark)] -tw-translate-y-0.5 tw-my-0.5 hover:tw-bg-primary-light',
  secondary: 'tw-text-foreground-light tw-border-secondary-dark tw-bg-secondary-light tw-shadow-[0px_4px_1px_var(--secondary-dark)] hover:tw-bg-secondary',
}

export default function Button({ style, children }: { children: React.ReactNode, style?: keyof typeof styles }) {
  const styleClass = style ? styles[style] : styles.primary
  return (
    <button className={`tw-group tw-inline-block tw-pointer tw-no-underline tw-rounded tw-border tw-px-3.5 tw-py-1 ${styleClass}`}>
      <span className="tw-tracking-wide">
        {children}
      </span>
    </button>
  );
}
