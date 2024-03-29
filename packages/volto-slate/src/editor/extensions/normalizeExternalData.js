import { normalizeExternalData as normalize } from '@plone/volto-slate/utils';

export function normalizeExternalData(editor) {
  editor.normalizeExternalData = (fragment) => {
    return normalize(editor, fragment);
  };
  return editor;
}
