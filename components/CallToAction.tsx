import Link from "next/link";

const CallToAction = () => (
  <section className="w-full">
    <div className="text-white rounded-xl p-8 text-center max-container py-16 bg-primary">
      <h2 className="head-text text-white mb-4">Ready to Get Started?</h2>
      <p className="mb-6 subhead-text text-white font-normal">
        Have questions or need assistance? Reach out to us—we&apos;re here to help
        with all your accounting and tax needs.
      </p>
      <Link href="/contact" className="inline-block">
        <button className="bg-black hover:bg-textLight">Contact Us</button>
      </Link>
    </div>
  </section>
);

export default CallToAction;
