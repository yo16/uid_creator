import { nanoid, customAlphabet } from "nanoid"

interface NanoProps {
    length: number;
    usingSymboles?: boolean;
}
export function Nano({
    length,
    usingSymboles = true,
}: NanoProps) {

    let id: string = "";
    // Symbol（記号）を含めてはいけない場合は、カスタムアルファベットを使う
    if (!usingSymboles) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const customNanoid = customAlphabet(alphabet, length);
        id = customNanoid();
    } else {
        id = nanoid(length);
    }

    return (
        <>
            <div
                style={{
                    padding: "5px",
                    borderRadius: "3px",
                    backgroundColor: "#ccc",
                    color: "#333",
                    margin: "2px",
                }}
            >
                {id}
            </div>
        </>
    );
}
