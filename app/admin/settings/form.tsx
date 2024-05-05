"use client";

import Button from '@src/components/shared/common/UI/button';
import { updateSettings } from '@src/lib/actions/settings';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Editor = dynamic(() => import("@src/components/shared/common/UI/CKEditor"), { ssr: false });

interface SettingsForm {
  googleTags: string;
  localSchema: string;
  terms: string;
  privacy: string;
}

export default function Form(props: SettingsForm) {
  const router = useRouter();

  const [privacy, setPrivacy] = useState("");
  const [terms, setTerms] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);

    const res = await updateSettings(formData);
  }

  return (
    <div className="w-3/4 m-auto shadow rounded-[20px] bg-white p-5 mt-5">
      <form onSubmit={onSubmit}>
        <div className="mt-5">
          <label className="font-bold mb-3">Google Tags</label>
          <textarea 
            id="google-tags"
            name="googleTags"
            autoComplete="google-tags"
            placeholder="google-tags"
            required
            defaultValue={props.googleTags}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Local Schema</label>
          <textarea 
            id="Local Schema"
            name="localSchema"
            autoComplete="Local Schema"
            placeholder="localSchema"
            defaultValue={props.localSchema}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Privacy Page</label>
          <Editor
            value={props.privacy}
            onChange={(v: string) => {setPrivacy(v)}}
            />
          <input 
            id="content"
            name="privacy"
            type="hidden"
            autoComplete="content"
            placeholder="Author"
            required
            value={privacy}
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Terms Page</label>
          <Editor
            value={props.terms}
            onChange={(v: string) => {setTerms(v)}}
            />
          <input 
            id="content"
            name="terms"
            type="hidden"
            autoComplete="content"
            placeholder="Author"
            required
            value={terms}
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button
            onClick={() => router.back()}
            className="bg-rose-600 text-white px-5 me-3"
            type="button"
            >
            Back
          </Button>
          <Button
            onClick={() => {}}
            className="bg-cyan-400 text-white px-5"
            type="submit"
            >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}