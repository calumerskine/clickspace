import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import Container from 'common/src/components/UI/Container';
import List from 'common/src/components/List';

import {
  ContactFromWrapper,
  ListItem
} from './contact.style';
import { EnquiryForm } from 'common/src/components/EnquiryForm';

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
  stepsList,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="GET STARTED" />
          <Heading
            {...secHeading}
            content="What happens now?"
          />
        </Box>
        <Box {...row}>
          <List>
            {['1', '2', '3'].map((item, index) => (
              <ListItem key={`footer-list-item-${index}`}>
                <Text>
                  {item}
                </Text>
              </ListItem>
            ))}
          </List>

        </Box>
        <Box {...row}>
          <Box {...contactForm}>
            <ContactFromWrapper>
              <MailchimpSubscribe
                url={'https://clickspaceagency.us4.list-manage.com/subscribe/post?u=63a2ccaca94288d0ea0d46213&amp;id=1b2aa52217'}
                render={({ subscribe, status, message}) => (
                  <EnquiryForm
                    status={status}
                    message={message}
                    onSubmit={formData => subscribe(formData)}
                  />
                )}
              />

            </ContactFromWrapper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
  stepsList: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
  stepsList: {
    mb: `${12}`,
  }
};

export default ContactSection;
