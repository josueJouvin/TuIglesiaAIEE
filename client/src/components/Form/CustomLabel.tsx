import { Label as HeadlessLabel } from "@headlessui/react";

type CustomLabelType = {
    text: string,
    htmlFor: string
}

export function CustomLabel({ text, htmlFor } : CustomLabelType) {
    return (
        <HeadlessLabel htmlFor={htmlFor} className="text-xs">
            {text}
        </HeadlessLabel>
    );
}
