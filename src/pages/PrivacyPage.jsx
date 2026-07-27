import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import SEO from '@/components/SEO'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function PrivacyPage() {
  return (
    <div className="page-dark">
      <SEO
        title="Privacy Policy | Single Core Labs"
        description="Privacy policy for Single Core Labs website and services."
      />
      <Navbar />
      <main id="main-content" style={{ minHeight: '100vh' }}>
        <section style={{
          paddingTop: 'clamp(120px, 18vh, 180px)',
          paddingBottom: 'clamp(80px, 12vh, 140px)',
        }}>
          <div className="container-editorial" style={{ maxWidth: '780px' }}>
            <p className="text-eyebrow" style={{ marginBottom: '20px' }}>Legal</p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '12px',
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-dim)',
              marginBottom: '48px',
            }}>
              Last Updated: July 27, 2026
            </p>

            <div className="legal-prose" style={{
              fontSize: '14px',
              lineHeight: 1.8,
              color: 'var(--color-text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}>
              <p>
                Single Core Labs ("<strong>SCL</strong>," "<strong>we</strong>," or "<strong>us</strong>") respects your privacy and is committed to protecting your personal information. Please read this policy carefully to understand how we will collect, use, and disclose your information, and what choices you have with respect to your information.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>1. Who We Are</h2>
              <p>
                We are Single Core Labs, a Pune, Maharashtra-based company that designs original AI architectures and ships them into production across healthcare, infrastructure, and developer tooling.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>2. Scope and Applicability</h2>
              <p>
                This policy describes how SCL collects, uses, shares or otherwise processes information relating to individuals and the rights associated with that processing. A reference to "SCL," "we," "us" or the "Company" is a reference to Single Core Labs and its affiliates involved in the collection, use, sharing, or other processing of personal information.
              </p>
              <p>
                This Privacy Policy applies to the personal information we collect when you use our website (singlecorelabs.in) and our products, services, and applications (collectively, the "<strong>Services</strong>"), when you attend an SCL event, or otherwise interact with us.
              </p>
              <p>
                This Privacy Policy does not apply to the extent we process personal information in the role of processor or service provider on behalf of our customers. If you are an individual who interacts with a customer using our Services and you contact us regarding this data, you will be directed to contact the applicable customer for assistance with any requests or questions relating to your personal information.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>3. Personal Information We Collect</h2>
              <p>
                When we talk about "personal information" or "personal data," we mean any information that relates to an identifiable, living individual person.
              </p>
              <p><strong>A. Personal Information You Provide Us Directly.</strong> We collect personal information you provide directly to us when interacting with us or using the Services, such as your name, email address, phone number, company name, and billing information. Providing this information is voluntary but may be necessary in certain cases, such as for account registration or service delivery.</p>
              <p><strong>B. Personal Information We Collect From You Automatically.</strong> We use standard tools such as log files, cookies, and similar technologies to automatically collect information from your devices while you navigate our Services or interact with emails we send to you.</p>
              <p><strong>C. Personal Information We Collect From Third Parties.</strong> We may also collect personal data from third-party sources such as authentication partners for the purposes of user authentication and marketing activities.</p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>4. How and Why We Use Personal Information</h2>
              <p>We use the personal information we collect for the following purposes:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>To provide, operate, and maintain our Services</li>
                <li>To improve, personalize, and expand our Services</li>
                <li>To communicate with you, including for customer support and marketing</li>
                <li>To process transactions and send related information</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>5. Personal Information Sharing and Disclosure</h2>
              <p>We may share your personal information in the following circumstances:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Service Providers.</strong> We may share information with trusted third-party service providers who assist us in operating our Services, conducting our business, or serving you, so long as they agree to keep this information confidential.</li>
                <li><strong>Business Transfers.</strong> We may share information in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Legal Requirements.</strong> We may disclose information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.</li>
                <li><strong>Consent.</strong> We may share your information for any other purpose with your consent.</li>
              </ul>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>6. Security</h2>
              <p>
                SCL employs appropriate and reasonable physical, technological, and administrative security measures to safeguard your information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>7. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this policy, or as required to comply with our legal obligations, resolve disputes, and enforce our agreements. After expiry of the applicable retention periods, your personal information will be deleted.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>8. Links to Other Websites</h2>
              <p>
                Our Services may contain links to third-party websites. When you click on a link to any other website, the third party may collect or access information from you. The use of such information will be governed by the third party's privacy policy. We have no control over and are not responsible for these third-party services.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>9. Our Policy on Children</h2>
              <p>
                Our Services are not directed to individuals under 18. If SCL becomes aware that a person under 18 has submitted information to us, we will delete the information. If you believe that we may have any information from a child under 18, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>10. Your Privacy Rights and Choices</h2>
              <p>
                Depending on your location and subject to applicable law, you may have the following rights with regard to the personal information we control about you:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>You may access, correct, amend, or delete your personal information by contacting us.</li>
                <li>You may object to or restrict the processing of your personal information.</li>
                <li>You may request the portability of your personal information.</li>
                <li>You may withdraw your consent at any time, where processing is based on consent.</li>
                <li>You may opt out of marketing communications at any time by following the unsubscribe instructions in any such communication.</li>
                <li>You have the right to complain to a data protection authority about our collection and use of your personal information.</li>
              </ul>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>11. Information for California Consumers</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act ("CCPA") provides you with specific rights regarding your personal information. You may request access to or deletion of your personal information, and you have the right not to receive discriminatory treatment for exercising your CCPA rights. We do not sell your personal information. To exercise your CCPA rights, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>12. International Users</h2>
              <p>
                If you are accessing our Services from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our servers and service providers are located. By using our Services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules than those in your country.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>13. Modification of Privacy Policy</h2>
              <p>
                SCL may modify this Privacy Policy periodically. The "Last Updated" legend at the top of this page indicates when this Privacy Policy was last revised. Any changes will become effective when we post the revised Privacy Policy on the website. If we make any material changes, we will take appropriate measures to provide you with additional notice. We encourage you to review this Privacy Policy from time to time.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>14. Contacting Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
              </p>
              <p>
                Or by mail:
              </p>
              <p style={{
                padding: '16px 20px',
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                fontSize: '13px',
                lineHeight: 1.6,
              }}>
                Single Core Labs<br />
                Pune, Maharashtra<br />
                India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .legal-prose h2 { margin-top: 8px; }
        .legal-prose p { margin-bottom: 16px; }
      `}</style>
    </div>
  )
}
