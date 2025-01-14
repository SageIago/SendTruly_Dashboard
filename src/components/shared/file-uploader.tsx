/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

interface FileUploaderProps {
  fieldChange: (field: File[]) => void;
  mediaUrl: string;
}

export function FileUploader({
  fieldChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mediaUrl,
}: FileUploaderProps) {
  
  const [file, setFile] = useState<File[]>([]);
  const [fileURL, setFileURL] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      // Do something with the files
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileURL(URL.createObjectURL(acceptedFiles[0]));

    //   Papa.parse(acceptedFiles[0], {
    //     complete: (results) => {
    //         console.log('Parsed CSV Data:', results.data);
    //     },
    //     header: true
    // });
    },
    [file]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "document/*": [".csv"],
    },
  });

  return (
    <>
      <div {...getRootProps()} className="flex justify-center flex-col !gap-3">
        <input {...getInputProps()} className="cursor-pointer" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      ({fileURL && <div></div>})
    </>
  );
}
