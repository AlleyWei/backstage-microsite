/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;
const ActionBlock = Components.ActionBlock;
const Breakpoint = Components.Breakpoint;
const BulletLine = Components.BulletLine;

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <main className="MainContent">
        <Block small className="bg-black-grey">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>An open platform for building developer portals</Block.Title>
              <Block.Paragraph>Powered by a centralized service catalog, Backstage restores order to your infrastructure. So your product teams can ship high-quality code quickly — without compromising autonomy.
</Block.Paragraph>
              <Block.LinkButton href={"https://github.com/spotify/backstage"}>GitHub</Block.LinkButton>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-12.5} y={16} width={120} src={`${baseUrl}img/laptop.svg`} />
              <Block.Graphic x={5.8} y={20} width={88} src={`${baseUrl}animations/backstage-logos-hero-8.gif`} />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block small className="stripe-top bg-black">
          <Block.Container wrapped>
            <Block.TextBox>
              <img width="190" src={`${baseUrl}animations/backstage-speed-paradox-7.gif`} />
              <Block.SmallTitle small>The Speed Paradox</Block.SmallTitle>
              <Block.Paragraph>At Spotify, we’ve always believed in the speed and ingenuity that comes from having autonomous development teams. But as we learned firsthand, the faster you grow, the more fragmented and complex your software ecosystem becomes. And then everything slows down again.</Block.Paragraph>
            </Block.TextBox>
            <Block.TextBox>
              <img width="190" src={`${baseUrl}animations/backstage-standards-paradox-4.gif`} />
              <Block.SmallTitle small>The Standards Paradox</Block.SmallTitle>
              <Block.Paragraph>By centralizing services and standardizing your tooling, Backstage streamlines your development environment from end to end. Instead of restricting autonomy, standardization frees your engineers from infrastructure complexity. So you can return to building and scaling, quickly and safely.</Block.Paragraph>
            </Block.TextBox>
          </Block.Container>
        </Block>


        <Block className="stripe-top bg-teal-top-right" wrapped>
          <Block.Container wrapped>
            <img style={{ marginLeft: "-10px" }} width="190" src={`${baseUrl}animations/backstage-service-catalog-icon-1.gif`} />
            <Block.TextBox wide>
              <Block.Subtitle>Backstage service catalog <span>(alpha)</span></Block.Subtitle>
              <Block.Title half>Build an ecosystem, not a wilderness</Block.Title>
            </Block.TextBox>
            <Breakpoint narrow={<img style={{ margin: "auto" }} src={`${baseUrl}img/components-with-filter-small.png`} />} />
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Manage all your software, all in one place </Block.SmallTitle>
              <Block.Paragraph>Backstage makes it easy for one team to manage 10 services — and makes it possible for your company to manage thousands of them</Block.Paragraph>
            </Block.TextBox>
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>A uniform overview</Block.SmallTitle>
              <Block.Paragraph>Every team can see all the services they own and related resources (deployments, data pipelines, pull request status, etc.)</Block.Paragraph>
            </Block.TextBox>
            <Block.Image wide style={{
              background: `url(${baseUrl}img/components-with-filter.png)`, backgroundSize: "594px 435.5px",
              width: "594px", height: "435.5px", margin: "-380px 105px 0 10px"
            }} />
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Metadata on tap</Block.SmallTitle>
              <Block.Paragraph>All that information can be shared with plugins inside Backstage to enable other management features, like resource monitoring and testing</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Not just services</Block.SmallTitle>
              <Block.Paragraph>Libraries, websites, ML models — you name it, Backstage knows all about it, including who owns it, dependencies, and more</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Discoverability & accountability</Block.SmallTitle>
              <Block.Paragraph>No more orphan software hiding in the dark corners of your tech stack</Block.Paragraph>
            </Block.TextBox>
            <Block.TextBox small>
            </Block.TextBox>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Learn more about the service catalog
          </ActionBlock.Title>
          <ActionBlock.Link href={`${baseUrl}demos`}>
            Demos
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe-top bg-teal-bottom" wrapped>
          <Block.Container wrapped>
            <img style={{ marginLeft: "-30px" }} width="190" src={`${baseUrl}animations/backstage-software-templates-icon-5.gif`} />
            <Block.TextBox wide>
              <Block.Subtitle>Backstage software Templates <span>(alpha)</span></Block.Subtitle>
              <Block.Title small>Standards can set you free</Block.Title>
            </Block.TextBox>
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Like automated getting started guides</Block.SmallTitle>
              <Block.Paragraph>Using templates, engineers can spin up a new microservice with your organization’s best practices built-in, right from the start</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Push-button deployment</Block.SmallTitle>
              <Block.Paragraph>Click a button to create a Spring Boot project with your repo automatically configured on GitHub and your CI already running the first build</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Built to your standards</Block.SmallTitle>
              <Block.Paragraph>Go instead of Java? CircleCI instead of Jenkins? Serverless instead of Kubernetes? GCP instead of AWS? Customize your recipes with your best practices baked-in</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Golden Paths pave the way</Block.SmallTitle>
              <Block.Paragraph>When the right way is also the easiest way, engineers get up and running faster — and more safely</Block.Paragraph>
            </Block.TextBox>
            <img style={{ margin: "auto" }} src={`${baseUrl}img/cards.png`} />
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Build your own software templates
          </ActionBlock.Title>
          <ActionBlock.Link href={`https://github.com/spotify/backstage`}>
            Contribute
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe-top bg-teal-bottom" wrapped>
          <Block.Container wrapped>
            <img width="190" src={`${baseUrl}animations/backstage-techdocs-icon-1.gif`} />

            <Block.TextBox wide>
              <Block.Subtitle>Backstage TechDocs <span>(Coming Soon)</span></Block.Subtitle>
              <Block.Title small>Docs like code</Block.Title>
            </Block.TextBox>
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Free documentation</Block.SmallTitle>
              <Block.Paragraph>Whenever you use a Backstage Software Template, your project automatically gets a TechDocs site, for free</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Easy to write</Block.SmallTitle>
              <Block.Paragraph>With our docs-like-code approach, engineers write their documentation in Markdown files right alongside their code</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Easy to maintain</Block.SmallTitle>
              <Block.Paragraph>Updating code? Update your documentation while you’re there — with docs and code in the same place, it becomes a natural part of your workstream</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Easy to find and use</Block.SmallTitle>
              <Block.Paragraph>Since all your documentation is in Backstage, finding any TechDoc is just a search query away</Block.Paragraph>
            </Block.TextBox>
            <img width="80%" style={{ margin: "auto" }} src={`${baseUrl}img/docs-like-code.png`} />
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Subscribe to our newsletter
          </ActionBlock.Title>
          <ActionBlock.Subtitle>TechDocs is our most used feature at Spotify. Be the first to know when the open source version ships.</ActionBlock.Subtitle>
          <ActionBlock.Link href={`https://mailchi.mp/spotify/backstage-community`}>
            Subscribe
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe-top bg-teal-bottom" wrapped>
          <Block.Container wrapped>
            <img width="190" src={`${baseUrl}animations/backstage-plugin-icon-2.gif`} />
            <Block.TextBox wide>
              <Block.Subtitle>Customize Backstage with plugins</Block.Subtitle>
              <Block.Title small>An app store for your infrastructure</Block.Title>
            </Block.TextBox>
            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Add functionality</Block.SmallTitle>
              <Block.Paragraph>Want scalable website testing? Add the Lighthouse plugin. Wondering about recommended frameworks? Add the Tech Radar plugin. </Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>BYO Plugins</Block.SmallTitle>
              <Block.Paragraph>If you don’t see the plugin you need, it’s simple to build your own</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Integrate your own custom tooling</Block.SmallTitle>
              <Block.Paragraph>Building internal plugins lets you tailor your version of Backstage to be a perfect fit for your infrastructure</Block.Paragraph>
            </Block.TextBox>

            <Block.TextBox small>
              <BulletLine />
              <Block.SmallTitle small>Share with the community</Block.SmallTitle>
              <Block.Paragraph>Building open source plugins contributes to the entire Backstage ecosystem, which benefits everyone</Block.Paragraph>
            </Block.TextBox>
            <img src={`${baseUrl}img/cards.png`} />
          </Block.Container>
        </Block>

        <ActionBlock className="stripe-top bg-teal">
          <ActionBlock.Title>
            Build a plugin
          </ActionBlock.Title>
          <ActionBlock.Link href='https://github.com/spotify/backstage/blob/master/docs/plugins/create-a-plugin.md'>
            Contribute
          </ActionBlock.Link>
        </ActionBlock>
      </main>
    );
  }
}

module.exports = Index;
