import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Input from 'reusecore/src/elements/Input';
import Button from 'reusecore/src/elements/Button';

const style = {
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  }
};

const EnquiryForm = ({ status, message, onSubmit }) => {
  let email;
  const isLoading = status === 'sending';

  const submit = () =>
    email &&
    email.indexOf("@") > -1 &&
    onSubmit({
      EMAIL: email,
    });

  return (
    <Box {...{
      flexBox: true,
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '280px',
    }}>
      <Input
        inputType="email"
        placeholder="Email address"
        iconPosition="right"
        isMaterial={false}
        disabled={isLoading}
        className="email_input"
        aria-label="email"
        onChange={value => email = value}
      />
      <br />
      <Button
        {...style.button}
        disabled={isLoading}
        isLoading={isLoading}
        loaderColor='#bf00ff'
        title="REQUEST YOUR FREE AUDIT"
        onClick={submit}
      />
      <Box {...{
        mt: `${6}`,
      }}>
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: "Something went wrong, please check your email." }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: "Thanks for your enquiry! We'll be in touch soon." }}
          />
        )}
      </Box>
    </Box>
  );
};

export {
  EnquiryForm,
};
