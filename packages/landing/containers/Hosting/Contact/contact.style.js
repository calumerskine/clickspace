import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 19px;
  &:last-child {
    margin-bottom: 0;
  }
  .price_list_icon {
    color: #18d379;
    margin-right: 10px;
  }
`;

export const ContactFromWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 490px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          color: #aeb1b6;
          font-size: 12px;
        }
      }
    }

    input {
      height: 100%;
      background: #fff;
      font-size: 16px;
      font-weight: 400;
      color: #343d48;
      padding: 5px 15px;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 14px;
      color: #343d48;
      font-weight: 500;
      padding-left: 10px;
      top: 5px;
    }
  }

  .field-wrapper {
    height: 100%;
  }
`;
