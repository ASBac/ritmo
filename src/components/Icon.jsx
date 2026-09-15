const iconPaths = {
  calendar: (
    <>
      <path d="M7 3v3M17 3v3M4.5 9h15" />
      <rect x="4.5" y="5" width="15" height="15" rx="2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 2" />
    </>
  ),
  device: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 17.5h2" />
    </>
  ),
  edit: <path d="m14.5 5.5 4 4M6 18l2.5-.5 9-9a1.4 1.4 0 0 0 0-2 1.4 1.4 0 0 0-2 0l-9 9L6 18Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
    </>
  ),
  trash: <path d="M5 7h14M9 7V4.5h6V7M7 7l1 13h8l1-13M10 10.5v5M14 10.5v5" />,
}

export function Icon({ name, size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {iconPaths[name]}
      </g>
    </svg>
  )
}
