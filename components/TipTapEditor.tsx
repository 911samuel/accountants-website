'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import TextEditorMenuBar from './TextEditorMenuBar';



interface TipTapEditorProps {
    onChange: (content: string) => void;
    initialContent?: string
}



const TiptapEditor = ({ onChange, initialContent }: TipTapEditorProps) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image.configure({ inline: true }),
        ],
        content: initialContent,
        onUpdate: ((editor) => {
            onChange(editor.editor.getHTML())
        }),
        editorProps: {
            attributes: {
                class: "min-h-[150px] cursor-text border p-4"
            }
        },
        immediatelyRender: false
    })

    return <>
        {editor && <TextEditorMenuBar editor={editor} />}
        <EditorContent editor={editor} />
    </>
}

export default TiptapEditor
