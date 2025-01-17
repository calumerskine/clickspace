import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import GuaranteeImage from 'common/src/assets/image/hosting/badge.png';

const AuditSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Fade bottom cascade>
              <Heading {...title} content="Free Google AdWords audit" />
              <Text
                {...description}
                content="Get some immediate insight into your current campaign to see what works and what doesn't. Studies have shown that small businesses can waste up to 30% of their AdWords budget. Don't throw away your hard earned money. Let a Google AdWords Certified professional help you."
              />
            </Fade>
          </Box>
        </Box>
        {/* <Box {...row}>
          <Box {...imageArea}>
            <Zoom>
              <Image {...ImageOne} src={GuaranteeImage} alt="Guarantee" />
            </Zoom>
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

AuditSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

AuditSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '80px'],
    pb: ['0px', '0px', '0px', '25px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textArea: {
    width: [1, 1, '65%', 1 / 2],
    mb: ['40px', '50px', '60px', '80px'],
  },
  imageArea: {
    width: [1, 1, '40%', 1, 1 / 2],
  },
  title: {
    fontSize: ['28px', '30px', '32px', '36px', '36px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default AuditSection;
