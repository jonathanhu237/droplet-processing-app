import { IconUpload } from "@tabler/icons-react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function App() {
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div className="h-screen flex items-center justify-center">
            <form
                className="flex flex-col justify-center items-center gap-4 w-[512px] h-40 border-dashed border-2 rounded-lg"
                {...getRootProps()}
            >
                {isDragActive ? null : (
                    <>
                        <Input
                            id="picture"
                            type="file"
                            className="opacity-0 absolute"
                            {...getInputProps()}
                        />
                        <Label
                            htmlFor="picture"
                            className="flex flex-col justify-center items-center gap-4 cursor-pointer w-full"
                        >
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
            </form>
        </div>
    );
}

export default App;
