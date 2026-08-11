const footerLinks = {
  Product: ["Features", "Workflow", "AI Features", "Security"],
  Platform: ["Project Management", "Collaboration", "Documentation", "Client Portal"],
  Resources: ["Documentation", "Blog", "FAQ", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-sm font-semibold text-white">
                F
              </div>

              <span className="text-lg font-semibold text-gray-950">
                FlowForge
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              A unified workspace for project management, collaboration,
              documentation, communication, and product development.
            </p>

            <p className="mt-6 text-xs text-gray-400">
              One workspace. One source of truth.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-950">
                {title}
              </h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition hover:text-gray-950"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © 2026 FlowForge. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-gray-950"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-gray-950"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-gray-950"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}