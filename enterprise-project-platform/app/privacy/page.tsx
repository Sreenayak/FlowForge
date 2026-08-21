import Link from "next/link";

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" text="FlowForge protects workspace information and uses it only to provide and improve the product." />;
}

function LegalPage({ title, text }: { title: string; text: string }) {
  return <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-950"><div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8"><Link href="/dashboard" className="text-sm font-semibold hover:underline">Back to workspace</Link><h1 className="mt-10 text-3xl font-bold">{title}</h1><p className="mt-4 leading-7 text-gray-600">{text}</p></div></main>;
}