import {
    RiBold,
    RiItalic,
    RiStrikethrough,
    RiCodeSSlashLine,
    RiListOrdered,
    RiListUnordered
} from "react-icons/ri";
import { Editor } from '@tiptap/react'
import { AiOutlineRedo, AiOutlineUndo } from 'react-icons/ai'
import { BsTypeUnderline } from 'react-icons/bs'
import { IoListOutline } from 'react-icons/io5'
import { FaFileArrowUp, FaRegImage } from "react-icons/fa6";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4 } from "react-icons/lu";
import { PiTextAlignCenter, PiTextAlignJustify, PiTextAlignLeft, PiTextAlignRight } from "react-icons/pi";
import React from "react";
import { requestAxios } from "@/api";
import axios from "axios";
import { imageHandler } from "@/utils/upload_utils";



const Button = ({ onClick, isActive, disabled = false, children, }: {
    onClick: () => void; isActive: boolean; disabled: boolean; children: React.ReactNode
}) => {
    return <button
        type="button"
        onClick={onClick}
        // disabled={disabled}
        className={`${isActive ? 'bg-primary text-white' : 'bg-white text-black'}`}
    >
        {children}
    </button>
};

const TextEditorMenuBar = ({ editor }: { editor: Editor }) => {
    if (!editor) {
        return null
    }
    const buttons = [
        {
            icon: <RiBold className="size-5" />,
            onClick: () => editor.chain().focus().toggleBold().run(),
            isActive: editor.isActive('bold')
        },
        {
            icon: <RiItalic className="size-5" />,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            isActive: editor.isActive('italic')
        },
        {
            icon: <RiStrikethrough className="size-5" />,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            isActive: editor.isActive('strike')
        },
        {
            icon: <RiCodeSSlashLine className="size-5" />,
            onClick: () => editor.chain().focus().toggleCode().run(),
            isActive: editor.isActive('code')
        },
        {
            icon: <RiListOrdered className="size-5" />,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: editor.isActive('ol')
        },
        {
            icon: <RiListUnordered className="size-5" />,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            isActive: editor.isActive('bulletList')
        },
        {
            icon: <LuHeading1 className="size-5" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: editor.isActive('h1')
        },
        {
            icon: <LuHeading2 className="size-5" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: editor.isActive('h2')
        },
        {
            icon: <LuHeading3 className="size-5" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: editor.isActive('h3')
        },
        {
            icon: <LuHeading4 className="size-5" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
            isActive: editor.isActive('h4')
        },
        {
            icon: <PiTextAlignLeft className="size-5" />,
            onClick: () => editor.chain().focus().setTextAlign('left').run(),
            isActive: editor.isActive({ textAlign: 'left' })
        },
        {
            icon: <PiTextAlignRight className="size-5" />,
            onClick: () => editor.chain().focus().setTextAlign('right').run(),
            isActive: editor.isActive('right')
        },
        {
            icon: <PiTextAlignCenter className="size-5" />,
            onClick: () => editor.chain().focus().setTextAlign('center').run(),
            isActive: editor.isActive({ textAlign: 'center' })
        },
        {
            icon: <PiTextAlignJustify className="size-5" />,
            onClick: () => editor.chain().focus().setTextAlign('justify').run(),
            isActive: editor.isActive({ textAlign: 'justify' })
        },
        {
            icon: <FaRegImage className="size-5" />,
            onClick: () => {
                imageHandler(editor)
            },
            isActive: editor.isActive('img')
        },
        {
            icon: <FaFileArrowUp className="size-5" />,
            onClick: () => {
                const url = prompt("Enter the image URL");
                if (url) {
                    editor.chain().focus().setImage({ src: url }).run();
                }
            },
            isActive: editor.isActive('img')
        }

    ];
    return (
        <div className="flex space-x-2 border">
            {
                buttons.map(({ icon, onClick, isActive }, idx) => {
                    return (
                        <Button
                            key={idx}
                            onClick={onClick}
                            isActive={isActive}
                            disabled
                        >
                            {icon}
                        </Button>
                    )
                })
            }
        </div>
    )
}
export default TextEditorMenuBar