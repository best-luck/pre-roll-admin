//@ts-nocheck

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import { UploadAdapter, FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";

import "./style.scss";

const readFileAsText = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const fileContent = fileReader.result; // The file content as a string
      resolve(fileContent);
    };

    fileReader.onerror = () => {
      reject(new Error('Error reading file.'));
    };

    fileReader.readAsDataURL(file);
  });
};

function uploadAdapter(loader: FileLoader): UploadAdapter {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const fileContent = await readFileAsText(file);
          console.log(fileContent)
          const response = await fetch('/api/file-adapter', {
            method: 'POST',
            body: JSON.stringify({ file: fileContent })
          }).then(res => res.json());
          resolve({
            default: response.url
          });
        } catch (error) {
          reject("upload failed!!!");
        }
      });
    },
    abort: () => {}
  };
}
function uploadPlugin(editor: Editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}

const Editor = ({
  value,
  onChange,
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      config={{
        // @ts-ignore
        extraPlugins: [uploadPlugin]
      }}
    />
  );
};

export default Editor;