import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">上传图片</Label>
                <Input id="picture" type="file" />
            </div>
        </div>
    );
}

export default App;
