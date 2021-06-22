import * as React from 'react';

import {
  MarkdownAction,
  MarkdownDispatch,
  MarkdownState,
  UPDATE_MARKDOWN_TITLE,
  UPDATE_MARKDOWN_TEXT,
  MarkdownProviderProps,
} from '../types/MarkdownContextTypes';

const initialState: MarkdownState = {
  title: '',
  text: '',
};

const MarkdownContext = React.createContext<
  { state: MarkdownState; dispatch: MarkdownDispatch } | undefined
>(undefined);

function reducer(state: MarkdownState, action: MarkdownAction) {
  switch (action.type) {
    case UPDATE_MARKDOWN_TITLE:
      return state;
    case UPDATE_MARKDOWN_TEXT:
      return state;
    default:
      throw new Error('Unhandled action type');
  }
}

function MarkdownProvider({ children }: MarkdownProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
}

export { MarkdownProvider };
