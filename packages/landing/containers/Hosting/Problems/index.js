import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import ImageOne from 'common/src/assets/image/hosting/info1.png';
import ImageTwo from 'common/src/assets/image/hosting/info2.png';

const ProblemsSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  secText,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  return (
    <Box {...sectionWrapper} id="about_section">
      <Container>
        <Box {...row}>
          <Fade bottom cascade>
            <Box {...row}>
              <Box {...col}>
                <Text {...secText} content="PROBLEM" />
                <Heading
                  {...title}
                  content="Its hard to stand out"
                />
              </Box>
            </Box>

            <Box {...row}>
              <Box {...col} {...textArea}>
                <Text
                  {...description}
                  content="Whether you're looking for more visitors on your site, trying to expand your reach or just want to increase sales, pay per click advertising can help. Its a way to target consumers who are already searching for your products and services. PPC helps your customers cut through the online noise by directing them straight to you."
                />
              </Box>
              <Box {...col} {...textArea}>
                <Text
                  {...description}
                  content="With the right campaign, you can leverage PPC to immediately see increased traffic and begin transforming leads into new customers. Through further analysis and optimisation, you'll then be able to create strong interest in your business month on month by tweaking the use of bids, devices, specific audiences and more."
                />
              </Box>
            </Box>
          </Fade>
          <Fade bottom cascade>
            {/* <Box>
              <Link href="#">
                <a>
                  <Button {...button} title="HOW IT WORKS" />
                </a>
              </Link>
            </Box> */}
          </Fade>
        </Box>
      </Container>
      {/* <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade right>
                <Image src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image src={ImageTwo} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container> */}
    </Box>
  );
};

ProblemsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  secText: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
};

ProblemsSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px', '80px'],
    pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    ml: '-15px',
    mr: '-15px',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#1100ff',
    mb: '10px',
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
};

export default ProblemsSection;
