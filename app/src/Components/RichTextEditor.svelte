<script>
  import {Tipex} from "@friendofsvelte/tipex";
  import { userInput, resume, updateResume } from "../Store";

  import "@friendofsvelte/tipex/styles/Tipex.css";
  import "@friendofsvelte/tipex/styles/ProseMirror.css";
  import "@friendofsvelte/tipex/styles/Controls.css";
  import "@friendofsvelte/tipex/styles/EditLink.css";
  import "@friendofsvelte/tipex/styles/CodeBlock.css";

  export let htmlContent;
  export let id;

  const handleEditorUpdate= (event)=> {
    let expertise = document.getElementById(id).getElementsByClassName('tipex-editor-section')[0].getElementsByClassName('ProseMirror')[0].innerHTML.replace(/<p>,<\/p>/g, '')
    updateResume({expertise})
    setTimeout(() => {
      console.log($resume.expertise)
    });
  }
</script>

<div {id}>
  <Tipex 
    {htmlContent}
    displayDefaultControls
    floatingMenu
    style="margin-top: 1rem; margin-bottom: 0;"
    className="h-[70vh] border border-neutral-200"
    onEditorUpdate = {handleEditorUpdate}
    />
</div>


<!-- <div bind:this={editorContainer}></div> -->
<!-- <div>{htmlContent}</div>

import { SvelteComponent } from "svelte";
import "iconify-icon";
import { Editor } from '@tiptap/core';
import type { Transaction } from "@tiptap/core";
declare const __propDef: {
    props: {
        extensions?: Record<string, import("@tiptap/core").AnyExtension | null> | undefined;
        floatingMenu?: boolean | undefined;
        displayDefaultControls?: boolean | undefined;
        onEditorCreate?: ((editor: Editor) => void) | undefined;
        onEditorDestroy?: (() => void) | undefined;
        onEditorUpdate?: ((event: {
            editor: Editor;
            transaction: Transaction;
        }) => void) | undefined;
        htmlContent?: string | undefined;
        className?: string | undefined;
        style?: string | undefined;
        focusOnEdit?: boolean | undefined;
        isEditorFocused?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        headComponent: {};
        controlComponent: {};
        utilities: {};
        footComponent: {};
    };
};
export type TipexProps = typeof __propDef.props;
export type TipexEvents = typeof __propDef.events;
export type TipexSlots = typeof __propDef.slots;
export default class Tipex extends SvelteComponent<TipexProps, TipexEvents, TipexSlots> {
}
export {}; -->
