import UploadIcon from "./upload-icon";

export default function UploadFile() {
    return (
        <div className="flex h-screen items-center justify-center">
            <form
                className="flex w-[648px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 cursor-pointer"
                encType="multipart/form-data"
            >
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="opacity-0 absolute"
                    accept="audio/*,video/*"
                    multiple={false}
                />
                <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center w-full h-full"
                >
                    <UploadIcon className="text-gray-400 h-8 w-8" />
                    <p className="mt-4 text-lg font-semibold">上传文件</p>
                    <p className="text-gray-500">点击浏览，或拖放文件到此处</p>
                </label>
            </form>
        </div>
    );
}
