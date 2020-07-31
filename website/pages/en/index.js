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
              <Block.Graphic x={5.8} y={20} width={88} src={`${baseUrl}img/screen.gif`} />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block small className="stripe-top bg-black">
          <Block.Container>
            <Block.TextBox>
              <img src={`${baseUrl}img/backstage-speed-paradox-7.png`} />
              <Block.SmallTitle small>The Speed Paradox</Block.SmallTitle>
              <Block.Paragraph>At Spotify, we’ve always believed in the speed and ingenuity that comes from having autonomous development teams. But as we learned firsthand, the faster you grow, the more fragmented and complex your software ecosystem becomes. And then everything slows down again.</Block.Paragraph>
            </Block.TextBox>
            <Block.TextBox>
              <img src={`${baseUrl}img/backstage-speed-paradox-7.png`} />
              <Block.SmallTitle small>The Standards Paradox</Block.SmallTitle>
              <Block.Paragraph>By centralizing services and standardizing your tooling, Backstage streamlines your development environment from end to end. Instead of restricting autonomy, standardization frees your engineers from infrastructure complexity. So you can return to building and scaling, quickly and safely.</Block.Paragraph>
            </Block.TextBox>
          </Block.Container>
        </Block>


        <Block className="stripe-top bg-teal-top-right" wrapped>
          <Block.Container wrapped>
            <Block.TextBox wide>
              <Block.Subtitle>Backstage service catalog <span>(alpha)</span></Block.Subtitle>
              <Block.Title small>Build an ecosystem, not a wilderness</Block.Title>
            </Block.TextBox>
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
            <Block.TextBox wide>
              <BulletLine />
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
            <img src={`${baseUrl}img/cards.png`} />
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Build your own software templates
          </ActionBlock.Title>
          <ActionBlock.Link href={`${baseUrl}demos`}>
            Contribute
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe-top bg-teal-bottom" wrapped>
          <Block.Container wrapped>
            <Block.TextBox wide>
              <BulletLine />
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
            <img src={`${baseUrl}img/cards.png`} />
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Subscribe to our newsletter
          </ActionBlock.Title>
          <ActionBlock.Subtitle>TechDocs is our most used feature at Spotify. Be the first to know when the open source version ships.</ActionBlock.Subtitle>
          <ActionBlock.Link href={`${baseUrl}demos`}>
            Subscribe
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>As simple as writing a plugin.</Block.Title>
              <Block.Paragraph>Backstage makes unifying all of your infrastructure tooling, services, and documentation as simple as writing a plugin. With all your developer tools
in one place, your engineers will always know where to find the right tool for the job. And they’ll already know how to use it, too — because now all your tools use the same, easy-to-use UI.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Breakpoint
                wide={<Block.Graphic x={-5} y={-5} width={132} src={`${baseUrl}img/plugin.svg`} />}
                narrow={<Block.Graphic x={-23.5} y={-5} width={132} src={`${baseUrl}img/plugin-mobile.svg`} />}
              />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-grey-black">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Developers are people, too.</Block.Title>
              <Block.Paragraph>Why shouldn’t developer tools provide a first-class user experience? After all, engineers are people, too. Backstage is elegantly designed to make a diverse ecosystem of plugins, components, and frameworks easier to access and easier to use. How? By doing what other developer portals forget to consider: the developer on the other end of the portal.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-5} y={-5} width={120} src={`${baseUrl}img/developers.svg`} />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Read why we built it
          </ActionBlock.Title>
          <ActionBlock.Link href={`${baseUrl}background`}>
            Our Story
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>An open platform inside and out.</Block.Title>
              <Block.Paragraph>As a fully extensible platform, Backstage enables infrastructure teams to integrate new ideas from wherever they come from — whether that’s the open source community at large or the people who understand your infrastructure pain points the best: your own engineers. This extensibility is one reason why Backstage wasn’t just adopted, but embraced by Spotify’s own engineers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-20} y={-10} width={140} src={`${baseUrl}img/open-platform.svg`} />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-grey-black">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Compliance, privacy, and security, oh my!</Block.Title>
              <Block.Paragraph>Managing compliance across five services is one thing. Managing 5,000 is quite another. Backstage makes it possible to scale and makes all the hairy bits less hairy. Plus, happier lawyers, accountants, and security officers also make for happier developers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Breakpoint
                wide={<Block.Graphic x={-33} y={-15} width={150} src={`${baseUrl}img/compliance.svg`} />}
                narrow={<Block.Graphic x={-25} y={-40} width={150} src={`${baseUrl}img/compliance.svg`} />}
              />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe-top bg-teal">
          <ActionBlock.Title>
            Subscribe to our newsletter
          </ActionBlock.Title>
          <ActionBlock.Link href='https://mailchi.mp/spotify/backstage-community'>
            Subscribe
          </ActionBlock.Link>
        </ActionBlock>
      </main>
    );
  }
}

module.exports = Index;
