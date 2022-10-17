import { Breakpoint } from '../components/Breakpoint';
import { Container } from '../components/Container';
import { H1, H2, H3, Link } from '../components/elements';
import { Section } from '../components/Section';
import { COMPANIES, SITE_NAME } from '../strings';

export default function Home() {
  return (
    <>
      <a href="/">
        <img src="/lg-financial-logo.png" alt={SITE_NAME} />
      </a>
      <Container>
        <Section>
          <H1>{SITE_NAME}</H1>
          <H2>Dennis Landis</H2>
          <p>
            <Link href="mailto:dennis@landisgroup.ca">dennis@landisgroup.ca</Link>
          </p>
        </Section>
        <Section>
          <H3>Companies that represent the Landis Group:</H3>
          <ul>
            {COMPANIES.map((company) => (
              <li className="text-gray-700 mb-2">{company}</li>
            ))}
          </ul>
        </Section>
      </Container>
      <Breakpoint />
    </>
  );
}
