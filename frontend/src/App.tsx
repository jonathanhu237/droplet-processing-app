import { IconUpload } from "@tabler/icons-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

type FileWithSpotSize = File & { averageSpotSize?: number };

function App() {
    const [files, setFiles] = useState<FileWithSpotSize[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
        multiple: true,
    });

    const removeFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div
                className="flex flex-col justify-center items-center gap-4 w-[648px] h-44 border-dashed border-2 rounded-lg"
                {...getRootProps()}
            >
                {isDragActive ? (
                    <span className="text-muted-foreground text-xl">
                        松开鼠标以上传图片
                    </span>
                ) : (
                    <>
                        <Input
                            type="file"
                            className="opacity-0 absolute"
                            {...getInputProps()}
                        />
                        <Label className="flex flex-col justify-center items-center gap-4 cursor-pointer w-full">
                            <IconUpload
                                stroke={2}
                                className="w-8 h-8 opacity-50"
                            />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xl font-bold">
                                    上传图片
                                </span>
                                <span className="text-muted-foreground">
                                    点击浏览，或拖放图片到此处
                                </span>
                            </div>
                        </Label>
                    </>
                )}
            </div>
            <div className="mt-4 w-[648px]">
                <ul>
                    {files.map((file, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-4 rounded-lg border-2 p-2"
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-20 rounded-sm"
                            />
                            <div>
                                <span className="font-bold">
                                    {file.name.substring(
                                        0,
                                        file.name.lastIndexOf(".")
                                    )}
                                </span>
                                <div className="text-muted-foreground text-sm flex gap-1">
                                    <span>
                                        {file.name.substring(
                                            file.name.lastIndexOf(".")
                                        )}
                                    </span>
                                    <span>•</span>
                                    <span>
                                        {(file.size / (1024 * 1024)).toFixed(2)}{" "}
                                        MB
                                    </span>
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                                雾滴平均大小:{" "}
                                {file.averageSpotSize === undefined
                                    ? "未计算"
                                    : file.averageSpotSize}
                            </span>
                            <div className="ml-auto flex gap-2">
                                <Button>计算</Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => removeFile(index)}
                                >
                                    删除
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
