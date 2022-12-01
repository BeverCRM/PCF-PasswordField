import { mergeStyleSets } from '@fluentui/react';

export const fieldStyles = mergeStyleSets({
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

  root: {
    width: '100%',
  },

  revealButton: {
    backgroundColor: 'transparent',
    visibility: 'hidden',
  },
});
