import * as React from 'react';

export const UPDATE_MARKDOWN_TITLE = 'UPDATE_MARKDOWN_TITLE';
export const UPDATE_MARKDOWN_TEXT = 'UPDATE_MARKDOWN_TEXT';

export const CREATE_MARKDOWN_POST = 'CREATE_MARKDOWN_POST';
export const UPDATE_MARKDOWN_POST = 'UPDATE_MARKDOWN_POST';
export const DELETE_MARKDOWN_POST = 'DELETE_MARKDOWN_POST';
export const GET_MARKDOWN_POST = 'GET_MARKDOWN_POST';

export type MarkdownAction =
  | { type: 'UPDATE_MARKDOWN_TITLE'; payload: { title: string } }
  | { type: 'UPDATE_MARKDOWN_TEXT'; payload: { text: string } };

export type MarkdownDispatch = (action: MarkdownAction) => void;

export type MarkdownState = { title: string; text: string | undefined | null };

export type MarkdownProviderProps = { children: React.ReactNode };

export type MarkdownContextType = { state: MarkdownState; dispatch: MarkdownDispatch } | undefined;
