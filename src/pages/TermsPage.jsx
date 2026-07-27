import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import SEO from '@/components/SEO'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function TermsPage() {
  return (
    <div className="page-dark">
      <SEO
        title="Terms of Use | Single Core Labs"
        description="Terms and conditions governing the use of the Single Core Labs website."
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
              Terms of Use
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
                Thanks for your interest in Single Core Labs ("<strong>SCL</strong>," "<strong>we</strong>," or "<strong>us</strong>") and our website at singlecorelabs.in, as well as our related websites (collectively, our "<strong>Site</strong>"). These terms and conditions, together with our Privacy Policy (together, these "<strong>Terms</strong>"), govern your access to and use of the Site. These Terms expressly do not govern your access to or use of SCL's software platform or services, which are subject to a separate written agreement between you and SCL.
              </p>

              <p>
                <strong>BY ACCESSING OR USING THE SITE</strong>, you are agreeing to be bound by these Terms, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have the authority to bind you to these Terms. If you do not agree with any of the terms in these Terms, you are prohibited from using or accessing the Site.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>1. Use License</h2>
              <p>
                Subject to your complete and ongoing compliance with these Terms, SCL hereby grants you a non-exclusive, non-transferable, non-sublicensable, revocable, worldwide right to access and use the Site, solely with supported browsers through the Internet for your own internal purposes. You may not permit the Site to be used by or for the benefit of unauthorized third parties. Nothing in these Terms will be construed to grant you any right to transfer or assign rights to access or use the Site. All rights not expressly granted to you are reserved by SCL and its licensors.
              </p>
              <p>
                You may not (i) modify or make derivative works based upon the Site; (ii) reverse engineer the Site or access the Site in order to (a) build a competitive product or service, (b) build a product using similar features, functions, or graphics of the Site, or (c) copy any features, functions, or graphics of the Site. You further acknowledge and agree that, as between the parties, SCL owns all right, title, and interest in and to the Site, including the visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Site, and all intellectual property rights therein.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>2. Feedback</h2>
              <p>
                If you choose to provide input and suggestions regarding problems with or proposed modifications or improvements to the Site ("<strong>Feedback</strong>"), then you hereby grant SCL an unrestricted, perpetual, irrevocable, non-exclusive, fully paid, royalty-free right to exploit the Feedback in any manner and for any purpose, including to improve the Site and create other products and services.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>3. Third Party Software</h2>
              <p>
                The Site may include or incorporate third party software components that are generally available free of charge under licenses granting recipients broad rights to copy, modify, and distribute those components ("<strong>Third Party Components</strong>"). Although the Site is provided to you subject to these Terms, nothing in these Terms prevents, restricts, or is intended to prevent or restrict you from obtaining Third Party Components under the applicable third-party licenses or to limit your use of the Third Party Components under those third party licenses. The Site may also contain links to third party websites. Such linked websites are not under SCL's control, and SCL is not responsible for their content.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>4. Monitoring Content</h2>
              <p>
                SCL does not control and does not have any obligation to monitor any content made available by third parties or the use of the Site by its users. You acknowledge and agree that SCL reserves the right to, and may from time to time, monitor any and all information transmitted or received through the Site for operational or other purposes. If at any time SCL chooses to monitor the content, SCL still assumes no responsibility or liability for content or any loss or damage incurred as a result of the use of content. During monitoring, information may be examined, recorded, copied, and used in accordance with our Privacy Policy.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>5. Term and Termination</h2>
              <p>
                These Terms are effective beginning when you accept these Terms or first access or use the Site, and ending when terminated as described below. If you violate any provision of these Terms, your authorization to access the Site and these Terms automatically terminate. In addition, SCL may, at its sole discretion, terminate these Terms or suspend or terminate your access to the Site, at any time for any reason or no reason, with or without notice. You may terminate these Terms at any time by emailing{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
                Upon termination of these Terms: (a) your license rights will terminate and you must immediately cease all use of the Site. Sections 2, 6, 7, 8, and 10 will survive.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>6. Indemnification</h2>
              <p>
                To the fullest extent permitted by law, you agree to defend, hold harmless and indemnify SCL and its officers, directors, employees, consultants, affiliates, subsidiaries and agents (together, the "<strong>SCL Entities</strong>") from and against any and all claims brought by a third party, and any related losses, costs, expenses, damages or other liabilities incurred arising from or related to: (a) your unauthorized use of, or misuse of, the Site; (b) your breach of any provision of these Terms; (c) your violation of any applicable law or regulation; (d) your violation of any third party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right; or (e) any dispute or issue between you and any third party.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>7. Disclaimer</h2>
              <p>
                THE SITE AND ALL MATERIALS AND CONTENT ON AND AVAILABLE THROUGH THE SITE ARE PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS. SCL MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS, AND ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. SCL DOES NOT WARRANT THAT THE SITE OR ANY PORTION OF THE SITE, OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SITE, ARE ACCURATE, COMPLETE, OR CURRENT, OR WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS; AND SCL DOES NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>8. Limitations of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL SCL OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF THE USE OR INABILITY TO USE THE SITE OR THE MATERIALS ON THE SITE, EVEN IF SCL OR A SCL AUTHORIZED REPRESENTATIVE HAS BEEN NOTIFIED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE. TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE LIABILITY OF SCL AND ITS SUPPLIERS TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE ANY PORTION OF THE SITE OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>9. Modifications</h2>
              <p>
                SCL may revise these Terms at any time without notice; provided that, if we make any material changes to these Terms, we will use commercially reasonable efforts to notify you. By continuing to use the Site, you are agreeing to be bound by the then current version of these Terms.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>10. Governing Law</h2>
              <p>
                Any claim relating to the Site or these Terms will be governed by the laws of India without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>11. Support</h2>
              <p>
                We are under no obligation to provide support for the Site. In instances where we may offer support, the support will be subject to published policies.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}>12. Contact Information</h2>
              <p>
                You may contact us by emailing{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .legal-prose h2 {
          margin-top: 8px;
        }
        .legal-prose p {
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  )
}
