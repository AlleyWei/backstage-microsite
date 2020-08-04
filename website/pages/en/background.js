/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;

const Background = (props) => {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;
  return (
    <div className="mainWrapper">
      <Block small className="stripe bg-black">
        <Block.QuoteContainer>
          <Block.Divider quote />
          <Block.Quote>
            A one-stop shop for all things infrastructure.<br /> A platform for platforms.
          </Block.Quote>
        </Block.QuoteContainer>
      </Block>

      <Block small className="stripe bg-dots bg-dots-opacity">
        <Block.Container className="opacity-override">
          <Block.TitleBox>Not just adopted, embraced</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>In 2019, more than 200 engineers inside Spotify contributed to Backstage. We now have 110+ plugins developed by 50+ teams. And 80% of contributions came from people outside the Backstage core team.</Block.Paragraph>
            <Block.Paragraph>Any Spotifier, not just engineers, but also compliance and security team members, can easily discover all the software in our ecosystem, see who owns it, and access technical documentation in a centralised location.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block small className="stripe bg-dots">
        <Block.Container className="opacity-override stats_label_block">
          <Block.Paragraph className="stats_label">
            A LOOK AT THE NUMBERS
          </Block.Paragraph>
          <Block.Container>
            <img src={`${baseUrl}img/embraced.svg`} />
          </Block.Container>
        </Block.Container>
      </Block>


      <Block className="stripe-top bg-grey-black">
        <Block.Container>
          <Block.TitleBox>T-shaped engineers, lighter cognitive loads </Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>By providing a consistent experience, even across domains, Backstage helps engineers be <a href="https://medium.com/@jchyip/why-t-shaped-people-e8706198e437">T-shaped</a>. They don’t need to learn an entirely new set of tools, each with a different UX. Because the tools for troubleshooting a failing data pipeline are similar enough to the ones for deploying a website, a T-shaped web engineer is able to help out with basic data engineering tasks.</Block.Paragraph>
            <Block.Paragraph>A familiar, well-designed developer experience reduces the cognitive load on engineers. They spend less time searching and more time building. More energy is spent at the top of the stack instead of the bottom. Features bloom. And developer happiness goes up along with productivity.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
