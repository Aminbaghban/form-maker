import { Editor as Tiny } from '@tinymce/tinymce-react';
import React from 'react';
import { EditorProps } from './index.types';

export const Editor: React.FC<EditorProps> = ({ ...ctx }) => {
  return (
    <Tiny
      {...ctx.editorProps}
      value={ctx.value}
      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce.min.js'}
      onEditorChange={(value) => ctx.onChange(value)}
      //onInit={(evt, editor) => (editorRef.current = editor)}
      //initialValue='<p>This is the initial content of the editor.</p>'
      init={{
        directionality: 'rtl',
        language: 'fa',
        mobile: {
          menubar: false,
          toolbar: 'undo redo | formatselect | bold italic backcolor',
        },
        menubar: false,
        height: 300,
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
        ...ctx.editorProps?.init,
      }}
    />
  );
};
