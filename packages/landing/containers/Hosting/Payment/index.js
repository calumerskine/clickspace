import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import CardImage from 'common/src/assets/image/hosting/pay-card.png';
import PayLogos from 'common/src/assets/image/hosting/pay-logo.png';

const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageOne,
  imageTwo,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="Retargeted Services"
              />
              <Text
                {...description}
                content="You’ve likely run into retargeting ads without realizing it. Boiling down remarketing (retargeting) efforts to their essence simplifies it: Visitors to your site are identified and tagged, which follows them around onto other sites. When that user reaches another Display Network or Search Network site, an ad is served up just for them.

                Step 1: Potential Customer Visits Site
                Step 2: Potential Customer Leaves Without Checking Out
                Step 3: Potential Customer Goes Online Later
                Step 4: Potential Customer Visits Sees Your Retargeting Advertisement
                Step 5: The Potential Customer Returns To Your Site
                Step 6: Another Opportunity To Convert Your Potential Customer Into A Customer

                Retargeting is an incredible tool for creating and fostering top-of-mind awareness. When a potential customer thinks of your brand first within your product category, that gives you a huge advantage. It is human nature to like things to which you are familiar. and that is the true power of retargeting."
              />
              <Box>
                <Link href="#">
                  <a>
                    <Button {...button} title="LEARN MORE" />
                  </a>
                </Link>
              </Box>
            </Fade>
          </Box>
          <Box {...col} {...imageArea}>
            <Fade right>
              <Image {...imageOne} src={CardImage} alt="Card Image" />
            </Fade>
            <Fade bottom>
              <Image {...imageTwo} src={PayLogos} alt="Payment logos" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['40px', '40px', '40px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
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
    mb: ['40px', '40px', '0', '0', '0'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
  },
  title: {
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto',
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default PaymentSection;
