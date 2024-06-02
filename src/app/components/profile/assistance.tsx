import { Button, Divider } from "keep-react";
import FAQs from "./faqs";
import HelpCenter from "./help-center";

export default function Assistance() {
    return (
        <>
            <h6 className="text-heading-6">Assistance</h6>
            <HelpCenter />
            <FAQs />
            <Divider className="border border-slate-300 my-5" />
            <div className="flex items-center justify-between gap-3 my-10">
                <Button className="w-full bg-red-500 text-white hover:bg-red-600">Log out</Button>
            </div>
        </>
    )
}