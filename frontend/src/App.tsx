import { IconUpload } from "@tabler/icons-react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="flex flex-col items-center gap-4 w-2/5 border-dashed border-2 py-6 rounded-lg">
                <Input
                    id="picture"
                    type="file"
                    className="opacity-0 absolute"
                />
                <Label
                    htmlFor="picture"
                    className="flex flex-col justify-center items-center gap-4 cursor-pointer w-full"
                >
                    <IconUpload stroke={2} className="w-8 h-8 opacity-50" />
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xl font-bold">上传图片</span>
                        <span className="text-muted-foreground">
                            点击浏览，或拖放图片到此处
                        </span>
                    </div>
                </Label>
            </form>
        </div>
    );
}

export default App;
