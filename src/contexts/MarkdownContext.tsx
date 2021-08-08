import * as React from 'react';

import {
  MarkdownAction,
  MarkdownDispatch,
  MarkdownState,
  UPDATE_MARKDOWN_TITLE,
  UPDATE_MARKDOWN_TEXT,
  MarkdownProviderProps,
	MarkdownContextType
} from '../types/MarkdownContextTypes';

const initialState: MarkdownState = {
  title: '',
  text: '',
};

const MarkdownContext = React.createContext<MarkdownContextType>(undefined);

function reducer(state: MarkdownState, action: MarkdownAction) {
  switch (action.type) {
    case UPDATE_MARKDOWN_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case UPDATE_MARKDOWN_TEXT:
      return {
        ...state,
        text: action.payload.text,
      };
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

const useMarkdownContext = (): MarkdownContextType => React.useContext<MarkdownContextType>(MarkdownContext);

export { MarkdownProvider, useMarkdownContext };
