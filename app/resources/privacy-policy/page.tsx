import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import components from "@/components";
import { policyData, policySections } from "@/data";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Privacy Policy | {policyData.companyName}</title>
        <meta
          name="description"
          content={`Privacy Policy for ${policyData.companyName}`}
        />
      </Head>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="text-sm text-gray-600 mb-8">
          Last updated: {policyData.lastUpdated}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <nav className="mb-6">
          <ul className="list-inside list-disc space-y-1">
            {policySections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-primary hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="policy-content">
        {policySections.map((section) => (
          <components.PolicySection key={section.id} section={section} />
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          For any questions or concerns about this privacy policy, please
          contact us at{" "}
          <a
            href={`mailto:${policyData.contactEmail}`}
            className="text-primary hover:underline"
          >
            {policyData.contactEmail}
          </a>{" "}
          or call us at {policyData.contactPhone}.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
