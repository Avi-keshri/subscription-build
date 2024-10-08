import { Page, Layout,MediaCard } from "@shopify/polaris";

import { TitleBar } from "@shopify/app-bridge-react";

export default function WelcomePage() {
  return (
    <Page>
      <TitleBar title="Welcome page" />
      <Layout>
        <Layout.Section>
          <MediaCard
            title="Getting Started"
            description="Discover how Shopify can power up your entrepreneurial journey."
            size="small"
            primaryAction={{
              content: "Learn about getting started",
              onAction: () => {},
            }}
            popoverActions={{
              content: "Dismiss",
              onAction: () => {},
            }}
          >
            <img
              alt=""
              width="100%"
              height="100%"
              src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </MediaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
