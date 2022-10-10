import { IProps } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor';
export interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    editorProps?: Partial<IProps>;
}
