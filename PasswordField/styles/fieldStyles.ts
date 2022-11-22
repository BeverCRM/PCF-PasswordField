export const fieldStyles = {
  fieldGroup: {
    backgroundColor: 'transparent',
    border: 'none',
    ':hover': {
      border: '1px solid',
      '.ms-TextField-reveal': {
        visibility: 'visible',
        cursor: 'pointer',
      },
    },
    ':focus-within': {
      border: '1px solid',
      '.ms-TextField-reveal': {
        visibility: 'visible',
        cursor: 'pointer',
      },
    },
  },

  revealButton: {
    backgroundColor: 'transparent',
    visibility: 'hidden',
  },
};
